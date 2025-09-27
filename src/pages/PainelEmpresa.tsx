import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Building2, Filter, Users } from "lucide-react";

const PainelEmpresa = () => {
  const navigate = useNavigate();

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
              Painel de Filtros para Empresas
            </h1>
            <p className="text-muted-foreground mt-2">Encontre candidatos ideais com base em competências</p>
          </div>
          
          <div className="flex items-center gap-2 text-metaverso-purple">
            <Building2 className="w-5 h-5" />
            <span className="font-semibold">Empresa</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Filters */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Filter className="w-6 h-6 text-metaverso-blue" />
              Filtros de Busca
            </h2>
            <div className="space-y-6">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Competência Mínima em Lógica
                </label>
                <div className="w-full bg-muted rounded-full h-3">
                  <div className="bg-gradient-to-r from-metaverso-purple to-metaverso-blue h-3 rounded-full w-3/4"></div>
                </div>
                <span className="text-sm text-muted-foreground">75/100</span>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Resolução de Problemas
                </label>
                <div className="w-full bg-muted rounded-full h-3">
                  <div className="bg-gradient-to-r from-metaverso-blue to-metaverso-green h-3 rounded-full w-2/3"></div>
                </div>
                <span className="text-sm text-muted-foreground">65/100</span>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Comunicação
                </label>
                <div className="w-full bg-muted rounded-full h-3">
                  <div className="bg-gradient-to-r from-metaverso-pink to-metaverso-purple h-3 rounded-full w-1/2"></div>
                </div>
                <span className="text-sm text-muted-foreground">50/100</span>
              </div>
            </div>
            
            <Button className="w-full mt-6" variant="hero">
              Aplicar Filtros
            </Button>
          </Card>

          {/* Results */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Users className="w-6 h-6 text-metaverso-green" />
              Candidatos Encontrados
            </h2>
            
            <div className="space-y-4">
              <div className="p-4 bg-muted/30 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-foreground">Candidato #1234</h3>
                  <span className="text-sm bg-metaverso-green/20 text-metaverso-green px-2 py-1 rounded">
                    95% Match
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <span className="text-muted-foreground">Lógica: 85/100</span>
                  <span className="text-muted-foreground">Problemas: 78/100</span>
                  <span className="text-muted-foreground">Detalhes: 72/100</span>
                  <span className="text-muted-foreground">Comunicação: 68/100</span>
                </div>
              </div>
              
              <div className="p-4 bg-muted/30 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-foreground">Candidato #5678</h3>
                  <span className="text-sm bg-metaverso-blue/20 text-metaverso-blue px-2 py-1 rounded">
                    87% Match
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <span className="text-muted-foreground">Lógica: 78/100</span>
                  <span className="text-muted-foreground">Problemas: 82/100</span>
                  <span className="text-muted-foreground">Detalhes: 65/100</span>
                  <span className="text-muted-foreground">Comunicação: 75/100</span>
                </div>
              </div>
              
              <div className="p-4 bg-muted/30 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-foreground">Candidato #9012</h3>
                  <span className="text-sm bg-metaverso-purple/20 text-metaverso-purple px-2 py-1 rounded">
                    82% Match
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <span className="text-muted-foreground">Lógica: 76/100</span>
                  <span className="text-muted-foreground">Problemas: 74/100</span>
                  <span className="text-muted-foreground">Detalhes: 80/100</span>
                  <span className="text-muted-foreground">Comunicação: 65/100</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PainelEmpresa;