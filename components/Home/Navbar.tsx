import Image from "next/image";
import Link from "next/link";
import NavbarButtons from "./NavbarButtons";
import { auth } from "@/auth";

const Navbar = async ({ lang }: { lang: "en" | "ar" }) => {
  const session = await auth();
  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans  ">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={144} height={30} />
        </Link>
        <NavbarButtons session={session} lang={lang as any} />
        {/* Pass session to client component */}
      </nav>
    </header>
  );
};

export default Navbar;
