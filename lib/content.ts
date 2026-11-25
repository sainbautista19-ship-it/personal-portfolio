// All site copy and work samples live here.
// To add a sample: put images in /public/work/<slug>/ and reference them below
// (e.g. "/work/education-social-campaign/cover.jpg"). Missing files render as placeholders.
// Only list tasks and tools you genuinely did / used.

export const profile = {
  name: "Sain Bautista",
  title: "Social Media Manager & Graphic Designer",
  subtitle: "Creative Virtual Assistant | AI Tools & Administrative Support",
  headline: ["Social media that looks designed.", "Admin that's actually done."],
  // AI-edited suit version of the original photo; use "/profile.png" for the original (clearer, transparent background).
  photo: "/profile-suit.png",
  responseTime: "I reply within one working day.",
  bio: [
    "I'm Sain. I help businesses keep things moving — from content and creative work to day-to-day operations and the admin that keeps everything together.",
    "I work with founders and small teams who need an extra set of hands without hiring for every role individually. From managing social media, designing graphics, editing videos and writing blogs to handling inboxes, organizing calendars, supporting sales, and keeping things running smoothly, I help take the work off your plate.",
    "I also use AI-powered tools to create content, repurpose videos, produce podcasts and clips, and work with prebuilt automations — making adjustments and troubleshooting when needed to keep things running.",
  ],
  facts: [
    { label: "Location", value: "Philippines" },
    { label: "Work type", value: "Full-time / Part-time / Freelance" },
    { label: "Time zones", value: "Flexible overlap" },
  ],
};

export const services = [
  {
    title: "Social Media Management & Content Creation",
    description:
      "I plan the month, design the posts, write the captions and schedule everything, so your pages stay active without you thinking about it.",
    skills: ["Content calendars", "Caption writing", "Post scheduling", "Short-form video", "Community replies"],
  },
  {
    title: "Graphic Design & Digital Marketing",
    description: "Posts, ads, thumbnails and podcast art that match your brand, sized for every platform you use.",
    skills: ["Social graphics", "Ad creatives", "YouTube thumbnails", "Podcast artwork", "Blog & SEO support", "AI-assisted content creation"],
  },
  {
    title: "Executive Assistance, AI Tools & Automation Support",
    description:
      "Inbox, calendar, CRM and follow-ups kept tidy, plus AI tools and automation support: I configure and adjust prebuilt workflows for the repetitive stuff.",
    skills: ["CRM management", "Calendar & email", "Task tracking", "Website Editor", "Automation setup & troubleshooting"],
  },
];

// Rough weekly hours and hourly rates (USD, low to high) for the "What would you hand off?" estimator.
export const handOffTasks = [
  { id: "social", label: "Social media management & scheduling", hours: 4, rate: [10, 10] },
  { id: "design", label: "Graphic design & marketing creatives", hours: 5, rate: [10, 10] },
  { id: "video", label: "Video editing, YouTube & short-form content", hours: 5, rate: [12, 12] },
  { id: "blog", label: "Blog writing, SEO & website updates", hours: 4, rate: [10, 12] },
  { id: "admin", label: "Executive & administrative assistance", hours: 5, rate: [10, 10] },
  { id: "sales", label: "Lead generation, sales outreach & CRM management", hours: 4, rate: [12, 12] },
  { id: "support", label: "Inbox management, customer support & client communication", hours: 3, rate: [10, 10] },
  { id: "ai", label: "AI content creation, podcasts & workflow automation", hours: 3, rate: [12, 12] },
] satisfies { id: string; label: string; hours: number; rate: [number, number] }[];

// Fixed-price project option shown under the estimator.
export const projectWork = {
  heading: "Just need one thing done? Hire me by the project.",
  text: "Not every job needs ongoing hours. I also take fixed-price projects, quoted upfront, so you know the full cost before I start.",
  examples: [
    "A month of social content",
    "Ad & event graphics",
    "Video edits & Reels",
    "Blog posts with SEO",
    "Website updates",
    "Automation setup",
  ],
};

// Pricing tiers shown under Services. Keep these in step with the estimator rates above.
export const rateTiers = [
  { name: "General support & content", rate: "$10/hr", detail: "Social media, graphics, blogging, admin, inbox and calendar support." },
  { name: "Marketing & sales", rate: "$12/hr", detail: "Lead generation, cold outreach, CRM, SEO and website updates." },
  { name: "Multimedia & AI", rate: "$12+/hr", detail: "Video editing, AI-assisted podcast and content creation, and automation support." },
];

