import HeroProfile from "@/components/Home/HeroProfile";
import ProjectsSection from "@/components/Home/ProjectsSection";
import SkillsSection from "@/components/Home/SkillsSection";
import Navbar from "@/components/Navbar/Navbar";
import ScrollToTopButton from "@/components/utils/ScrollToTopButton";
export default function Home() {
  return (
    // <div>Home</div>
    <>
      <HeroProfile />
      <SkillsSection />
      <ProjectsSection />
    </>
  );
}
