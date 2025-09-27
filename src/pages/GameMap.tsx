import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Trophy, Play, Lock, Brain, Zap, Coffee } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import gameMapBg from "@/assets/mapa_gamificado_eventos.png";

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

  const handleDesafioRelampago = () => {
    toast({
      title: "Desafio Relâmpago",
      description: "Questão surpresa cronometrada ⚡",
    });
  };

  const handleCafeFilosofico = () => {
    navigate("/evento-especial");
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{ backgroundImage: `url(${gameMapBg})` }}
    >
      {/* Futuristic overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/40 via-transparent to-background/60 backdrop-blur-[2px]"></div>
      
      {/* Starfield effect */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 p-4">
        <div className="w-full max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Button 
              variant="ghost" 
              onClick={() => navigate("/")}
              className="flex items-center gap-2 hover:bg-white/10 backdrop-blur-sm bg-background/20 border border-white/20"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao Teste
            </Button>
            
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-metaverso-purple via-metaverso-blue to-metaverso-pink bg-clip-text text-transparent mb-2 drop-shadow-lg">
                Metaverso da Educação — Mapa Gamificado
              </h1>
              <p className="text-lg text-white font-semibold drop-shadow-md backdrop-blur-sm bg-background/20 rounded-full px-4 py-2 inline-block">
                Progresso: 0/350 XP | Medalhas: 0/3
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-metaverso-purple bg-background/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Trophy className="w-5 h-5" />
                <span className="font-semibold text-white">Nível 1</span>
              </div>
            </div>
          </div>

          {/* Interactive Map with Invisible Buttons */}
          <div className="relative w-full h-[600px] max-w-5xl mx-auto">
            
            {/* Fase 1 - Yellow circle (bottom left) */}
            <button
              onClick={handleFase1Click}
              className="absolute w-20 h-20 rounded-full bg-yellow-400/10 hover:bg-yellow-400/20 border-2 border-yellow-400/50 backdrop-blur-sm transition-all duration-300 hover:scale-110 flex items-center justify-center group"
              style={{ left: '10%', bottom: '20%' }}
            >
              <Play className="w-8 h-8 text-yellow-400 group-hover:scale-125 transition-transform" />
              <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-lg border border-yellow-400/30 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                <span className="text-sm font-semibold text-yellow-400">Fase 1 — Fundamentos</span>
              </div>
            </button>

            {/* Mini Quiz - Purple dot (between Fase 1 and Fase 2) */}
            <button
              onClick={handleMiniQuizClick}
              className="absolute w-12 h-12 rounded-full bg-purple-500/10 hover:bg-purple-500/20 border-2 border-purple-500/50 backdrop-blur-sm transition-all duration-300 hover:scale-110 flex items-center justify-center group"
              style={{ left: '28%', bottom: '35%' }}
            >
              <Brain className="w-6 h-6 text-purple-500 group-hover:scale-125 transition-transform" />
              <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-lg border border-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                <span className="text-sm font-semibold text-purple-500">Mini Quiz</span>
              </div>
            </button>

            {/* Fase 2 - Blue circle (center) */}
            <button
              onClick={handleFase2Click}
              className="absolute w-20 h-20 rounded-full bg-blue-400/10 hover:bg-blue-400/20 border-2 border-blue-400/50 backdrop-blur-sm transition-all duration-300 hover:scale-110 flex items-center justify-center group"
              style={{ left: '45%', bottom: '45%' }}
            >
              <Lock className="w-8 h-8 text-blue-400 group-hover:scale-125 transition-transform" />
              <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-lg border border-blue-400/30 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                <span className="text-sm font-semibold text-blue-400">Fase 2 — Desafios</span>
              </div>
            </button>

            {/* Desafio Relâmpago - Purple dot (between Fase 2 and Fase 3) */}
            <button
              onClick={handleDesafioRelampago}
              className="absolute w-12 h-12 rounded-full bg-pink-500/10 hover:bg-pink-500/20 border-2 border-pink-500/50 backdrop-blur-sm transition-all duration-300 hover:scale-110 flex items-center justify-center group"
              style={{ left: '62%', bottom: '50%' }}
            >
              <Zap className="w-6 h-6 text-pink-500 group-hover:scale-125 transition-transform" />
              <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-lg border border-pink-500/30 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                <span className="text-sm font-semibold text-pink-500">Desafio Relâmpago</span>
              </div>
            </button>

            {/* Fase 3 - Red/Orange circle (top right) */}
            <button
              onClick={handleFase3Click}
              className="absolute w-20 h-20 rounded-full bg-red-400/10 hover:bg-red-400/20 border-2 border-red-400/50 backdrop-blur-sm transition-all duration-300 hover:scale-110 flex items-center justify-center group"
              style={{ right: '15%', top: '25%' }}
            >
              <Lock className="w-8 h-8 text-red-400 group-hover:scale-125 transition-transform" />
              <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-lg border border-red-400/30 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                <span className="text-sm font-semibold text-red-400">Fase 3 — Simulação</span>
              </div>
            </button>

            {/* Café Filosófico - Orange circle (bottom right) */}
            <button
              onClick={handleCafeFilosofico}
              className="absolute w-20 h-20 rounded-full bg-orange-400/10 hover:bg-orange-400/20 border-2 border-orange-400/50 backdrop-blur-sm transition-all duration-300 hover:scale-110 flex items-center justify-center group"
              style={{ right: '10%', bottom: '20%' }}
            >
              <Coffee className="w-8 h-8 text-orange-400 group-hover:scale-125 transition-transform" />
              <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-lg border border-orange-400/30 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                <span className="text-sm font-semibold text-orange-400">Café Filosófico</span>
              </div>
            </button>

            {/* Connecting lines visualization (optional decorative elements) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
              <defs>
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgb(168, 85, 247)" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="rgb(59, 130, 246)" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="rgb(236, 72, 153)" stopOpacity="0.4" />
                </linearGradient>
              </defs>
              {/* Path connecting the phases */}
              <path
                d="M 15% 80% Q 30% 65% 50% 65% Q 67% 60% 85% 45%"
                stroke="url(#pathGradient)"
                strokeWidth="3"
                fill="none"
                strokeDasharray="10,5"
                className="animate-pulse"
              />
            </svg>
          </div>

          {/* Progress Info */}
          <div className="mt-12 text-center">
            <div className="inline-block p-6 bg-background/50 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg">
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-metaverso-purple to-metaverso-blue bg-clip-text text-transparent">0</div>
                  <div className="text-sm text-muted-foreground">XP Total</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-metaverso-blue to-metaverso-pink bg-clip-text text-transparent">0</div>
                  <div className="text-sm text-muted-foreground">Medalhas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-metaverso-pink to-metaverso-purple bg-clip-text text-transparent">1</div>
                  <div className="text-sm text-muted-foreground">Nível</div>
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