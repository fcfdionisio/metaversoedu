import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Eye, Headphones, Hand, Sparkles } from "lucide-react";

const ProfileTest = () => {
  const navigate = useNavigate();
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);

  const learningStyles = [
    {
      id: "visual",
      icon: Eye,
      title: "Ver um esquema/figura explicando",
      description: "Aprender através de imagens, diagramas e representações visuais",
      gradient: "bg-gradient-to-br from-metaverso-purple to-metaverso-blue"
    },
    {
      id: "auditory",
      icon: Headphones,
      title: "Ouvir alguém explicar",
      description: "Aprender através de explicações faladas e discussões",
      gradient: "bg-gradient-to-br from-metaverso-blue to-metaverso-green"
    },
    {
      id: "kinesthetic",
      icon: Hand,
      title: "Tentar na prática com exemplos",
      description: "Aprender fazendo, experimentando e praticando",
      gradient: "bg-gradient-to-br from-metaverso-pink to-metaverso-purple"
    }
  ];

  const handleStyleSelect = (styleId: string) => {
    setSelectedStyle(styleId);
  };

  const handleViewStyle = () => {
    if (selectedStyle) {
      navigate("/mapa-gamificado");
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-metaverso-purple animate-pulse" />
            <span className="text-sm font-medium text-metaverso-purple uppercase tracking-wider">
              Metaverso da Educação
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-metaverso-purple via-metaverso-blue to-metaverso-pink bg-clip-text text-transparent mb-4">
            Como você aprende melhor?
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra seu estilo de aprendizagem único no metaverso educacional
          </p>
        </div>

        {/* Learning Style Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {learningStyles.map((style) => {
            const IconComponent = style.icon;
            const isSelected = selectedStyle === style.id;
            
            return (
              <Card
                key={style.id}
                className={`
                  relative overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105
                  ${isSelected 
                    ? 'ring-2 ring-metaverso-purple shadow-[var(--glow-purple)]' 
                    : 'hover:shadow-lg'
                  }
                `}
                onClick={() => handleStyleSelect(style.id)}
              >
                <div className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${style.gradient} flex items-center justify-center`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {style.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {style.description}
                  </p>
                  {isSelected && (
                    <div className="absolute top-4 right-4">
                      <div className="w-6 h-6 bg-metaverso-purple rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="text-center">
          <Button
            variant="hero"
            size="lg"
            onClick={handleViewStyle}
            disabled={!selectedStyle}
            className="px-8 py-4 text-lg font-semibold"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Ver meu estilo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileTest;