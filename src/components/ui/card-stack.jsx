"use client";;
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { contactInfo } from "@/constants/footer_data";

let interval;

export const CardStack = ({
  items,
  offset,
  scaleFactor
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState(socialData);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()); // move the last element to the front
        return newArray;
      });
    }, 3000);
  };

  return (
    <div className="relative h-72 w-72 md:h-56 sm:w-96">
      {cards.map((card, index) => {
        return (
          (<motion.div
            key={card.heading}
            className={`absolute dark:bg-black bg-white h-72 w-72 md:h-56 sm:w-96 rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1]  shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between ${card.gradiantClass}`}
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}>
            <div className="flex flex-col gap-2">
              <div className="font-medium text-xl text-green-700 dark:text-neutral-200">
                {card.heading}
              </div>
              <div className="font-normal text-lg text-neutral-700 dark:text-neutral-200">
                {card.description}
              </div>

            </div>
            <div>
              <Link href={card.link} target="_blank" className="bg-black/20 border-2 border-black no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 inline-block mt-2">
                <span className="absolute inset-0 overflow-hidden rounded-full">
                  <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </span>
                <div className="relative flex space-x-2 items-center z-10 rounded-full  py-0.5 px-4 ring-1 ring-white/10 ">
                  <span>
                    Visit
                  </span>
                  <svg
                    fill="none"
                    height="16"
                    viewBox="0 0 24 24"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.75 8.75L14.25 12L10.75 15.25"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
              </Link>
            </div>
          </motion.div>)
        );
      })}
    </div>
  )
};

const socialData = [
  {
      containerClass: "col-span-1 lg:col-span-2 h-full bg-pink-600 dark:bg-pink-800 min-h-[500px] lg:min-h-[300px]",
      heading: "Follow Khuraak on Instagram",
      description: "Stay updated with our latest healthy recipes and vibrant food photography. Join our community of food lovers!",
      imageSrc: "/images/social/instagram_light.jpg",
      imageAlt: "Instagram preview",
      imageClassName: "absolute lg:-right-[22%] top-10 object-contain rounded-2xl",
      gradiantClass: "bg-gradient-to-br from-orange-200 to-pink-300 dark:from-orange-600 dark:to-pink-800",
      link: contactInfo.social.instagram,
  },
  {
      containerClass: "col-span-1 bg-teal-700 dark:bg-teal-900 min-h-[300px] xl:min-h-[300px]",
      heading: "Connect with Khuraak on LinkedIn",
      description: "Discover how Khuraak is revolutionizing healthy eating. Learn about our mission, vision, and growth opportunities.",
      imageSrc: "",
      imageAlt: "LinkedIn preview",
      imageClassName: "absolute -right-6 lg:-right-[15%] -bottom-10 object-contain rounded-xl",
      gradiantClass: "bg-gradient-to-br from-teal-200 to-blue-300 dark:from-teal-600 dark:to-blue-800",
      link: contactInfo.social.linkedin,
  },
  {
      containerClass: "col-span-1 bg-rose-700 dark:bg-rose-900 min-h-[300px]",
      heading: "Explore Khuraak on Pinterest",
      description: "Discover a treasure trove of beautifully curated healthy recipes and meal-planning ideas to inspire your cooking journey.",
      imageSrc: "",
      imageAlt: "Pinterest preview",
      imageClassName: "absolute -right-8 lg:-right-[20%] -bottom-10 object-contain rounded-xl",
      gradiantClass: "bg-gradient-to-br from-rose-300 to-red-400 dark:from-rose-700 dark:to-red-800",
      link: contactInfo.social.pinterest,
  },
  {
      containerClass: "col-span-1 bg-blue-700 dark:bg-blue-900 lg:col-span-2 min-h-[300px]",
      heading: "Like Khuraak on Facebook",
      description: "Connect with our vibrant community, share your favorite recipes, and join discussions about mindful eating.",
      imageSrc: "/images/social/facebook.jpg",
      imageAlt: "Facebook preview",
      imageClassName: "absolute -right-6 md:-right-[20%] lg:-right-[12%] top-10 object-contain rounded-lg",
      gradiantClass: "bg-gradient-to-br from-cyan-200 to-sky-300 dark:from-cyan-600 dark:to-sky-800",
      link: contactInfo.social.facebook,
  },
  {
      containerClass: "col-span-1 lg:col-span-2 bg-red-700 dark:bg-red-900 min-h-[500px] lg:min-h-[300px]",
      heading: "Subscribe to Khuraak on YouTube",
      description: "Watch step-by-step tutorials for delicious healthy meals and tips for maintaining a balanced diet.",
      imageSrc: "/images/social/youtube_light.jpg",
      imageAlt: "YouTube preview",
      imageClassName: "absolute -right-4 lg:-right-[12%] filter drop-shadow-xl top-10 object-contain rounded-2xl",
      gradiantClass: "bg-gradient-to-br from-yellow-200 to-red-300 dark:from-yellow-600 dark:to-red-800",
      link: contactInfo.social.youtube,
  },
  {
      containerClass: "col-span-1 min-h-[300px] bg-purple-500 dark:bg-purple-900",
      heading: "Follow Khuraak on X (Twitter)",
      description: "Get quick updates, healthy tips, and join trending conversations about clean eating and a balanced lifestyle.",
      imageSrc: "",
      imageAlt: "X preview",
      imageClassName: "absolute -right-10 filter contrast-125 -bottom-10 object-contain rounded-xl",
      gradiantClass: "bg-gradient-to-br from-purple-200 to-indigo-300 dark:from-purple-700 dark:to-indigo-800",
      link: contactInfo.social.twitter,
  },
];