import React, { useState, useEffect } from 'react';

function App() {
  // O conteúdo do quiz é carregado com questões no estilo CPA-20
  const quizData = {
    "questions": [
      {
        "question": "De acordo com a CVM, qual é o principal objetivo de um Fundo de Investimento em Direitos Creditórios (FIDC)?",
        "answerOptions": [
          {
            "text": "Investir em ações de empresas de alta capitalização.",
            "isCorrect": false,
            "rationale": "FIDC não investe primariamente em ações, mas sim em direitos creditórios."
          },
          {
            "text": "Adquirir direitos creditórios originados de operações comerciais, financeiras, imobiliárias, de arrendamento mercantil, entre outras.",
            "isCorrect": true,
            "rationale": "O FIDC é um fundo que adquire créditos que empresas ou pessoas têm a receber, transformando-os em títulos negociáveis."
          },
          {
            "text": "Aplicar exclusivamente em títulos públicos federais.",
            "isCorrect": false,
            "rationale": "Essa é a característica de alguns fundos de renda fixa, não de FIDCs."
          },
          {
            "text": "Financiar projetos de infraestrutura de longo prazo.",
            "isCorrect": false,
            "rationale": "Embora possa haver FIDCs que indiretamente financiem, o objetivo principal é a aquisição de direitos creditórios."
          }
        ],
        "hint": "Pense no tipo de ativo que dá nome ao fundo.",
        "questionType": "UNSPECIFIED_QUESTION_TYPE"
      },
      {
        "question": "Qual dos seguintes riscos é considerado 'não-sistemático' ou 'específico' em um investimento?",
        "answerOptions": [
          {
            "text": "Risco de mercado (variações da economia como um todo).",
            "isCorrect": false,
            "rationale": "O risco de mercado é um risco sistemático, que afeta todo o mercado."
          },
          {
            "text": "Risco de taxa de juros (mudanças nas taxas de juros básicas).",
            "isCorrect": false,
            "rationale": "O risco de taxa de juros é um risco sistemático."
          },
          {
            "text": "Risco de liquidez (dificuldade de vender um ativo rapidamente).",
            "isCorrect": false,
            "rationale": "O risco de liquidez pode ser específico, mas a opção mais clara para risco não-sistemático é o risco da empresa."
          },
          {
            "text": "Risco da empresa (greve de funcionários, má gestão, lançamento de produto fracassado).",
            "isCorrect": true,
            "rationale": "O risco da empresa é um risco não-sistemático, pois é específico daquela empresa e pode ser mitigado pela diversificação."
          }
        ],
        "hint": "Pense no risco que pode ser mitigado pela diversificação de carteira.",
        "questionType": "UNSPECIFIED_QUESTION_TYPE"
      },
      {
        "question": "Um investidor que busca alta liquidez e baixo risco, mesmo que com menor rentabilidade, deveria priorizar qual tipo de investimento?",
        "answerOptions": [
          {
            "text": "Ações de empresas de tecnologia.",
            "isCorrect": false,
            "rationale": "Ações de tecnologia geralmente têm alta volatilidade e risco."
          },
          {
            "text": "Fundos de ações.",
            "isCorrect": false,
            "rationale": "Fundos de ações têm risco e volatilidade maiores que investimentos de baixo risco."
          },
          {
            "text": "CDBs com liquidez diária ou Fundos DI.",
            "isCorrect": true,
            "rationale": "CDBs com liquidez diária e Fundos DI são conhecidos por oferecerem alta liquidez e baixo risco, adequados para quem busca preservar capital e ter acesso rápido ao dinheiro."
          },
          {
            "text": "Imóveis para aluguel.",
            "isCorrect": false,
            "rationale": "Imóveis têm baixa liquidez."
          }
        ],
        "hint": "Pense em investimentos de renda fixa com resgate rápido.",
        "questionType": "UNSPECIFIED_QUESTION_TYPE"
      },
      {
        "question": "Qual é a principal função do Comitê de Política Monetária (COPOM) no Brasil?",
        "answerOptions": [
          {
            "text": "Definir as regras para a abertura de novas empresas.",
            "isCorrect": false,
            "rationale": "Isso é função de órgãos reguladores de empresas, não do COPOM."
          },
          {
            "text": "Estabelecer a meta da Taxa SELIC e o regime de metas para a inflação.",
            "isCorrect": true,
            "rationale": "O COPOM é o órgão do Banco Central responsável por definir a meta da Taxa SELIC, que é a taxa básica de juros da economia, com o objetivo de controlar a inflação."
          },
          {
            "text": "Fiscalizar o mercado de capitais e as bolsas de valores.",
            "isCorrect": false,
            "rationale": "Essa é a função principal da CVM (Comissão de Valores Mobiliários)."
          },
          {
            "text": "Gerenciar a dívida pública federal.",
            "isCorrect": false,
            "rationale": "A gestão da dívida pública é responsabilidade do Tesouro Nacional."
          }
        ],
        "hint": "Pense na taxa de juros básica da economia brasileira.",
        "questionType": "UNSPECIFIED_QUESTION_TYPE"
      },
      {
        "question": "O que é o 'duration' de um título de renda fixa?",
        "answerOptions": [
          {
            "text": "O prazo total até o vencimento do título.",
            "isCorrect": false,
            "rationale": "O prazo é o tempo até o vencimento, enquanto duration é uma medida de sensibilidade."
          },
          {
            "text": "A medida de risco de crédito do emissor.",
            "isCorrect": false,
            "rationale": "O risco de crédito é avaliado por agências de rating, não pelo duration."
          },
          {
            "text": "A sensibilidade do preço de um título às variações nas taxas de juros.",
            "isCorrect": true,
            "rationale": "Duration é uma medida que indica a sensibilidade do preço de um título de renda fixa a variações nas taxas de juros. Quanto maior o duration, maior a sensibilidade."
          },
          {
            "text": "O valor nominal do título no momento da emissão.",
            "isCorrect": false,
            "rationale": "O valor nominal é o valor de face do título."
          }
        ],
        "hint": "É uma métrica que ajuda a entender como o preço de um título muda com as taxas de juros.",
        "questionType": "UNSPECIFIED_QUESTION_TYPE"
      },
      {
        "question": "Qual das seguintes alternativas NÃO é uma característica de um Fundo de Investimento Imobiliário (FII)?",
        "answerOptions": [
          {
            "text": "Seus rendimentos são isentos de Imposto de Renda para pessoas físicas, desde que atendam a certas condições.",
            "isCorrect": false,
            "rationale": "A isenção de IR sobre os rendimentos (aluguéis) para pessoas físicas é uma característica dos FIIs, sob certas condições."
          },
          {
            "text": "É negociado em bolsa de valores como uma ação.",
            "isCorrect": false,
            "rationale": "Os FIIs são negociados na B3, assim como ações."
          },
          {
            "text": "Seu patrimônio é composto majoritariamente por ações de empresas do setor imobiliário.",
            "isCorrect": true,
            "rationale": "O patrimônio de um FII é composto por imóveis (prontos ou em construção), direitos reais sobre imóveis, cotas de outros FIIs, ou títulos e valores mobiliários relacionados ao setor imobiliário, e não majoritariamente por ações de empresas do setor."
          },
          {
            "text": "Distribui, no mínimo, 95% dos lucros líquidos auferidos, apurados segundo regime de caixa, semestralmente.",
            "isCorrect": false,
            "rationale": "Essa é uma regra importante para a distribuição de rendimentos dos FIIs."
          }
        ],
        "hint": "Pense no que o FII investe diretamente.",
        "questionType": "UNSPECIFIED_QUESTION_TYPE"
      },
      {
        "question": "O que é o 'spread bancário'?",
        "answerOptions": [
          {
            "text": "A diferença entre o preço de compra e venda de uma ação.",
            "isCorrect": false,
            "rationale": "Essa é a diferença entre o preço de oferta (bid) e o preço de demanda (ask) de um ativo no mercado."
          },
          {
            "text": "A taxa de juros cobrada pelos bancos em empréstimos.",
            "isCorrect": false,
            "rationale": "A taxa de juros é o valor total cobrado, não o spread."
          },
          {
            "text": "A diferença entre a taxa de juros que o banco paga ao captar recursos e a taxa que ele cobra ao emprestar.",
            "isCorrect": true,
            "rationale": "O spread bancário é a margem de lucro do banco, a diferença entre o custo de captação (o que ele paga para pegar dinheiro) e o custo de empréstimo (o que ele cobra para emprestar dinheiro)."
          },
          {
            "text": "O lucro líquido de uma instituição financeira em um determinado período.",
            "isCorrect": false,
            "rationale": "O lucro líquido é o resultado final após todas as receitas e despesas."
          }
        ],
        "hint": "É a margem de lucro dos bancos na intermediação financeira.",
        "questionType": "UNSPECIFIED_QUESTION_TYPE"
      },
      {
        "question": "Qual o principal objetivo da ANBIMA?",
        "answerOptions": [
          {
            "text": "Fiscalizar as operações de câmbio no Brasil.",
            "isCorrect": false,
            "rationale": "A fiscalização do câmbio é feita pelo Banco Central."
          },
          {
            "text": "Regular e autorizar a abertura de novos bancos no país.",
            "isCorrect": false,
            "rationale": "A autorização de bancos é feita pelo Banco Central."
          },
          {
            "text": "Representar as instituições do mercado de capitais e de investimentos, autorregular e certificar profissionais.",
            "isCorrect": true,
            "rationale": "A ANBIMA (Associação Brasileira das Entidades dos Mercados Financeiro e de Capitais) atua na autorregulação, representação e certificação de profissionais do mercado financeiro e de capitais."
          },
          {
            "text": "Definir a política fiscal do governo federal.",
            "isCorrect": false,
            "rationale": "A política fiscal é definida pelo governo (Ministério da Fazenda, etc.)."
          }
        ],
        "hint": "Pense em uma entidade que certifica profissionais do mercado financeiro.",
        "questionType": "UNSPECIFIED_QUESTION_TYPE"
      },
      {
        "question": "Em relação à tributação, qual a principal diferença entre um CDB e uma LCI/LCA para uma pessoa física?",
        "answerOptions": [
          {
            "text": "O CDB é isento de IR, enquanto LCI/LCA são tributados.",
            "isCorrect": false,
            "rationale": "O oposto é verdadeiro: LCI/LCA são isentos para pessoa física, enquanto CDB é tributado."
          },
          {
            "text": "Ambos são isentos de Imposto de Renda para pessoa física.",
            "isCorrect": false,
            "rationale": "Apenas LCI/LCA são isentos para pessoa física."
          },
          {
            "text": "O CDB é tributado pelo Imposto de Renda, enquanto LCI/LCA são isentos para pessoa física.",
            "isCorrect": true,
            "rationale": "Os rendimentos de LCI (Letra de Crédito Imobiliário) e LCA (Letra de Crédito do Agronegócio) são isentos de Imposto de Renda para pessoas físicas, enquanto os rendimentos de CDB (Certificado de Depósito Bancário) são tributados conforme tabela regressiva."
          },
          {
            "text": "Ambos são tributados, mas com alíquotas diferentes.",
            "isCorrect": false,
            "rationale": "A principal diferença é a isenção de LCI/LCA."
          }
        ],
        "hint": "Pense nos incentivos fiscais para o setor imobiliário e agronegócio.",
        "questionType": "UNSPECIFIED_QUESTION_TYPE"
      },
      {
        "question": "Qual o significado de 'duration' em um contexto de fundos de investimento de renda fixa?",
        "answerOptions": [
          {
            "text": "O prazo médio ponderado dos ativos do fundo, indicando sua sensibilidade a mudanças nas taxas de juros.",
            "isCorrect": true,
            "rationale": "O duration de um fundo de renda fixa é uma medida de risco de taxa de juros, indicando a sensibilidade do valor do fundo a variações nas taxas de juros. Quanto maior o duration, maior a sensibilidade."
          },
          {
            "text": "A rentabilidade acumulada do fundo desde o seu início.",
            "isCorrect": false,
            "rationale": "A rentabilidade acumulada é o desempenho do fundo, não o duration."
          },
          {
            "text": "O número de cotistas do fundo.",
            "isCorrect": false,
            "rationale": "O número de cotistas é uma métrica de tamanho do fundo, não de risco ou sensibilidade."
          },
          {
            "text": "A taxa de administração cobrada pelo fundo.",
            "isCorrect": false,
            "rationale": "A taxa de administração é um custo do fundo, não o duration."
          }
        ],
        "hint": "É uma medida de risco de taxa de juros para fundos de renda fixa.",
        "questionType": "UNSPECIFIED_QUESTION_TYPE"
      }
    ]
  };

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const currentQuestion = quizData.questions[currentQuestionIndex];

  // Função para lidar com a seleção de uma resposta
  const handleAnswerSelect = (index) => {
    setSelectedAnswerIndex(index);
    setShowFeedback(true); // Mostra o feedback imediatamente após a seleção
    if (currentQuestion.answerOptions[index].isCorrect) {
      setScore(score + 1);
    }
  };

  // Função para ir para a próxima pergunta
  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswerIndex(null); // Reseta a seleção
      setShowFeedback(false); // Esconde o feedback para a próxima pergunta
    } else {
      setQuizCompleted(true); // Marca o quiz como completo
    }
  };

  // Reinicia o quiz
  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswerIndex(null);
    setShowFeedback(false);
    setScore(0);
    setQuizCompleted(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-teal-100 flex items-center justify-center p-4 font-sans">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-2xl flex flex-col gap-6">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
          Quiz de Mercado Financeiro - CPA-20
        </h1>

        {quizCompleted ? (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-green-600 mb-4">Quiz Concluído!</h2>
            <p className="text-xl text-gray-700 mb-6">
              Sua pontuação final: <span className="font-extrabold">{score}</span> de{' '}
              <span className="font-extrabold">{quizData.questions.length}</span>
            </p>
            <button
              onClick={handleRestartQuiz}
              className="px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-200 ease-in-out transform hover:scale-105"
            >
              Refazer Quiz
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            <div className="text-lg text-gray-600 text-center">
              Questão {currentQuestionIndex + 1} de {quizData.questions.length}
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {currentQuestion.question}
            </h2>

            <div className="flex flex-col gap-3">
              {currentQuestion.answerOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => !showFeedback && handleAnswerSelect(index)} // Impede múltiplos cliques após a seleção
                  className={`
                    p-4 rounded-lg border-2 text-left transition duration-200 ease-in-out
                    ${selectedAnswerIndex === index
                      ? option.isCorrect
                        ? 'bg-green-100 border-green-500 text-green-800' // Correta
                        : 'bg-red-100 border-red-500 text-red-800' // Incorreta
                      : 'bg-gray-50 border-gray-300 text-gray-800 hover:bg-gray-100' // Padrão
                    }
                    ${showFeedback && selectedAnswerIndex !== index && option.isCorrect
                      ? 'border-green-500 bg-green-50' // Mostra a correta mesmo se não selecionada
                      : ''
                    }
                    ${showFeedback ? 'cursor-not-allowed' : 'cursor-pointer'}
                  `}
                  disabled={showFeedback} // Desabilita botões após a seleção
                >
                  {option.text}
                </button>
              ))}
            </div>

            {showFeedback && (
              <div className="mt-4 p-4 rounded-lg bg-blue-50 border border-blue-200 text-blue-800">
                <p className="font-semibold mb-2">Explicação:</p>
                <p>
                  {currentQuestion.answerOptions[selectedAnswerIndex]?.rationale ||
                   currentQuestion.answerOptions.find(opt => opt.isCorrect)?.rationale}
                </p>
              </div>
            )}

            <button
              onClick={handleNextQuestion}
              disabled={!showFeedback} // Só habilita o botão "Próximo" depois de uma resposta ser selecionada
              className={`
                mt-6 px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg
                ${!showFeedback
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out transform hover:scale-105'
                }
              `}
            >
              {currentQuestionIndex === quizData.questions.length - 1 ? 'Ver Resultado' : 'Próxima Pergunta'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

