interface SectionWrapperProps {
  title: string;
  children: React.ReactNode;
}

const SectionWrapper = ({ title, children }: SectionWrapperProps) => {
  return (
    <section className="container mx-auto my-[5rem]">
      <h1 className="text-5xl font-bold text-primary flex justify-center items-center m-[5rem]">
        {title}
      </h1>
      {children}
    </section>
  );
};

export default SectionWrapper;
