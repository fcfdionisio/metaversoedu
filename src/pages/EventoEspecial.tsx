import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Coffee, Users, Calendar, MapPin, ExternalLink } from "lucide-react";

const EventoEspecial = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background p-4">
      <div className="w-full max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/mapa-gamificado")}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao Mapa
          </Button>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-metaverso-purple via-metaverso-blue to-metaverso-pink bg-clip-text text-transparent mb-2">
              Evento Especial
            </h1>
            <p className="text-lg text-muted-foreground">
              Café Filosófico — Gran + Google
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-metaverso-purple">
            <Coffee className="w-5 h-5" />
            <span className="font-semibold">Live</span>
          </div>
        </div>

        {/* Event Content */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 bg-gradient-to-br from-metaverso-purple/10 to-metaverso-blue/10 backdrop-blur-sm border-metaverso-purple/30">
            <Coffee className="w-12 h-12 text-metaverso-purple mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Café Filosófico Digital
            </h2>
            <p className="text-muted-foreground mb-6">
              Um encontro virtual para explorar questões profundas sobre tecnologia, 
              educação e o futuro do trabalho. Participe de discussões estimulantes 
              com especialistas da Gran e Google.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-metaverso-blue" />
                <span className="text-foreground">Próxima terça, 19h</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-metaverso-blue" />
                <span className="text-foreground">25 participantes confirmados</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-metaverso-blue" />
                <span className="text-foreground">Google Meet</span>
              </div>
            </div>

            <Button className="w-full mt-6 bg-gradient-to-r from-metaverso-purple to-metaverso-blue">
              <ExternalLink className="w-4 h-4 mr-2" />
              Participar do Evento
            </Button>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-metaverso-blue/10 to-metaverso-pink/10 backdrop-blur-sm border-metaverso-blue/30">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Temas da Discussão
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-background/50 rounded-lg border border-metaverso-purple/20">
                <h4 className="font-semibold text-metaverso-purple mb-2">
                  IA e Criatividade
                </h4>
                <p className="text-sm text-muted-foreground">
                  Como a inteligência artificial pode amplificar a criatividade humana?
                </p>
              </div>
              
              <div className="p-4 bg-background/50 rounded-lg border border-metaverso-blue/20">
                <h4 className="font-semibold text-metaverso-blue mb-2">
                  Futuro da Educação
                </h4>
                <p className="text-sm text-muted-foreground">
                  Quais competências serão essenciais nos próximos 10 anos?
                </p>
              </div>
              
              <div className="p-4 bg-background/50 rounded-lg border border-metaverso-pink/20">
                <h4 className="font-semibold text-metaverso-pink mb-2">
                  Ética Tecnológica
                </h4>
                <p className="text-sm text-muted-foreground">
                  Como equilibrar inovação com responsabilidade social?
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Additional Info */}
        <Card className="mt-8 p-6 bg-background/50 backdrop-blur-sm text-center">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            🎯 Ganhe XP Participando
          </h3>
          <p className="text-muted-foreground">
            Participe ativamente e ganhe <span className="text-metaverso-purple font-semibold">+30 XP</span> 
            {" "}para seu perfil de competências
          </p>
        </Card>
      </div>
    </div>
  );
};

export default EventoEspecial;