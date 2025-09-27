import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Trophy } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  const competencies = [
    {
      name: "Lógica",
      value: 78,
      max: 100,
      color: "bg-gradient-to-r from-metaverso-purple to-metaverso-blue"
    },
    {
      name: "Resolução de Problemas", 
      value: 72,
      max: 100,
      color: "bg-gradient-to-r from-metaverso-blue to-metaverso-green"
    },
    {
      name: "Atenção aos Detalhes",
      value: 65,
      max: 100,
      color: "bg-gradient-to-r from-metaverso-green to-metaverso-pink"
    },
    {
      name: "Comunicação",
      value: 60,
      max: 100,
      color: "bg-gradient-to-r from-metaverso-pink to-metaverso-purple"
    }
  ];

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="w-full max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-metaverso-purple via-metaverso-blue to-metaverso-pink bg-clip-text text-transparent mb-4">
            Seu Mapa de Competências
          </h1>
        </div>

        {/* Competencies Progress Bars */}
        <div className="space-y-8 mb-8">
          {competencies.map((comp, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-foreground">{comp.name}</h3>
                <span className="text-lg font-bold text-foreground">{comp.value}/{comp.max}</span>
              </div>
              <div className="relative">
                <Progress value={comp.value} className="h-4" />
                <div 
                  className={`absolute top-0 left-0 h-4 rounded-full ${comp.color} transition-all duration-500`}
                  style={{ width: `${comp.value}%` }}
                />
              </div>
            </Card>
          ))}
        </div>

        {/* Achievement Badge */}
        <Card className="p-6 mb-8 bg-gradient-to-r from-metaverso-purple/10 to-metaverso-blue/10 border-2 border-metaverso-purple/30">
          <div className="flex items-center justify-center gap-3">
            <Trophy className="w-8 h-8 text-metaverso-purple" />
            <span className="text-xl font-bold text-foreground">🏅 Top 10 no Desafio Fase 3 (tempo)</span>
          </div>
        </Card>

        {/* Privacy Text */}
        <p className="text-sm text-muted-foreground text-center mb-8">
          Estes dados são privados. Você escolhe se quer compartilhar com empresas.
        </p>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4">
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => navigate("/mapa-gamificado")}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao Mapa
          </Button>
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => navigate("/painel-empresa")}
          >
            Painel da Empresa
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;