import Image from "next/image";

export default function page() {
  return (
    <>
      <Image
        src="/AudreyEvergreeneFE9_2023.pdf"
        height={1800}
        width={1200}
        alt="resume pdf"
        className="w-full h-full"
      />
    </>
  );
}
