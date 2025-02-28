import { TBlog } from "@/lib/types/TBlog";
import { Card, CardFooter, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import Link from "next/link";

interface ICardBlog {
  blog: TBlog;
}
const CardBlog = ({ blog }: ICardBlog) => {
  return (
    <Link href={"/blogs/" + blog.name.toLowerCase().replaceAll(" ", "-")}>
      <Card className="flex flex-col h-full">
        <CardHeader className="flex flex-col flex-grow">
          <Image
            src={blog.image}
            alt={blog.name + " image"}
            width="0"
            height="0"
            sizes="100vw"
            className="w-full object-cover"
            priority={true}
            aria-label={blog.name + " image"}
          />
        </CardHeader>
        <CardFooter className="flex justify-between mt-auto">
          <span className="text-2xl font-bold text-primary dark:text-white">
            {blog.name}
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default CardBlog;
