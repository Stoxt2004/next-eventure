"use client"
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import { Pricingv2 } from "@/components/pricingv2";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import TypewriterComponent from "typewriter-effect"

export default function Home() {
  return (
    <main>
      <nav className="flex justify-between md:p-4 align-middle items-center p-2">
        <Link href="/">
        <Image src="/logo.png" alt="Logo" width={70} height={20}/>

        </Link>
        <ul className="flex gap-4 items-center text-white">
          <li className="hover:text-violet-400 transition">
            <Link href="/" >
                Home
            </Link>
            </li>
          <li className="hover:text-violet-400 transition">
            <Link href="#features">
                Features
            </Link>
          </li>
          <li className="hover:text-violet-400 transition">
            <Link href="#pricing">
                Pricing
            </Link>
          </li>
        </ul>
        <Link href="/sign-up">
          <SignedOut>
          <Button className=" bg-violet-400 pl-9 pr-9 hover:bg-violet-600">Sign Up</Button>

          </SignedOut>
          <SignedIn>
            <div className="pr-8">
            <UserButton/>
            </div>
          </SignedIn>
        </Link>
      </nav>

        <div className="text-white font-bold pt-16 pb-9 text-center space-y-5 justify-center flex flex-col">
          <div className="text-3xl md:text-5xl lg:text-6xl space-y-5 font-extrabold md:px-2">
              <h1>Bored of the old Events Planner?</h1>
              <div className="flex text-center justify-center gap-4 font-bold flex-col md:flex-row">
                <h4>Join the Beta of </h4>
                <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  <TypewriterComponent
                    options={{
                      strings: "Eventure",
                      autoStart: true,
                      loop: true
                    }}
                  />
                </h4>
              </div>
          </div>

          <div className="text-[18px] lg:text-xl font-light text-zinc-400 p-4 md:p-0">
            <p>Plan your events 10 times faster with our new platform that integrates AI</p>
            <p>and an innovative drag-and-drop system for visualizing seating and event organization.</p>
          </div>
          
          <div>
            <Link href="/sign-up">
                  <Button className="bg-gradient-to-r from-purple-400 to-pink-600 text-md hover:scale-105 transition">
                      Register Now
                  </Button>
            </Link>
          </div>
          <div className="flex justify-center p-4 md:p-4">
            <Image src="/home.png" alt="Eventure Home" width={900} height={20} className="rounded-md"/>
          </div>
        </div>
        <div id="features">
          <Features/>
        </div>
        <div id="pricing">
          <Pricing/>
        </div>
        <div>
          <Faq/>
        </div>
        <div>
          <Footer/>
        </div>
    </main>
  );
}
