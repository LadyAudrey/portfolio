export default function page() {
  return (
    <>
      <div className="flex flex-row justify-between text-white w-full m-10">
        <div className="card bg-gradient-to-b from-green-950 to-blue-950">
          <h2 className="dualHeader">Coding</h2>
          <p>
            I like coding and puzzles and the scavenger hunt. It's fun to brain
            storm and then explore what's possible with these dynamic,
            well-developed tools. I'm grateful to be standing on the shoulders
            of many coders before me. I get to enjoy the tools that coders wished
            existed, figured out how to create, and then I get to use those
            tools to develop the next generation. How cool is that???
          </p>
        </div>
        <div className="card bg-gradient-to-b from-blue-950 to-green-950 ">
          <h2 className="dualHeader">Designing</h2>
          <p>I love creating things. Websites, vector graphics, GIFs, stickers, photoshop... you name it. Playing with the tools, exploring what's possible and how to get different tools to interact in interesting ways is what makes me the happiest.</p>
        </div>
      </div>
    </>
  );
}
