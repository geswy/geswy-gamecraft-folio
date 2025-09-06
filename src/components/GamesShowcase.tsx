import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronRight, Coins, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import game backgrounds
import fifaBg from '@/assets/fifa-bg.jpg';
import fortniteBg from '@/assets/fortnite-bg.jpg';
import codBg from '@/assets/cod-bg.jpg';
import rocketLeagueBg from '@/assets/rocket-league-bg.jpg';

const games = [
  {
    id: 'fifa',
    title: 'FIFA 24',
    description: 'Ultimate Team coins, players, and packs ecosystem',
    image: fifaBg,
    coins: ['FUT Coins', 'FIFA Points', 'Player Cards'],
    category: 'Sports'
  },
  {
    id: 'fortnite',
    title: 'Fortnite',
    description: 'V-Bucks, Battle Pass, and cosmetic items marketplace',
    image: fortniteBg,
    coins: ['V-Bucks', 'Battle Stars', 'Cosmetics'],
    category: 'Battle Royale'
  },
  {
    id: 'cod',
    title: 'Call of Duty',
    description: 'COD Points, weapon blueprints, and operator bundles',
    image: codBg,
    coins: ['COD Points', 'Battle Pass Tokens', 'Weapon XP'],
    category: 'FPS'
  },
  {
    id: 'rocket-league',
    title: 'Rocket League',
    description: 'Credits, blueprints, and customization items',
    image: rocketLeagueBg,
    coins: ['Credits', 'Blueprints', 'Tournament Credits'],
    category: 'Sports'
  }
];

const GamesShowcase = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Game Economies Showcase
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore the intricate in-game economies and currency systems of today's most popular games
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {games.map((game) => (
            <Link to={`/game/${game.id}`} key={game.id} className="group">
              <Card className="game-card h-full cursor-pointer">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={game.image} 
                    alt={game.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    {game.category}
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {game.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {game.description}
                  </p>
                  
                  {/* Coin types */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {game.coins.map((coin, index) => (
                      <div 
                        key={index}
                        className="flex items-center gap-1 px-3 py-1 rounded-full bg-secondary/50 text-sm"
                      >
                        <Coins className="h-3 w-3 text-primary" />
                        {coin}
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Explore Economy
                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamesShowcase;