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
          <div className="fixed top-5 right-36 z-20">
            <h1>Hi, I&apos;m Audrey Evergreene</h1>
            <h2 className="self-center">Front End Web Developer</h2>
          </div>
          <div>
            <h2>Portfolio Projects</h2>
            <Briefcase />
          </div>
        </div>
      </>
    </main>
  );
}
