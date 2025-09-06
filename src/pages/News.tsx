import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User } from 'lucide-react';
import ScrollAnimatedSection from '@/components/ScrollAnimatedSection';

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "New Gaming Economy Analysis: FIFA 24 Ultimate Team",
      excerpt: "Deep dive into the latest changes in FIFA 24's Ultimate Team economy and how it affects player trading.",
      date: "2024-01-15",
      author: "Geswy Gaming",
      category: "Analysis",
      readTime: "5 min"
    },
    {
      id: 2,
      title: "Fortnite Chapter 5: V-Bucks Strategy Guide", 
      excerpt: "Everything you need to know about optimizing your V-Bucks spending in the new chapter.",
      date: "2024-01-10",
      author: "Geswy Gaming",
      category: "Guide",
      readTime: "8 min"
    },
    {
      id: 3,
      title: "COD Warzone: Season 1 Battle Pass Review",
      excerpt: "Is the new Warzone battle pass worth your COD Points? Our comprehensive breakdown.",
      date: "2024-01-05",
      author: "Geswy Gaming", 
      category: "Review",
      readTime: "6 min"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-24 px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollAnimatedSection>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Gaming News & Insights
            </h1>
            <p className="text-xl text-muted-foreground">
              Stay updated with the latest in gaming economies and industry trends
            </p>
          </div>
        </ScrollAnimatedSection>

        <div className="space-y-8">
          {newsItems.map((item, index) => (
            <ScrollAnimatedSection key={item.id} delay={index * 200}>
              <Card className="game-card cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Badge variant="outline" className="mb-3 border-primary/50 text-primary">
                        {item.category}
                      </Badge>
                      <CardTitle className="text-xl mb-3 hover:text-primary transition-colors">
                        {item.title}
                      </CardTitle>
                      <p className="text-muted-foreground">
                        {item.excerpt}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {new Date(item.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {item.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {item.readTime}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;