import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User, CheckCircle, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";

const RespostaCandidato = () => {
  const navigate = useNavigate();
  
  // Mock data for candidate response
  const responseData = {
    candidateId: "#5821",
    eventAccepted: "Café Filosófico — 10/10 19:00",
    eventName: "Café Filosófico",
    date: "10/10/2024",
    time: "19:00",
    status: "Aceito"
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="w-full max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/painel-empresa")}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao Painel
          </Button>
          
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-metaverso-purple via-metaverso-blue to-metaverso-pink bg-clip-text text-transparent">
              Resposta do Candidato
            </h1>
            <p className="text-muted-foreground mt-2">Candidato respondeu ao convite</p>
          </div>
          
          <div className="w-32" /> {/* Spacer */}
        </div>

        {/* Response Details Card */}
        <Card className="p-8 mb-6 animate-fade-in">
          <div className="space-y-6">
            {/* Status Header */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center animate-pulse">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div className="text-center">
                <Badge className="bg-green-500 text-white px-4 py-2 text-lg font-semibold">
                  ✅ Convite Aceito
                </Badge>
              </div>
            </div>

            {/* Candidate Info */}
            <div className="bg-muted/30 rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-metaverso-purple to-metaverso-blue rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    Nome: Candidato {responseData.candidateId}
                  </h3>
                  <p className="text-muted-foreground text-sm">(Identidade anônima)</p>
                </div>
              </div>
            </div>

            {/* Event Details */}
            <div className="bg-gradient-to-r from-metaverso-purple/10 to-metaverso-blue/10 border border-metaverso-purple/20 rounded-lg p-6 space-y-4">
              <h3 className="text-lg font-semibold text-foreground mb-4">Evento Aceito</h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-metaverso-blue" />
                  <span className="font-medium text-foreground">{responseData.eventName}</span>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Data</p>
                      <p className="font-semibold text-foreground">{responseData.date}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Horário</p>
                      <p className="font-semibold text-foreground">{responseData.time}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Notice */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 animate-fade-in">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-900 mb-1">Observação Importante</h4>
                  <p className="text-blue-800 text-sm">
                    <strong>Identidade revelada somente se o candidato aceitar participar.</strong>
                  </p>
                  <p className="text-blue-700 text-xs mt-2">
                    Os dados de contato serão disponibilizados 24h antes do evento.
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="pt-4 border-t border-border">
              <div className="bg-muted/30 rounded-lg p-4">
                <p className="text-sm text-muted-foreground text-center">
                  🎯 O candidato confirmou presença e está aguardando mais informações sobre o evento
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Action Button */}
        <div className="flex justify-center">
          <Button 
            onClick={() => navigate("/painel-empresa")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg font-semibold"
            size="lg"
          >
            Ok, voltar ao Painel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RespostaCandidato;