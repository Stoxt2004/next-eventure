"use client";
import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import { Button } from "../ui/button";
import TypewriterComponent from "typewriter-effect";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="relative z-20 overflow-hidden bg-violet-100 pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="Pricing Table"
            title="Our Pricing Plan"
            paragraph="Be among the first to experience the ultimate event creation and management software."
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          


        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div
        className="relative z-10 mb-10 overflow-hidden rounded-xl bg-white px-8 py-10 shadow-[0px_0px_40px_0px_rgba(0,0,0,0.08)] dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-14"
        data-wow-delay=".1s"
      >
        Basic Plan
        <span className="mb-5 block text-xl font-medium text-dark dark:text-white">
          
        </span>
        <h2 className="mb-11 text-4xl font-semibold text-dark dark:text-white xl:text-[42px] xl:leading-[1.21]">
          <span className="text-xl font-medium">$ </span>
          <span className="-ml-1 -tracking-[2px]">
            19
          </span>
          <span className="text-base font-normal text-body-color dark:text-dark-6">
            {" "}
            Per Month
          </span>
        </h2>

        <div className="mb-[50px]">
          <h3 className="mb-5 text-lg font-medium text-dark dark:text-white">
            Features
          </h3>
          <div className="mb-10">
            <ul className=" text-zinc-500 h-40 list-disc">
              <li>Event Creation & Management</li>
              <li>Drag-and-Drop Event Setup</li>
              <li>Guest List Management</li>
              <li>Basic Email Notifications</li>
              <li>Calendar Integration</li>
              <li>Standard Support</li>

            </ul>
          </div>
        </div>
        <div className="w-full">
          <Link href="/sign-up">
                  <Button className="bg-gradient-to-r from-purple-400 to-pink-600 text-md hover:scale-105 transition">
                      Subscribe
                  </Button>
            </Link>
        </div>
      </div>
    </div>


    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div
        className="relative z-10 mb-10 overflow-hidden rounded-xl bg-white px-8 py-10 shadow-[0px_0px_40px_0px_rgba(0,0,0,0.08)] dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-14"
        data-wow-delay=".1s"
      >
        Pro Plan
        <span className="mb-5 block text-xl font-medium text-dark dark:text-white">
          
        </span>
        <h2 className="mb-11 text-4xl font-semibold text-dark dark:text-white xl:text-[42px] xl:leading-[1.21]">
          <span className="text-xl font-medium">$ </span>
          <span className="-ml-1 -tracking-[2px]">
            39
          </span>
          <span className="text-base font-normal text-body-color dark:text-dark-6">
            {" "}
            Per Month
          </span>
        </h2>

        <div className="mb-[50px]">
          <h3 className="mb-5 text-lg font-medium text-dark dark:text-white">
            Features
          </h3>
          <div className="mb-10">
            <ul className=" text-zinc-500 h-40 list-disc">
              <li>All Basic Plan Features</li>
              <li>Advanced Email Notifications & Reminders</li>
              <li>Detailed Analytics & Reports</li>
              <li>Priority Support</li>

            </ul>
          </div>
        </div>
        <div className="w-full">
          <Link href="/sign-up">
                  <Button className="bg-gradient-to-r from-purple-400 to-pink-600 text-md hover:scale-105 transition">
                      Subscribe
                  </Button>
            </Link>
        </div>
      </div>
    </div>

    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div
        className="relative z-10 mb-10 overflow-hidden rounded-xl bg-white px-8 py-10 shadow-[0px_0px_40px_0px_rgba(0,0,0,0.08)] dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-14"
        data-wow-delay=".1s"
      >
        Premium Plan
        <span className="mb-5 block text-xl font-medium text-dark dark:text-white">
          
        </span>
        <h2 className="mb-11 text-4xl font-semibold text-dark dark:text-white xl:text-[42px] xl:leading-[1.21]">
          <span className="text-xl font-medium">$ </span>
          <span className="-ml-1 -tracking-[2px]">
            59
          </span>
          <span className="text-base font-normal text-body-color dark:text-dark-6">
            {" "}
            Per Month
          </span>
        </h2>

        <div className="mb-[50px]">
          <h3 className="mb-5 text-lg font-medium text-dark dark:text-white">
            Features
          </h3>
          <div className="mb-10">
            <ul className=" text-zinc-500 h-40 list-disc">
              <li>All Pro Plan Features</li>
              <li>AI Integration for Event Recommendations</li>
              <li>Social Media Integration & Promotion Tools</li>
              <li>Advanced Security Features</li>
              <li>24/7 Support</li>
            </ul>
          </div>
        </div>
        <div className="w-full">
          <Link href="/sign-up">
                  <Button className="bg-gradient-to-r from-purple-400 to-pink-600 text-md hover:scale-105 transition">
                      Subscribe
                  </Button>
            </Link>
        </div>
      </div>
    </div>
        </div>
          <div className="w-full flex flex-col md:flex-row justify-center">
            <h4 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl space-y-5 font-extrabold  md:flex-row">
              Sign Up Now and Receive 
              <div className=" text-6xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              <TypewriterComponent
                    options={{
                      strings: " 50% Off",
                      autoStart: true,
                      loop: true
                    }}
                  />
                </div>
                at Launch!
                </h4>
          </div>
      </div>
    </section>
  );
};

export default Pricing;
