import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Timer, Eye, Headphones, Hand, CheckCircle, AlertTriangle } from "lucide-react";

const SimulacaoPratica = () => {
  const navigate = useNavigate();
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const answers = [
    { id: "A", value: 36, label: "(A) 36" },
    { id: "B", value: 40, label: "(B) 40" },
    { id: "C", value: 42, label: "(C) 42" }
  ];

  const learningStyles = [
    {
      type: "Visual",
      icon: Eye,
      tip: "Veja as diferenças: +4, +6, +8, +10…",
      color: "text-metaverso-purple"
    },
    {
      type: "Auditivo", 
      icon: Headphones,
      tip: "Pense: as diferenças estão crescendo?",
      color: "text-metaverso-blue"
    },
    {
      type: "Prático",
      icon: Hand,
      tip: "Liste as diferenças e calcule o próximo incremento.",
      color: "text-metaverso-pink"
    }
  ];

  const handleAnswerClick = (answerId: string) => {
    setSelectedAnswer(answerId);
    setShowFeedback(true);
  };

  const getFeedback = () => {
    if (selectedAnswer === "C") {
      return {
        type: "correct",
        message: "Correto! As diferenças crescem: +4, +6, +8, +10, +12.",
        icon: CheckCircle,
        bgColor: "bg-green-500/10",
        borderColor: "border-green-500/30",
        textColor: "text-green-600"
      };
    } else {
      return {
        type: "almost",
        message: "Quase. Observe as diferenças entre os termos; elas aumentam de 2 em 2.",
        icon: AlertTriangle,
        bgColor: "bg-yellow-500/10",
        borderColor: "border-yellow-500/30",
        textColor: "text-yellow-600"
      };
    }
  };

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
          </div>
          
          <div className="flex items-center gap-2 text-metaverso-purple">
            <Timer className="w-5 h-5" />
            <span className="font-mono text-lg">⏱️ 08:00</span>
          </div>
        </div>

        {/* Problem Statement */}
        <Card className="p-8 mb-8 text-center">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Você tem 8 minutos para completar a sequência:
          </h2>
          <div className="text-4xl font-bold text-metaverso-purple mb-4 font-mono">
            2, 6, 12, 20, 30, ?
          </div>
        </Card>

        {/* Answer Options */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {answers.map((answer) => (
            <Button
              key={answer.id}
              variant={selectedAnswer === answer.id ? "hero" : "outline"}
              size="lg"
              className="h-20 text-2xl font-bold"
              onClick={() => handleAnswerClick(answer.id)}
              disabled={showFeedback}
            >
              {answer.label}
            </Button>
          ))}
        </div>

        {/* Feedback */}
        {showFeedback && (
          <Card className={`p-6 mb-8 ${getFeedback().bgColor} ${getFeedback().borderColor}`}>
            <div className="flex items-center gap-3">
              {(() => {
                const FeedbackIcon = getFeedback().icon;
                return <FeedbackIcon className={`w-6 h-6 ${getFeedback().textColor}`} />;
              })()}
              <p className={`text-lg font-medium ${getFeedback().textColor}`}>
                {getFeedback().message}
              </p>
            </div>
          </Card>
        )}

        {/* Learning Style Tips */}
        <Card className="p-6 mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            💡 Dica do seu estilo
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {learningStyles.map((style) => {
              const IconComponent = style.icon;
              return (
                <div key={style.type} className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                  <IconComponent className={`w-5 h-5 ${style.color} mt-0.5`} />
                  <div>
                    <div className={`font-medium ${style.color} text-sm mb-1`}>
                      {style.type}:
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {style.tip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {showFeedback && (
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => navigate("/dashboard")}
              className="px-8"
            >
              Ver Dashboard
            </Button>
          )}
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => navigate("/mapa-gamificado")}
            className="px-8"
          >
            Voltar ao Mapa
          </Button>
        </div>

        {/* Progress Info */}
        {showFeedback && selectedAnswer === "C" && (
          <Card className="mt-8 p-6 bg-gradient-to-r from-green-500/10 to-metaverso-blue/10 border-green-500/30 text-center">
            <h4 className="text-lg font-semibold text-foreground mb-2">
              🎉 Atividade Concluída!
            </h4>
            <p className="text-muted-foreground">
              Você ganhou <span className="font-bold text-metaverso-blue">+25 XP</span> por resolver esta sequência!
            </p>
          </Card>
        )}
      </div>
    </div>
  );
};

export default SimulacaoPratica;