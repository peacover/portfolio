import { TTestimonial } from "@/lib/types/TTestimonial";

const CardTestimonial = ({
  testimonial,
  key,
}: {
  testimonial: TTestimonial;
  key: number;
}) => {
  return (
    <li
      key={key}
      className="flex flex-col gap-4 bg-primary dark:bg-secondary p-4 rounded-md"
    >
      <span className="text-base leading-[1.6] text-gray-100 dark:text-black font-normal">
        {testimonial.description}
      </span>
      <div className="mt-6 flex flex-row items-center">
        <span className="flex flex-col gap-1">
          <span className=" text-sm leading-[1.6] text-gray-400 font-normal">
            {testimonial.name}
          </span>
          <span className=" text-sm leading-[1.6] text-gray-400 font-normal">
            {testimonial.title} @
            <span className="font-bold">{testimonial.company}</span>
          </span>
        </span>
      </div>
    </li>
  );
};

export default CardTestimonial;
