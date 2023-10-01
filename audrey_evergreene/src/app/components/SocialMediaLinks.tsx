import Image from "next/image";

export default function SocialMediaLinks() {
  return (
    <div className="w-full flex flex-row place-content-between gap-3 opacity-70">
      <Image
        src="/logos/github-mark/github-mark/github-mark-white.svg"
        height={30}
        width={30}
        alt="Github Logo"
      />
      <Image
        src="/logos/x-logo/logo-white.png"
        height={30}
        width={30}
        alt="Twitter Logo"
      />
      <Image
        src="/logos/LinkedIn-Logos/LI-In-Bug.png"
        height={30}
        width={30}
        alt="LinkedIn Logo"
      />
    </div>
  );
}
