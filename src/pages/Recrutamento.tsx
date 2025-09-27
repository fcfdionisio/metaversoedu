import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowLeft, Zap, Trophy, Calendar, Clock, Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Recrutamento = () => {
  const navigate = useNavigate();
  const [showInterviewDialog, setShowInterviewDialog] = useState(false);

  const handleAccept = () => {
    setShowInterviewDialog(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Gaming background elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-cyan-400/10 to-purple-400/10 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 20}px`,
              height: `${Math.random() * 100 + 20}px`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button 
            variant="outline" 
            size="icon"
            onClick={() => navigate('/mapa-gamificado')}
            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div className="flex items-center gap-2">
            <Zap className="h-8 w-8 text-yellow-400" />
            <h1 className="text-3xl font-bold text-white">MISSÃO ESPECIAL DESBLOQUEADA!</h1>
          </div>
        </div>

        {/* Main recruitment card */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-purple-800/90 to-blue-800/90 border-2 border-cyan-400/50 shadow-2xl shadow-cyan-400/20">
            <CardHeader className="text-center border-b border-cyan-400/30 pb-6">
              <div className="flex justify-center mb-4">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-6 py-2 rounded-full font-bold text-xl">
                  TESLA GAMING DIVISION
                </div>
              </div>
              <CardTitle className="text-4xl font-bold text-white mb-2">
                🎮 LEVEL UP YOUR CAREER! 🚀
              </CardTitle>
              <p className="text-cyan-300 text-xl">
                Uma nova quest épica te aguarda, jogador!
              </p>
            </CardHeader>

            <CardContent className="p-8 space-y-6">
              {/* Gamer-style recruitment message */}
              <div className="bg-black/40 rounded-lg p-6 border border-cyan-400/30">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                  <Trophy className="h-6 w-6" />
                  MISSION BRIEFING
                </h3>
                <p className="text-white text-lg leading-relaxed mb-4">
                  Parabéns, jogador! Suas habilidades chamaram a atenção dos recrutadores da Tesla Gaming Division. 
                  Você demonstrou competências excepcionais em:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-purple-600/30 rounded-lg p-4 border border-purple-400/50">
                    <h4 className="text-purple-300 font-bold mb-2">🧠 Habilidades Técnicas</h4>
                    <ul className="text-white space-y-1">
                      <li>• Resolução de problemas complexos</li>
                      <li>• Pensamento analítico avançado</li>
                      <li>• Adaptabilidade tecnológica</li>
                    </ul>
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-4 border border-blue-400/50">
                    <h4 className="text-blue-300 font-bold mb-2">⚡ Power-ups Sociais</h4>
                    <ul className="text-white space-y-1">
                      <li>• Trabalho em equipe</li>
                      <li>• Comunicação efetiva</li>
                      <li>• Liderança natural</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-lg p-6 border border-green-400/50">
                  <h4 className="text-green-300 font-bold text-xl mb-3">🎯 QUEST: Desenvolvedor de Jogos Automotivos</h4>
                  <p className="text-white mb-4">
                    Junte-se à nossa equipe elite para criar a próxima geração de sistemas de entretenimento 
                    automotivo! Você será responsável por desenvolver interfaces gamificadas para os veículos Tesla, 
                    criando experiências imersivas que transformam cada viagem em uma aventura.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'TypeScript', 'Game Design', 'UI/UX', '3D Graphics'].map((skill) => (
                      <span key={skill} className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm border border-green-400/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Rewards section */}
              <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-lg p-6 border border-yellow-400/50">
                <h4 className="text-yellow-300 font-bold text-xl mb-3">🏆 RECOMPENSAS DA QUEST</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="text-3xl mb-2">💰</div>
                    <div className="text-yellow-300 font-bold">Salário Competitivo</div>
                    <div className="text-white text-sm">R$ 8.000 - R$ 15.000</div>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="text-3xl mb-2">🎮</div>
                    <div className="text-yellow-300 font-bold">Benefícios Épicos</div>
                    <div className="text-white text-sm">Plano de saúde, Vale-alimentação, Flexibilidade</div>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="text-3xl mb-2">🚀</div>
                    <div className="text-yellow-300 font-bold">Crescimento XP</div>
                    <div className="text-white text-sm">Treinamentos, Certificações, Carreira</div>
                  </div>
                </div>
              </div>

              {/* Accept button */}
              <div className="text-center pt-6">
                <Button
                  onClick={handleAccept}
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold text-xl px-12 py-4 rounded-full border-2 border-green-400/50 shadow-lg shadow-green-400/30 transform transition-all duration-300 hover:scale-105"
                >
                  🎯 ACEITAR MISSÃO
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Interview scheduling dialog */}
      <Dialog open={showInterviewDialog} onOpenChange={setShowInterviewDialog}>
        <DialogContent className="bg-gradient-to-br from-purple-800 to-blue-800 border-2 border-cyan-400/50 text-white max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center flex items-center justify-center gap-2">
              <Calendar className="h-6 w-6 text-cyan-400" />
              MISSÃO ACEITA! 🎉
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6">
            <div className="bg-black/40 rounded-lg p-6 border border-cyan-400/30">
              <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Agendamento da Entrevista
              </h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-purple-600/30 rounded-lg p-4">
                    <div className="text-purple-300 font-bold mb-2">📅 Data</div>
                    <div className="text-white text-lg">15 de Janeiro, 2024</div>
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-4">
                    <div className="text-blue-300 font-bold mb-2">🕐 Horário</div>
                    <div className="text-white text-lg">14:30 (Brasília)</div>
                  </div>
                </div>
                
                <div className="bg-green-600/20 rounded-lg p-4 border border-green-400/50">
                  <p className="text-green-300 font-bold mb-2">✨ Próximos Passos:</p>
                  <ul className="text-white space-y-1">
                    <li>• Maiores informações chegará pelo app no dia da entrevista</li>
                    <li>• Prepare seu portfólio e projetos favoritos</li>
                    <li>• A entrevista será online via Teams</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-600/20 rounded-lg p-4 border-l-4 border-yellow-400">
                  <div className="flex items-start gap-3">
                    <Bell className="h-5 w-5 text-yellow-400 mt-1" />
                    <div>
                      <p className="text-yellow-300 font-bold">⚠️ IMPORTANTE:</p>
                      <p className="text-white text-sm mt-1">
                        Deixe a permissão de notificação do app ativada para que possamos 
                        lembrá-lo do compromisso com 24 horas e 2 horas de antecedência.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Button
                onClick={() => {
                  setShowInterviewDialog(false);
                  navigate('/mapa-gamificado');
                }}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold px-8 py-3 rounded-full"
              >
                🎮 Voltar ao Jogo
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Recrutamento;