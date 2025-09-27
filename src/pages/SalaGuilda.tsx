import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Video, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SalaGuilda = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleStartCall = () => {
    toast({
      title: "Chamada iniciada (mock)",
      description: "Funcionalidade em desenvolvimento",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 30}px`,
              height: `${20 + Math.random() * 30}px`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>
      
      <div className="relative z-10 p-6">
        <div className="w-full max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Button 
              variant="ghost" 
              onClick={() => navigate("/mapa-gamificado")}
              className="flex items-center gap-2 hover:bg-white/10 backdrop-blur-sm bg-background/10 border border-white/20 text-white"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao Mapa
            </Button>
            
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent text-center">
              Sala da Guilda (mock)
            </h1>
            
            <div className="w-32" /> {/* Spacer for centering */}
          </div>

          {/* Main content */}
          <div className="max-w-2xl mx-auto space-y-8">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-xl">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl text-white">Sala da Guilda</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <p className="text-white/80 text-lg leading-relaxed">
                  Espaço de reunião com chat/meet integrado (placeholder).
                </p>
                
                <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-6 rounded-lg border border-blue-400/30">
                  <p className="text-white/70 mb-4">
                    Aqui sua guilda pode se reunir, discutir estratégias e planejar desafios em tempo real.
                  </p>
                  <div className="flex items-center justify-center gap-2 text-white/60">
                    <Video className="w-5 h-5" />
                    <span>Integração com sistema de videochamada em desenvolvimento</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={handleStartCall}
                    className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-3"
                  >
                    <Video className="w-5 h-5 mr-2" />
                    Iniciar chamada (mock)
                  </Button>
                  
                  <Button 
                    onClick={() => navigate("/mapa-gamificado")}
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 px-8 py-3"
                  >
                    Voltar ao Mapa
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalaGuilda;