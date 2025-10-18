'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'


import { IUser } from '@/interfaces'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import MenuItems from './menu-items'
import Image from 'next/image'
import hero from '../../../public/hero.png'



const Header = ({ user }: { user: IUser }) => {

   const [openMenuItems, setOpenMenuItems] = useState(false)
   
   const router = useRouter()

  return (
    <div className="bg-primary p-5 flex justify-between items-center">
      <div className="p-2 text-sm md:text-xl text-white flex items-center">
        ComfyFresh
      </div>

      <div className="flex items-center gap-2 md:gap-5">
        <h1 className="text-sm text-white">{user?.name}</h1>
        
        <Button  onClick={() => setOpenMenuItems(true)}>
          <Menu size={14} className="text-white cursor-pointer" />
        </Button>
      </div>

      {openMenuItems && (
        <MenuItems
          openMenuItems={openMenuItems}
          setOpenMenuItems={setOpenMenuItems}
        />
      )}
    </div>
  )
}

export default Header