import React from "react";

export const blogMetaData = {
  element: EngineersHavePower,
  date: [11, 12, 2023],
  title: "Engineers have Power",
  tags: ["Ethics", "Engineers", "Power", "Responsibility"],
};

function EngineersHavePower() {
  return (
    <div className="flex flex-col m-5">
      <h3 className="text-center underline">Engineers Have Power</h3>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As
        a Millennial junior software developer, I've been immersed in the world
        of technology without fully grasping the global impact. It's fascinating
        to think about how software, once viewed as an&nbsp;
        <em className="text-emerald-100">unavoidable necessity</em> has become a
        &nbsp;
        <em className="text-emerald-100">transformative tool&nbsp;</em>for so
        many. The average user is focused on their individual tech experiences.
        As developers we have the unique opportunity to see the bigger picture.
      </p>
      <p className="special-text">
        Transitioning from a software user to an
        <em className="text-emerald-100">&nbsp;ethical&nbsp;</em>
        software engineer requires expanding our perspective beyond personal
        experiences.
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Today,
        brick-and-mortar businesses no longer dominate our lives. The design,
        functionality, and emotional resonance of an app can rival physical
        interactions, shaping our daily lives in profound ways. It's incredible
        to witness the unprecedented global interaction with software, where a
        significant portion of the world population relies on universal products
        for their daily processes.
        <b>
          Never before have engineers' decisions had such an immediate impact on
          humanity.
        </b>
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"You
        Are Not Expected to Understand This" is a captivating anthology of
        essays that delves into the development of technology. One essay
        recounts the creation of the Facebook like button— a seemingly&nbsp;
        <b className="text-amber-100">
          {" "}
          <em>
            innocuous feature that sparked a trend of reduced interaction and
            led to cascading trends creating a lack of disconnection
          </em>
        </b>
        . While the engineer behind it couldn't have foreseen its cultural
        impact, it's time to acknowledge the importance of approaching
        technological innovations with intention and responsibility.
      </p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Working
        collaboratively in hierarchical teams, developers craft impactful
        products that shape our digital landscape. The speed at which solutions
        are conceived and implemented, often without direct interactions with
        users, is truly remarkable. While challenges persist and political
        intricacies abound, what's truly remarkable is the growing number of
        individuals globally equipped with the perspective to address these
        issues. Digital solutions now emerge from living rooms and affect a
        fraction of the world population.
      </p>
      <div className="special-text mt-10">
        <p>
          Software is reshaping our interactions, communication, and
          relationships as fast as wifi connections can be turned into neural
          synapses.
        </p>
      </div>
      <div>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As developers, we
          wield immense power in shaping our digital future. With each
          application, we have the potential of changing culture for
          generations. Let's chart an ethical course in software development,
          prioritizing transparency, connection, and accountability. In this
          data-driven world, let's never lose sight of our humanity. Let's build
          not just better software, but user experiences, designed to be kind
          human nervous systems. Guided by empathy, compassion, and a commitment
          to social good, we can create a culture of connection and mutual
          understanding.
        </p>
      </div>
      <div>
        <p className="text-3xl text-center text-amber-100">
          <em>
            Together, let's embrace our responsibility and forge a path toward a
            brighter future.
          </em>
        </p>
      </div>
    </div>
  );
}
