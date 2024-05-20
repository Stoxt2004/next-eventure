import { BrainIcon, CalendarIcon, MailIcon, User2Icon, Users2 } from "lucide-react";
import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "../ui/card";



const Features = () => {
  return (
    <section className="pb-8 pt-0 dark:bg-dark lg:pb-[70px] lg:pt-[40px] w-full">
      <div className="container text-white w-[100%] md:w-[80%]">
        <SectionTitle
          subtitle="Features"
          title="Main Features Of Evius"
          paragraph="Evius is designed to streamline every aspect of event planning and management."
        />


        <div className=" mt-4 flex flex-wrap lg:mt-8 ">
        <div className="w-full px-4 md:w-[48%] lg:w-[23%] bg-violet-200/50 mx-1 rounded-md mb-6 md:mb-0 md:mt-3">
      <div className="wow fadeInUp group mb-12" data-wow-delay=".15s">
        <div className="relative z-10 mb-2 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary">
          <span className="absolute left-0 top-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"></span>
          <CalendarIcon/>
        </div>
        <h3 className="mb-3 text-xl font-bold text-dark dark:text-white">
          Event Creation & Management
        </h3>
        <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-11">
        Easily plan and organize every detail of your events, from start to finish.
        </p>
      </div>
    </div>
    <div className="w-full px-4 md:w-[48%] lg:w-[23%] bg-violet-200/50 mx-1 rounded-md mb-6 md:mb-0 md:mt-3">
      <div className="wow fadeInUp group mb-12" data-wow-delay=".15s">
        <div className="relative z-10 mb-2 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary">
          <span className="absolute left-0 top-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"></span>
          <Users2/>
        </div>
        <h3 className="mb-3 text-xl font-bold text-dark dark:text-white">
        Guest List Management
        </h3>
        <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-11">
        Keep track of your attendees, send invites, and manage RSVPs effortlessly.
        </p>
      </div>
    </div>
    <div className="w-full px-4 md:w-[48%] lg:w-[23%] bg-violet-200/50 mx-1 rounded-md mb-6 md:mb-0 md:mt-3">
      <div className="wow fadeInUp group mb-12" data-wow-delay=".15s">
        <div className="relative z-10 mb-2 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary">
          <span className="absolute left-0 top-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"></span>
          <MailIcon/>
        </div>
        <h3 className="mb-3 text-xl font-bold text-dark dark:text-white">
        Basic Email Notifications
        </h3>
        <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-11">
        Send timely updates and reminders to your guests to keep them informed.
        </p>
      </div>
    </div>
    <div className="w-full px-4 md:w-[48%] lg:w-[23%] bg-violet-200/50 mx-1 rounded-md mb-6 md:mb-0 md:mt-3">
      <div className="wow fadeInUp group mb-12" data-wow-delay=".15s">
        <div className="relative z-10 mb-2 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary">
          <span className="absolute left-0 top-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"></span>
          <BrainIcon/>
        </div>
        <h3 className="mb-3 text-xl font-bold text-dark dark:text-white">
        AI Integration
        </h3>
        <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-11">
        Leverage artificial intelligence to get smart recommendations for improving your event planning and management.
        </p>
      </div>
    </div>
        </div>
        <div className="text-4xl font-bold pt-10 md:pt-16">
          <h4 className="mb-4 text-3xl font-bold sm:text-4xl md:text-[40px] md:leading-[1.2]">Special Feature: <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Drag-and-Drop</span> Event Setup</h4>
          <p className="pt-2 text-lg md:text-lg font-light text-zinc-400 ">The Drag-and-Drop Event Setup feature is designed to provide a seamless and intuitive way to plan and organize your event layout. Here’s what you can do with this powerful tool:</p>
          <div className="flex flex-col-reverse lg:flex-row gap-4 mt-3 p-6 rounded-lg">
            <div className="w-full flex justify-start">
            <Carousel className="w-full max-w-md">
              <CarouselContent className="">
                  <CarouselItem>
                    <div className="p-1">
                      <Card className=" bg-violet-200/50 border-none">
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-4xl font-semibold text-white">
                          <h4 className="text-[20px] ">Visual Event Layout</h4>
              <p className="text-[16px] font-normal">Effortlessly arrange and visually map out seating, stage, microphones, and other necessary equipment for any event, ensuring optimal organization and smooth execution.</p>
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="p-1">
                    <Card className=" bg-violet-200/50 border-none">
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-4xl font-semibold text-white">
                             <h4 className="text-[20px]">Customizable Layouts</h4>
                             <p className="text-[16px] font-normal">Save and easily reuse event layouts for future occasions, simplifying the planning process and ensuring consistency and efficiency across multiple events.</p>
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="p-1">
                    <Card className=" bg-violet-200/50 border-none">
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-4xl font-semibold text-white">
                          <h4 className="text-[20px]">Real-time Collaboration</h4>
              <p className="text-[16px] font-normal">Collaborate seamlessly with team members on the layout in real-time, allowing for instant feedback, updates, and adjustments to ensure the final setup meets everyone's needs and expectations.</p>
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="p-1">
                    <Card className=" bg-violet-200/50 border-none">
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-4xl font-semibold text-white">
                          <h4 className="text-[20px]">Inventory Management</h4>
              <p className="text-[16px] font-normal">Track and efficiently manage all event equipment and resources, ensuring everything is accounted for and optimally utilized, reducing the risk of last-minute issues and enhancing overall event coordination.</p>
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="p-1">
                    <Card className=" bg-violet-200/50 border-none">
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-4xl font-semibold text-white">
                          <h4 className="text-[20px]">Interactive Previews</h4>
              <p className="text-[16px] font-normal">Generate detailed and interactive previews to share with clients, allowing them to visualize the event setup, provide feedback, and make informed decisions, ultimately enhancing client satisfaction and engagement.</p>
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="bg-violet-200/50 border-none"/>
              <CarouselNext className="bg-violet-200/50 border-none"/>
            </Carousel>
            </div>
          
           
          <div className="flex justify-center p-4 md:p-4 md:w-[500px] w-[260px]">
            <img src="/drag.png" alt="Logo" className=" object-contain"/>
          </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Features;
