import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Swords, Users } from "lucide-react";
import { useState } from "react";

const ConviteDesafioUsuarios = () => {
  const navigate = useNavigate();
  const [selectedMembers, setSelectedMembers] = useState<string[]>([]);
  const [challengeType, setChallengeType] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const members = ["Ana G.", "Bruno T.", "Carol S.", "Diego M.", "Erika P."];
  const challengeTypes = [
    "Quiz rápido",
    "Case prático", 
    "Simulação cronometrada"
  ];

  const handleMemberToggle = (member: string) => {
    setSelectedMembers(prev => 
      prev.includes(member) 
        ? prev.filter(m => m !== member)
        : [...prev, member]
    );
  };

  const handleSendInvite = () => {
    if (selectedMembers.length > 0 && challengeType) {
      setShowAlert(true);
    }
  };

  const handleAlertClose = () => {
    setShowAlert(false);
    navigate("/mapa-gamificado");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 30}px`,
              height: `${20 + Math.random() * 30}px`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>
      
      <div className="relative z-10 p-6">
        <div className="w-full max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Button 
              variant="ghost" 
              onClick={() => navigate("/mapa-gamificado")}
              className="flex items-center gap-2 hover:bg-white/10 backdrop-blur-sm bg-background/10 border border-white/20 text-white"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao Mapa
            </Button>
            
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent text-center">
              Convidar para Desafio (Usuários)
            </h1>
            
            <div className="w-32" /> {/* Spacer for centering */}
          </div>

          {/* Main content */}
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-xl">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center">
                  <Swords className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-white">Selecionar Membros</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Members selection */}
                <div className="space-y-3">
                  <label className="text-white font-semibold">Membros da Guilda:</label>
                  <div className="space-y-2">
                    {members.map((member) => (
                      <div key={member} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                        <Checkbox
                          id={member}
                          checked={selectedMembers.includes(member)}
                          onCheckedChange={() => handleMemberToggle(member)}
                          className="border-white/30 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                        />
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 flex items-center justify-center text-white font-bold text-sm">
                            {member.charAt(0)}
                          </div>
                          <label htmlFor={member} className="text-white cursor-pointer">
                            {member}
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                  {selectedMembers.length > 0 && (
                    <p className="text-blue-400 text-sm">
                      {selectedMembers.length} membro(s) selecionado(s)
                    </p>
                  )}
                </div>

                {/* Challenge type */}
                <div className="space-y-3">
                  <label className="text-white font-semibold">Tipo de desafio:</label>
                  <Select value={challengeType} onValueChange={setChallengeType}>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Selecione o tipo de desafio" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-gray-700">
                      {challengeTypes.map((type) => (
                        <SelectItem key={type} value={type} className="text-white hover:bg-gray-800">
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button 
                    onClick={handleSendInvite}
                    disabled={selectedMembers.length === 0 || !challengeType}
                    className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Users className="w-4 h-4 mr-2" />
                    Enviar convite
                  </Button>
                  
                  <Button 
                    onClick={() => navigate("/mapa-gamificado")}
                    variant="outline"
                    className="flex-1 border-white/30 text-white hover:bg-white/10"
                  >
                    Cancelar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Success Alert */}
      <AlertDialog open={showAlert} onOpenChange={setShowAlert}>
        <AlertDialogContent className="bg-gradient-to-br from-green-900/95 to-emerald-900/95 border-green-400/30 backdrop-blur-xl">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-green-400 text-center">
              Convite Enviado!
            </AlertDialogTitle>
            <AlertDialogDescription className="text-white/80 text-center">
              Convite enviado. Aguardando resposta.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex justify-center">
            <AlertDialogAction 
              onClick={handleAlertClose}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              Ok
            </AlertDialogAction>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ConviteDesafioUsuarios;