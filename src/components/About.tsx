import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Video, Palette, Code, Trophy, Calendar, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: Video, title: 'Video Editing', experience: '3+ Years', tools: ['Adobe Premiere', 'After Effects', 'DaVinci Resolve'] },
    { icon: Palette, title: 'Creative Design', experience: '3+ Years', tools: ['Photoshop', 'Illustrator', 'Figma'] },
    { icon: Code, title: 'Web Design', experience: '2+ Years', tools: ['React', 'Tailwind', 'TypeScript'] }
  ];

  const achievements = [
    { icon: Trophy, title: '50+', subtitle: 'Projects Completed' },
    { icon: Zap, title: '100K+', subtitle: 'Video Views Generated' },
    { icon: Calendar, title: '3+', subtitle: 'Years Experience' }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About Geswy
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate creator with 3+ years of experience in video editing, creative design, 
            and gaming content creation. Bringing creativity and technical expertise together.
          </p>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center group hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <achievement.icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-3xl font-bold text-primary mb-2">{achievement.title}</h3>
                <p className="text-muted-foreground">{achievement.subtitle}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {skills.map((skill, index) => (
            <Card key={index} className="group hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <skill.icon className="h-12 w-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-2">{skill.title}</h3>
                <p className="text-primary font-semibold mb-4">{skill.experience}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.tools.map((tool, toolIndex) => (
                    <Badge key={toolIndex} variant="outline" className="border-primary/50 text-primary">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Story */}
        <Card className="bg-gradient-card">
          <CardContent className="p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-6 text-center">My Journey</h3>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Started as a gaming enthusiast who wanted to share epic moments and creative content. 
                What began as simple screen recordings evolved into a passion for professional video editing 
                and creative design.
              </p>
              <p>
                Over 3+ years, I've honed my skills in Adobe Creative Suite, developed an eye for 
                compelling visual storytelling, and created content that has generated over 100K views 
                across various platforms.
              </p>
              <p className="text-primary font-semibold">
                Today, I combine technical expertise with creative vision to help brands, content creators, 
                and gaming companies tell their stories through stunning visuals and engaging content.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;