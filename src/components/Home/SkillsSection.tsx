import { skills } from "@/lib/constants/skills";
import SectionWrapper from "../utils/SectionWrapper";
import Image from "next/image";

const SkillsSection = () => {
  return (
    <SectionWrapper title="Skills" className="bg-primary-foreground mt-[8rem]">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {skills.map((skill, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2"
            >
              <Image
                src={skill.image}
                width="0"
                height="0"
                alt="Skill"
                className="w-16 h-16"
              />
              <span className="dark:text-black">{skill.title}</span>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;
