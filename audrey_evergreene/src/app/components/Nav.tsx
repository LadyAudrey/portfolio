import Image from "next/image";

export default function Nav() {
  return (
    <div >
      <Image
        src="/logos/github-mark/github-mark/github-mark-white.svg"
        height={50}
        width={50}
        alt="Github Logo"
      />
      {/* <Image src="" height={50} width={50} alt="Twitter Logo" />
      <Image src="" height={50} width={50} alt="LinkedIn Logo" /> */}
    </div>
  );
}
