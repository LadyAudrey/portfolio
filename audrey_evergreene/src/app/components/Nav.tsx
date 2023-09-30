import Image from "next/image";

export default function Nav() {
  return (
    <div className="w-1/6 m-5 flex flex-row justify-between top-0 absolute right-0 opacity-70">
      <Image
        src="/logos/github-mark/github-mark/github-mark-white.svg"
        height={50}
        width={50}
        alt="Github Logo"
      />
      <Image src="/logos/x-logo/logo-white.png" height={50} width={50} alt="Twitter Logo" />
      <Image src="/logos/LinkedIn-Logos/LI-In-Bug.png" height={50} width={50} alt="LinkedIn Logo" />
    </div>
  );
}
