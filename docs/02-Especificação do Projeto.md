# Especificações do Projeto

Com a colaboração ativa dos usuários, definimos com precisão os desafios e focos essenciais do projeto. Realizamos entrevistas online, abordando tópicos predefinidos, para coletar insights valiosos. Essa interação dinâmica permitiu a consolidação dos dados em personas e histórias de usuários, proporcionando uma compreensão mais rica e interativa do problema em questão.

## Personas

![ASTab](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t2-G4-VacinaPlus/assets/128644865/5960f30a-3a5b-4123-af17-09b2476879ab)

![PPTab](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t2-G4-VacinaPlus/assets/128644865/af98dd74-bb52-4bef-b904-469e964f635f)

![MOTab](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t2-G4-VacinaPlus/assets/128644865/5a94cc6d-74dc-4ed0-b714-bd162928b20d)

![GNTab](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t2-G4-VacinaPlus/assets/128644865/752dfb2a-3cdf-4d1e-8899-83ae48469f71)

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... | QUERO/PRECISO ...  |PARA ...                  |
|--------------------|------------------------------------|----------------------------------------|
|Pedro | Desejo organizar adequadamente minhas vacinas | Para não perder tempo |
|Pedro |Desejo ter acesso as informações na palma da mão | Para não ter o risco de perder |
|Guilherme | Desejo que me envie lembretes sobre as datas de vacinação | Por que esqueço com frequência das coisas que não são relacionadas ao meu trabalho |
|Guilherme | Desejo monitorar surtos de doenças específicas | Por que não acompanho as notícias pela tv |
|Adriana | Desejo monitorar as vacinas da minha família | Por que não quer perder os dias certos |
|Adriana | Desejo informações atualizadas sobre os protocolos de vacinação | Para que eu esteja sempre bem informada |
|Maria | Desejo acessar rapidamente o histórico de vacinação sempre que necessário | Para que seja possível monitorar as informações com facilidade |
|Maria | Desejo controle sobre as vacinas | Para que todas as informações estejam em um lugar só |

## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Atualmente, o uso de papel para registros de vacinas é considerado antiquado e restritivo, exigindo constantes adições de novas folhas para atualizações. Além disso, o processo é manual e há o risco de perder documentos tão importantes como os cartões de vacinação. Para solucionar essas questões, imaginamos um sistema que simplifica e organiza o registro de vacinas.

Dada a prevalência de dispositivos eletrônicos como computadores, tablets e smartphones, propomos aproveitar essa tecnologia para desenvolver uma aplicação móvel. Com esta aplicação, os usuários teriam controle total sobre suas vacinas na ponta dos dedos, de maneira fácil e organizada.

### Descrição Geral da Proposta

Descubra o Vacina+, a solução completa para gerenciar seu histórico de vacinação de forma simples e eficaz, diretamente na ponta dos seus dedos! Esqueça a papelada e as preocupações - com o Vacina+, você pode registrar suas vacinas de maneira rápida, fácil e organizada. Mantenha o controle total sobre quais vacinas você já tomou, suas doses, datas importantes e até mesmo receba lembretes sobre suas próximas vacinações necessárias. Armazene e acesse informações importantes, históricos de vacinação e quaisquer vacinas pendentes com qualidade, rapidez e eficiência. Com o Vacina+, você tem o poder de gerenciar sua saúde com total confiança e controle.

### Processo 1 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 1. Em seguida, apresente o modelo do processo 1, descrito no padrão BPMN. 

![Processo 1](img/02-bpmn-proc1.png)

### Processo 2 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 2. Em seguida, apresente o modelo do processo 2, descrito no padrão BPMN.

![Processo 2](img/02-bpmn-proc2.png)

## Indicadores de Desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores.  

