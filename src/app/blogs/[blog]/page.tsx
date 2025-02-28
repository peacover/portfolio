import PageBlog from "@/components/Blogs/PageBlog";
import { blogs } from "@/lib/constants/blogs";
import { TBlog } from "@/lib/types/TBlog";
import { notFound } from "next/navigation";

const blog = async ({ params }: { params: Promise<{ blog: string }> }) => {
  // console.log("params: ", params);
  const blog_param = (await params).blog
  const found_blog: TBlog | undefined = blogs.find(
    (blog) => blog.name.toLowerCase().replaceAll(" ", "-") === blog_param
  );

  return (
    <div className="container my-[10rem]">
      {found_blog ? <PageBlog blog={found_blog} /> : notFound()}
    </div>
  );
};

export default blog;
