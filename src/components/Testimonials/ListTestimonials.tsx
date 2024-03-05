"use client";

import CardTestimonial from "./CardTestimonial";
// import { testimonials } from "@/lib/constants/testimonials";
import { InfiniteMovingCards } from "../utils/infinite-moving-cards";
import { Button } from "../ui/button";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { testimonials } from "@/lib/constants/testimonials";

const ListTestimonials = () => {
  return (
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
  );
};

export default ListTestimonials;
