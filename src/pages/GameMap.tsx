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
    toast({
      title: "Mini Quiz",
      description: "Revise o que aprendeu antes de avançar 🚀",
    });
  };

  const handleDesafioClick = () => {
    toast({
      title: "Desafio Relâmpago",
      description: "Questão surpresa cronometrada ⚡",
    });
  };

  const handleCafeClick = () => {
    navigate("/evento-especial");
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

          {/* Game Map with positioned buttons */}
          <div className="relative w-full h-[600px] mx-auto">
            {/* Background image container */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-lg"
              style={{ backgroundImage: `url(${gameMapBg})` }}
            >
              <div className="absolute inset-0 bg-background/20 rounded-lg"></div>
            </div>

            {/* Invisible positioned buttons over map circles */}
            {/* Fase 1 - Top left */}
            <button
              onClick={handleFase1Click}
              className="absolute top-[15%] left-[20%] w-20 h-20 rounded-full bg-transparent hover:bg-white/10 transition-all duration-200 z-10"
              title="Fase 1"
            />

            {/* Fase 2 - Top right */}
            <button
              onClick={handleFase2Click}
              className="absolute top-[15%] right-[20%] w-20 h-20 rounded-full bg-transparent hover:bg-white/10 transition-all duration-200 z-10"
              title="Fase 2"
            />

            {/* Fase 3 - Center */}
            <button
              onClick={handleFase3Click}
              className="absolute top-[45%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-transparent hover:bg-white/10 transition-all duration-200 z-10"
              title="Fase 3"
            />

            {/* Mini Quiz - Bottom left */}
            <button
              onClick={handleMiniQuizClick}
              className="absolute bottom-[25%] left-[15%] w-16 h-16 rounded-full bg-transparent hover:bg-white/10 transition-all duration-200 z-10"
              title="Mini Quiz"
            />

            {/* Desafio Relâmpago - Bottom center */}
            <button
              onClick={handleDesafioClick}
              className="absolute bottom-[20%] left-[50%] transform -translate-x-1/2 w-16 h-16 rounded-full bg-transparent hover:bg-white/10 transition-all duration-200 z-10"
              title="Desafio Relâmpago"
            />

            {/* Café Filosófico - Bottom right */}
            <button
              onClick={handleCafeClick}
              className="absolute bottom-[25%] right-[15%] w-16 h-16 rounded-full bg-transparent hover:bg-white/10 transition-all duration-200 z-10"
              title="Café Filosófico"
            />

            {/* Visual indicators (optional) */}
            <div className="absolute top-[12%] left-[17%] text-xs text-white bg-black/50 px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
              Fase 1
            </div>
            <div className="absolute top-[12%] right-[17%] text-xs text-white bg-black/50 px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
              Fase 2
            </div>
            <div className="absolute top-[40%] left-[47%] text-xs text-white bg-black/50 px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
              Fase 3
            </div>
            <div className="absolute bottom-[30%] left-[12%] text-xs text-white bg-black/50 px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
              Mini Quiz
            </div>
            <div className="absolute bottom-[25%] left-[47%] text-xs text-white bg-black/50 px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
              Desafio Relâmpago
            </div>
            <div className="absolute bottom-[30%] right-[12%] text-xs text-white bg-black/50 px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
              Café Filosófico
            </div>
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