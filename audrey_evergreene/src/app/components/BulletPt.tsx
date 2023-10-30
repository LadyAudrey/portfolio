import Image from "next/image";

export default function BulletPt() {
  return (
    <Image
      src="/bullet.svg"
      width={30}
      height={30}
      alt="List Marker"
      className="bulletPt"
    />
  );
}
