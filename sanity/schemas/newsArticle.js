// sanity/schemas/newsArticle.js
// This defines EXACTLY what fields you see when writing an article
// in your admin panel at yoursite.com/studio

export const newsArticleSchema = {
  name: 'newsArticle',
  title: 'News Article',
  type: 'document',
  icon: () => '📰',

  // ── Ordering in studio list ──
  orderings: [
    {
      title: 'Published Date (Newest First)',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],

  // ── Preview in studio list ──
  preview: {
    select: {
      title: 'title',
      category: 'category',
      media: 'coverImage',
      date: 'publishedAt',
    },
    prepare({ title, category, media, date }) {
      return {
        title,
        subtitle: `${category || 'Uncategorized'} · ${date ? new Date(date).toLocaleDateString('en-IN') : 'No date'}`,
        media,
      }
    },
  },

  fields: [
    // ── Title ──
    {
      name: 'title',
      title: 'Article Title',
      type: 'string',
      description: 'Write a clear, specific title. Example: "Stall Booking Now Open for Godwa Expo 2026"',
      validation: (Rule) => Rule.required().min(10).max(100),
    },

    // ── Slug (URL) - auto-generated from title ──
    {
      name: 'slug',
      title: 'URL Slug (auto-generated)',
      type: 'slug',
      description: 'This becomes the page URL. Click "Generate" to auto-create from title.',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w-]+/g, '')
            .slice(0, 96),
      },
      validation: (Rule) => Rule.required(),
    },

    // ── Category ──
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: '📢 News', value: 'News' },
          { title: '🏢 Exhibitors', value: 'Exhibitors' },
          { title: '👥 Visitors', value: 'Visitors' },
          { title: '🏭 Industry', value: 'Industry' },
          { title: '📅 Event Update', value: 'Event Update' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    },

    // ── Featured toggle ──
    {
      name: 'featured',
      title: 'Featured Article?',
      type: 'boolean',
      description: 'Featured articles appear at the top of the news page with a large card.',
      initialValue: false,
    },

    // ── Publish date ──
    {
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      description: 'Set the date. You can set a future date to schedule an article.',
      options: { dateFormat: 'DD-MM-YYYY', timeFormat: 'HH:mm' },
      validation: (Rule) => Rule.required(),
    },

    // ── Cover image ──
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      description: 'Upload a high quality image (minimum 800x450px). This shows in news cards and social sharing.',
      options: {
        hotspot: true,
        accept: 'image/*',
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text (for SEO)',
          type: 'string',
          description: 'Describe the image for Google. Example: "Dairy machinery exhibition Pune 2026"',
          validation: (Rule) => Rule.required(),
        },
      ],
    },

    // ── Excerpt (short description) ──
    {
      name: 'excerpt',
      title: 'Short Description (Excerpt)',
      type: 'text',
      rows: 3,
      description: 'A 1-2 sentence summary. This appears on the news card and in Google search results.',
      validation: (Rule) => Rule.required().min(50).max(200),
    },

    // ── Main content (rich text editor) ──
    {
      name: 'body',
      title: 'Article Content',
      type: 'array',
      description: 'Write your full article here. Use the toolbar to add headings, bold text, lists, images.',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading 2', value: 'h2' },
            { title: 'Heading 3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
              { title: 'Underline', value: 'underline' },
            ],
            annotations: [
              {
                title: 'Link',
                name: 'link',
                type: 'object',
                fields: [
                  { name: 'href', title: 'URL', type: 'url' },
                  { name: 'blank', title: 'Open in new tab', type: 'boolean' },
                ],
              },
            ],
          },
        },
        // Inline images inside article
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', title: 'Alt Text', type: 'string' },
            { name: 'caption', title: 'Caption', type: 'string' },
          ],
        },
      ],
    },

    // ── Tags ──
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Add relevant tags. Example: dairy machinery, pune expo, stall booking',
      options: {
        layout: 'tags',
      },
    },

    // ── SEO fields ──
    {
      name: 'seo',
      title: 'SEO Settings (Optional)',
      type: 'object',
      description: 'Leave blank to auto-generate from title and excerpt.',
      fields: [
        {
          name: 'metaTitle',
          title: 'Custom SEO Title',
          type: 'string',
          description: 'If blank, article title is used. Max 60 characters.',
          validation: (Rule) => Rule.max(60),
        },
        {
          name: 'metaDescription',
          title: 'Custom SEO Description',
          type: 'text',
          rows: 2,
          description: 'If blank, excerpt is used. Max 160 characters.',
          validation: (Rule) => Rule.max(160),
        },
      ],
      options: { collapsible: true, collapsed: true },
    },
  ],
}
