import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import LoginPage from "./login/page";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className="flex justify-center items-center mt-96">
        <button className="mr-6 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          <Link href="./login">Click here</Link>
        </button>
      </div>
    </main>
  );
}
