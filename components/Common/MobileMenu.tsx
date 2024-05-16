

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { Button } from "../ui/button"
  

const MobileMenu = () => {
    return(
        <div className="md:hidden mt-2">
            <Sheet>
  <SheetTrigger>
    <MenuIcon className="text-white" size={30}/>
  </SheetTrigger>
  <SheetContent className="">
    
      <SheetTitle className="flex justify-between items-center">
      <Link href="/" className="flex items-center gap-3">
        <Image src="/logo.png" alt="Logo" width={30} height={20}/>
        <h3 className="text-3xl">Eventure</h3>
        </Link>
        <SignedIn>
            <div className="pr-8 mt-3">
            <UserButton/>
            </div>
          </SignedIn>
      </SheetTitle>
    
      <div className="grid gap-4 py-4 pl-4 flex-col justify-between">
      <ul className="flex-col items-center text-black md:hidden md:flex">
          <li className="hover:text-violet-400 transition mb-6">
            <Link href="/" >
                Home
            </Link>
            </li>
          <li className="hover:text-violet-400 transition mb-6">
            <Link href="#features">
                Features
            </Link>
          </li>
          <li className="hover:text-violet-400 transition mb-6">
            <Link href="#pricing">
                Pricing
            </Link>
          </li>
        </ul>
        <SignedOut>
        <Link href="/sign-up">
                  <Button className="bg-gradient-to-r from-purple-400 to-pink-600 text-md hover:scale-105 transition">
                      Register Now
                  </Button>
            </Link>
            </SignedOut>
            </div>
  </SheetContent>
</Sheet>
        </div>

    )
}

export default MobileMenu