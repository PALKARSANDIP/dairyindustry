// lib/sanity.client.js
// This file connects your website to Sanity's content API

import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

// ↓↓↓ PASTE YOUR PROJECT ID HERE (same as sanity.config.js) ↓↓↓
export const projectId = 'placeholder-id'
// ↑↑↑ PASTE YOUR PROJECT ID HERE ↑↑↑

export const dataset = 'production'
export const apiVersion = '2024-01-01'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // fast cached reads for visitors
})

// For draft preview (not needed until you set up preview mode)
export const previewClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_READ_TOKEN,
})

// Helper: convert Sanity image refs to URLs
const builder = imageUrlBuilder({ projectId, dataset })
export function urlFor(source) {
  return builder.image(source)
}
