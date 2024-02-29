import ListProjects from "../Projects/ListProjects";
import SectionWrapper from "../utils/SectionWrapper";

const ProjectsSection = () => {
  return (
    <SectionWrapper title="Projects" className="bg-secondary-foreground">
      <ListProjects path="Home" />
    </SectionWrapper>
  );
};

export default ProjectsSection;
