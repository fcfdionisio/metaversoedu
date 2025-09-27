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

          {/* Main phases - horizontal connected cards */}
          <div className="mb-12">
            <div className="flex items-center justify-center gap-8 relative">
              {/* Connecting line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 opacity-50 -translate-y-1/2 z-0" />
              
              {/* Phase 1 */}
              <Card 
                className="relative z-10 w-80 bg-gradient-to-br from-green-500/20 to-emerald-600/20 border-green-400/30 backdrop-blur-sm cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20"
                onClick={handleFase1Click}
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-green-400">Fase 1 — Fundamentos</CardTitle>
                  <CardDescription className="text-green-300/80 font-semibold">50 XP</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-white/80">Comece sua jornada no metaverso da educação</p>
                </CardContent>
              </Card>

              {/* Phase 2 */}
              <Card 
                className="relative z-10 w-80 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 border-blue-400/30 backdrop-blur-sm cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
                onClick={handleFase2Click}
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center">
                    <Lock className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-blue-400">Fase 2 — Desafios</CardTitle>
                  <CardDescription className="text-blue-300/80 font-semibold">100 XP</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-white/60">Bloqueado até concluir Fase 1</p>
                </CardContent>
              </Card>

              {/* Phase 3 */}
              <Card 
                className="relative z-10 w-80 bg-gradient-to-br from-purple-500/20 to-violet-600/20 border-purple-400/30 backdrop-blur-sm cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
                onClick={handleFase3Click}
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-400 to-violet-500 flex items-center justify-center">
                    <Lock className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-purple-400">Fase 3 — Simulação</CardTitle>
                  <CardDescription className="text-purple-300/80 font-semibold">200 XP</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-white/60">Bloqueado até concluir Fase 2</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Extra activities */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Mini Quiz */}
            <Card 
              className="bg-gradient-to-br from-pink-500/20 to-rose-600/20 border-pink-400/30 backdrop-blur-sm cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20"
              onClick={handleMiniQuizClick}
            >
              <CardHeader className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-pink-400 to-rose-500 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg text-pink-400">Mini Quiz de Revisão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-white/80">Revise o que aprendeu antes de avançar 🚀</p>
              </CardContent>
            </Card>

            {/* Café Filosófico */}
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