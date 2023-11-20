import Project from "./Project";
export default function Briefcase() {
  return (
    <div>
      <Project
        proj_name={"WhimsyScript Club"}
        proj_memo={
          "Silly games and toys to help developers stay in an open mindset while learning to code"
        }
        live_link="coming soon!"
        GHLink={"https://github.com/LadyAudrey/whimsyscriptclub"}
        logo={"/logos/projects/WhimsyScriptClub/8Ball.svg"}
        // "/logos/projects/WhimsyScriptClub/Duckie.svg",
        attributes={"Solo Project"}
        TandT={"React, Next, Tailwind, Js, HTML, Vercel, Figma"}
        role={"Web Developer and Designer"}
        timeline={"11/15/2022 - Present"}
        goals={"To help developers have a kinder learning curve"}
        challenges={"Github issues"}
      />
      <Project
        proj_name={"Debugging the Coders' Mind"}
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
