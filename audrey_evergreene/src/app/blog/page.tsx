"use client";
import { useState } from "react";

import { Arrows } from "../components/Arrows";

// hard code importing blog posts I want to learn webpack to update this more effectively
import { blogMetaData } from "../components/blogPosts/EngineersHavePower";
const EHPcontent: {} = blogMetaData;
const { element, tags } = blogMetaData;

import { blog2MetaData } from "../components/blogPosts/post2";
const blog2content: {} = blog2MetaData;
const { element2, tags2 } = blog2MetaData;

// save above data in a format that will be similar to what I'll import with webpack
const blogContent = [
  { element: element, tags: tags },
  { element: element2, tags: tags2 },
];

console.log(blogContent[0].element);

export default function page() {
  const [viewItem, setViewItem] = useState(0);
  // return <h1>I'm a placeholder</h1>;
  return (
    <div className="relative">
      {/* <Arrows viewItem={viewItem} setViewItem={setViewItem} /> */}
      <div> {blogContent[0].element()}</div>
    </div>
  );
}
