import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Trophy, TrendingUp, Brain, Target, Star, Zap } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  const competencies = [
    {
      name: "Raciocínio Lógico",
      level: 2,
      progress: 65,
      xp: 65,
      maxXp: 100,
      color: "from-metaverso-purple to-metaverso-blue"
    },
    {
      name: "Resolução de Problemas",
      level: 1,
      progress: 25,
      xp: 25,
      maxXp: 100,
      color: "from-metaverso-blue to-metaverso-green"
    },
    {
      name: "Pensamento Crítico",
      level: 1,
      progress: 10,
      xp: 10,
      maxXp: 100,
      color: "from-metaverso-pink to-metaverso-purple"
    }
  ];

  const achievements = [
    {
      title: "Primeira Sequência",
      description: "Resolveu sua primeira sequência matemática",
      earned: true,
      icon: Target
    },
    {
      title: "Pensador Rápido",
      description: "Resolveu um problema em menos de 5 minutos",
      earned: false,
      icon: Zap
    },
    {
      title: "Estrategista",
      description: "Complete 5 desafios consecutivos",
      earned: false,
      icon: Brain
    }
  ];

  const recentActivity = [
    {
      title: "Sequência Numérica Completada",
      description: "2, 6, 12, 20, 30, 42",
      xp: "+25 XP",
      time: "Agora"
    },
    {
      title: "Teste de Perfil Realizado",
      description: "Estilo de aprendizagem identificado",
      xp: "+10 XP",
      time: "10 min atrás"
    }
  ];

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="w-full max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/simulacao-pratica")}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar à Simulação
          </Button>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-metaverso-purple via-metaverso-blue to-metaverso-pink bg-clip-text text-transparent">
              Dashboard de Competências
            </h1>
            <p className="text-muted-foreground mt-2">Acompanhe seu progresso e desenvolvimento</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-metaverso-purple">
              <Trophy className="w-5 h-5" />
              <span className="font-semibold">Nível 2</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Competencies */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-metaverso-blue" />
              Suas Competências
            </h2>
            <div className="space-y-6">
              {competencies.map((comp, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{comp.name}</h3>
                      <p className="text-sm text-muted-foreground">Nível {comp.level}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-metaverso-blue">
                        {comp.xp}/{comp.maxXp} XP
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">Progresso</span>
                      <span className="text-sm font-medium">{comp.progress}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3">
                      <div 
                        className={`bg-gradient-to-r ${comp.color} h-3 rounded-full transition-all duration-500`}
                        style={{ width: `${comp.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Side Panel */}
          <div className="space-y-8">
            {/* Achievements */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-metaverso-purple" />
                Conquistas
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => {
                  const IconComponent = achievement.icon;
                  return (
                    <div 
                      key={index}
                      className={`flex items-center gap-3 p-3 rounded-lg ${
                        achievement.earned 
                          ? 'bg-metaverso-purple/10 border border-metaverso-purple/30' 
                          : 'bg-muted/30 opacity-50'
                      }`}
                    >
                      <IconComponent className={`w-8 h-8 ${
                        achievement.earned ? 'text-metaverso-purple' : 'text-muted-foreground'
                      }`} />
                      <div>
                        <h4 className="font-medium text-foreground">{achievement.title}</h4>
                        <p className="text-xs text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* Recent Activity */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Atividade Recente
              </h3>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="border-l-2 border-metaverso-blue pl-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-foreground">{activity.title}</h4>
                        <p className="text-sm text-muted-foreground">{activity.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-metaverso-blue">{activity.xp}</div>
                        <div className="text-xs text-muted-foreground">{activity.time}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => navigate("/mapa-gamificado")}
          >
            Continuar Aprendendo
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => navigate("/")}
          >
            Refazer Teste de Perfil
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;