import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Calendar, Users, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const EventoEspecial = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate("/mapa-gamificado")}
            className="text-white border-white/20 hover:bg-white/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao Mapa
          </Button>
          <h1 className="text-3xl font-bold">Café Filosófico</h1>
          <div className="w-24" />
        </div>

        {/* Event Content */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/10 border-white/20 p-8 mb-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                ☕ Evento Especial
              </h2>
              <p className="text-xl text-gray-300">
                Um espaço para reflexão e debate sobre temas relevantes
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Calendar className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
                <h3 className="text-lg font-semibold mb-2">Quando</h3>
                <p className="text-gray-300">Toda quinta-feira às 15h</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                <h3 className="text-lg font-semibold mb-2">Participantes</h3>
                <p className="text-gray-300">Máximo 12 estudantes</p>
              </div>
              <div className="text-center">
                <Clock className="w-12 h-12 mx-auto mb-4 text-green-400" />
                <h3 className="text-lg font-semibold mb-2">Duração</h3>
                <p className="text-gray-300">60 minutos</p>
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-6 mb-8">
              <h3 className="text-2xl font-semibold mb-4">Tema desta semana:</h3>
              <h4 className="text-xl text-yellow-400 mb-4">
                "Inteligência Artificial e o Futuro do Trabalho"
              </h4>
              <p className="text-gray-300 leading-relaxed mb-4">
                Como a IA está transformando o mercado de trabalho? Quais competências 
                serão mais valorizadas no futuro? Vamos explorar essas questões juntos 
                em um ambiente colaborativo e reflexivo.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-500/30 rounded-full text-sm">Debate</span>
                <span className="px-3 py-1 bg-blue-500/30 rounded-full text-sm">Reflexão</span>
                <span className="px-3 py-1 bg-green-500/30 rounded-full text-sm">Networking</span>
              </div>
            </div>

            <div className="text-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold"
              >
                Participar do Evento
              </Button>
              <p className="text-sm text-gray-400 mt-2">
                Vagas limitadas • Inscrições abertas
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EventoEspecial;