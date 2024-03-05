import { Button } from "../ui/button";
import profile from "../../../public/Profile/youssef.png";
import Image from "next/image";
import Link from "next/link";

const HeroProfileContent = {
  title: "Welcome to my Web Development Portofolio!",
  description:
    "I'm Youssef ER-RAKI, a dedicated Junior Software Engineer based in Morocco.\
    I love solving problems, collaborating with great minds, and paying attention to details.\
    Eager to enhance my skills, unafraid of learning, and enthusiastic about connecting with \
    like-minded professionals. Let's grow together!",
};

const HeroProfile = () => {
  return (
    <header className="p-8 mt-[8rem]">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center md:grid-cols-2">
        <div className="row-start-2 md:row-auto">
          <h1
            color="blue-gray"
            className="mb-4 text-3xl !leading-tight md:text-4xl lg:text-5xl"
          >
            {HeroProfileContent.title}
          </h1>
          <div className="mb-4 text-primary dark:text-primary-foreground md:pr-16 xl:pr-28">
            <p>{HeroProfileContent.description}</p>
          </div>
          <div className="grid">
            <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
              <Button asChild className="p-5 text-md">
                <Link href="/about">About</Link>
              </Button>
              <Button
                variant={"secondary"}
                className="p-5 text-md bg-profile dark:bg-secondary"
              >
                Download CV
              </Button>
            </div>
          </div>
        </div>
        <Image
          src={profile}
          alt="Profile"
          width="0"
          height="0"
          sizes="100vw"
          className="h-[36rem] w-full rounded-xl object-cover"
          priority={true}
        />
      </div>
    </header>
  );
};

export default HeroProfile;
