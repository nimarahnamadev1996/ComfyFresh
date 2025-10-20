import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import hero from '../../public/hero.png';

const SignSheet = dynamic(() => import('@/components/SignSheet'), { ssr: false });

const menuItems = [
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function HomePage() {
  const [openSignInForm, setOpenSignInForm] = useState(false);

  return (
    <div className="lg:px-20 p-5">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-sm text-primary md:text-xl lg:text-2xl">
          <Link href="/"><b>ComfyFresh</b></Link>
        </h1>
        <div className="flex gap-2 items-center md:gap-5">
          {menuItems.map((item, idx) => (
            <Link key={idx} href={item.path} className="text-sm text-gray-600 md:text-md lg:text-xl">
              {item.name}
            </Link>
          ))}
          <Button size="sm" onClick={() => setOpenSignInForm(true)}>SignIn</Button>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5 min-h-[80vh] items-center">
        <div className="col-span-1">
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-primary">
            Comfy<b className="text-orange-600">Fresh</b>
          </h1>
          <p className="text-gray-600 text-sm font-semibold mt-1">
            ComfyFresh is a platform that connects farmers to buyers and provides a platform
            for farmers to sell their produce directly to consumers. Here you can find fresh
            farm produce at affordable prices.
          </p>
        </div>
        <div className="col-span-1 flex justify-center lg:justify-end">
          <Image src={hero} alt="ComfyFresh" className="w-auto h-80 object-contain" />
        </div>
      </div>

      <SignSheet open={openSignInForm} onOpenChange={setOpenSignInForm} />
    </div>
  );
}
