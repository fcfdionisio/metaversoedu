import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, CheckCircle, XCircle } from "lucide-react";

const RespostasGuilda = () => {
  const navigate = useNavigate();

  const mockResponses = [
    {
      id: 1,
      participant: "Ana G.",
      challenge: "Quiz rápido",
      status: "aceito",
      timestamp: "hoje 14:22",
      type: "user"
    },
    {
      id: 2,
      participant: "Guilda Orion",
      challenge: "Case colaborativo",
      status: "aceito",
      timestamp: "ontem 19:05",
      type: "guild"
    },
    {
      id: 3,
      participant: "Bruno T.",
      challenge: "Simulação cronometrada",
      status: "recusado",
      timestamp: "ontem 09:41",
      type: "user"
    }
  ];

  const handleResponseClick = (response: typeof mockResponses[0]) => {
    navigate(`/detalhe-resposta/${response.id}`, { state: response });
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
              Respostas da Guilda
            </h1>
            
            <div className="w-32" /> {/* Spacer for centering */}
          </div>

          {/* Notifications list */}
          <div className="max-w-3xl mx-auto space-y-4">
            {mockResponses.map((response) => (
              <Card 
                key={response.id}
                className="bg-white/10 backdrop-blur-md border-white/20 shadow-xl cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:bg-white/15"
                onClick={() => handleResponseClick(response)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 flex items-center justify-center text-white font-bold">
                        {response.participant.charAt(0)}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-white font-semibold text-lg">
                            {response.participant}
                          </h3>
                          <Badge 
                            variant={response.status === "aceito" ? "default" : "destructive"}
                            className={`${
                              response.status === "aceito" 
                                ? "bg-green-600 hover:bg-green-700" 
                                : "bg-red-600 hover:bg-red-700"
                            } text-white`}
                          >
                            {response.status === "aceito" ? (
                              <>
                                <CheckCircle className="w-3 h-3 mr-1" />
                                ✅ Aceito
                              </>
                            ) : (
                              <>
                                <XCircle className="w-3 h-3 mr-1" />
                                ❌ Recusado
                              </>
                            )}
                          </Badge>
                        </div>
                        
                        <p className="text-white/80">
                          {response.status === "aceito" ? "aceitou" : "recusou"} o desafio '{response.challenge}'
                        </p>
                        
                        <div className="flex items-center gap-2 mt-2 text-white/60 text-sm">
                          <Clock className="w-4 h-4" />
                          <span>{response.timestamp}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-white/40">
                      <ArrowLeft className="w-5 h-5 rotate-180" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {mockResponses.length === 0 && (
              <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-xl">
                <CardContent className="p-12 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                    <Clock className="w-8 h-8 text-white/60" />
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-2">
                    Nenhuma resposta ainda
                  </h3>
                  <p className="text-white/70">
                    Quando membros da guilda ou outras guildas responderem aos desafios, as notificações aparecerão aqui.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RespostasGuilda;