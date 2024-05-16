import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer
      className="wow fadeInUp relative z-10 bg-[#090E34] p-8"
      data-wow-delay=".15s"
    >
      <div className="flex justify-between text-white items-center gap-5 md:gap-0">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={70} height={20}/> 
        </Link>
        <div>
          @2024 Evius. All Rights Reserved. 
        </div>
        <Link href="/sign-up">
        <Button className="bg-gradient-to-r from-purple-400 to-pink-600 text-md hover:scale-105 transition hidden md:block">
                      Join the Waitlist
            </Button>
        </Link>
      </div>
      
    
    </footer>
  );
};

export default Footer;
