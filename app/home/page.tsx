"use client";
import React, { useEffect, useRef, useState } from "react";
import { Kotta_One } from "next/font/google";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

const kottaFont = Kotta_One({
  subsets: ["latin"],
  weight: "400",
});

const Home = () => {
  const textAreaRef = useRef(null);
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [image, setImage] = useState("")

  const handleGenerate = async () => {
      setIsLoading(true);
      const response = await fetch("/api/generate-image", {
        method: "POST",
        body: JSON.stringify({
          prompt,
        }),
      });

      const data = await response.json();
      console.log(data);
      setImage(data.data[0].url);
      setIsLoading(false);
    
  };





  return (
    <div className="flex items-center justify-center w-full h-screen flex-col gap-4 px-4 bg-foreground">
      <p className={`${kottaFont.className} text-3xl text-muted/80`}>
        What you imagine to create?
      </p>
      <motion.div className={cn("w-3/5 h-40 relative bg-neutral-900 rounded-xl overflow-hidden",
        image && "h-fit"
      )}>
        <div className="relative">
          <Textarea
            ref={textAreaRef}
            onChange={(e) => setPrompt(e.target.value)}
            className="h-40 w-full focus:outline-none text-[16px] bg-neutral-800 border-white/10 border text-background/80 align-text-top resize-none rounded-xl"
            placeholder="Type your message..."
          />
          <Button
            onClick={handleGenerate}
            className="absolute bottom-4 right-4"
            variant="outline"
            disabled={isLoading || !prompt}
          >
            Generate
          </Button>
        </div>
       <div className="flex justify-around items-center w-full my-auto h-[50%] gap-4 p-4 mt-4">
       {image && <img src={image} alt="image" className="w-full h-full" />}
       {!image && <Skeleton className="w-full h-full bg-neutral-900" />}

        </div>
      </motion.div>
    </div>
  );
};

export default Home;
