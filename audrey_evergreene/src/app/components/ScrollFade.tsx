"use client";

// Trying to use this component to wrap all the children and create the scroll effect using gsap
// I think gsap is a way to do this (I'm not attached to any particular tool, though) and I just haven't gotten the syntax right. I don't know why it's not rendering the children now

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

export function ScrollFade(props: any) {
  gsap.registerPlugin(ScrollTrigger);
  let refs = useRef([]);
  const el = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const animation2 = gsap.to(el.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: el.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          markers: true,
        },
      });
    }, el);
    //   "cleanup hooks"
    return () => {
      ctx.revert();
    };
  }, []);
  return <div ref={el}>{props.children}</div>;
}
