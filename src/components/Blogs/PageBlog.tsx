import { TBlog } from "@/lib/types/TBlog";
import CardStack from "../Projects/CardStack";

const PageBlog = ({ blog }: { blog: TBlog }) => {
  return (
    <div className="container flex flex-col items-center lg:flex-row-reverse gap-[4rem]">
      <div className="lg:w-1/2 lg:flex lg:justify-center lg:items-center">
        <CardStack
          images={blog.images?.length < 1 ? [blog.image] : blog.images}
        />
      </div>
      <div className="lg:w-1/2">
        <h1 className="text-4xl my-7 font-bold text-primary dark:text-white">
          {blog.name}
        </h1>
        <p className="text-primary dark:text-primary-foreground">
          {blog.description}
        </p>
        <h2 className="text-2xl mt-4 font-semibold text-primary dark:text-white">
          Learnings
        </h2>
        {/* <ul className="list-disc list-inside text-primary dark:text-primary-foreground mt-4">
          {blog.technologies?.map((tech, index) => (
            <li className="ml-4" key={index}>
              {tech}
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default PageBlog;
