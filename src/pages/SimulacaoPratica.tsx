import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Play, BookOpen, Brain, Lightbulb, CheckCircle } from "lucide-react";

const SimulacaoPratica = () => {
  const navigate = useNavigate();

  const activities = [
    {
      id: 1,
      title: "Conceitos Básicos",
      description: "Aprenda os fundamentos teóricos",
      icon: BookOpen,
      completed: false,
      xp: 10
    },
    {
      id: 2,
      title: "Exercício Prático",
      description: "Coloque em prática o que aprendeu",
      icon: Brain,
      completed: false,
      xp: 15
    },
    {
      id: 3,
      title: "Desafio Criativo",
      description: "Teste sua criatividade e inovação",
      icon: Lightbulb,
      completed: false,
      xp: 25
    }
  ];

  return (
    <div className="min-h-screen bg-background p-4">
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
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-metaverso-purple via-metaverso-blue to-metaverso-pink bg-clip-text text-transparent">
              Simulação Prática
            </h1>
            <p className="text-muted-foreground mt-2">Fase 1 — Fundamentos</p>
          </div>
          
          <div className="flex items-center gap-2 text-metaverso-purple">
            <span className="font-semibold">0/50 XP</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-foreground">Progresso da Fase</span>
            <span className="text-sm text-muted-foreground">0%</span>
          </div>
          <div className="w-full bg-muted rounded-full h-3">
            <div className="bg-gradient-to-r from-metaverso-purple to-metaverso-blue h-3 rounded-full transition-all duration-300" style={{ width: '0%' }}></div>
          </div>
        </div>

        {/* Activities */}
        <div className="space-y-6">
          {activities.map((activity, index) => {
            const IconComponent = activity.icon;
            
            return (
              <Card 
                key={activity.id}
                className="p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[var(--glow-blue)]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-metaverso-blue to-metaverso-green flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {activity.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {activity.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-lg font-semibold text-metaverso-blue">
                        +{activity.xp} XP
                      </div>
                      {activity.completed && (
                        <CheckCircle className="w-5 h-5 text-green-500 ml-auto" />
                      )}
                    </div>
                    <Button variant="hero">
                      <Play className="w-4 h-4 mr-2" />
                      Iniciar
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Instructions */}
        <Card className="mt-8 p-6 bg-gradient-to-r from-metaverso-purple/10 to-metaverso-blue/10 border-metaverso-purple/30">
          <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-metaverso-purple" />
            Como funciona?
          </h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Complete as atividades na ordem para maximizar seu aprendizado</li>
            <li>• Cada atividade concede XP que contribui para sua progressão</li>
            <li>• Algumas atividades são adaptadas ao seu estilo de aprendizagem</li>
            <li>• Complete todas as atividades para desbloquear a próxima fase</li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default SimulacaoPratica;