import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import ScrollAnimatedSection from '@/components/ScrollAnimatedSection';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "FIFA 24 Ultimate Team Workshop",
      description: "Learn advanced trading strategies and market analysis techniques.",
      date: "2024-02-15",
      time: "7:00 PM EST",
      location: "Online",
      attendees: 150,
      type: "Workshop"
    },
    {
      id: 2,
      title: "Gaming Economy Panel Discussion", 
      description: "Industry experts discuss the future of in-game economies.",
      date: "2024-02-22",
      time: "8:00 PM EST", 
      location: "Online",
      attendees: 300,
      type: "Panel"
    },
    {
      id: 3,
      title: "Fortnite Creative Mode Showcase",
      description: "Showcase of creative builds and V-Bucks optimization tips.",
      date: "2024-03-01",
      time: "6:00 PM EST",
      location: "Online",
      attendees: 200,
      type: "Showcase"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimatedSection>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Gaming Events
            </h1>
            <p className="text-xl text-muted-foreground">
              Join exclusive events, workshops, and community gatherings
            </p>
          </div>
        </ScrollAnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <ScrollAnimatedSection key={event.id} delay={index * 200}>
              <Card className="game-card h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="border-primary/50 text-primary">
                      {event.type}
                    </Badge>
                    <Badge variant="secondary">Upcoming</Badge>
                  </div>
                  <CardTitle className="text-xl mb-3">
                    {event.title}
                  </CardTitle>
                  <p className="text-muted-foreground">
                    {event.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-primary" />
                      {new Date(event.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-primary" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-primary" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4 text-primary" />
                      {event.attendees} registered
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-primary hover:shadow-glow">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            </ScrollAnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;