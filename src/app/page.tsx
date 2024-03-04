import BlogsSection from "@/components/Home/BlogsSection";
import ContactSection from "@/components/Home/ContactSection";
import HeroProfile from "@/components/Home/HeroProfile";
import ProjectsSection from "@/components/Home/ProjectsSection";
import SkillsSection from "@/components/Home/SkillsSection";
import TestimonialsSection from "@/components/Home/TestimonialsSection";

export default function Home() {
  return (
    <>
      <HeroProfile />
      <SkillsSection />
      <ProjectsSection />
      <BlogsSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
