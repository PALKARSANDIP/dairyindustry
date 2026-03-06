# Godwa Dairy Expo — Sanity CMS Setup Guide
# ================================================
# Follow these steps ONCE after deploying to Vercel.
# After this, you can publish articles without any developer help.

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## STEP 1 — Create your free Sanity account
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Open your browser and go to: https://www.sanity.io
2. Click "Start for free" (top right corner)
3. Sign up with Google or your email — it is completely free
4. Once logged in, you will see the Sanity dashboard


## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## STEP 2 — Create a new project
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. In the Sanity dashboard, click "Create new project"
2. Project name: "Godwa Dairy Expo" (or any name you like)
3. Dataset: leave as "production" (default)
4. Plan: select FREE
5. Click "Create project"


## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## STEP 3 — Get your Project ID
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. After creating the project, you will see your dashboard
2. Look for "Project ID" — it looks like: abc12xyz
3. Copy this ID — you will need it in the next step


## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## STEP 4 — Paste your Project ID into the code
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Open TWO files and replace YOUR_PROJECT_ID with your actual Project ID:

FILE 1: sanity.config.js (line 19)
  projectId: 'YOUR_PROJECT_ID',   ← replace this

FILE 2: lib/sanity.client.js (line 9)
  export const projectId = 'YOUR_PROJECT_ID'   ← replace this

Example (if your Project ID was "abc12xyz"):
  projectId: 'abc12xyz',


## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## STEP 5 — Add CORS origin in Sanity settings
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This allows your website to read content from Sanity.

1. Go to: https://www.sanity.io/manage
2. Click your project → "API" tab → "CORS Origins"
3. Click "Add CORS origin"
4. Add your Vercel URL: https://your-site.vercel.app
5. Add your custom domain: https://www.godwadairyexpo.com
6. Check "Allow credentials" → Save
7. Also add: http://localhost:3000 (for local development)


## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## STEP 6 — Deploy to Vercel
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Option A — Using Vercel CLI:
  npm install -g vercel
  vercel login
  vercel

Option B — Using GitHub (recommended):
  1. Upload your code to GitHub
  2. Go to https://vercel.com → "Add New Project"
  3. Import your GitHub repository
  4. Click Deploy — Vercel handles everything automatically


## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## STEP 7 — Access your admin panel
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Once deployed, your admin panel is at:
  https://your-domain.com/studio

OR directly at:
  https://www.sanity.io/manage → open your project → "Studio"

Bookmark this URL. This is where you write and publish articles.


## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## HOW TO PUBLISH A NEWS ARTICLE
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Go to your-domain.com/studio
2. Click "News & Updates" in the left sidebar
3. Click "+ New" button (top right)
4. Fill in the form:
   - Title: Write your article title
   - Click "Generate" next to URL Slug
   - Category: Select from dropdown
   - Featured: Toggle ON if you want it shown as a big card
   - Published Date: Set today's date
   - Cover Image: Upload a photo
   - Short Description: Write 1-2 sentences
   - Article Content: Write your full article (like Word/Google Docs)
   - Tags: Add relevant tags
5. Click "Publish" (top right green button)
6. Article appears on your website within 60 seconds!


## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## GOOGLE ANALYTICS SETUP (Optional but recommended)
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Go to: https://analytics.google.com
2. Create a new GA4 property for your website
3. Copy your Measurement ID (looks like: G-ABC123XYZ)
4. Open: app/layout.jsx
5. Find the commented-out Google Analytics code (search for G-XXXXXXXXXX)
6. Uncomment it and replace G-XXXXXXXXXX with your actual ID
7. Redeploy


## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## GOOGLE SEARCH CONSOLE SETUP
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Go to: https://search.google.com/search-console
2. Click "Add property" → Enter your domain
3. Verify ownership (Vercel makes this easy — just add the DNS TXT record)
4. Once verified, click "Sitemaps" in the left menu
5. Enter: sitemap.xml
6. Click "Submit"

Google will now index all your pages including every news article!


## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## QUICK REFERENCE — Important URLs
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Your website:       https://your-domain.com
Admin panel:        https://your-domain.com/studio
Sitemap (Google):   https://your-domain.com/sitemap.xml
Robots.txt:         https://your-domain.com/robots.txt
Sanity dashboard:   https://www.sanity.io/manage

## Need Help?
Contact your developer or refer to: https://www.sanity.io/docs
