import React from "react";
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPolitic() {

  const navigate = useNavigate()

  return (
    <div className="max-w-3xl mx-auto p-6 text-white leading-relaxed">
      {/* TERMOS DE USO */}
      <h1 className="text-3xl font-bold mb-4">Termos de Uso</h1>
      <p className="text-sm mb-6">Versão 1.2 – Vigência: 30 de setembro de 2025</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Bem-vindo ao ChegouApp!</h2>
      <p>
        Ao acessar ou usar este aplicativo, você concorda integralmente com estes
        Termos de Uso e com nossa Política de Privacidade. Caso não concorde, não
        utilize o App.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">1. Aceitação dos Termos</h2>
      <p>
        Ao criar uma conta ou utilizar o App, você declara ter lido, compreendido
        e aceitado estes Termos e a Política de Privacidade.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">2. Descrição do Serviço</h2>
      <p>
        O App é uma ferramenta de comunicação entre moradores e administradores
        de condomínios para registrar e notificar o recebimento de encomendas.
      </p>
      <p className="mt-2">
        O App <strong>não gerencia, armazena, transporta, fiscaliza ou se
        responsabiliza</strong> por encomendas, extravios, danos, atrasos, trocas
        ou qualquer outra situação física relacionada às mercadorias.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">3. Cadastro e Conta</h2>
      <p>
        O usuário deve fornecer dados verdadeiros e atualizados. Cada usuário é
        responsável pelas informações cadastradas.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">4. Uso Permitido</h2>
      <p>O App deve ser utilizado apenas para comunicação sobre o recebimento de encomendas. É proibido:</p>
      <ul className="list-disc pl-6 mt-2 space-y-1">
        <li>Cobrar valores ou realizar transações financeiras;</li>
        <li>Resolver disputas comerciais ou pessoais;</li>
        <li>Garantir retirada, troca, devolução ou entrega de encomendas;</li>
        <li>Publicar conteúdo ilegal, ofensivo ou prejudicial.</li>
      </ul>

      <h2 className="text-lg font-semibold mt-6 mb-2">5. Conteúdo e Limitação</h2>
      <p>
        As informações inseridas pelos usuários são de responsabilidade exclusiva
        de quem as publicou. O App não valida, aprova ou garante a veracidade
        dessas informações.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">6. Propriedade Intelectual</h2>
      <p>
        O App, suas marcas, código, design e identidade visual são de propriedade
        exclusiva da Empresa.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">7. Isenção e Limitação de Responsabilidade</h2>
      <p>
        O App não se responsabiliza por problemas, perdas, danos, extravios,
        atrasos ou defeitos relacionados a encomendas.
      </p>
      <p className="mt-2">
        Qualquer disputa sobre encomendas deve ser resolvida diretamente entre os
        envolvidos (usuários, administradores, transportadoras, síndico etc.),
        sem envolver o App.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">8. Encerramento</h2>
      <p>
        O App pode suspender ou encerrar contas que violem estes Termos. O
        cancelamento não remove registros históricos, conforme legislação e
        Política de Privacidade.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">9. Lei Aplicável e Foro</h2>
      <p>
        Estes Termos são regidos pela legislação brasileira. Eventuais disputas
        serão resolvidas no foro da cidade/estado do condomínio.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">10. Contato</h2>
      <p>Dúvidas: felipe@app-chegou.com.br</p>

      <h2 className="text-lg font-semibold mt-6 mb-2">Resumo</h2>
      <p>
        O ChegouApp! é apenas uma ferramenta de comunicação.{" "}
        <strong>Não nos responsabilizamos</strong> por qualquer questão física ou
        logística das encomendas. O uso do App implica aceitação total desta
        isenção.
      </p>

      {/* POLÍTICA DE PRIVACIDADE */}
      <h1 className="text-3xl font-bold mt-12 mb-4">Política de Privacidade</h1>
      <p className="text-sm mb-6">Versão 1.2 – Vigência: 30 de setembro de 2025</p>

      <h2 className="text-lg font-semibold mt-6 mb-2">1. Coleta de Informações</h2>
      <p>
        Coletamos apenas dados essenciais para operação do App:
        <br />- Cadastro: nome, sobrenome, bloco e apartamento;
        <br />- Histórico de notificações sobre encomendas.
      </p>
      <p className="mt-2">
        Não coletamos informações sobre conteúdo, valor, transportadora,
        rastreamento externo ou ciclo de vida das encomendas.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">2. Uso das Informações</h2>
      <p>
        Os dados são usados exclusivamente para comunicação interna sobre o
        recebimento de encomendas, sem qualquer intermediação logística,
        financeira ou física.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">3. Compartilhamento</h2>
      <p>Os dados não serão repassados a terceiros fora do contexto do condomínio.</p>

      <h2 className="text-lg font-semibold mt-6 mb-2">4. Armazenamento e Segurança</h2>
      <p>
        Os dados são armazenados de forma segura, conforme a legislação brasileira
        de proteção de dados. O App não mantém informações sobre movimentação
        física das encomendas.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">5. Cookies e Tecnologias</h2>
      <p>
        Usamos cookies apenas para garantir funcionalidades básicas do App. Não há
        rastreamento de encomendas.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">6. Direitos do Titular</h2>
      <p>
        Você pode consultar, corrigir ou solicitar a exclusão de seus dados pelo
        e-mail: felipe@app-chegou.com.br
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">7. Crianças</h2>
      <p>O App não é destinado a menores de 18 anos.</p>

      <h2 className="text-lg font-semibold mt-6 mb-2">8. Alterações</h2>
      <p>
        Podemos alterar esta Política a qualquer momento. Usuários serão
        notificados via App ou e-mail.
      </p>

      <h2 className="text-lg font-semibold mt-6 mb-2">9. Contato</h2>
      <p>Para dúvidas sobre privacidade: felipe@app-chegou.com.br</p>

      <h2 className="text-lg font-semibold mt-6 mb-2">Resumo</h2>
      <p>
        O ChegouApp! é apenas uma ferramenta de comunicação.{" "}
        <strong>Não nos responsabilizamos</strong> por perdas, danos ou atrasos
        relacionados a encomendas. O uso do App implica ciência e aceitação desta
        Política.
      </p>

      <button
        onClick={() => navigate('/')}
        className="fixed bottom-6 right-6 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/90 transition"
        aria-label="Voltar"
      >
        <ArrowLeft size={24} />
      </button>

    </div>
  );
}
