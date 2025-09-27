import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Clock, User } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const DetalhesCandidato = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  // Mock data for candidate details
  const candidateData = {
    id: id || "5821",
    skills: [
      { name: "Comunicação", score: 72 },
      { name: "Lógica", score: 80 },
      { name: "Resolução", score: 74 },
      { name: "Atenção aos Detalhes", score: 78 },
      { name: "Soft Skills", score: 85 }
    ],
    lastUpdate: "há 12 dias"
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "bg-green-500";
    if (score >= 70) return "bg-blue-500";
    if (score >= 60) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="w-full max-w-4xl mx-auto">
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
              Detalhes do Candidato
            </h1>
          </div>
          
          <div className="w-32" /> {/* Spacer */}
        </div>

        {/* Candidate Details Card */}
        <Card className="p-8 mb-6">
          <div className="space-y-6">
            {/* Candidate Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-metaverso-purple to-metaverso-blue rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">
                    Candidato #{candidateData.id} (anônimo)
                  </h2>
                  <div className="flex items-center gap-2 text-muted-foreground mt-1">
                    <Clock className="w-4 h-4" />
                    <span>Última atualização: {candidateData.lastUpdate}</span>
                  </div>
                </div>
              </div>
              
              <Button 
                onClick={() => navigate("/selecionar-evento")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 text-lg animate-pulse"
              >
                Convidar para evento
              </Button>
            </div>

            {/* Skills Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Habilidades</h3>
              
              <div className="flex flex-wrap gap-3">
                {candidateData.skills.map((skill) => (
                  <div key={skill.name} className="relative">
                    <Badge 
                      variant="secondary"
                      className={`${getScoreColor(skill.score)} text-white hover:opacity-90 transition-opacity px-4 py-2 text-sm font-medium`}
                    >
                      {skill.name} {skill.score}
                    </Badge>
                  </div>
                ))}
              </div>

              {/* Skills Visualization */}
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                {candidateData.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm font-bold text-muted-foreground">{skill.score}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3">
                      <div 
                        className={`${getScoreColor(skill.score)} h-3 rounded-full transition-all duration-500 animate-fade-in`}
                        style={{ width: `${skill.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="pt-6 border-t border-border">
              <div className="bg-muted/30 rounded-lg p-4">
                <p className="text-sm text-muted-foreground text-center">
                  📊 Perfil baseado em desempenho em simulações práticas e mini-desafios gamificados
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Navigation */}
        <div className="flex justify-center">
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => navigate("/painel-empresa")}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao Painel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DetalhesCandidato;