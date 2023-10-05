import Image from "next/image";

export default function page() {
  return (
    <>
      <div className="flex flex-col bg-gradient-to-b from-transparent to-rgba(23, 37, 84, .3)">
        <div className="flex flex-row justify-between text-white w-full m-10">
          <div className="card bg-gradient-to-b from-green-950 to-blue-950">
            <h2 className="dualHeader">Skills</h2>
            <p>
              Developing the mindset of a coder is a skill and takes time.
              Learning how to learn takes practice. Your explore tools, figuring
              out how your mind retains information the best. How do learn how
              code moves? How do you explain it to yourself? When you're
              debugging, where do you start and what's your process to find the
              bug? Ultimately, these are the real skills of being a coder. While
              the syntax of languages and frameworks are great, ultimately, the
              true skill of being a coder is the ability to learn and manage
              your own mind as you're doing so.
            </p>
            <img src="/misc/magGlass.jpg" className="graphic" />
          </div>
          <div className="card bg-gradient-to-b from-blue-950 to-green-950 ">
            <h2 className="dualHeader">Tools</h2>
            <img src="/misc/brushes.jpg" className="graphic" />

            <p>
              Learning the ins and outs of the different languages and
              frameworks is what allows you to gain speed. While the real skill
              of being a coder is mental flexibility and being able to learn
              intentionally and methodically, the body memory and ability to
              recall is what limits your speed as a coder.
            </p>
          </div>
        </div>
        <div className="w-full h-auto m-auto mt-20 mb-48">
          <p>
            Ultimately, the synergy of skills and technical prowess is what
            makes a brilliant coder. To truly understand the shape of the
            program combined with the expertise developed by years of
            intentional growth is the true goal of a life long learner who's
            embraced the path of being a coder.
          </p>
        </div>
      </div>
    </>
  );
}
