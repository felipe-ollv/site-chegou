import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import {
  Smartphone,
  Shield,
  Clock,
  Bell,
  LockKeyhole,
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion.jsx'
import { motion } from 'framer-motion'
import './App.css'

// Importar imagens
import chegouAppLogo from './assets/chegouapp_logo.png'
import appInterface from './assets/mock2.png'
import smartLocker from './assets/chegouapp_infografico_final_v2.png'
import pessoaCelular from './assets/porteiro_celular_final.png'
import dashboardMockup from './assets/dashboard-mockup.png'
import mobileMockup from './assets/mobile-mockup.png'

// Variantes de animação
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true }
}

const fadeInLeft = {
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true }
}

const fadeInRight = {
  initial: { opacity: 0, x: 40 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

function Home() {
  const [isVisible, setIsVisible] = useState({})

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
          <div className="chegou-button font-semibold">
          </div>
        </div>
      </header>

      <section id="inicio" className="chegou-section pt-40 md:pt-32 pb-20 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-4">
                <Badge className="bg-primary/20 text-primary border-primary/30">
                  Revolucionando Condomínios
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-foreground">Chegou</span>
                  <span className="chegou-accent">App!</span>
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src={dashboardMockup}
                  alt="Dashboard ChegouApp"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -bottom-8 -right-8 w-48 md:w-56 z-20"
              >
                <img
                  src={mobileMockup}
                  alt="Notificação Mobile"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problema Section */}
      <section className="chegou-section bg-secondary/20 pt-32 pb-20 scroll-mt-24">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-6">Os Desafios das Entregas em Condomínios</h2>
            <p className="text-xl chegou-text-secondary max-w-3xl mx-auto">
              Com o crescimento do e-commerce, os condomínios enfrentam desafios cada vez maiores na gestão de encomendas
            </p>
          </motion.div>
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: Package, title: "Volume Crescente", desc: "Aumento de 161% nas entregas online..." },
              { icon: Clock, title: "Dependência de Horários", desc: "Moradores limitados aos horários da portaria" },
              { icon: Shield, title: "Segurança Comprometida", desc: "Risco de extravios e violação de pacotes" },
              { icon: Building, title: "Sobrecarga da Portaria", desc: "Porteiros sobrecarregados com gestão manual" }
            ].map((item, index) => (
              <motion.div key={index} variants={staggerItem}>
                <Card className="chegou-card chegou-hover-transform">
                  <CardContent className="p-6 text-center">
                    <item.icon className="w-12 h-12 chegou-accent mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="chegou-text-secondary">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Solução Section */}
      <section className="chegou-section pt-32 pb-20 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-8"
              {...fadeInLeft}
            >
              <div className="space-y-4">
                <h2 className="text-4xl font-bold">
                  Como o Chegou<span className="chegou-accent">App!</span> Resolve
                </h2>
                <p className="text-xl chegou-text-secondary">
                  Uma solução completa que conecta portaria, moradores e gestores em um fluxo inteligente e seguro
                </p>
              </div>
              <div className="space-y-6">
                {[
                  { step: "1", title: "Registro Digital", desc: "Porteiro registra a encomenda" },
                  { step: "2", title: "Notificação Instantânea", desc: "Morador recebe alerta em tempo real" },
                  { step: "3", title: "Retirada Segura", desc: "Confirmação digital na retirada" },
                  { step: "4", title: "Histórico Completo", desc: "Registro de todas as entregas" }
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                      <p className="chegou-text-secondary">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              className="relative"
              {...fadeInRight}
            >
              <img
                src={smartLocker}
                alt="Processo ChegouApp"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Funcionalidades Section */}
      <section id="funcionalidades" className="chegou-section bg-secondary/20 pt-32 pb-20 scroll-mt-24">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-6">Recursos que Transformam a Rotina</h2>
            <p className="text-xl chegou-text-secondary max-w-3xl mx-auto">
              Funcionalidades pensadas para otimizar cada etapa do processo de entrega
            </p>
          </motion.div>
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: Bell, title: "Notificações em Tempo Real", desc: "Alertas instantâneos sobre chegada de encomendas" },
              { icon: LockKeyhole, title: "Código para Retirada", desc: "Código único para confirmação segura" },
              { icon: History, title: "Histórico Completo", desc: "Registro de todas as entregas com data e hora" },
              { icon: BarChart3, title: "Relatórios Gerenciais", desc: "Estatísticas para síndicos e administradores" },
              { icon: Smartphone, title: "Interface Intuitiva", desc: "Design pensado para todos os públicos" },
              { icon: Shield, title: "Segurança Avançada", desc: "Proteção de dados e privacidade garantida" }
            ].map((item, index) => (
              <motion.div key={index} variants={staggerItem}>
                <Card className="chegou-card chegou-hover-transform">
                  <CardContent className="p-6">
                    <item.icon className="w-10 h-10 chegou-accent mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="chegou-text-secondary">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            {...fadeInUp}
          >
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
          </motion.div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section id="beneficios" className="chegou-section pt-32 pb-20 scroll-mt-24">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-6">Benefícios para Todos</h2>
            <p className="text-xl chegou-text-secondary max-w-3xl mx-auto">
              Vantagens específicas para cada perfil de usuário
            </p>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Moradores */}
            <motion.div 
              className="space-y-8"
              {...fadeInLeft}
            >
              <div className="text-center">
                <Users className="w-16 h-16 chegou-accent mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-4">Para Moradores</h3>
              </div>
              <div className="space-y-4">
                {[
                  { icon: Bell, title: "Notificações Instantâneas", desc: "Receba alertas quando sua encomenda chegar" },
                  { icon: Clock, title: "Disponibilidade 24/7", desc: "Retire sua encomenda no seu próprio horário" },
                  { icon: CheckCircle, title: "Confirmação Digital", desc: "Comprovante de retirada na palma da mão" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <item.icon className="w-6 h-6 chegou-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="chegou-text-secondary text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Síndicos e Administradoras */}
            <motion.div 
              className="space-y-8"
              {...fadeInRight}
            >
              <div className="text-center">
                <Building className="w-16 h-16 chegou-accent mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-4">Para Síndicos e Administradoras</h3>
              </div>
              <div className="space-y-4">
                {[
                  { icon: BarChart3, title: "Relatórios Detalhados", desc: "Análises completas do fluxo de encomendas" },
                  { icon: Shield, title: "Controle Total", desc: "Rastreabilidade completa de todas as operações" },
                  { icon: Users, title: "Gestão Simplificada", desc: "Redução de reclamações e conflitos" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <item.icon className="w-6 h-6 chegou-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="chegou-text-secondary text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="chegou-section bg-secondary/20 pt-32 pb-20 scroll-mt-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-6">Perguntas Frequentes</h2>
            <p className="text-xl chegou-text-secondary">
              Tire suas dúvidas sobre o ChegouApp
            </p>
          </motion.div>
          <motion.div
            {...fadeInUp}
          >
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question: "Como funciona o registro de encomendas?",
                  answer: "O porteiro registra a encomenda através de um formulário simples no aplicativo, capturando foto, dados do remetente e unidade de destino. O sistema notifica automaticamente o morador."
                },
                {
                  question: "É seguro guardar dados de encomendas?",
                  answer: "Sim! O ChegouApp utiliza criptografia de ponta a ponta e está em conformidade com a LGPD. Todos os dados são protegidos e armazenados com segurança."
                },
                {
                  question: "Qual é o custo de implementação?",
                  answer: "O ChegouApp oferece planos flexíveis adaptados ao tamanho do seu condomínio. Entre em contato conosco para uma proposta personalizada."
                },
                {
                  question: "Preciso de treinamento para usar?",
                  answer: "A interface é intuitiva e foi desenvolvida pensando em facilidade de uso. Oferecemos suporte completo e materiais de treinamento para sua equipe."
                }
              ].map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="chegou-section pt-32 pb-20 scroll-mt-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-6">Entre em Contato</h2>
            <p className="text-xl chegou-text-secondary">
              Estamos prontos para transformar a gestão de encomendas do seu condomínio
            </p>
          </motion.div>
          <motion.div
            className="grid mx:grid-cols-3 gap-8 mb-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: Phone, title: "Telefone", value: "(11) 94107-6151" },
              { icon: Mail, title: "Email", value: "felipe@chegou-app.com" },
              { icon: MessageCircle, title: "WhatsApp", value: "Envie uma mensagem" }
            ].map((item, index) => (
              <motion.div key={index} variants={staggerItem}>
                <Card className="chegou-card text-center">
                  <CardContent className="p-6">
                    <item.icon className="w-12 h-12 chegou-accent mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="chegou-text-secondary">{item.value}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="text-center"
            {...fadeInUp}
          >
            <Button
              size="lg"
              className="chegou-button text-lg px-12 py-6"
            >
              <a href="https://wa.me/5511941076151?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20demonstra%C3%A7%C3%A3o%20do%20ChegouApp!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                Solicitar Demonstração Gratuita
              </a>
              
            </Button>
          </motion.div>
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
                <li><a href="#funcionalidades" className="hover:text-primary transition-colors">Funcionalidades</a></li>
                {/* <li><a href="#" className="hover:text-primary transition-colors">Preços</a></li> */}
                {/* <li><a href="#" className="hover:text-primary transition-colors">Demonstração</a></li> */}
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Empresa</h4>
              <ul className="space-y-2 chegou-text-secondary">
                <li><a href="#inicio" className="hover:text-primary transition-colors">Sobre</a></li>
                {/* <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li> */}
                {/* <li><a href="#" className="hover:text-primary transition-colors">Carreiras</a></li> */}
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Suporte</h4>
              <ul className="space-y-2 chegou-text-secondary">
                <li>
                  <a href="https://wa.me/5511941076151"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                    WhatsApp
                  </a>
                </li>
                {/* <li><a href="#" className="hover:text-primary transition-colors">Contato</a></li> */}
                {/* <li><a href="#" className="hover:text-primary transition-colors">Status</a></li> */}
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 text-center chegou-text-secondary">
            <p>&copy; 2026 ChegouApp! Todos os direitos reservados.</p>
            <a href="/politica-de-privacidade" className="hover:text-primary transition-colors">
              Política de Privacidade
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
