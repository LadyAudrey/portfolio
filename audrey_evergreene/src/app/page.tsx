import Menu from "./components/Menu";
import SocialMediaLinks from "./components/SocialMediaLinks";
import Briefcase from "./components/Briefcase";

export default function Home() {
  return (
    <main>
      <>
        <div
          className="h-full bg-gradient-to-b from-transparent via-blue
        -950
           via to-green-950)"
        >
          <div className="">
            <h1>Hi, I&apos;m Audrey Evergreene</h1>
            <h2 className="self-center">Front End Web Developer</h2>
          </div>
          <div>
            <h2>Below are my Portfolio Projects</h2>
            <Briefcase />
          </div>
        </div>
      </>
    </main>
  );
}
