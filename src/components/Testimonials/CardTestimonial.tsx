import { TTestimonial } from "@/lib/types/TTestimonial";

const CardTestimonial = ({ testimonial }: { testimonial: TTestimonial }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <p className="text-gray-600">{testimonial.description}</p>
      <div className="flex items-center mt-4">
        <div className="flex-shrink-0">
          <img
            className="h-10 w-10 rounded-full"
            src="https://randomuser.me/api/port"
            alt=""
          />
        </div>
        <div className="ml-4">
          <div className="text-sm font-medium text-gray-900">
            {testimonial.name}
          </div>
          <div className="text-sm text-gray-500">{testimonial.company}</div>
        </div>
      </div>
    </div>
  );
};

export default CardTestimonial;
