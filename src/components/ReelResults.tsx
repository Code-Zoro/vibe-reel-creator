
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Share2 } from "lucide-react";
import { toast } from 'sonner';
import { cn } from "@/lib/utils";

interface ReelResultsProps {
  script: string;
  audioSrc?: string;
  videoSrc?: string;
  isVisible: boolean;
}

const ReelResults: React.FC<ReelResultsProps> = ({
  script,
  audioSrc,
  videoSrc,
  isVisible
}) => {
  if (!isVisible) return null;

  const handleDownload = () => {
    toast.success('Download started!', {
      description: 'Your reel is being prepared for download.',
    });
  };

  const handleShare = () => {
    toast.success('Ready to share!', {
      description: 'Sharing options available in the next release.',
    });
  };

  return (
    <div className={cn("space-y-6 animate-fade-in", isVisible ? "block" : "hidden")}>
      <Card className="glass-card rounded-xl overflow-hidden">
        <Tabs defaultValue="script" className="w-full">
          <div className="border-b px-6 pt-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="script">Script</TabsTrigger>
              <TabsTrigger value="audio">Audio</TabsTrigger>
              <TabsTrigger value="video">Video Preview</TabsTrigger>
            </TabsList>
          </div>
          
          <div className="p-6">
            <TabsContent value="script" className="mt-0">
              <div className="rounded-lg bg-accent p-4 min-h-[200px] max-h-[400px] overflow-y-auto">
                <p className="whitespace-pre-line">{script || "Your script will appear here..."}</p>
              </div>
            </TabsContent>
            
            <TabsContent value="audio" className="mt-0">
              <div className="rounded-lg bg-accent p-4 min-h-[200px] flex items-center justify-center">
                {audioSrc ? (
                  <audio controls className="w-full max-w-md">
                    <source src={audioSrc} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                ) : (
                  <p className="text-muted-foreground">Audio will be generated in a future release</p>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="video" className="mt-0">
              <div className="rounded-lg bg-accent p-4 min-h-[300px] flex items-center justify-center">
                {videoSrc ? (
                  <video controls className="w-full max-w-2xl rounded-lg">
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className="text-center space-y-2">
                    <p className="text-muted-foreground">Video preview will be generated in a future release</p>
                    <div className="w-full max-w-md h-48 mx-auto bg-secondary/50 rounded-lg flex items-center justify-center">
                      <span className="text-muted-foreground">Preview placeholder</span>
                    </div>
                  </div>
                )}
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </Card>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          onClick={handleDownload}
          className="flex-1 gap-2"
          variant="outline"
          size="lg"
        >
          <Download className="h-5 w-5" />
          Download Reel
        </Button>
        <Button 
          onClick={handleShare}
          className="flex-1 gap-2"
          size="lg"
        >
          <Share2 className="h-5 w-5" />
          Share Reel
        </Button>
      </div>
    </div>
  );
};

export default ReelResults;
