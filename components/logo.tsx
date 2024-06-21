import Image from "next/image";
import Link from "next/link";
import icon from '@/assets/images/icon.webp';


export function NamedLogoWithLink() {
  return (
    <Link href="/" className="flex flex-row items-center gap-3">
      {/* <Logo height="24" width="24" /> */}
      <Image src={icon} alt="logo" width={24} height={24} />
      <h3 className="font-semibold text-lg">Talk to a Local</h3>
    </Link>
  );
}
