import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Building2, Search } from "lucide-react";
import { useState } from "react";

const PainelEmpresa = () => {
  const navigate = useNavigate();
  
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const filters = [
    "Soft Skills",
    "Lógica", 
    "Comunicação",
    "Resolução de Problemas",
    "Atenção aos Detalhes"
  ];

  const candidates = [
    {
      name: "Candidato A",
      skills: { Lógica: 85, Comunicação: 70, "Resolução de Problemas": 80, "Atenção aos Detalhes": 75, "Soft Skills": 82 }
    },
    {
      name: "Candidato B", 
      skills: { Lógica: 78, Comunicação: 85, "Resolução de Problemas": 72, "Atenção aos Detalhes": 88, "Soft Skills": 90 }
    },
    {
      name: "Candidato C",
      skills: { Lógica: 92, Comunicação: 65, "Resolução de Problemas": 85, "Atenção aos Detalhes": 70, "Soft Skills": 75 }
    }
  ];

  const handleFilterChange = (filter: string, checked: boolean) => {
    if (checked) {
      setSelectedFilters([...selectedFilters, filter]);
    } else {
      setSelectedFilters(selectedFilters.filter(f => f !== filter));
    }
  };

  const handleFilter = () => {
    setShowResults(true);
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="w-full max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/dashboard")}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao Dashboard
          </Button>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-metaverso-purple via-metaverso-blue to-metaverso-pink bg-clip-text text-transparent">
              Painel de Filtros — Empresas
            </h1>
            <p className="text-muted-foreground mt-2">Busque talentos por habilidades específicas.</p>
          </div>
          
          <div className="flex items-center gap-2 text-metaverso-purple">
            <Building2 className="w-5 h-5" />
            <span className="font-semibold">Empresa</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Filters */}
          <Card className="p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Search className="w-6 h-6 text-metaverso-blue" />
              Filtros de Habilidades
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {filters.map((filter) => (
                <div key={filter} className="flex items-center space-x-3">
                  <Checkbox
                    id={filter}
                    checked={selectedFilters.includes(filter)}
                    onCheckedChange={(checked) => handleFilterChange(filter, checked as boolean)}
                  />
                  <label
                    htmlFor={filter}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                  >
                    {filter}
                  </label>
                </div>
              ))}
            </div>
            
            <Button 
              onClick={handleFilter}
              variant="hero" 
              size="lg"
              className="w-full md:w-auto"
              disabled={selectedFilters.length === 0}
            >
              Filtrar
            </Button>
          </Card>

          {/* Results */}
          {showResults && (
            <Card className="p-6 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Candidatos Encontrados
              </h2>
              
              <div className="space-y-6">
                {candidates.map((candidate, index) => (
                  <div key={index} className="p-4 bg-muted/30 rounded-lg">
                    <h3 className="font-bold text-lg text-foreground mb-4">{candidate.name}</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {selectedFilters.length > 0 
                        ? selectedFilters.map((skill) => (
                            <div key={skill} className="space-y-2">
                              <div className="flex justify-between items-center">
                                <span className="text-sm font-medium text-foreground">{skill}</span>
                                <span className="text-sm text-muted-foreground">{candidate.skills[skill as keyof typeof candidate.skills]}</span>
                              </div>
                              <div className="w-full bg-muted rounded-full h-2">
                                <div 
                                  className="bg-gradient-to-r from-metaverso-purple to-metaverso-blue h-2 rounded-full transition-all duration-500"
                                  style={{ width: `${candidate.skills[skill as keyof typeof candidate.skills]}%` }}
                                />
                              </div>
                            </div>
                          ))
                        : Object.entries(candidate.skills).map(([skill, value]) => (
                            <div key={skill} className="space-y-2">
                              <div className="flex justify-between items-center">
                                <span className="text-sm font-medium text-foreground">{skill}</span>
                                <span className="text-sm text-muted-foreground">{value}</span>
                              </div>
                              <div className="w-full bg-muted rounded-full h-2">
                                <div 
                                  className="bg-gradient-to-r from-metaverso-purple to-metaverso-blue h-2 rounded-full transition-all duration-500"
                                  style={{ width: `${value}%` }}
                                />
                              </div>
                            </div>
                          ))
                      }
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* Privacy Text */}
          <p className="text-sm text-muted-foreground text-center mb-8">
            Os perfis são anônimos. O aluno decide se quer revelar seus dados.
          </p>

          {/* Navigation */}
          <div className="flex justify-center">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate("/dashboard")}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao Dashboard
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PainelEmpresa;