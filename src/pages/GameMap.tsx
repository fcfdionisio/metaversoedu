import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Trophy, Play, Lock, Brain, Coffee, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const GameMap = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  // Action handlers for each map element
  const handleFase1Click = () => {
    navigate("/simulacao-pratica");
  };

  const handleFase2Click = () => {
    toast({
      title: "Bloqueado",
      description: "Conclua a Fase 1",
      variant: "destructive"
    });
  };

  const handleFase3Click = () => {
    toast({
      title: "Bloqueado", 
      description: "Conclua a Fase 2",
      variant: "destructive"
    });
  };

  const handleMiniQuizClick = () => {
    navigate("/mini-desafio");
  };

  const handleCafeFilosofico = () => {
    navigate("/evento-especial");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Floating orbs */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>
      
      <div className="relative z-10 p-6">
        <div className="w-full max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Button 
              variant="ghost" 
              onClick={() => navigate("/")}
              className="flex items-center gap-2 hover:bg-white/10 backdrop-blur-sm bg-background/10 border border-white/20 text-white"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao Teste
            </Button>
            
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent mb-4">
                Mapa Gamificado
              </h1>
              <div className="flex items-center justify-center gap-4 text-white/90 backdrop-blur-sm bg-white/10 rounded-full px-6 py-3 border border-white/20">
                <span className="font-semibold">Progresso: 0/350 XP</span>
                <span>|</span>
                <span className="font-semibold">Medalhas: 0/3</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <Trophy className="w-5 h-5 text-yellow-400" />
              <span className="font-semibold">Nível 1</span>
            </div>
          </div>

          {/* 2D Mario-style level progression */}
          <div className="mb-12">
            {/* Level path container */}
            <div className="relative w-full h-96 bg-gradient-to-b from-sky-400/20 via-green-400/10 to-green-600/20 rounded-3xl border border-green-400/30 backdrop-blur-sm overflow-hidden">
              {/* Ground/Path */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-green-800/40 to-green-600/20 border-t-4 border-green-500/50" />
              
              {/* Clouds */}
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute bg-white/20 rounded-full animate-pulse"
                  style={{
                    left: `${10 + i * 15}%`,
                    top: `${10 + (i % 2) * 15}%`,
                    width: `${40 + Math.random() * 30}px`,
                    height: `${25 + Math.random() * 15}px`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: `${3 + Math.random()}s`
                  }}
                />
              ))}

              {/* Level progression path */}
              <svg className="absolute inset-0 w-full h-full">
                <defs>
                  <linearGradient id="pathGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
                <path
                  d="M 80 300 Q 200 280 320 300 Q 440 320 560 300 Q 680 280 800 300"
                  stroke="url(#pathGlow)"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray="20,10"
                  className="animate-pulse"
                />
              </svg>

              {/* Phase 1 - Start */}
              <div 
                className="absolute cursor-pointer transition-all duration-300 hover:scale-110 group"
                style={{ left: '5%', bottom: '35%' }}
                onClick={handleFase1Click}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 border-4 border-white/50 shadow-lg flex items-center justify-center">
                  <Play className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center">
                  <div className="bg-green-500/90 backdrop-blur-sm px-3 py-1 rounded-lg border border-green-400 text-white font-bold text-sm whitespace-nowrap">
                    Fase 1
                  </div>
                  <div className="text-xs text-white/80 mt-1">50 XP</div>
                </div>
              </div>

              {/* Mini Quiz - Bonus between phases */}
              <div 
                className="absolute cursor-pointer transition-all duration-300 hover:scale-110 group animate-bounce"
                style={{ left: '25%', bottom: '45%' }}
                onClick={handleMiniQuizClick}
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 border-4 border-white/70 shadow-lg flex items-center justify-center relative">
                  <Brain className="w-7 h-7 text-white" />
                  {/* Bonus sparkles */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-300 rounded-full animate-ping opacity-75" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full" />
                </div>
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-center">
                  <div className="bg-yellow-500/90 backdrop-blur-sm px-2 py-1 rounded-lg border border-yellow-400 text-white font-bold text-xs whitespace-nowrap">
                    BÔNUS
                  </div>
                </div>
              </div>

              {/* Phase 2 - Locked */}
              <div 
                className="absolute cursor-pointer transition-all duration-300 hover:scale-110 group"
                style={{ left: '45%', bottom: '35%' }}
                onClick={handleFase2Click}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 border-4 border-white/30 shadow-lg flex items-center justify-center opacity-60">
                  <Lock className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center">
                  <div className="bg-gray-500/90 backdrop-blur-sm px-3 py-1 rounded-lg border border-gray-400 text-white font-bold text-sm whitespace-nowrap">
                    Fase 2
                  </div>
                  <div className="text-xs text-white/60 mt-1">100 XP</div>
                </div>
              </div>

              {/* Phase 3 - Locked */}
              <div 
                className="absolute cursor-pointer transition-all duration-300 hover:scale-110 group"
                style={{ left: '75%', bottom: '35%' }}
                onClick={handleFase3Click}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 border-4 border-white/30 shadow-lg flex items-center justify-center opacity-60">
                  <Lock className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center">
                  <div className="bg-gray-500/90 backdrop-blur-sm px-3 py-1 rounded-lg border border-gray-400 text-white font-bold text-sm whitespace-nowrap">
                    Fase 3
                  </div>
                  <div className="text-xs text-white/60 mt-1">200 XP</div>
                </div>
              </div>

              {/* Flag at the end */}
              <div className="absolute" style={{ right: '5%', bottom: '25%' }}>
                <div className="w-12 h-20 bg-gradient-to-b from-red-500 to-red-600 border-2 border-white/50 relative">
                  <div className="absolute top-0 left-0 w-full h-3 bg-white/90" />
                  <div className="absolute top-4 left-0 w-full h-3 bg-red-400" />
                </div>
                <div className="w-2 h-8 bg-yellow-600 mx-auto" />
              </div>
            </div>
          </div>

          {/* Special Event - Separate area */}
          <div className="max-w-md mx-auto mb-8">
            <Card 
              className="bg-gradient-to-br from-orange-500/20 to-amber-600/20 border-orange-400/30 backdrop-blur-sm cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20"
              onClick={handleCafeFilosofico}
            >
              <CardHeader className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-400 to-amber-500 flex items-center justify-center">
                  <Coffee className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg text-orange-400">☕ Evento Especial</CardTitle>
                <CardDescription className="text-orange-300/80">Café Filosófico (Gran + Google)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center text-white/80">Participe de discussões filosóficas sobre tecnologia</p>
              </CardContent>
            </Card>
          </div>

          {/* Progress Stats */}
          <div className="mt-12 text-center">
            <div className="inline-block p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl">
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">0</div>
                  <div className="text-sm text-white/70">XP Total</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">0</div>
                  <div className="text-sm text-white/70">Medalhas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">1</div>
                  <div className="text-sm text-white/70">Nível</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameMap;