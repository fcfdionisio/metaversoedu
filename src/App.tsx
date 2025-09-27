import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import ProfileTest from "./pages/ProfileTest";
import GameMap from "./pages/GameMap";
import SimulacaoPratica from "./pages/SimulacaoPratica";
import Dashboard from "./pages/Dashboard";
import PainelEmpresa from "./pages/PainelEmpresa";
import NovoEvento from "./pages/NovoEvento";
import DetalhesCandidato from "./pages/DetalhesCandidato";
import SelecionarEvento from "./pages/SelecionarEvento";
import MiniDesafio from "./pages/MiniDesafio";
import EventoEspecial from "./pages/EventoEspecial";
import Recrutamento from "./pages/Recrutamento";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/como-aprende-melhor" element={<ProfileTest />} />
          <Route path="/mapa-gamificado" element={<GameMap />} />
          <Route path="/simulacao-pratica" element={<SimulacaoPratica />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/painel-empresa" element={<PainelEmpresa />} />
          <Route path="/novo-evento" element={<NovoEvento />} />
          <Route path="/detalhes-candidato/:id" element={<DetalhesCandidato />} />
          <Route path="/selecionar-evento" element={<SelecionarEvento />} />
          <Route path="/mini-desafio" element={<MiniDesafio />} />
          <Route path="/evento-especial" element={<EventoEspecial />} />
          <Route path="/recrutamento" element={<Recrutamento />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
