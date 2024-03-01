import ListTestimonials from "../Testimonials/ListTestimonials";
import SectionWrapper from "../utils/SectionWrapper";

const TestimonialsSection = () => {
  return (
    <SectionWrapper title="Testimonials" className="bg-secondary-foreground">
      <ListTestimonials />
    </SectionWrapper>
  );
};

export default TestimonialsSection;
