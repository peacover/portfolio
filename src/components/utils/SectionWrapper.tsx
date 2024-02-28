import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const SectionWrapper = ({
  title,
  children,
  className,
}: SectionWrapperProps) => {
  return (
    <section className={cn("py-[5rem]", className)}>
      <h1 className="text-5xl font-bold text-primary flex justify-center items-center mb-[5rem]">
        {title}
      </h1>
      {children}
    </section>
  );
};

export default SectionWrapper;
