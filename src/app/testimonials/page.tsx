import ListTestimonials from "@/components/Testimonials/ListTestimonials";

const testimonials = () => {
  return (
    <div className="lg:container my-[8rem]">
      <h1 className="font-bold text-primary text-4xl m-[4rem] pt-[2rem] dark:text-white">
        All Testimonials
      </h1>
      <ListTestimonials path="Testimonials" />
    </div>
  );
};

export default testimonials;
