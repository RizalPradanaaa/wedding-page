"use client";

import Desktop from "@/components/Desktop";
import Main from "@/components/Main";
import MainMusic from "@/components/MainMusic";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Volume2, VolumeOff } from "lucide-react";
import { useRef, useState } from "react";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const startMusic = () => {
    if (isLoading || isPlaying) return;

    setIsLoading(true);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play();
        setIsPlaying(true);
        setIsAudioPlaying(true);
      }
      setIsLoading(false);
    }, 1000);
  };

  const toggleAudio = () => {
    if (audioRef.current) {
      if (!audioRef.current.paused) {
        audioRef.current.pause();
        setIsAudioPlaying(false);
      } else {
        audioRef.current.play();
        setIsAudioPlaying(true);
      }
    }
  };

  return (
    <div className="flex justify-center w-full h-screen m-0">
      <div className="hidden lg:block md:w-1/2 lg:w-2/3 relative">
        <Desktop />
      </div>
      <audio ref={audioRef} src="/music/bg-wedding.mp3" loop></audio>

      <div className="w-full md:w-1/2 lg:w-1/3 relative justify-center">
        {isPlaying ? (
          <MainMusic />
        ) : (
          <Main isLoading={isLoading} toggleMusic={startMusic} />
        )}
      </div>

      {isPlaying && (
        <div className="absolute left-4 bottom-4 flex gap-2">
          <Sheet>
            <SheetTrigger>
              <Button className="rounded-full text-white bg-[#997A5E] hover:bg-[#78634C] h-10 w-10 flex items-center justify-center">
                ☰
              </Button>
            </SheetTrigger>
            <SheetContent className="z-50 bg-[#F9F7F4] w-[300px] lg:w-[500px] flex flex-col justify-between">
              <SheetHeader>
                <SheetTitle className="font-newsreader italic justify-end text-right text-[36px] mt-8 font-normal pr-4">
                  #TImetoshaRE
                </SheetTitle>
                <SheetDescription className="uppercase font-newsreader justify-end text-right pr-4 text-[14px] leading-10 mt-4 tracking-widest">
                  <ul>
                    <li>Bride & Groom</li>
                    <hr className="border-b-0 border-slate-700 " />
                    <li>Live Streaming</li>
                    <hr className="border-b-0 border-slate-700 " />
                    <li>Wedding Gift</li>
                    <hr className="border-b-0 border-slate-700 " />
                  </ul>
                </SheetDescription>
              </SheetHeader>
              <p className="text-right pr-4 font-newsreader text-xs">
                Created with Love by Rizalpradana <br />
                2024 Tiffany & Jared. All Rights Reserved
              </p>
            </SheetContent>
          </Sheet>
          <Button
            onClick={toggleAudio}
            className="rounded-full text-white bg-[#997A5E] hover:bg-[#78634C] h-10 w-10 flex items-center justify-center"
          >
            {isAudioPlaying ? <Volume2 /> : <VolumeOff />}
          </Button>
        </div>
      )}
    </div>
  );
}
