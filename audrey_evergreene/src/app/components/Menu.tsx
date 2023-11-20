import Link from "next/link";
import SocialMediaLinks from "./SocialMediaLinks";
import BulletPt from "./BulletPt";

export default function Menu() {
  return (
    <div>
      <div className="flex flex-col gap-5">
        <div className="menu_items">
          <BulletPt />
          <Link href="src/app/page.tsx" replace>
            About Audrey
          </Link>
        </div>
        <div className="menu_items">
          {""}
          <BulletPt />
          <button>Projects</button>
          <Link href="/projects" replace></Link>
        </div>
        <div className="menu_items">
          <BulletPt />
          <Link href="/code_design" replace>
            Code & Design
          </Link>
        </div>
        <div className="menu_items">
          <BulletPt />
          <Link href="/skills_tools" replace>
            Skills & Tools
          </Link>
        </div>
        <div className="menu_items">
          <BulletPt />
          <Link href="/testimonials" replace>
            Testimonials
          </Link>
        </div>
        <div className="menu_items">
          <BulletPt />
          <Link href="/resume" replace>
            Resume
          </Link>
        </div>
      </div>
    </div>
  );
}
