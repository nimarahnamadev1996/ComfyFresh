'use client'

import React, { useState } from 'react'
import Link from 'next/link';



import { Button } from '@/components/ui/button';
import hero from '../../public/hero.png'
import Image from 'next/image';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { SignIn, SignUp } from '@clerk/nextjs';
import { useSearchParams } from 'next/navigation';



 const menuItems = [
    
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];


const HomePage = () => {

  const [openSignInForm, setOpenSignInForm] = useState(false)

  const searchParams = useSearchParams()
  const formType = searchParams.get('formType')

  
  return (
    <div className="lg:px-20 p-5">


      <div className='flex justify-between items-center'>
         <h1 className="font-bold text-sm text-primary md:text-xl lg:text-2xl">
           <Link href='/'>
             <b>ComfyFresh</b>
           </Link>
        </h1>

        <div className='flex gap-2 items-center md:gap-5'>
          {
           menuItems.map((item,index) => (
             <div key={index} className="text-sm text-gray-600 md:text-md lg:text-xl">
              {item.name}
            </div>
           )) 
          }

          <Button size='sm' onClick={() => setOpenSignInForm(true)}>SignIn</Button>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5 min-h-[80vh] items-center">
        <div className="col-span-1">
          <div>
            <h1 className=" text-xl md:text-2xl lg:text-4xl font-bold text-primary">
               Comfy<b className="text-orange-600">Fresh</b>
            </h1>
            <p className="text-gray-600 text-sm font-semibold mt-1">
              ComfyFresh is platform that connects farmers to buyers
              and provides a platform for farmers to sell their produce directly
              to consumers. Here you can find fresh farm produce at affordable
              prices.
            </p>
          </div>
        </div>
        <div className="col-span-1 flex justify-center lg:justify-end">
         <Image
            src={hero}
            alt='ComfyFresh'
            className="w-auto h-80 object-contain"/>
        </div>
      </div>

    <Sheet open={openSignInForm} onOpenChange={setOpenSignInForm}>

        <SheetContent className="min-w-[500px] flex justify-center items-center">
          <SheetHeader>
            <SheetTitle></SheetTitle>
          </SheetHeader>

          <div>
            {formType === "signup" ? (
              <SignUp routing="hash" signInUrl="/?formType=signin" />
            ) : (
              <SignIn routing="hash" signUpUrl="/?formType=signup" />
            )}
          </div>
        </SheetContent>
      </Sheet>

    </div>
  )
}

export default HomePage