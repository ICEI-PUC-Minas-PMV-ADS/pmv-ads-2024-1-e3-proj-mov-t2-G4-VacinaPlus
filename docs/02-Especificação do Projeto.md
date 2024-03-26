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

### Processo 1 – Usuário / Sistema

Visão geral da interação do Usuário e sistema.

- Melhoria podemos citar uso de imagens e ícones sugestivos para melhorar a experiência do usuário.

![Processo_1 drawio (1)](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t2-G4-VacinaPlus/assets/77369235/c2a33a87-4dbb-43b0-b3f1-18c8b2f0719c)


### Processo 2 – Cadastro de Usuário

Abaixo estamos exibindo como um novo usuário pode se cadastrar em nosso sistema.

- Melhoria que pode ser implementada é a de que a partir do término da inserção das informações cadastrais, o usuário ser direcionado para a tela de Login.

![Processo_2 drawio](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t2-G4-VacinaPlus/assets/77369235/99f93e3a-eb01-49f1-84cb-3aa61981dfb5)

## Indicadores de Desempenho

| Nº | Indicador | Objetivo | Descrição | Cálculo | Fonte de Dados | Perspectiva | Meta | Periodicidade |
|----|-----------|----------|-----------|---------|----------------|-------------|------|---------------|
|	1	| Cadastros na plataforma | Medir a quantidade de cadastros na plataforma | Quando novos usuário fizerem cadastros contabilizar esse número. | N° de cadastros no mês | Banco de dados | Crescimento da aplicação | 50 novos usuários por mês | Contabilizados no mês |
|	2	| Quantidade de reclamações | Medir a quantidade de reclamações | Saber quais pontos incomodam os usuários | Play Store e Apple Store | Relatórios e área de mensagens da Play Store e Apple Store | Melhoria da Aplicação | Nenhuma reclamação | Contabilizados no mês |  
|	3	| Quantidade de doses tomadas | Medir se as doses para cada usuário estão sendo tomadas | Saber se a cobertura vacinal está correta | Doses por faixa etária | Banco de dados | Aumentar a cobertura vacinal e aumento da imunidade de rebanho | Atingir mín de 80% da cobertura vacinal | Contabilizados no mês |
|	4	| Retorno para doses de reforço | Medir o índice de retorno para vacinas com mais de uma dose | Informar ao usuário que ainda tem doses para serem tomadas | Quantidade de doses para uma determinada doença | Banco de dados | Impedir o cenário atual de baixo índice de adesão à doses de reforço | Mín de 80% de doses de reforço | Contabilizados no mês |
|	5	| Nível de satisfação do cliente | Medir o quanto a aplicação cumpre seu papel | Medir por índices que a cobertura vacinal está nos índices adequados | Estatísticas da cobertura vacinal | Banco de dados | Atingir os níveis de cobertura vacinal corretos e determinados pela OMS | Cumprir as metas da OMS | Contabilizados no mês |

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

|    CASO DE USO    |         DESCRIÇÃO         |     REQUISITO FUNCIONAL
--------------------| ------------------------- | -----------------------
| Criar Conta | <ul><li>O usuário seleciona a opção de criar uma nova conta.</li><li>O usuário preenche os campos necessários, como nome, e-mail e senha.</li><li>O sistema valida os dados inseridos pelo usuário.</li><li>O sistema cria a conta e redireciona o usuário para a tela de login.</li> | RF-001 |
| Fazer Login | <ul><li>O usuário insere suas credenciais de login (e-mail e senha).</li><li>O sistema verifica as credenciais inseridas pelo usuário.</li><li>Se as credenciais estiverem corretas, o sistema autentica o usuário e o redireciona para a tela principal do aplicativo.</li><li>Se as credenciais estiverem incorretas, o sistema exibe uma mensagem de erro e permite que o usuário tente novamente.</li> | RF-002 |
| Gerenciar Cadastro | <ul><li>O usuário acessa a opção de gerenciar seu cadastro na tela principal do aplicativo.</li><li>O sistema exibe as informações cadastradas pelo usuário e permite que ele as edite conforme necessário.</li><li>O usuário salva as alterações feitas em seu cadastro.</li> | RF-003 |
| Receber Notificações | <ul><li>O usuário recebe notificações sobre datas importantes relacionadas à administração de vacinas e novidades em saúde pública.</li><li>As notificações são exibidas no dispositivo do usuário de acordo com suas preferências de configuração.</li> | RF-004 |
| Cadastrar Vacina | <ul><li> O usuário seleciona a opção de cadastrar uma nova vacina. </li><li> O sistema exibe um formulário onde o usuário pode inserir informações sobre a vacina, como nome, data de administração e outras informações relevantes. </li><li> O usuário salva as informações da vacina. </li> | RF-005 |
| Gerenciar Vacinas | <ul><li> O usuário acessa a opção de gerenciar suas vacinas na tela principal do aplicativo. </li><li> O sistema exibe a lista de vacinas cadastradas pelo usuário e permite que ele as edite, exclua ou adicione novas vacinas conforme necessário. </li> | RF-006 |
| Acessar Informações sobre Vacinas | <ul><li> O usuário seleciona a opção de buscar informações sobre vacinas disponíveis. </li><li> O sistema exibe uma lista de vacinas disponíveis, incluindo informações sobre eficácia, efeitos colaterais e recomendações de uso. </li> | RF-007 |
| Acessar Histórico de Vacinas | <ul><li> O usuário acessa a opção de visualizar o histórico de vacinas na tela principal do aplicativo. </li><li> O sistema exibe uma lista das vacinas previamente cadastradas pelo usuário. </li> | RF-010 |
| Exportar/Imprimir Histórico de Vacinas | <ul><li> O usuário seleciona a opção de exportar ou imprimir o histórico de vacinas. </li><li> O sistema gera um arquivo ou uma visualização imprimível do histórico de vacinas do usuário. </li> | RF-008 |
| Acessar Documentações | <ul><li> O usuário acessa a opção de acessar documentações de termos e condições de uso e políticas de privacidade. </li><li> O sistema exibe as documentações para que o usuário possa revisá-las conforme necessário. </li> | RF-009 |
| Adicionar Informações sobre Alergias ou Restrições Médicas | <ul><li> O usuário acessa a opção de adicionar informações sobre alergias ou restrições médicas relevantes. </li><li> O sistema exibe um formulário onde o usuário pode inserir essas informações. </li><li> O usuário salva as informações adicionadas. </li> | RF-012 |


# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. 

A matriz deve contemplar todos os elementos relevantes que fazem parte do sistema, conforme a figura meramente ilustrativa apresentada a seguir.

![Exemplo de matriz de rastreabilidade](img/02-matriz-rastreabilidade.png)

# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

Com o intuito de fornecer uma visão abrangente das atividades e de suas interações, bem como destacar os prazos associados a cada uma, o nosso projeto foi subdividido em etapas com datas específicas de conclusão. Cada etapa está estritamente alinhada com as datas estabelecidas no diagrama de rede simplificado, garantindo assim o cumprimento dos prazos previstos.

| Etapa da Disciplina                                         | Período  
| ----------------------------------------------------------- | -----------------
| Etapa 1 - Análise e Projeto de Sistemas de Software | <ul><li>Duração: 39 Dias</li><li>Inico: 01/02/24</li><li>Fim: 10/03/24</li>
| Etapa 2 - Projeto da solução | <ul><li>Duração: 20 Dias</li><li>Inico: 11/03/24</li><li>Fim: 31/03/24</li>
| Etapa 3 - Desenvolvimento da solução - Fase 1 | <ul><li>Duração: 20 Dias</li><li>Inico: 01/04/24</li><li>Fim: 21/04/24</li>
| Etapa 4 - Desenvolvimento da solução Fase 2 | <ul><li>Duração: 34 Dias</li><li>Inico: 22/04/24</li><li>Fim: 26/05/24</li>
| Etapa 5 - Relatórios das avaliações e entrega da solução | <ul><li>Duração: 26 Dias</li><li>Inico: 27/05/24</li><li>Fim: 23/06/24</li>

Para organização e distribuição das tarefas do projeto, o grupo utilizará o aplicativo de gerenciamento de projetos Git Projects.

![Captura de tela 2024-03-18 213910](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t2-G4-VacinaPlus/assets/74187849/f0aaec02-3fe2-4df3-ac0a-372878b555e9)

## Diagrama de Gantt

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![Gráfico de Gantt](img/02-grafico-gantt.png)

## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t2-G4-VacinaPlus/assets/74187849/ee4e2139-cf34-4594-86ec-9db69817fe49)

## Gestão de Orçamento


Para criar a tabela de orçamento a seguir, foram considerados os custos ao longo de um período de seis meses, incluindo a contratação de um stakeholder, cinco desenvolvedores alem de aquisição de seis estações de trabalho, a assinatura de um plano de acesso à internet, e de gastos com hora de trabalho de cada integrante do projeto.

 ## Orçamento Para Implantação do Software                          

                           
|     Item       |  Recursos Orçados   |    R$       |       Descrição                    |
|----------------|---------------------|-------------|------------------------------------|
|      1         |  Recursos humanos   | 20.250,00   | Salário =          R$ 3.375,00     |             
|      2         |    Hardware         | 48.000,00   | Notebook =         R$ 8.000,00     |          
|      3         |    Rede             | 1.440,00    | Internet / mês =   R$ 120,00       |         
|      4         |    Total            | 69.690,00   | Total gasto na criação do software |
