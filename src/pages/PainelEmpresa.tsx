import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Building2, Search, Star, Trophy } from "lucide-react";
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

  const extendedCandidates = [
    {
      id: "A",
      name: "Candidato A",
      skills: { Lógica: 85, Comunicação: 70, "Resolução de Problemas": 80, "Atenção aos Detalhes": 75, "Soft Skills": 82 },
      events: { "Simulação Prática": 92, "Mini Desafio": 78, "Evento Especial": 85 }
    },
    {
      id: "B",
      name: "Candidato B", 
      skills: { Lógica: 78, Comunicação: 85, "Resolução de Problemas": 72, "Atenção aos Detalhes": 88, "Soft Skills": 90 },
      events: { "Simulação Prática": 89, "Mini Desafio": 94, "Evento Especial": 77 }
    },
    {
      id: "C",
      name: "Candidato C",
      skills: { Lógica: 92, Comunicação: 65, "Resolução de Problemas": 85, "Atenção aos Detalhes": 70, "Soft Skills": 75 },
      events: { "Simulação Prática": 95, "Mini Desafio": 82, "Evento Especial": 88 }
    },
    {
      id: "D",
      name: "Candidato D",
      skills: { Lógica: 88, Comunicação: 92, "Resolução de Problemas": 90, "Atenção aos Detalhes": 85, "Soft Skills": 87 },
      events: { "Simulação Prática": 91, "Mini Desafio": 85, "Evento Especial": 92 }
    },
    {
      id: "E",
      name: "Candidato E",
      skills: { Lógica: 75, Comunicação: 78, "Resolução de Problemas": 82, "Atenção aos Detalhes": 92, "Soft Skills": 85 },
      events: { "Simulação Prática": 87, "Mini Desafio": 90, "Evento Especial": 79 }
    }
  ];

  const renderPieChart = (skills: Record<string, number>) => {
    const total = Object.values(skills).reduce((sum, value) => sum + value, 0);
    let cumulativePercentage = 0;
    
    return (
      <div className="relative w-32 h-32 mx-auto">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 42 42">
          {Object.entries(skills).map(([skill, value], index) => {
            const percentage = (value / total) * 100;
            const strokeDasharray = `${percentage} ${100 - percentage}`;
            const strokeDashoffset = -cumulativePercentage;
            const colors = ['#8B5CF6', '#3B82F6', '#10B981', '#F59E0B', '#EF4444'];
            cumulativePercentage += percentage;
            
            return (
              <circle
                key={skill}
                cx="21"
                cy="21"
                r="15.91549430918954"
                fill="transparent"
                stroke={colors[index % colors.length]}
                strokeWidth="3"
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                className="transition-all duration-300"
              />
            );
          })}
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-bold text-foreground">Habilidades</span>
        </div>
      </div>
    );
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
          
          <div className="flex items-center gap-4">
            <Button 
              onClick={() => navigate("/novo-evento")}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Cadastrar evento
            </Button>
            <div className="flex items-center gap-2 text-metaverso-purple">
              <Building2 className="w-5 h-5" />
              <span className="font-semibold">Empresa</span>
            </div>
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
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-bold text-lg text-foreground">{candidate.name}</h3>
                      {candidate.name === "Candidato A" && (
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm">
                              Ver Detalhes
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl max-h-[80vh]">
                            <DialogHeader>
                              <DialogTitle>Análise Detalhada de Candidatos</DialogTitle>
                              <DialogDescription>
                                Lista completa dos candidatos com métricas de desempenho
                              </DialogDescription>
                            </DialogHeader>
                            <ScrollArea className="h-[60vh] pr-4">
                              <div className="space-y-6">
                                {extendedCandidates.map((detailedCandidate) => (
                                  <Card key={detailedCandidate.id} className="p-4">
                                    <div className="grid md:grid-cols-2 gap-6">
                                      <div>
                                        <h4 className="font-bold text-lg mb-4 text-foreground">
                                          {detailedCandidate.name}
                                        </h4>
                                        {renderPieChart(detailedCandidate.skills)}
                                        <div className="mt-4 space-y-2">
                                          {Object.entries(detailedCandidate.skills).map(([skill, value]) => (
                                            <div key={skill} className="flex justify-between text-sm">
                                              <span className="text-muted-foreground">{skill}</span>
                                              <span className="font-medium">{value}</span>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                      <div>
                                        <h5 className="font-semibold mb-3 flex items-center gap-2 text-foreground">
                                          <Trophy className="w-4 h-4" />
                                          Eventos Simulados
                                        </h5>
                                        <div className="space-y-3">
                                          {Object.entries(detailedCandidate.events).map(([event, score]) => (
                                            <div key={event} className="p-3 bg-muted/50 rounded-lg">
                                              <div className="flex justify-between items-center mb-2">
                                                <span className="text-sm font-medium text-foreground">{event}</span>
                                                <div className="flex items-center gap-1">
                                                  <Star className="w-3 h-3 text-yellow-500 fill-current" />
                                                  <span className="text-sm font-bold">{score}</span>
                                                </div>
                                              </div>
                                              <div className="w-full bg-muted rounded-full h-2">
                                                <div 
                                                  className="bg-gradient-to-r from-metaverso-purple to-metaverso-blue h-2 rounded-full transition-all duration-500"
                                                  style={{ width: `${score}%` }}
                                                />
                                              </div>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  </Card>
                                ))}
                              </div>
                            </ScrollArea>
                          </DialogContent>
                        </Dialog>
                      )}
                    </div>
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