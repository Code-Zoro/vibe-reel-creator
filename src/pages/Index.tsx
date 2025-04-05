
import React, { useState } from "react";
import Header from "@/components/Header";
import ContentInput from "@/components/ContentInput";
import ReelResults from "@/components/ReelResults";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const [content, setContent] = useState("");
  const [mood, setMood] = useState("motivational");
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [script, setScript] = useState("");
  const [inputType, setInputType] = useState<"url" | "text">("url");

  const handleGenerate = () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Generate a sample script based on mood
      let generatedScript = "";
      
      switch(mood) {
        case "motivational":
          generatedScript = "Every challenge you face is a stepping stone to greatness. Don't shy away from the struggle - embrace it! Remember, the diamond was once a piece of coal under pressure. Your breakthrough is just around the corner. Keep pushing forward! #motivation #success";
          break;
        case "informative":
          generatedScript = "Did you know that humans make over 35,000 decisions every single day? From what to eat for breakfast to major life choices, our brains are constantly processing options. Research shows that decision fatigue is real - that's why successful people often minimize trivial choices. #learnsomethingnew";
          break;
        case "chill":
          generatedScript = "Take a moment. Breathe in slowly. Feel the tension melt away. Life doesn't have to be a race. Sometimes the most productive thing you can do is rest and recharge. Your mind and body will thank you. #selfcare #mindfulness";
          break;
        case "emotional":
          generatedScript = "We all have those moments when it feels like the world is too heavy. It's okay to not be okay sometimes. Your feelings are valid, your journey is unique, and your story is still being written. Tomorrow brings new possibilities. #mentalhealth";
          break;
        case "funny":
          generatedScript = "Me trying to follow a recipe vs what it actually looks like. Expectation: Gourmet masterpiece. Reality: Is the smoke alarm supposed to be part of the cooking experience? Bon appétit to whatever this is! #cookingfails #nailedIt";
          break;
        default:
          generatedScript = "Your personalized reel script will appear here. It will reflect the content and mood you've selected, crafted to engage your audience effectively.";
      }
      
      setScript(generatedScript);
      setShowResults(true);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen py-8 px-4 max-w-5xl mx-auto">
      <div className="space-y-10">
        <Header />
        
        <ContentInput 
          content={content}
          setContent={setContent}
          mood={mood}
          setMood={setMood}
          onGenerate={handleGenerate}
          isLoading={isLoading}
          inputType={inputType}
          setInputType={setInputType}
        />
        
        {showResults && <Separator className="my-8" />}
        
        <ReelResults 
          script={script}
          isVisible={showResults}
        />
      </div>
    </div>
  );
};

export default Index;
