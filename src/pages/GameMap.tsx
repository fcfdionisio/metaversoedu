import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Lock, Star, Trophy, Zap, Play } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import gameMapBg from "@/assets/game-map-background.jpg";

const GameMap = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const phases = [
    {
      id: 1,
      name: "Fundamentos",
      xp: 50,
      completed: false,
      locked: false,
      description: "Aprenda os conceitos básicos"
    },
    {
      id: 2,
      name: "Desafios",
      xp: 100,
      completed: false,
      locked: true,
      description: "Teste seus conhecimentos"
    },
    {
      id: 3,
      name: "Simulação",
      xp: 200,
      completed: false,
      locked: true,
      description: "Aplique na prática"
    }
  ];

  const handlePhaseClick = (phase: typeof phases[0]) => {
    if (phase.locked) {
      toast({
        title: "Fase Bloqueada",
        description: "Conclua a fase anterior para desbloquear esta etapa",
        variant: "destructive"
      });
      return;
    }

    if (phase.id === 1) {
      navigate("/simulacao-pratica");
    } else {
      toast({
        title: "Em Desenvolvimento",
        description: "Esta fase estará disponível em breve!",
      });
    }
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${gameMapBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      
      <div className="relative z-10 p-4">
        <div className="w-full max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Button 
              variant="ghost" 
              onClick={() => navigate("/")}
              className="flex items-center gap-2 hover:bg-white/10"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao Teste
            </Button>
            
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-metaverso-purple via-metaverso-blue to-metaverso-pink bg-clip-text text-transparent mb-2">
                Mapa Gamificado
              </h1>
              <p className="text-lg text-foreground font-semibold">
                Progresso: 0/350 XP | Medalhas: 0/3
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-metaverso-purple">
                <Trophy className="w-5 h-5" />
                <span className="font-semibold">Nível 1</span>
              </div>
            </div>
          </div>

          {/* Game Map */}
          <div className="space-y-8">
            {phases.map((phase, index) => (
              <div 
                key={phase.id} 
                className={`flex items-center justify-center ${
                  index % 2 === 0 ? '' : 'flex-row-reverse'
                }`}
              >
                <div className="w-full max-w-md">
                  <Card 
                    className={`
                      p-6 cursor-pointer transition-all duration-300 hover:scale-105 relative overflow-hidden
                      ${phase.locked 
                        ? 'opacity-60 bg-muted/50 border-muted' 
                        : phase.completed
                          ? 'bg-gradient-to-br from-metaverso-purple/20 to-metaverso-blue/20 border-metaverso-purple shadow-[var(--glow-purple)]'
                          : 'hover:shadow-[var(--glow-blue)] border-metaverso-blue/50'
                      }
                    `}
                    onClick={() => handlePhaseClick(phase)}
                  >
                    {/* Phase Number Badge */}
                    <div className="absolute top-4 right-4">
                      <div className={`
                        w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                        ${phase.locked 
                          ? 'bg-muted text-muted-foreground'
                          : 'bg-gradient-to-r from-metaverso-purple to-metaverso-blue text-white'
                        }
                      `}>
                        {phase.locked ? <Lock className="w-4 h-4" /> : phase.id}
                      </div>
                    </div>

                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        Fase {phase.id} — {phase.name}
                      </h3>
                      <div className="flex items-center justify-center gap-2 mb-3">
                        <Zap className="w-4 h-4 text-metaverso-blue" />
                        <span className="text-lg font-semibold text-foreground">
                          {phase.xp} XP
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        {phase.description}
                      </p>

                      {phase.completed && (
                        <div className="flex justify-center gap-1 mb-4">
                          {[...Array(3)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                      )}

                      <Button 
                        variant={phase.locked ? "secondary" : "hero"}
                        className="w-full"
                        disabled={phase.locked}
                      >
                        {phase.locked ? (
                          <>
                            <Lock className="w-4 h-4 mr-2" />
                            Bloqueado
                          </>
                        ) : phase.id === 1 ? (
                          <>
                            <Play className="w-4 h-4 mr-2" />
                            Entrar na Fase 1
                          </>
                        ) : (
                          <>
                            <Play className="w-4 h-4 mr-2" />
                            Iniciar Fase {phase.id}
                          </>
                        )}
                      </Button>
                    </div>

                    {/* Locked Overlay */}
                    {phase.locked && (
                      <div className="absolute inset-0 bg-muted/20 backdrop-blur-[1px] flex items-center justify-center">
                        <div className="text-center">
                          <Lock className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                          <p className="text-sm text-muted-foreground font-medium">
                            Conclua a fase anterior
                          </p>
                        </div>
                      </div>
                    )}
                  </Card>
                </div>
              </div>
            ))}
          </div>

          {/* Progress Info */}
          <div className="mt-12 text-center">
            <Card className="inline-block p-6 bg-background/50 backdrop-blur-sm">
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-metaverso-purple">0</div>
                  <div className="text-sm text-muted-foreground">XP Total</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-metaverso-blue">0</div>
                  <div className="text-sm text-muted-foreground">Medalhas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-metaverso-pink">1</div>
                  <div className="text-sm text-muted-foreground">Nível</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameMap;