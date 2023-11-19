import Project from "./Project";
export default function Briefcase() {
  return (
    <div>
      <Project

        proj_name={"Debugging the Coder&apos;s Mind"}
        proj_memo={
          "Teaching web development, increasing user comprehension and enjoyment"
        }
        GHLink={"https://github.com/LadyAudrey/debugging_the_coders_mind"}
        logo={"/logos/projects/Logo.svg"}
        attributes={"Pair Programming"}
        TandT={"React, Next, Tailwind, Js, HTML, Supabase, Vercel"}
        role={"Designer and Project Mastermind"}
        timeline={"1/1/2022 - Present"}
        goals={"To teach JavaScript and Web Dev in a friendly blog format"}
        challenges={"Integrating FrontEnd and Backend frameworks with MXL"}
      />
      <Project
        proj_name={"Self Scribe"}
        proj_memo={"Custom TDL app to correlate symptoms against habits"}
        GHLink={"https://github.com/LadyAudrey/self_scribe"}
        attributes={"Pair Programming, Integrated Backend"}
        TandT={"React, Next, Tailwind, Js, HTML, Supabase, NodeJS, Express"}
        role={"Project Lead"}
        timeline={"10/1/2023 - Present"}
        goals={
          "To correlate symptoms against routine behavior in order to assess effectiveness of personal habits or food allergies"
        }
        challenges={"Learned fetching, Backend integration"}
      />
    </div>
  );
}
