import { TBlog } from "@/lib/types/TBlog";
import { Card, CardFooter, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import Link from "next/link";

const CardBlog = ({ blog }: { blog: TBlog }, key: number) => {
  return (
    // <Link href={"/blogs/" + blog.name.toLowerCase()}>
    <Link href={"/blogs/"}>
      <Card key={key} className="flex flex-col h-full">
        <CardHeader className="flex flex-col flex-grow">
          <Image
            src={blog.image}
            alt="blog image"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full object-cover"
            priority={true}
            aria-label={blog.name}
          />
        </CardHeader>
        <CardFooter className="flex justify-between mt-auto">
          <CardTitle>{blog.name}</CardTitle>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default CardBlog;
