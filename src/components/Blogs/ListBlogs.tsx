import { TBlogPath } from "@/lib/types/TBlog";
import { Button } from "../ui/button";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { blogs } from "@/lib/constants/blogs";
import CardBlog from "./CardBlog";

const ListBlogs = ({ path }: TBlogPath) => {
  return (
    <>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map((blog, index) => {
          if (index > 2 && path === "Home") return null;
          return <CardBlog key={blog.id} blog={blog} />;
        })}
      </div>
      <div className="flex justify-center">
        <Button
          asChild
          className="p-5 mt-14 text-white dark:text-black text-md bg-accent rounded-full"
          variant={"link"}
        >
          <Link href="/blogs">
            View All
            <FaArrowRightLong className="inline ml-2" />
          </Link>
        </Button>
      </div>
    </>
  );
};

export default ListBlogs;
