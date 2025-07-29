import Link from "next/link";

import { Looking } from "./components/Looking ";
export default function Home() {
  return (
    <main>
      <div className="h-full min-h-[80vh] text-4xl">
        <Looking />
      </div>
    </main>
  );
}
