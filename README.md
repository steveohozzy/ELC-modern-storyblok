🌿 ELC – Next.js + Storyblok Frontend

A modern headless frontend built with Next.js (App Router) and Storyblok CMS, designed for flexible content modelling, reusable components, and scalable page building.

This project powers a component-driven marketing and content experience using Storyblok as the source of truth.

🚀 Tech Stack
Next.js (App Router)
React 18
Storyblok Headless CMS
Tailwind CSS
Storyblok React SDK (@storyblok/react/rsc)
Google Fonts (Geist + Fraunces)

📦 Features
🧩 Fully component-driven CMS pages (Storyblok blocks)
⚡ Server-side rendering via Next.js App Router
🧠 Dynamic page resolution via cdn/stories
🗂 Folder-based routing for pages and blog posts
🔗 Safe link resolver for internal/external Storyblok links
🎨 Tailwind-based design system
📱 Fully responsive layout system
🧱 Reusable Storyblok blocks (Hero, Marquee, Blog, etc.)

📁 Project Structure
src/
├── app/
│   ├── [[...slug]]/page.js   # Dynamic Storyblok page resolver
│   ├── layout.js
├── components/
│   ├── HomepageHero/
│   ├── StorySection/
│   ├── Marquee/
│   ├── BlogSection/
│   ├── Newsletter/
│   ├── RichText/
│   └── Header/
├── lib/
│   ├── storyblok.js          # Storyblok init + link resolver
│   ├── getNavigation.js      # Dynamic navigation from Storyblok

🧠 How It Works
1. Storyblok as CMS

All pages and components are created inside Storyblok and delivered via API.

Each page is composed of blocks, mapped to React components:

components: {
  page: Page,
  homepageHero: HomepageHero,
  storySection: StorySection,
  marquee: Marquee,
  blogSection: Blog,
  newsletter: Newsletter,
  richText: RichText,
}
2. Dynamic Routing

All routes are handled by:

src/app/[[...slug]]/page.js

It fetches content from Storyblok:

cdn/stories/${slug}
/ → home
/blog → blog index page
/blog/my-post → blog post page
3. Navigation System

Navigation is automatically generated using Storyblok Links API:

cdn/links

Filtered to exclude folders and nested routes:

.filter((link) => !link.is_folder)
.filter((link) => !link.slug.includes("/"))
4. Link Resolver

All Storyblok links are normalised using:

export function resolveLink(link) {
  if (link.linktype === "story") {
    return `/${link.cached_url}`;
  }

  return link.url || "/";
}
🧱 Creating Content in Storyblok
Pages

Create a Story under the root folder:

home
blog
about
Blog Posts

Create inside a folder:

blog/
  ├── guide-to-your-babys-developmental-milestones
🧩 Adding New Components
Create a React component
Register it in storyblokInit

Example:

import MyComponent from "@/components/MyComponent";

components: {
  myComponent: MyComponent,
}
Add matching block in Storyblok
🖼 Rich Text Rendering

Storyblok rich text is rendered using:

import { renderRichText } from "@storyblok/react/rsc";

renderRichText(blok.content)
⚙️ Environment Variables
STORYBLOK_DELIVERY_API_TOKEN=your_token_here
🧪 Local Development
npm install
npm run dev

Runs on:

http://localhost:3000
🔐 HTTPS Local Setup (Storyblok Live Editor)

Storyblok Live Editor requires HTTPS.

Use a local SSL proxy:

local-ssl-proxy --source 3010 --target 3000 --cert localhost.pem --key localhost-key.pem

Then access:

https://localhost:3010
📌 Notes
Storyblok is the single source of truth for content
Pages are fully component-driven
Navigation is dynamically generated
All routing is handled via Next.js App Router
🧭 Roadmap
 Visual editing improvements
 Preview mode polish
 Blog filtering system
 Global settings (footer, SEO)
 Performance optimisations
📄 License

Private project – Early Learning Centre demo build
