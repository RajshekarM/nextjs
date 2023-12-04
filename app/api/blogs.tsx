// pages/api/blogs.ts
import { NextApiRequest, NextApiResponse } from 'next';

interface Blog {
  id: number;
  title: string;
  content: string;
}

const handler = (_req: NextApiRequest, res: NextApiResponse<Blog[]>) => {
  const blogs: Blog[] = [
    { id: 1, title: 'Blog 1', content: 'Content for Blog 1' },
    { id: 2, title: 'Blog 2', content: 'Content for Blog 2' },
    // Add more blogs as needed
  ];

  res.status(200).json(blogs);
};

export default handler;