export const categories = {
  "social-design": "Social Media & Design",
  "video-podcast": "YouTube & Podcast",
  "blog-seo-web": "Blogs, SEO & Web",
  "ai-automation": "AI Tools & Automation",
  "executive-assistance": "Executive Assistance",
} as const;

export type Category = keyof typeof categories;

// Images live in /public/work/<slug>/. The first image is the card cover; width/height keep the gallery from jumping.
export type WorkImage = { src: string; alt: string; width?: number; height?: number };
// Videos play on the case study page; the first one also previews on hover on the work card.
export type WorkVideo = { src: string; poster: string; title: string; width: number; height: number };
// YouTube videos embedded on the case study page. id is the part after "watch?v="; start is in seconds.
export type YouTubeVideo = { id: string; title: string; start?: number };

export type CaseStudy = {
  slug: string;
  title: string;
  category: Category;
  summary: string;
  whatIDid: string[];
  toolsUsed: string[];
  images: WorkImage[];
  videos?: WorkVideo[];
  youtube?: YouTubeVideo[];
  featured?: boolean;
};

// Real samples from Sain's Drive folder. Private details (names, revenue, account menus) were cropped out.
// Sain: check each "What I did" list and keep only what you personally did.
export const caseStudies: CaseStudy[] = [
  {
    slug: "college-shortcuts-social",
    title: "College Shortcuts Social Media",
    category: "social-design",
    summary: "Day-to-day Instagram and Facebook content for a college admissions consulting brand with 12.3K Instagram followers.",
    whatIDid: [
      "Created and scheduled posts and Reels for Instagram and Facebook.",
      "Kept the feed consistent with the brand's navy-and-gold style.",
      "Tracked results in Meta Business Suite: 370.5K views, 95.7K viewers and 3.9K link clicks in four weeks, mostly from paid promotion.",
      "Monitored post-level reach and interactions to see which topics landed.",
    ],
    toolsUsed: ["Canva", "Meta Business Suite"],
    images: [
      { src: "/work/college-shortcuts-social/01-feed.webp", alt: "College Shortcuts Instagram feed with Reels and event graphics", width: 1315, height: 948 },
      { src: "/work/college-shortcuts-social/02-profile.webp", alt: "College Shortcuts Instagram profile with 12.3K followers", width: 1370, height: 477 },
      { src: "/work/college-shortcuts-social/03-reach.webp", alt: "Facebook content overview showing 370.5K views", width: 942, height: 920 },
      { src: "/work/college-shortcuts-social/04-insights.webp", alt: "Facebook insights for views, viewers, interactions and link clicks", width: 955, height: 913 },
      { src: "/work/college-shortcuts-social/05-post-performance.webp", alt: "Post-by-post views, reach and interactions", width: 1479, height: 806 },
    ],
    featured: true,
  },
  {
    slug: "video-editing",
    title: "Video Editing & Content Repurposing",
    category: "video-podcast",
    summary: "A full-length YouTube episode, plus short vertical Reels repurposed from College Shortcuts podcast footage.",
    whatIDid: [
      "Edited a 24-minute long-form YouTube episode, keeping the conversation tight and easy to follow.",
      "Cut long podcast conversations down to Reels of their strongest 30 to 70 seconds.",
      "Added bold animated captions so the Reels work with the sound off.",
      "Layered in motion-graphic B-roll to keep the pace up between talking-head shots.",
    ],
    toolsUsed: [],
    youtube: [{ id: "uMu3ukZY430", title: "How to Help Your Teen Find Their Passion (Before College)", start: 59 }],
    images: [],
    videos: [
      {
        src: "/work/video-editing/reel-common-app-timing.mp4",
        poster: "/work/video-editing/reel-common-app-timing.webp",
        title: "Common App opens: start in August, not October",
        width: 720,
        height: 1280,
      },
      {
        src: "/work/video-editing/reel-what-top-colleges-take.mp4",
        poster: "/work/video-editing/reel-what-top-colleges-take.webp",
        title: "What it actually takes to apply to top colleges",
        width: 360,
        height: 640,
      },
    ],
  },
  {
    slug: "ads-and-event-graphics",
    title: "Ads, Event Flyers & Branded Graphics",
    category: "social-design",
    summary: "Ad banners, event flyers, social posts and an infographic, all in one consistent brand style.",
    whatIDid: [
      "Designed ad banners and social posts promoting consultations and free resources.",
      "Created flyers for an in-person event and a partner webinar, with speaker layouts.",
      "Turned a client onboarding process into a clear, on-brand infographic.",
    ],
    toolsUsed: ["Canva"],
    images: [
      { src: "/work/ads-and-event-graphics/01-ad-banner.webp", alt: "Ad banner: The secret behind students accepted to top universities", width: 1800, height: 942 },
      { src: "/work/ads-and-event-graphics/02-event-flyer.webp", alt: "Event flyer for a free parent and student admissions event", width: 1080, height: 1080 },
      { src: "/work/ads-and-event-graphics/03-roadmap-post.webp", alt: "Social post: The roadmap to your dream school", width: 1080, height: 1080 },
      { src: "/work/ads-and-event-graphics/04-webinar-flyer.webp", alt: "Webinar flyer for a partner event on future-ready teens", width: 1800, height: 1800 },
      { src: "/work/ads-and-event-graphics/05-process-infographic.webp", alt: "Application fast track process infographic", width: 1273, height: 1800 },
    ],
  },
  {
    slug: "content-calendar",
    title: "Content Calendar & Post Scheduling",
    category: "social-design",
    summary: "A monthly content plan across six channels, scheduled ahead so posting never stalls.",
    whatIDid: [
      "Planned a monthly calendar across Instagram, Facebook, TikTok, YouTube, LinkedIn and the blog.",
      "Mixed tips, promos, webinars and blog posts so each week had variety.",
      "Scheduled posts in advance across channels in a social media scheduler.",
    ],
    toolsUsed: [],
    images: [
      { src: "/work/content-calendar/01-content-calendar.webp", alt: "Monthly content calendar across social channels", width: 871, height: 527 },
      { src: "/work/content-calendar/02-scheduled-posts.webp", alt: "Scheduler calendar with posts queued across channels", width: 1627, height: 808 },
    ],
  },
  {
    slug: "youtube-podcast",
    title: "YouTube Thumbnails & Podcast",
    category: "video-podcast",
    summary: "Thumbnails for long-form videos and publishing support for a weekly admissions podcast.",
    whatIDid: [
      "Designed bold, high-contrast YouTube thumbnails.",
      "Supported the College Shortcuts YouTube channel's videos and Shorts.",
      "Published episodes of the College Shortcuts Insider podcast to its site and Apple Podcasts.",
      "Tracked podcast downloads: 2,939 all-time.",
    ],
    toolsUsed: ["Canva", "YouTube"],
    images: [
      { src: "/work/youtube-podcast/01-thumbnail.webp", alt: "YouTube thumbnail: TEDx speaker tips and improvement", width: 1280, height: 720 },
      { src: "/work/youtube-podcast/02-youtube-channel.webp", alt: "College Shortcuts YouTube channel videos and Shorts", width: 1185, height: 970 },
      { src: "/work/youtube-podcast/03-apple-podcasts.webp", alt: "College Shortcuts Insider podcast on Apple Podcasts", width: 1800, height: 711 },
      { src: "/work/youtube-podcast/04-podcast-site.webp", alt: "Podcast episode page with show notes", width: 1800, height: 925 },
      { src: "/work/youtube-podcast/05-podcast-downloads.webp", alt: "Podcast download stats: 2,939 all-time", width: 1339, height: 400 },
    ],
  },
  {
    slug: "blog-seo",
    title: "Blog Content & SEO",
    category: "blog-seo-web",
    summary: "SEO blog articles for an admissions consulting site, planned around real search demand.",
    whatIDid: [
      "Wrote and published blog articles, from admissions guides to STEM majors.",
      "Built an SEO keyword plan with search volume, difficulty and CPC for each topic.",
      "Created featured images for each post, including AI-generated illustrations.",
    ],
    toolsUsed: ["ChatGPT", "Canva"],
    images: [
      { src: "/work/blog-seo/01-blog-posts.webp", alt: "Blog index with published articles", width: 1800, height: 940 },
      { src: "/work/blog-seo/02-stem-majors-article.webp", alt: "Article: STEM majors explained", width: 1790, height: 897 },
      { src: "/work/blog-seo/03-student-routines-article.webp", alt: "Article: The ultimate guide to student success routines", width: 1235, height: 893 },
      { src: "/work/blog-seo/04-seo-keyword-plan.webp", alt: "SEO keyword plan with difficulty, volume and CPC", width: 1148, height: 710 },
      { src: "/work/blog-seo/05-ap-classes-article.webp", alt: "Article: How many AP classes are enough, with an AI illustration", width: 1459, height: 806 },
    ],
  },
  {
    slug: "wix-website",
    title: "Research Institute Website on Wix",
    category: "blog-seo-web",
    summary: "Building and editing pages for a student research institute's website.",
    whatIDid: [
      "Built and edited site sections in the Wix editor, including the publications page.",
      "Laid out author profiles and long-form page copy.",
    ],
    toolsUsed: ["Wix"],
    images: [
      { src: "/work/wix-website/01-wix-editor.webp", alt: "Wix editor showing the publications page", width: 1800, height: 755 },
    ],
  },
  {
    slug: "ai-automation",
    title: "AI Tools & Automation Support",
    category: "ai-automation",
    summary: "Setting up and adjusting a prebuilt n8n workflow that drafts articles from a form, plus AI-assisted short clips from long videos.",
    whatIDid: [
      "Configured and modified a prebuilt n8n workflow: a form submission becomes an outline, researched sections, citations and a generated image, saved as a draft in Google Drive.",
      "Used AI-assisted tools to turn long videos into captioned short-form clips.",
    ],
    toolsUsed: ["n8n", "ChatGPT", "Google Workspace"],
    images: [
      { src: "/work/ai-automation/01-n8n-article-workflow.webp", alt: "n8n workflow that writes a draft article from a form submission", width: 1716, height: 520 },
      { src: "/work/ai-automation/02-ai-short-clips.webp", alt: "AI-generated short clips with virality scores", width: 1785, height: 621 },
    ],
  },
  {
    slug: "crm-sales-reports",
    title: "CRM, Outreach & Booking Reports",
    category: "executive-assistance",
    summary: "Sales support in Close CRM and OnceHub for a consulting team. Names and revenue are removed.",
    whatIDid: [
      "Supported lead follow-up and outreach in Close CRM: 1,064 leads, 3,805 outbound calls and 6,481 emails over five months.",
      "Tracked email performance: 6,717 sent with a 44% open rate.",
      "Monitored consultation bookings in OnceHub: 245 meetings in 90 days.",
    ],
    toolsUsed: ["Close CRM", "OnceHub"],
    images: [
      { src: "/work/crm-sales-reports/01-activity-overview.webp", alt: "Close CRM activity overview: leads, calls and emails", width: 633, height: 515 },
      { src: "/work/crm-sales-reports/02-call-reports.webp", alt: "Close CRM call reports", width: 1580, height: 944 },
      { src: "/work/crm-sales-reports/03-email-report.webp", alt: "Sent email report: 6,717 sent, 44% open rate", width: 1568, height: 225 },
      { src: "/work/crm-sales-reports/04-booking-insights.webp", alt: "OnceHub booking insights: 245 meetings", width: 1558, height: 690 },
      { src: "/work/crm-sales-reports/05-lead-acquisition.webp", alt: "OnceHub lead acquisition dashboard", width: 1554, height: 894 },
    ],
  },
];

export const experience = [
  "Managed social media content and posting schedules for an education brand.",
  "Designed promotional graphics, ads, thumbnails, and podcast visuals.",
  "Prepared, edited, and published SEO-optimized blog articles in WordPress.",
  "Maintained CRM records and coordinated client follow-ups.",
  "Configured and modified prebuilt n8n workflows to cut down repetitive tasks.",
  "Supported website updates and content publishing.",
];

export const tools = [
  "Canva",
  "ChatGPT",
  "WordPress",
  "Wix",
  "n8n",
  "Close CRM",
  "Google Workspace",
  "CapCut",
];

export type SocialKind = "email" | "linkedin";

// A mailto: link opens the visitor's default email app with the address filled in.
export const socials: { kind: SocialKind; label: string; detail: string; href: string }[] = [
  { kind: "email", label: "Email", detail: "sainbautista19@gmail.com", href: "mailto:sainbautista19@gmail.com" },
  {
    kind: "linkedin",
    label: "LinkedIn",
    detail: "in/sain-bautista",
    href: "https://www.linkedin.com/in/sain-bautista-273325235/",
  },
];
