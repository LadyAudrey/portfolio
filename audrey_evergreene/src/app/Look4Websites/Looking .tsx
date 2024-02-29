import Link from "next/link";

import BulletPt from "../components/BulletPt";

export function Looking() {
  return (
    <>
      <h3 className="text-2xl">What do you look for in a website?</h3>
      <div className="flex flex-col text-xl gap-5 my-5">
        <div className="flex">
          <BulletPt />
          <Link href="/about" replace>
            Clean Code
          </Link>
        </div>
        <div className="flex">
          <BulletPt />
          <Link href="/about" replace>
            Excellent User Interface and Experience
          </Link>
        </div>
        <div className="flex">
          <BulletPt />
          <Link href="/about" replace>
            Beautiful Design
          </Link>
        </div>
      </div>
    </>
  );
}
