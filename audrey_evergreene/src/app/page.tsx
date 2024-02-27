import Link from "next/link";

import BulletPt from "./components/BulletPt";

export default function Home() {
  return (
    <main>
      <div className="h-full min-h-[80vh] text-4xl">
        <h1>Hi, I&apos;m Audrey Evergreene</h1>
        <h2 className="self-center text-3xl">Dynamic Web Developer</h2>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A lifelong learner and
          dedicated problem solver, I am transitioning from the healthcare
          industry, where I managed my own 3-therapist clinic. Steering my path
          towards becoming a front-end web development, my passion for
          untangling complex puzzles and creating clean solutions entice me to
          dive into software engineering.
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In addition to my love
          for problem solving, I am equally fueled by my passion for creating
          art in the digital realm. My goal is to seamlessly merge the precision
          of technology with the creativity of artistry to craft user-centric
          and visually captivating digital experiences. The challenges of
          front-end development excite me as they provide a platform to
          continuously learn, innovate, and redefine the boundaries of
          what&apos;s achievable.
        </p>
      </div>
    </main>
  );
}
