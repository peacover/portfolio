import ListBlogs from "@/components/Blogs/ListBlogs";

const blog = () => {
  return (
    <div className="lg:container my-[8rem]">
      <h1 className="font-bold text-primary text-4xl m-[4rem] pt-[2rem] dark:text-white">
        All Blogs
      </h1>
      <ListBlogs path="Blogs" />
    </div>
  );
};

export default blog;
