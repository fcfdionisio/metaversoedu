import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Trophy, Star, MapPin, Zap } from "lucide-react";

const GameMap = () => {
  const navigate = useNavigate();

  const levels = [
    { id: 1, name: "Fundamentos", completed: true, stars: 3, locked: false },
    { id: 2, name: "Intermediário", completed: true, stars: 2, locked: false },
    { id: 3, name: "Avançado", completed: false, stars: 0, locked: false },
    { id: 4, name: "Expert", completed: false, stars: 0, locked: true },
    { id: 5, name: "Mestre", completed: false, stars: 0, locked: true },
  ];

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="w-full max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao teste
          </Button>
          
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-metaverso-purple via-metaverso-blue to-metaverso-pink bg-clip-text text-transparent">
              Mapa Gamificado
            </h1>
            <p className="text-muted-foreground mt-2">Sua jornada de aprendizagem personalizada</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-metaverso-purple">
              <Trophy className="w-5 h-5" />
              <span className="font-semibold">Nível 3</span>
            </div>
            <div className="flex items-center gap-2 text-metaverso-blue">
              <Zap className="w-5 h-5" />
              <span className="font-semibold">850 XP</span>
            </div>
          </div>
        </div>

        {/* Learning Path */}
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-metaverso-purple to-metaverso-blue opacity-30"></div>
          
          <div className="space-y-12">
            {levels.map((level, index) => (
              <div key={level.id} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="flex-1">
                  <Card className={`
                    p-6 transition-all duration-300 hover:scale-105 cursor-pointer
                    ${level.completed 
                      ? 'bg-gradient-to-br from-metaverso-purple/10 to-metaverso-blue/10 border-metaverso-purple/50' 
                      : level.locked 
                        ? 'opacity-50 cursor-not-allowed' 
                        : 'hover:shadow-[var(--glow-purple)]'
                    }
                  `}>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {level.name}
                        </h3>
                        <div className="flex items-center gap-2">
                          {level.completed && (
                            <div className="flex items-center gap-1">
                              {[...Array(3)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`w-4 h-4 ${
                                    i < level.stars 
                                      ? 'text-yellow-400 fill-yellow-400' 
                                      : 'text-gray-300'
                                  }`} 
                                />
                              ))}
                            </div>
                          )}
                          {level.locked && (
                            <span className="text-sm text-muted-foreground">Bloqueado</span>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-metaverso-purple to-metaverso-blue">
                        <MapPin className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </Card>
                </div>
                
                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mt-12">
          <Button variant="hero" size="lg">
            Continuar Aprendendo
          </Button>
          <Button variant="outline" size="lg">
            Ver Conquistas
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GameMap;