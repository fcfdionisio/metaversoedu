import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Brain, Timer, Star } from "lucide-react";

const MiniDesafio = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted p-4">
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
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-metaverso-purple to-metaverso-blue bg-clip-text text-transparent mb-2">
              Mini Desafio
            </h1>
            <p className="text-lg text-muted-foreground">
              Revise o que aprendeu antes de avançar 🚀
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-metaverso-blue">
            <Timer className="w-5 h-5" />
            <span className="font-semibold">5 min</span>
          </div>
        </div>

        {/* Challenge Content */}
        <Card className="p-8 bg-gradient-to-br from-background/80 to-muted/50 backdrop-blur-sm border-metaverso-blue/30">
          <div className="text-center mb-8">
            <Brain className="w-16 h-16 text-metaverso-purple mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Teste Rápido de Conhecimento
            </h2>
            <p className="text-muted-foreground">
              Responda algumas perguntas para validar seu aprendizado da Fase 1
            </p>
          </div>

          <div className="space-y-6 max-w-2xl mx-auto">
            <Card className="p-6 border-metaverso-purple/20">
              <h3 className="text-lg font-semibold mb-4">Questão 1 de 3</h3>
              <p className="text-foreground mb-4">
                Qual é o principal benefício da resolução estruturada de problemas?
              </p>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  A) Economizar tempo
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  B) Reduzir erros e aumentar eficiência
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  C) Impressionar colegas
                </Button>
              </div>
            </Card>

            <div className="flex justify-center gap-4 pt-6">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Anterior
              </Button>
              <Button className="flex items-center gap-2 bg-gradient-to-r from-metaverso-purple to-metaverso-blue">
                Próxima
                <Star className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>

        {/* Progress */}
        <div className="mt-8 text-center">
          <div className="flex justify-center gap-2 mb-4">
            <div className="w-8 h-2 bg-metaverso-purple rounded-full"></div>
            <div className="w-8 h-2 bg-muted rounded-full"></div>
            <div className="w-8 h-2 bg-muted rounded-full"></div>
          </div>
          <p className="text-sm text-muted-foreground">
            Progresso: 1/3 questões
          </p>
        </div>
      </div>
    </div>
  );
};

export default MiniDesafio;