import Image from 'next/image';
import { Inter } from '@next/font/google';
import logo from 'public/assets/logo.svg';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl justify-center items-center px-4 sm:px-6 md:max-w-5xl mt-28 ">
      <Image src={logo} alt="logo" />
      <h1 className="font-black text-8xl "> hello world!</h1>
    </main>
  );
}
