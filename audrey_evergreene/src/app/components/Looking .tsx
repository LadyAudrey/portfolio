import Link from "next/link";

import BulletPt from "./BulletPt";

export function Looking() {
  return (
    <>
      <h3 className="flex flex-col items-center justify-center w-full m-auto text-2xl">
        What do you look for in a website?
      </h3>
      <div className="flex flex-row justify-between text-xl">
        <div className="flex">
          <BulletPt />
          <Link href="/about" replace>
            Clean Code
          </Link>
        </div>
        <div className="flex">
          <BulletPt />
          <Link href="/about" replace>
            Excellent User Experience
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
