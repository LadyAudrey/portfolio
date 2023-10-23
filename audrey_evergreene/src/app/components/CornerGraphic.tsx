import Image from "next/image";

export default function CornerGraphic() {
  return (
    <div>
      <Image
        src="/cornerGraphic/cornerGraphic.svg"
        height={700}
        width={700}
        alt="lower left graphic"
      />
    </div>
  );
}
