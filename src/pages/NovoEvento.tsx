import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, MapPin, Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const NovoEvento = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    nome: "",
    data: "",
    horario: "",
    local: "",
    descricao: "",
    xpBonus: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.nome.trim()) {
      newErrors.nome = "Nome do evento é obrigatório";
    }
    if (!formData.data) {
      newErrors.data = "Data é obrigatória";
    }
    if (!formData.horario) {
      newErrors.horario = "Horário é obrigatório";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validateForm()) {
      toast({
        title: "Evento salvo (mock)",
        description: "O evento foi registrado com sucesso!",
      });
      
      // Reset form
      setFormData({
        nome: "",
        data: "",
        horario: "",
        local: "",
        descricao: "",
        xpBonus: ""
      });
    }
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="w-full max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/painel-empresa")}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Button>
          
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-metaverso-purple via-metaverso-blue to-metaverso-pink bg-clip-text text-transparent">
              Novo Evento
            </h1>
            <p className="text-muted-foreground mt-2">Cadastre um novo evento para seleção</p>
          </div>
          
          <div className="w-20" /> {/* Spacer */}
        </div>

        {/* Form */}
        <Card className="p-6">
          <div className="space-y-6">
            {/* Nome do evento */}
            <div className="space-y-2">
              <label htmlFor="nome" className="text-sm font-medium text-foreground flex items-center gap-2">
                <Trophy className="w-4 h-4" />
                Nome do evento
              </label>
              <Input
                id="nome"
                value={formData.nome}
                onChange={(e) => handleInputChange("nome", e.target.value)}
                placeholder="Ex: Hackathon de Inovação Tech"
                className={errors.nome ? "border-destructive" : ""}
              />
              {errors.nome && (
                <p className="text-sm text-destructive">{errors.nome}</p>
              )}
            </div>

            {/* Data */}
            <div className="space-y-2">
              <label htmlFor="data" className="text-sm font-medium text-foreground flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Data
              </label>
              <Input
                id="data"
                type="date"
                value={formData.data}
                onChange={(e) => handleInputChange("data", e.target.value)}
                className={errors.data ? "border-destructive" : ""}
              />
              {errors.data && (
                <p className="text-sm text-destructive">{errors.data}</p>
              )}
            </div>

            {/* Horário */}
            <div className="space-y-2">
              <label htmlFor="horario" className="text-sm font-medium text-foreground flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Horário
              </label>
              <Input
                id="horario"
                type="time"
                value={formData.horario}
                onChange={(e) => handleInputChange("horario", e.target.value)}
                className={errors.horario ? "border-destructive" : ""}
              />
              {errors.horario && (
                <p className="text-sm text-destructive">{errors.horario}</p>
              )}
            </div>

            {/* Local/Link */}
            <div className="space-y-2">
              <label htmlFor="local" className="text-sm font-medium text-foreground flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Local/Link
              </label>
              <Input
                id="local"
                value={formData.local}
                onChange={(e) => handleInputChange("local", e.target.value)}
                placeholder="Ex: Auditório Central ou https://meet.google.com/xyz"
              />
            </div>

            {/* Descrição */}
            <div className="space-y-2">
              <label htmlFor="descricao" className="text-sm font-medium text-foreground">
                Descrição
              </label>
              <Textarea
                id="descricao"
                value={formData.descricao}
                onChange={(e) => handleInputChange("descricao", e.target.value)}
                placeholder="Descreva o evento, objetivos e o que os participantes podem esperar..."
                className="min-h-[100px]"
              />
            </div>

            {/* XP Bônus */}
            <div className="space-y-2">
              <label htmlFor="xpBonus" className="text-sm font-medium text-foreground">
                XP Bônus
              </label>
              <Input
                id="xpBonus"
                type="number"
                value={formData.xpBonus}
                onChange={(e) => handleInputChange("xpBonus", e.target.value)}
                placeholder="Ex: 500"
                min="0"
              />
              <p className="text-xs text-muted-foreground">
                Pontos de experiência que os participantes ganharão
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
              <Button
                onClick={handleSave}
                className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Salvar (mock)
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate("/painel-empresa")}
                className="flex-1"
              >
                Voltar
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default NovoEvento;