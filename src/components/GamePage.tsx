import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Coins, TrendingUp, Users, Star } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

// Import game backgrounds
import fifaBg from '@/assets/fifa-bg.jpg';
import fortniteBg from '@/assets/fortnite-bg.jpg';
import codBg from '@/assets/cod-bg.jpg';
import rocketLeagueBg from '@/assets/rocket-league-bg.jpg';

const gameData = {
  fifa: {
    title: 'FIFA 24',
    subtitle: 'Ultimate Team Economy',
    image: fifaBg,
    description: 'FIFA Ultimate Team features one of the most complex in-game economies in sports gaming, with multiple currency types and marketplace dynamics.',
    coins: [
      { name: 'FUT Coins', icon: '⚽', price: '$2.99', description: 'Primary currency for player transfers and packs' },
      { name: 'FIFA Points', icon: '💎', price: '$9.99', description: 'Premium currency for special packs and content' },
      { name: 'Player Cards', icon: '🃏', price: '$0.99', description: 'Individual player items with varying rarity' }
    ],
    stats: { players: '50M+', transactions: '1B+', revenue: '$1.8B' }
  },
  fortnite: {
    title: 'Fortnite',
    subtitle: 'Battle Royale Marketplace',
    image: fortniteBg,
    description: 'Fortnite revolutionized gaming cosmetics with V-Bucks creating a massive virtual economy centered around skins, emotes, and battle passes.',
    coins: [
      { name: 'V-Bucks', icon: '💜', price: '$7.99', description: 'Universal currency for all cosmetic purchases' },
      { name: 'Battle Stars', icon: '⭐', price: '$4.99', description: 'Battle Pass progression currency' },
      { name: 'Cosmetics', icon: '👕', price: '$12.99', description: 'Skins, emotes, and customization items' }
    ],
    stats: { players: '400M+', transactions: '2.5B+', revenue: '$9.9B' }
  },
  cod: {
    title: 'Call of Duty',
    subtitle: 'Warzone & Multiplayer Economy',
    image: codBg,
    description: 'Call of Duty features COD Points as the backbone of its monetization, powering weapon blueprints, operator skins, and battle pass content.',
    coins: [
      { name: 'COD Points', icon: '🔫', price: '$9.99', description: 'Premium currency for battle pass and bundles' },
      { name: 'Battle Pass Tokens', icon: '🎖️', price: '$4.99', description: 'Tier skip tokens for battle pass progression' },
      { name: 'Weapon XP', icon: '⚡', price: '$2.99', description: 'Experience boosts for weapon leveling' }
    ],
    stats: { players: '100M+', transactions: '800M+', revenue: '$3.2B' }
  },
  'rocket-league': {
    title: 'Rocket League',
    subtitle: 'Car Customization Economy',
    image: rocketLeagueBg,
    description: 'Rocket League transformed from premium to free-to-play with Credits powering an extensive car customization ecosystem.',
    coins: [
      { name: 'Credits', icon: '🚗', price: '$4.99', description: 'Primary currency for trading and item shop' },
      { name: 'Blueprints', icon: '📋', price: '$1.99', description: 'Craftable item schematics' },
      { name: 'Tournament Credits', icon: '🏆', price: '$0.99', description: 'Earned currency from competitive play' }
    ],
    stats: { players: '75M+', transactions: '500M+', revenue: '$500M' }
  }
};

const GamePage = () => {
  const { gameId } = useParams();
  const game = gameId ? gameData[gameId as keyof typeof gameData] : null;

  if (!game) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Game not found</h1>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="relative h-80 overflow-hidden">
        <img 
          src={game.image} 
          alt={game.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        
        <div className="absolute bottom-6 left-6 right-6">
          <Link to="/">
            <Button variant="outline" className="mb-4 border-primary/50 text-primary hover:bg-primary/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Games
            </Button>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{game.title}</h1>
          <p className="text-xl text-primary">{game.subtitle}</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Game Description */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {game.description}
            </p>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="text-2xl font-bold">{game.stats.players}</h3>
              <p className="text-muted-foreground">Active Players</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="text-2xl font-bold">{game.stats.transactions}</h3>
              <p className="text-muted-foreground">Transactions</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Star className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="text-2xl font-bold">{game.stats.revenue}</h3>
              <p className="text-muted-foreground">Annual Revenue</p>
            </CardContent>
          </Card>
        </div>

        {/* Currency System */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Coins className="h-6 w-6 text-primary" />
              In-Game Currency System
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-6">
              {game.coins.map((coin, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="text-3xl">{coin.icon}</div>
                      <div>
                        <h3 className="text-xl font-semibold">{coin.name}</h3>
                        <p className="text-muted-foreground">{coin.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="text-lg px-4 py-2">
                        {coin.price}
                      </Badge>
                    </div>
                  </div>
                  {index < game.coins.length - 1 && <Separator />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GamePage;