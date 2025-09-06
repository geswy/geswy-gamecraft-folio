import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Play, Users, Calendar } from 'lucide-react';
import ScrollAnimatedSection from '@/components/ScrollAnimatedSection';

const Streams = () => {
  return (
    <div className="min-h-screen bg-background pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimatedSection>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Gaming Streams
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Watch live gameplay and learn about gaming economies in real-time
            </p>
            <Badge variant="outline" className="border-primary/50 text-primary animate-glow">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
              Coming Soon
            </Badge>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection delay={300}>
          <Card className="game-card text-center">
            <CardContent className="p-12">
              <Play className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-2xl font-bold mb-4">Live Streaming Platform</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Get ready for exclusive gaming content, live economy breakdowns, and interactive sessions 
                where we explore the fascinating world of in-game currencies together.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center gap-2 justify-center">
                  <Users className="h-5 w-5 text-primary" />
                  <span>Interactive Chat</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>Scheduled Events</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <Play className="h-5 w-5 text-primary" />
                  <span>Live Gameplay</span>
                </div>
              </div>
              <Button className="bg-gradient-primary hover:shadow-glow">
                Notify Me When Live
              </Button>
            </CardContent>
          </Card>
        </ScrollAnimatedSection>
      </div>
    </div>
  );
};

export default Streams;