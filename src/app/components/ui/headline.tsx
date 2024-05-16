"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";
import { BorderButton } from "./HoverButton";

export function Headline() {
  return (
    <div>
      <h1 className="relative z-10 text-5xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
        Swipe Right on Your <br />
        Next Great Read
      </h1>
      <p></p>
      <TextGenerateEffect
        words={
          "Tired of endless scrolling? Let us find your perfect book match. It's like dating, but for books – no ghosting, just great stories."
        }
        className="text-neutral-500 max-w-lg mx-auto my-2 sm:text-md text-lg text-center relative z-10"
      />
      <p></p>
      <div className="justify-center text-center my-8 flex flex-row space-x-4">
        <BorderButton text="Find My Next Read" />
        <BorderButton text="Learn More" />
      </div>
    </div>
  );
}

const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.1),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="text-neutral-500 opacity-0"
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("", className)}>
      <div className="mt-4">
        <div className=" dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
