export type TBlog = {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
  images: string[];
};

export type TBlogPath = {
  path: "Home" | "Blogs";
};
