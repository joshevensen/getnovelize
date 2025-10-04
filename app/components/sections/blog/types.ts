export interface Post {
  _id: string;
  _path: string;
  title: string;
  description: string;
  publishedAt: string;
  authorId: string;
  category: string;
  tags: string[];
  coverImage?: string;
  excerpt?: {
    type: string;
    children: any;
  };
  featured: boolean;
  draft: boolean;
  readingTime?: number;
}

export interface Author {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}
