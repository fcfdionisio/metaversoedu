import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { GraduationCap, Building2 } from "lucide-react";

const Login = () => {
  const [studentCredentials, setStudentCredentials] = useState({ username: "", password: "" });
  const [companyCredentials, setCompanyCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleStudentLogin = () => {
    if (studentCredentials.username && studentCredentials.password) {
      navigate("/como-aprende-melhor");
    }
  };

  const handleCompanyLogin = () => {
    if (companyCredentials.username && companyCredentials.password) {
      navigate("/painel-empresa");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl flex gap-8 items-center">
        {/* Login do Aluno */}
        <Card className="flex-1 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-300/30 backdrop-blur-sm shadow-2xl">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl text-white">Login do Aluno</CardTitle>
            <CardDescription className="text-purple-200">
              Acesse sua jornada de aprendizado gamificada
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="student-username" className="text-white">Usuário</Label>
              <Input
                id="student-username"
                placeholder="Digite seu usuário"
                value={studentCredentials.username}
                onChange={(e) => setStudentCredentials(prev => ({ ...prev, username: e.target.value }))}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="student-password" className="text-white">Senha</Label>
              <Input
                id="student-password"
                type="password"
                placeholder="Digite sua senha"
                value={studentCredentials.password}
                onChange={(e) => setStudentCredentials(prev => ({ ...prev, password: e.target.value }))}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
            </div>
            <Button 
              onClick={handleStudentLogin}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
              disabled={!studentCredentials.username || !studentCredentials.password}
            >
              Iniciar Jornada
            </Button>
          </CardContent>
        </Card>

        {/* Login da Empresa */}
        <Card className="w-80 bg-gradient-to-br from-blue-500/10 to-green-500/10 border-blue-300/20 backdrop-blur-sm opacity-75 hover:opacity-100 transition-opacity">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mb-4">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl text-white">Login da Empresa</CardTitle>
            <CardDescription className="text-blue-200">
              Acesse o painel de gestão e análise de candidatos
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="company-username" className="text-white">Usuário</Label>
              <Input
                id="company-username"
                placeholder="Digite o usuário da empresa"
                value={companyCredentials.username}
                onChange={(e) => setCompanyCredentials(prev => ({ ...prev, username: e.target.value }))}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company-password" className="text-white">Senha</Label>
              <Input
                id="company-password"
                type="password"
                placeholder="Digite a senha da empresa"
                value={companyCredentials.password}
                onChange={(e) => setCompanyCredentials(prev => ({ ...prev, password: e.target.value }))}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
            </div>
            <Button 
              onClick={handleCompanyLogin}
              className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
              disabled={!companyCredentials.username || !companyCredentials.password}
            >
              Acessar Painel
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Logo/Title */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
        <h1 className="text-4xl font-bold text-white text-center bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
          Metaverso da Educação
        </h1>
      </div>
    </div>
  );
};

export default Login;