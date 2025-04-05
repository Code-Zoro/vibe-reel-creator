
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Link, Edit3 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContentInputProps {
  content: string;
  setContent: (content: string) => void;
  mood: string;
  setMood: (mood: string) => void;
  onGenerate: () => void;
  isLoading: boolean;
  inputType: "url" | "text";
  setInputType: (type: "url" | "text") => void;
}

const ContentInput: React.FC<ContentInputProps> = ({
  content,
  setContent,
  mood,
  setMood,
  onGenerate,
  isLoading,
  inputType,
  setInputType
}) => {
  return (
    <Card className="glass-card rounded-xl p-5">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-medium">Content Source</h2>
          <div className="flex items-center space-x-2 bg-secondary rounded-lg p-1">
            <Button 
              variant={inputType === "url" ? "default" : "ghost"}
              size="sm"
              className="gap-2"
              onClick={() => setInputType("url")}
            >
              <Link className="h-4 w-4" />
              URL
            </Button>
            <Button 
              variant={inputType === "text" ? "default" : "ghost"}
              size="sm"
              className="gap-2"
              onClick={() => setInputType("text")}
            >
              <Edit3 className="h-4 w-4" />
              Text
            </Button>
          </div>
        </div>

        <div className="space-y-3">
          <Textarea
            placeholder={
              inputType === "url"
                ? "Paste blog/article URL here..."
                : "Paste your content here..."
            }
            className="min-h-[120px] input-gradient-border"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <Select value={mood} onValueChange={setMood}>
              <SelectTrigger className="w-full sm:w-[180px] input-gradient-border">
                <SelectValue placeholder="Select mood" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="motivational">Motivational</SelectItem>
                <SelectItem value="informative">Informative</SelectItem>
                <SelectItem value="chill">Chill</SelectItem>
                <SelectItem value="emotional">Emotional</SelectItem>
                <SelectItem value="funny">Funny</SelectItem>
              </SelectContent>
            </Select>

            <Button 
              className={cn(
                "w-full sm:w-auto transition-all font-medium",
                isLoading ? "animate-pulse-slow" : ""
              )}
              size="lg"
              onClick={onGenerate}
              disabled={!content || isLoading}
            >
              {isLoading ? "Creating Your Reel..." : "Generate Reel"}
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ContentInput;
