import Image from "next/image";
import Link from "next/link";

export default function SocialMediaLinks() {
  return (
    <div className="flex flex-row my-8 items-center place-content-around gap-4">
      <Link href={"https://github.com/LadyAudrey"} target="_blank">
        <Image
          src="/logos/SM/github-mark/github-mark/github-mark-white.svg"
          height={30}
          width={30}
          alt="Github Logo"
        />
      </Link>
      <Link href={"https://twitter.com/AudreyG45731656"} target="_blank">
        <Image
          src="/logos/SM/x-logo/logo.svg"
          height={30}
          width={30}
          alt="Twitter Logo"
        />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/audrey-evergreene/"}
        target="_blank"
      >
        <Image
          // TDL- this image just isn't working. why??
          src="/logos/SM/LinkedIn-Logos/linkedin-svgrepo-com.svg"
          height={30}
          width={30}
          alt="LinkedIn Logo"
        />
      </Link>
    </div>
  );
}
