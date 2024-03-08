"use client";

import { InfiniteMovingCards } from "../utils/infinite-moving-cards";
import { Button } from "../ui/button";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { testimonials } from "@/lib/constants/testimonials";
import { TTestimonialPath } from "@/lib/types/TTestimonial";
import CardTestimonial from "./CardTestimonial";

const ListTestimonials = ({ path }: TTestimonialPath) => {
  return path === "Home" ? (
    <div className="h-[25rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
      <div className="flex justify-center">
        <Button
          asChild
          className="p-5 mt-14 text-white dark:text-black text-md bg-accent rounded-full"
          variant={"link"}
        >
          <Link href="/testimonials">
            View All
            <FaArrowRightLong className="inline ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  ) : (
    <ul className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {testimonials.map((testimonial, index) => {
        return <CardTestimonial key={index} testimonial={testimonial} />;
      })}
    </ul>
  );
};

export default ListTestimonials;
