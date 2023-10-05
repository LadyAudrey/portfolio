import Image from "next/image";
import Link from "next/link";

export default function SocialMediaLinks() {
  return (
    <div
      className="flex flex-row items-center place-content-around gap-4 bg-gradient-to-b from-transparent via-green-950
    via to-blue-rgba(23, 37, 84, .3) opacity-70"
    >
      <Link href="/" replace>
        <Image src="misc/home.svg" height={30} width={30} alt="Home button" />
      </Link>
      <Link href="https://github.com/LadyAudrey/" target="_blank">
        <Image
          src="/logos/github-mark/github-mark/github-mark-white.svg"
          height={30}
          width={30}
          alt="Github Logo"
        />
      </Link>
      <Link href="https://twitter.com/AudreyG45731656/" target="_blank">
        <Image
          src="/logos/x-logo/logo-white.png"
          height={30}
          width={30}
          alt="Twitter Logo"
        />
      </Link>
      <Link href="https://www.linkedin.com/in/audrey-evergreene/" target="_blank">
        <Image
          src="/logos/LinkedIn-Logos/LI-In-Bug.png"
          height={30}
          width={30}
          alt="LinkedIn Logo"
        />
      </Link>
    </div>
  );
}
