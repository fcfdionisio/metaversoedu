import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Shield, Swords } from "lucide-react";
import { useState } from "react";

const ConviteDesafioGuildas = () => {
  const navigate = useNavigate();
  const [selectedGuild, setSelectedGuild] = useState("");
  const [challengeType, setChallengeType] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [inviteStatus, setInviteStatus] = useState<"pending" | "sent">("pending");

  const guilds = ["Guilda Alfa", "Guilda Sigma", "Guilda Orion"];
  const challengeTypes = [
    "Quiz por equipes",
    "Case colaborativo",
    "Batalha de simulação"
  ];

  const handleSendInvite = () => {
    if (selectedGuild && challengeType) {
      setInviteStatus("sent");
      setTimeout(() => {
        setShowAlert(true);
      }, 500); // Small delay to show status change animation
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
              Convidar outra Guilda
            </h1>
            
            <div className="w-32" /> {/* Spacer for centering */}
          </div>

          {/* Main content */}
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-xl">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-400 to-pink-400 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-white">Desafiar Guilda</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Guild selection */}
                <div className="space-y-3">
                  <label className="text-white font-semibold">Guilda adversária (mock):</label>
                  <Select value={selectedGuild} onValueChange={setSelectedGuild}>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Selecione uma guilda para desafiar" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-gray-700">
                      {guilds.map((guild) => (
                        <SelectItem key={guild} value={guild} className="text-white hover:bg-gray-800">
                          <div className="flex items-center gap-2">
                            <Shield className="w-4 h-4" />
                            {guild}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
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

                {/* Selected info display */}
                {selectedGuild && challengeType && (
                  <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-4 rounded-lg border border-purple-400/30">
                    <h3 className="text-white font-semibold mb-2">Resumo do Desafio:</h3>
                    <p className="text-white/80">
                      <span className="font-medium">Guilda:</span> {selectedGuild}
                    </p>
                    <p className="text-white/80">
                      <span className="font-medium">Tipo:</span> {challengeType}
                    </p>
                  </div>
                )}

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button 
                    onClick={handleSendInvite}
                    disabled={!selectedGuild || !challengeType}
                    className="flex-1 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Swords className="w-4 h-4 mr-2" />
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

                {/* Status section */}
                <div className="pt-6 border-t border-white/10">
                  <h3 className="text-white font-semibold mb-3">Status do convite</h3>
                  <div className="flex justify-center">
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-500 ${
                      inviteStatus === "pending" 
                        ? "bg-gray-600/80 border-gray-500/50 text-white" 
                        : "bg-green-600/80 border-green-500/50 text-white animate-pulse"
                    }`}>
                      {inviteStatus === "pending" ? (
                        <>
                          <span className="animate-spin">⏳</span>
                          Pendente
                        </>
                      ) : (
                        <>
                          <span className="animate-bounce">✅</span>
                          Convite enviado (aguardando resposta)
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Success Alert */}
      <AlertDialog open={showAlert} onOpenChange={setShowAlert}>
        <AlertDialogContent className="bg-gradient-to-br from-red-900/95 to-pink-900/95 border-red-400/30 backdrop-blur-xl">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-red-400 text-center">
              Convite Enviado!
            </AlertDialogTitle>
            <AlertDialogDescription className="text-white/80 text-center">
              Convite enviado à guilda adversária. Aguardando resposta.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex justify-center">
            <AlertDialogAction 
              onClick={handleAlertClose}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              Ok
            </AlertDialogAction>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ConviteDesafioGuildas;