![Indicadores de Desempenho](img/02-indic-desemp.png)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O aplicativo deve permitir ao usuário criar uma conta.  | ALTA | 
|RF-002| O aplicativo deve permitir que o usuário faça login.  | ALTA |
|RF-003| O aplicativo deve permitir ao usuário gerenciar seu cadastro.   | ALTA |
|RF-004| O aplicativo deve fornecer um sistema de notificação para lembrar o usuário sobre datas importantes relacionadas à administração de vacinas, como datas de reforço ou atualizações necessárias.   | BAIXA |
|RF-005| O aplicativo deve permitir ao usuário gerenciar o cadastro das vacinas.   | ALTA |
|RF-006| O aplicativo deve mostrar o histórico das vacinas cadastradas pelo usuário.   | ALTA |
|RF-007| O aplicativo deve permitir ao usuário buscar informações sobre diferentes tipos de vacinas disponíveis, incluindo sua eficácia, efeitos colaterais e recomendações de uso.    | ALTA |
|RF-008| O aplicativo deve permitir ao usuário exportar ou imprimir o histórico de vacinas para compartilhamento com profissionais de saúde ou para documentação pessoal.    | MÉDIA |
|RF-009| O aplicativo deve permitir acesso à documentação de termos e condições de uso e de políticas de privacidade.  | BAIXA |
|RF-010| O aplicativo deve permitir ao usuário buscar informações sobre vacinas disponíveis.   | MÉDIA |
|RF-011| O aplicativo deve notificar o usuário sobre novidades relacionadas à saúde pública, como campanhas de vacinação ou atualizações de políticas de imunização.   | BAIXA |
|RF-012| O aplicativo deve possibilitar ao usuário adicionar informações sobre alergias ou restrições médicas relevantes para a administração de vacinas. | MÉDIA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | ALTA | 
|RNF-002| O sistema deve ser compatível com uma variedade de dispositivos móveis. |  ALTA | 
|RNF-003| O sistema deve garantir a segurança dos dados do usuário, utilizando criptografia para proteger informações sensíveis. |  ALTA | 
|RNF-004| O sistema deve ter um baixo tempo de resposta para qualquer interação do usuário, garantindo uma experiência ágil e responsiva. |  ALTA | 
|RNF-005| O sistema deve seguir as diretrizes de design de interface do usuário (UI) e experiência do usuário (UX) . |  ALTA |  
|RNF-006| O sistema deve ser disponibilizado publicamente no GitHub. |  ALTA | 

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre. |
|02| A equipe não pode subcontratar o desenvolvimento do trabalho. |
|03| O aplicativo deve se restringir às tecnologias propostas pelo curso. |

## Diagrama de Casos de Uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos. 

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Casos de Uso”.

> **Links Úteis**:
> - [Criando Casos de Uso](https://www.ibm.com/docs/pt-br/elm/6.0?topic=requirements-creating-use-cases)
> - [Como Criar Diagrama de Caso de Uso: Tutorial Passo a Passo](https://gitmind.com/pt/fazer-diagrama-de-caso-uso.html/)
> - [Lucidchart](https://www.lucidchart.com/)
> - [Astah](https://astah.net/)
> - [Diagrams](https://app.diagrams.net/)

# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. 

A matriz deve contemplar todos os elementos relevantes que fazem parte do sistema, conforme a figura meramente ilustrativa apresentada a seguir.

![Exemplo de matriz de rastreabilidade](img/02-matriz-rastreabilidade.png)

> **Links Úteis**:
> - [Artigo Engenharia de Software 13 - Rastreabilidade](https://www.devmedia.com.br/artigo-engenharia-de-software-13-rastreabilidade/12822/)
> - [Verificação da rastreabilidade de requisitos usando a integração do IBM Rational RequisitePro e do IBM ClearQuest Test Manager](https://developer.ibm.com/br/tutorials/requirementstraceabilityverificationusingrrpandcctm/)
> - [IBM Engineering Lifecycle Optimization – Publishing](https://www.ibm.com/br-pt/products/engineering-lifecycle-optimization/publishing/)


# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

![Diagrama de rede simplificado notação francesa (método francês)](img/02-diagrama-rede-simplificado.png)

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![Gráfico de Gantt](img/02-grafico-gantt.png)

## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

![Simple Project Timeline](img/02-project-timeline.png)

## Gestão de Orçamento

O processo de determinar o orçamento do projeto é uma tarefa que depende, além dos produtos (saídas) dos processos anteriores do gerenciamento de custos, também de produtos oferecidos por outros processos de gerenciamento, como o escopo e o tempo.

![Orçamento](img/02-orcamento.png)
