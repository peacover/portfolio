import { skills } from "@/lib/constants/skills";
import SectionWrapper from "../utils/SectionWrapper";

const SkillsSection = () => {
  return (
    <SectionWrapper title="Skills">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {skills.map((skill, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2"
            >
              <img src={skill.image} alt={skill.title} className="w-16 h-16" />
              <span>{skill.title}</span>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;
