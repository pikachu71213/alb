let blogs = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200",
    content: "Learn the fundamentals of Next.js and build modern web applications."
  },
  {
    id: 2,
    title: "Understanding React Hooks",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200",
    content: "A complete guide to useState, useEffect, and other React hooks."
  },
  {
    id: 3,
    title: "Tailwind CSS Best Practices",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
    content: "Discover how to write clean and maintainable Tailwind CSS code."
  },
  {
    id: 4,
    title: "Building REST APIs in Next.js",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200",
    content: "Create scalable API routes using the Next.js App Router."
  },
  {
    id: 5,
    title: "MongoDB with MERN Stack",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200",
    content: "Learn how to connect MongoDB with Express, React, and Node.js."
  },
  {
    id: 6,
    title: "Authentication using JWT",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200",
    content: "Secure your applications with JSON Web Tokens and authentication flows."
  },
  {
    id: 7,
    title: "Deploying Next.js Applications",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200",
    content: "A step-by-step guide to deploying your Next.js project."
  },
  {
    id: 8,
    title: "SEO Tips for Web Developers",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1200",
    content: "Improve search engine rankings with technical SEO techniques."
  },
  {
    id: 9,
    title: "Responsive Web Design",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=1200",
    content: "Build websites that look great on desktops, tablets, and mobile devices."
  },
  {
    id: 10,
    title: "Introduction to TypeScript",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=1200",
    content: "Understand TypeScript basics and improve your JavaScript projects."
  }
];

export async function GET() {
  return Response.json(blogs);
}


export async function POST(req) {
  const body = await req.json();

  const newBlog = {
    id: blogs.length + 1,
    title: body.title,
    content: body.content,
  };

  blogs.push(newBlog);

  return Response.json({
    message: "Blog Created",
    data: newBlog,
  });
}