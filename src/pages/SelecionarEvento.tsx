import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Calendar, Clock, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Alert, AlertDescription } from "@/components/ui/alert";

const SelecionarEvento = () => {
  const navigate = useNavigate();
  const [selectedEvent, setSelectedEvent] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const events = [
    {
      id: "cafe-filosofico",
      name: "Café Filosófico",
      date: "10/10",
      time: "19:00",
      full: "Café Filosófico — 10/10 19:00"
    },
    {
      id: "case-pratico",
      name: "Case Prático Gran",
      date: "15/10", 
      time: "18:30",
      full: "Case Prático Gran — 15/10 18:30"
    },
    {
      id: "painel-google",
      name: "Painel Tech Google",
      date: "20/10",
      time: "20:00", 
      full: "Painel Tech Google — 20/10 20:00"
    }
  ];

  const handleConfirm = () => {
    if (selectedEvent) {
      setShowConfirmation(true);
      
      // After showing confirmation, navigate back after 2 seconds
      setTimeout(() => {
        navigate("/detalhes-candidato/5821");
      }, 2000);
    }
  };

  if (showConfirmation) {
    return (
      <div className="min-h-screen bg-background p-4 flex items-center justify-center">
        <Card className="p-8 max-w-md w-full text-center animate-scale-in">
          <div className="space-y-4">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto animate-pulse">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-2xl font-bold bg-gradient-to-r from-metaverso-purple to-metaverso-blue bg-clip-text text-transparent">
              Convite Confirmado
            </h2>
            
            <Alert className="border-green-200 bg-green-50">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-800 font-medium">
                Convite confirmado. Aguardando resposta.
              </AlertDescription>
            </Alert>
            
            <p className="text-muted-foreground text-sm">
              Redirecionando em alguns segundos...
            </p>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="w-full max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/detalhes-candidato/5821")}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Button>
          
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-metaverso-purple via-metaverso-blue to-metaverso-pink bg-clip-text text-transparent">
              Selecionar Evento para Convite
            </h1>
            <p className="text-muted-foreground mt-2">Escolha um evento para convidar o candidato</p>
          </div>
          
          <div className="w-20" /> {/* Spacer */}
        </div>

        {/* Form */}
        <Card className="p-6">
          <div className="space-y-6">
            {/* Candidate Info */}
            <div className="bg-muted/30 rounded-lg p-4">
              <h3 className="font-semibold text-foreground mb-2">Candidato Selecionado</h3>
              <p className="text-muted-foreground">Candidato #5821 (anônimo)</p>
            </div>

            {/* Event Selection */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Evento
              </label>
              
              <Select value={selectedEvent} onValueChange={setSelectedEvent}>
                <SelectTrigger className="w-full h-12">
                  <SelectValue placeholder="Selecione um evento..." />
                </SelectTrigger>
                <SelectContent className="bg-background border border-border shadow-lg z-50">
                  {events.map((event) => (
                    <SelectItem 
                      key={event.id} 
                      value={event.id}
                      className="hover:bg-muted cursor-pointer p-3"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-metaverso-blue rounded-full"></div>
                        <div>
                          <p className="font-medium">{event.name}</p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-3 h-3" />
                            <span>{event.date}</span>
                            <Clock className="w-3 h-3" />
                            <span>{event.time}</span>
                          </div>
                        </div>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              {!selectedEvent && (
                <p className="text-sm text-muted-foreground">
                  Por favor, selecione um evento para continuar
                </p>
              )}
            </div>

            {/* Selected Event Preview */}
            {selectedEvent && (
              <div className="bg-gradient-to-r from-metaverso-purple/10 to-metaverso-blue/10 border border-metaverso-purple/20 rounded-lg p-4 animate-fade-in">
                <h4 className="font-semibold text-foreground mb-2">Evento Selecionado:</h4>
                <p className="text-metaverso-blue font-medium">
                  {events.find(e => e.id === selectedEvent)?.full}
                </p>
              </div>
            )}

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
              <Button
                onClick={handleConfirm}
                disabled={!selectedEvent}
                className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Confirmar convite
              </Button>
              
              <Button
                variant="outline"
                onClick={() => navigate("/detalhes-candidato/5821")}
                className="flex-1"
              >
                Cancelar
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SelecionarEvento;