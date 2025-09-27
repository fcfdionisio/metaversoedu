import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, Calendar, CheckCircle, XCircle, Clock, User, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const DetalheResposta = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  
  // Get response data from navigation state or use fallback
  const response = location.state || {
    id: 1,
    participant: "Ana G.",
    challenge: "Quiz rápido",
    status: "aceito",
    timestamp: "hoje 14:22",
    type: "user"
  };

  const handleScheduleMeeting = () => {
    toast({
      title: "Encontro agendado (mock)",
      description: "Funcionalidade em desenvolvimento",
    });
  };

  const mockDetails = {
    challengeType: response.challenge,
    dateTime: response.timestamp,
    observations: response.status === "aceito" 
      ? `${response.participant} confirmou participação e está aguardando mais detalhes sobre horário e local.`
      : `${response.participant} informou que não poderá participar devido a conflitos de agenda.`,
    estimatedDuration: "45 minutos",
    location: "Sala virtual da guilda"
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
              onClick={() => navigate("/respostas-guilda")}
              className="flex items-center gap-2 hover:bg-white/10 backdrop-blur-sm bg-background/10 border border-white/20 text-white"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar às Respostas
            </Button>
            
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent">
                {response.participant}
              </h1>
              <p className="text-white/70 mt-1">Detalhe da Resposta</p>
            </div>
            
            <div className="w-32" /> {/* Spacer for centering */}
          </div>

          {/* Main content */}
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-xl">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 flex items-center justify-center text-white font-bold text-2xl">
                  {response.type === "guild" ? (
                    <Shield className="w-10 h-10" />
                  ) : (
                    <User className="w-10 h-10" />
                  )}
                </div>
                
                <div className="flex items-center justify-center gap-3 mb-4">
                  <CardTitle className="text-2xl text-white">
                    {response.participant}
                  </CardTitle>
                  <Badge 
                    variant={response.status === "aceito" ? "default" : "destructive"}
                    className={`${
                      response.status === "aceito" 
                        ? "bg-green-600 hover:bg-green-700" 
                        : "bg-red-600 hover:bg-red-700"
                    } text-white text-base px-3 py-1`}
                  >
                    {response.status === "aceito" ? (
                      <>
                        <CheckCircle className="w-4 h-4 mr-1" />
                        ✅ Aceito
                      </>
                    ) : (
                      <>
                        <XCircle className="w-4 h-4 mr-1" />
                        ❌ Recusado
                      </>
                    )}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Challenge details */}
                <div className="space-y-4">
                  <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                    <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      Detalhes do Desafio
                    </h3>
                    <div className="space-y-2 text-white/80">
                      <div className="flex justify-between">
                        <span>Tipo:</span>
                        <span className="font-medium">{mockDetails.challengeType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Data/Hora:</span>
                        <span className="font-medium">{mockDetails.dateTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Duração estimada:</span>
                        <span className="font-medium">{mockDetails.estimatedDuration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Local:</span>
                        <span className="font-medium">{mockDetails.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Observations */}
                  <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                    <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      Observações
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      {mockDetails.observations}
                    </p>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  {response.status === "aceito" && (
                    <Button 
                      onClick={handleScheduleMeeting}
                      className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white"
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      Agendar encontro (mock)
                    </Button>
                  )}
                  
                  <Button 
                    onClick={() => navigate("/respostas-guilda")}
                    variant="outline"
                    className="flex-1 border-white/30 text-white hover:bg-white/10"
                  >
                    Voltar às Respostas
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

export default DetalheResposta;