import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <div className="container mx-auto">
      <div
        className={`flex h-14 w-full items-center justify-between  bg-gray-800 px-5
      `}
      >
        <div className="space-x-3 text-pink-500">
          <Link href={`/`}>All</Link>
          <Link href={`/markets/amamoma`}>Amamoma</Link>
          <Link href={`/markets/apewosika`}>Apewosika</Link>
          <Link href={`/markets/ayensu`}>Ayensu</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
