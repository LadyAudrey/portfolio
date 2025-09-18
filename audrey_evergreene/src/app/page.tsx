import Link from "next/link";

import { Looking } from "./components/Looking ";
import { AudreyEvergreene } from "./components/AudreyEvergreene";
export default function Home() {
  return (
    <main>
      <div className="h-full min-h-[80vh] w-full flex flex-col content-center m-auto">
        <AudreyEvergreene />
      </div>
    </main>
  );
}
