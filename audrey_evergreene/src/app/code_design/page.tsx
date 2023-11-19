export default function page() {
  return (
    <>
      <div className="flex flex-row justify-between w-full m-10">
        <div className="card bg-gradient-to-b from-green-950 to-blue-950">
          <h2 className="dualHeader">Coding</h2>
          <p>
            I like coding, puzzles and scavenger hunts. It&apos;s fun to brain
            storm and then explore what&apos;s possible with these dynamic,
            well-developed tools. I&apos;m grateful to be standing on the
            shoulders of many coders before me. I get to enjoy the tools that
            coders wished existed, figured out how to create, and then I get to
            use those tools to develop the next generation. How cool is that???
          </p>
        </div>
        <div className="card bg-gradient-to-b from-blue-950 to-green-950 ">
          <h2 className="dualHeader">Designing</h2>
          <p>
            I love creating digital art. Websites, vector graphics, GIFs,
            stickers, photoshop... you name it. Playing with the tools,
            exploring what&apos;s possible and how to get different tools to
            interact in interesting ways is what makes me the happiest.
          </p>
        </div>
      </div>
    </>
  );
}
