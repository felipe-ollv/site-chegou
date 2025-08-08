import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Smartphone, 
  Shield, 
  Clock, 
  Bell, 
  QrCode, 
  History, 
  BarChart3, 
  Users, 
  CheckCircle, 
  Phone, 
  Mail, 
  Globe, 
  MessageCircle,
  Package,
  Building,
  Truck,
  Star
} from 'lucide-react'
import './App.css'

// Importar imagens
import chegouAppLogo from './assets/chegouapp_logo.png'
import appInterface from './assets/app_interface_2.jpg'
import smartLocker from './assets/smart_locker_1.png'
import pessoaCelular from './assets/pessoa_celular_1.jpg'
import porteiro from './assets/porteiro_entregas.jpg'

function App() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={chegouAppLogo} alt="ChegouApp" className="h-10 w-auto" />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('inicio')} className="text-foreground hover:text-primary transition-colors">
              Início
            </button>
            <button onClick={() => scrollToSection('funcionalidades')} className="text-foreground hover:text-primary transition-colors">
              Funcionalidades
            </button>
            <button onClick={() => scrollToSection('beneficios')} className="text-foreground hover:text-primary transition-colors">
              Benefícios
            </button>
            <button onClick={() => scrollToSection('contato')} className="text-foreground hover:text-primary transition-colors">
              Contato
            </button>
          </nav>
          <Button className="chegou-button font-semibold">
            Solicitar Demo
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="chegou-section pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-primary/20 text-primary border-primary/30">
                  Revolucionando Condomínios
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-white">Chegou</span>
                  <span className="chegou-accent">App</span>
                </h1>
                <h2 className="text-2xl lg:text-3xl chegou-text-secondary">
                  Gestão Inteligente de Encomendas em Condomínios
                </h2>
                <p className="text-lg chegou-text-secondary max-w-xl">
                  Transforme a experiência de recebimento de encomendas no seu condomínio com tecnologia, segurança e praticidade para moradores e gestores.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="chegou-button text-lg px-8 py-6"
                  onClick={() => scrollToSection('funcionalidades')}
                >
                  Conhecer Funcionalidades
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => scrollToSection('contato')}
                >
                  Solicitar Demonstração
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src={appInterface} 
                  alt="Interface do ChegouApp" 
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Problema Section */}
      <section className="chegou-section bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Os Desafios das Entregas em Condomínios</h2>
            <p className="text-xl chegou-text-secondary max-w-3xl mx-auto">
              Com o crescimento do e-commerce, os condomínios enfrentam desafios cada vez maiores na gestão de encomendas
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Package, title: "Volume Crescente", desc: "Aumento de 161% nas entregas online em 2024" },
              { icon: Clock, title: "Dependência de Horários", desc: "Moradores limitados aos horários da portaria" },
              { icon: Shield, title: "Segurança Comprometida", desc: "Risco de extravios e violação de pacotes" },
              { icon: Building, title: "Sobrecarga da Portaria", desc: "Porteiros sobrecarregados com gestão manual" }
            ].map((item, index) => (
              <Card key={index} className="chegou-card chegou-hover-transform">
                <CardContent className="p-6 text-center">
                  <item.icon className="w-12 h-12 chegou-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="chegou-text-secondary">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solução Section */}
      <section className="chegou-section">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold">
                  Como o <span className="chegou-accent">ChegouApp</span> Resolve
                </h2>
                <p className="text-xl chegou-text-secondary">
                  Uma solução completa que conecta porteiros, moradores e gestores em um fluxo inteligente e seguro
                </p>
              </div>
              <div className="space-y-6">
                {[
                  { step: "1", title: "Registro Digital", desc: "Porteiro registra a encomenda com foto e dados" },
                  { step: "2", title: "Notificação Instantânea", desc: "Morador recebe alerta em tempo real" },
                  { step: "3", title: "Retirada Segura", desc: "Confirmação digital na retirada" },
                  { step: "4", title: "Histórico Completo", desc: "Registro permanente de todas as entregas" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                      <p className="chegou-text-secondary">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src={smartLocker} 
                alt="Processo ChegouApp" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Funcionalidades Section */}
      <section id="funcionalidades" className="chegou-section bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Recursos que Transformam a Rotina</h2>
            <p className="text-xl chegou-text-secondary max-w-3xl mx-auto">
              Funcionalidades pensadas para otimizar cada etapa do processo de entrega
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Bell, title: "Notificações em Tempo Real", desc: "Alertas instantâneos sobre chegada de encomendas" },
              { icon: QrCode, title: "QR Code para Retirada", desc: "Código único para confirmação segura" },
              { icon: History, title: "Histórico Completo", desc: "Registro de todas as entregas com data e hora" },
              { icon: BarChart3, title: "Relatórios Gerenciais", desc: "Estatísticas para síndicos e administradores" },
              { icon: Smartphone, title: "Interface Intuitiva", desc: "Design pensado para todos os públicos" },
              { icon: Shield, title: "Segurança Avançada", desc: "Proteção de dados e privacidade garantida" }
            ].map((item, index) => (
              <Card key={index} className="chegou-card chegou-hover-transform">
                <CardContent className="p-6">
                  <item.icon className="w-10 h-10 chegou-accent mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="chegou-text-secondary">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card className="chegou-card border-primary/30">
            <CardContent className="p-8 text-center">
              <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">
                Em Breve
              </Badge>
              <h3 className="text-2xl font-bold mb-4">
                <span className="chegou-accent">Armários Inteligentes</span>
              </h3>
              <p className="text-lg chegou-text-secondary max-w-2xl mx-auto">
                Estamos desenvolvendo a integração com armários inteligentes (lockers) para automatizar completamente o processo de entrega e retirada. Implementação prevista para o curto prazo.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefícios Section */}
      <section id="beneficios" className="chegou-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Benefícios para Todos</h2>
            <p className="text-xl chegou-text-secondary max-w-3xl mx-auto">
              Vantagens específicas para cada perfil de usuário
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Moradores */}
            <div className="space-y-8">
              <div className="text-center">
                <Users className="w-16 h-16 chegou-accent mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-4">Para Moradores</h3>
              </div>
              <div className="space-y-6">
                {[
                  { title: "Autonomia Total", desc: "Retire encomendas a qualquer hora" },
                  { title: "Segurança Garantida", desc: "Redução drástica de extravios" },
                  { title: "Privacidade", desc: "Acesso exclusivo com códigos únicos" },
                  { title: "Experiência Moderna", desc: "Interface intuitiva e notificações em tempo real" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 chegou-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                      <p className="chegou-text-secondary">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gestores */}
            <div className="space-y-8">
              <div className="text-center">
                <Building className="w-16 h-16 chegou-accent mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-4">Para Gestores</h3>
              </div>
              <div className="space-y-6">
                {[
                  { title: "Redução da Carga de Trabalho", desc: "Menos tempo dedicado ao gerenciamento manual" },
                  { title: "Organização", desc: "Fim das pilhas de pacotes na portaria" },
                  { title: "Transparência", desc: "Relatórios detalhados e histórico completo" },
                  { title: "Valorização do Condomínio", desc: "Diferencial competitivo que agrega valor" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 chegou-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                      <p className="chegou-text-secondary">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section className="chegou-section bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">O que Nossos Clientes Dizem</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="chegou-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-lg mb-6 italic">
                  "Desde que implementamos o ChegouApp, as reclamações sobre entregas caíram 90%. Os moradores estão muito satisfeitos."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">CS</span>
                  </div>
                  <div>
                    <p className="font-semibold">Carlos Silva</p>
                    <p className="chegou-text-secondary">Síndico</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="chegou-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-lg mb-6 italic">
                  "Finalmente posso receber minhas encomendas sem depender da portaria. Prático e seguro!"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">AO</span>
                  </div>
                  <div>
                    <p className="font-semibold">Ana Oliveira</p>
                    <p className="chegou-text-secondary">Moradora</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="chegou-section">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold">
                  Transforme a Gestão de Encomendas do Seu Condomínio
                </h2>
                <p className="text-xl chegou-text-secondary">
                  Dê o próximo passo para modernizar seu condomínio e proporcionar mais segurança, praticidade e satisfação aos moradores.
                </p>
              </div>
              <Card className="chegou-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Solicite uma Demonstração Gratuita</h3>
                  <p className="chegou-text-secondary mb-6">
                    Nossa equipe irá apresentar todas as funcionalidades do ChegouApp e como ele pode ser personalizado para as necessidades específicas do seu condomínio.
                  </p>
                  <Button className="chegou-button w-full text-lg py-6">
                    Agendar Demonstração
                  </Button>
                </CardContent>
              </Card>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Entre em Contato</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 chegou-accent" />
                    <span className="chegou-text-secondary">(11) 4321-1234</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 chegou-accent" />
                    <span className="chegou-text-secondary">contato@chegouapp.com.br</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 chegou-accent" />
                    <span className="chegou-text-secondary">www.chegouapp.com.br</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="w-5 h-5 chegou-accent" />
                    <span className="chegou-text-secondary">(11) 98765-4321</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={pessoaCelular} 
                alt="Pessoa usando ChegouApp" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/40 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <img src={chegouAppLogo} alt="ChegouApp" className="h-12 w-auto" />
              <p className="chegou-text-secondary">
                Revolucionando o recebimento de encomendas em condomínios.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Produto</h4>
              <ul className="space-y-2 chegou-text-secondary">
                <li><a href="#" className="hover:text-primary transition-colors">Funcionalidades</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Preços</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Demonstração</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Empresa</h4>
              <ul className="space-y-2 chegou-text-secondary">
                <li><a href="#" className="hover:text-primary transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Carreiras</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Suporte</h4>
              <ul className="space-y-2 chegou-text-secondary">
                <li><a href="#" className="hover:text-primary transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 text-center chegou-text-secondary">
            <p>&copy; 2024 ChegouApp. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

