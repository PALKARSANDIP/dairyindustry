// components/PortableText.jsx

'use client'

import { urlFor } from '@/lib/sanity.client'

// Style map for different block types
const blockStyles = {
  normal: { fontSize: 15, color: '#555', lineHeight: 1.85, marginBottom: 16 },
  h2: { fontFamily: '"Playfair Display", serif', fontSize: 26, fontWeight: 700, color: '#1A3A5C', marginTop: 36, marginBottom: 14 },
  h3: { fontFamily: '"Playfair Display", serif', fontSize: 20, fontWeight: 700, color: '#1A3A5C', marginTop: 28, marginBottom: 10 },
  blockquote: { borderLeft: '4px solid #F5C842', paddingLeft: 20, fontStyle: 'italic', color: '#444', fontSize: 16, lineHeight: 1.8, margin: '24px 0' },
}

// Render inline marks (bold, italic, links)
function renderMark(mark, text) {
  if (mark === 'strong') return <strong style={{ color: '#1A3A5C' }}>{text}</strong>
  if (mark === 'em') return <em>{text}</em>
  if (mark === 'underline') return <u>{text}</u>
  return text
}

// Render a single span with marks
function renderSpan(span, markDefs) {
  if (!span.marks || span.marks.length === 0) return span.text

  let content = span.text
  for (const mark of span.marks) {
    // Check if it's an annotation (link)
    const annotation = markDefs?.find(m => m._key === mark)
    if (annotation && annotation._type === 'link') {
      content = (
        <a
          href={annotation.href}
          target={annotation.blank ? '_blank' : undefined}
          rel={annotation.blank ? 'noopener noreferrer' : undefined}
          style={{ color: '#0D7377', textDecoration: 'underline' }}
        >
          {content}
        </a>
      )
    } else {
      content = renderMark(mark, content)
    }
  }
  return content
}

// Render a single block
function renderBlock(block, index) {
  if (block._type === 'image') {
    const src = block.asset?.url || (block.asset ? urlFor(block).width(800).url() : null)
    if (!src) return null
    return (
      <figure key={block._key || index} style={{ margin: '32px 0' }}>
        <img
          src={src}
          alt={block.alt || ''}
          style={{ width: '100%', borderRadius: 14, boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
        />
        {block.caption && (
          <figcaption style={{ textAlign: 'center', color: '#999', fontSize: 12, marginTop: 8, fontStyle: 'italic' }}>
            {block.caption}
          </figcaption>
        )}
      </figure>
    )
  }

  if (block._type !== 'block') return null

  const style = block.style || 'normal'
  const blockStyle = blockStyles[style] || blockStyles.normal

  // Render children (spans)
  const children = block.children?.map((child, i) => (
    <span key={child._key || i}>
      {renderSpan(child, block.markDefs)}
    </span>
  ))

  if (style === 'h2') return <h2 key={block._key || index} style={blockStyle}>{children}</h2>
  if (style === 'h3') return <h3 key={block._key || index} style={blockStyle}>{children}</h3>
  if (style === 'blockquote') return <blockquote key={block._key || index} style={blockStyle}>{children}</blockquote>

  // Check if this block is inside a list
  if (block.listItem === 'bullet') {
    return <li key={block._key || index} style={{ fontSize: 15, color: '#555', lineHeight: 1.7, marginBottom: 8 }}>{children}</li>
  }
  if (block.listItem === 'number') {
    return <li key={block._key || index} style={{ fontSize: 15, color: '#555', lineHeight: 1.7, marginBottom: 8 }}>{children}</li>
  }

  return <p key={block._key || index} style={blockStyle}>{children}</p>
}

// Group list items
function groupBlocks(blocks) {
  const result = []
  let i = 0
  while (i < blocks.length) {
    const block = blocks[i]
    if (block._type === 'block' && block.listItem === 'bullet') {
      const listItems = []
      while (i < blocks.length && blocks[i]._type === 'block' && blocks[i].listItem === 'bullet') {
        listItems.push(renderBlock(blocks[i], i))
        i++
      }
      result.push(<ul key={`ul-${i}`} style={{ paddingLeft: 24, marginBottom: 16 }}>{listItems}</ul>)
    } else if (block._type === 'block' && block.listItem === 'number') {
      const listItems = []
      while (i < blocks.length && blocks[i]._type === 'block' && blocks[i].listItem === 'number') {
        listItems.push(renderBlock(blocks[i], i))
        i++
      }
      result.push(<ol key={`ol-${i}`} style={{ paddingLeft: 24, marginBottom: 16 }}>{listItems}</ol>)
    } else {
      result.push(renderBlock(block, i))
      i++
    }
  }
  return result
}

export default function PortableText({ content }) {
  if (!content || content.length === 0) {
    return <p style={{ color: '#999', fontStyle: 'italic' }}>No content yet.</p>
  }
  return <div>{groupBlocks(content)}</div>
}
