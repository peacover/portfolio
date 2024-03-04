import ContactCard from "../Contact/CardContact";
import SectionWrapper from "../utils/SectionWrapper";

const ContactSection = () => {
  return (
    <SectionWrapper title="Contact" className="bg-primary-foreground">
      <ContactCard />
    </SectionWrapper>
  );
};

export default ContactSection;
