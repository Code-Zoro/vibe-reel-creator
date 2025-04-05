
import React from "react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn("text-center space-y-2", className)}>
      <h1 className="text-4xl sm:text-5xl font-bold gradient-text">Vibe Reel Creator</h1>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        Transform blog content into engaging social media reels with AI-generated scripts, voiceovers, and video.
      </p>
    </header>
  );
};

export default Header;
