
# Metodologia

A equipe decidiu utilizar o *Product Backlog* começando com uma lista priorizada de todas as funcionalidades e requisitos da carteira de vacinação. Isso inclui recursos como rastreamento de vacinas, lembretes, acesso fácil aos registros e compartilhamento seguro de informações. Em seguida *Sprint Planning* em reuniões de planejamento de sprint, selecionamos um conjunto de itens do backlog para trabalhar durante o sprint. Priorizando as funcionalidades mais importantes e que agreguem valor imediato aos usuários. Nas *Sprints* dividimos o trabalho em sprints de curto prazo, durando não mais que duas a quatro semanas. Durante cada sprint, a equipe se concentrou em completar as tarefas selecionadas do backlog. Durante as *Daily Standups* realizamos reuniões diárias curtas (standups) para acompanhar o progresso, identificar possíveis impedimentos e garantir que a equipe esteja alinhada com os objetivos do sprint. Nas *Sprint Review* ao final de cada sprint, apresentamos as funcionalidades desenvolvidas à equipe e aos stakeholders para feedback e validação. Com a *Sprint Retrospective* realizamos uma retrospectiva no final de cada sprint para revisar o que funcionou bem, identificamos oportunidades de melhoria e ajustar o processo conforme necessário. Por fim, nas *Iterações* com base no feedback recebido durante as revisões e retrospectivas, ajustamos o backlog e planejamos os próximos sprints de acordo.

*Sprint*   | Etapa da Disciplina                                         | Entregável/Artefato 
---------- | ----------------------------------------------------------- | -----------------
1          | [Etapa 1 - Análise e Projeto de Sistemas de Software](https://pucminas.instructure.com/courses/178232/assignments/859902) | <ul><li>Documento de Contexto;</li><li>Especificação do Problema;</li>
2          | [Etapa 2 - Projeto da solução](https://pucminas.instructure.com/courses/178232/assignments/859911) | <ul><li>Metodologia;</li><li>Arquitetura da Solução;</li><li>Projeto de Interface;</li><li>Programação de Funcionalidades ;</li><li>Planos de Testes de Funcionalidades e Usabilidade;</li><li>Registros de Testes de Funcionalidades e Usabilidade;</li><li>Criar tabelas, gráficos ou dashboards com no mínimo 5 indicadores de desempenho e metas para o processo de negócio;</li>
3          | [Etapa 3 - Desenvolvimento da solução - Fase 1](https://pucminas.instructure.com/courses/178232/assignments/859928) | <ul><li>Programação de Funcionalidades ;</li><li>Planos de Testes de Funcionalidades e Usabilidade;</li><li>Registros de Testes de Funcionalidades e Usabilidade;</li>
4          | [Etapa 4 - Desenvolvimento da solução Fase 2](https://pucminas.instructure.com/courses/178232/assignments/859947) | <ul><li>Programação de Funcionalidades;</li><li>Planos de Testes de Funcionalidades e Usabilidade;</li><li>Registros de Testes de Funcionalidades e Usabilidade;</li>
5          | [Etapa 5 - Relatórios das avaliações e entrega da solução](https://pucminas.instructure.com/courses/178232/assignments/859961) | <ul><li>Considerações Finais;</li><li>Entrega de Vídeo de Apresentação Final e PDF usado na Apresentação;</li><li>Realização da Apresentação Final;</li>

## Relação de Ambientes de Trabalho

Os artefatos do projeto são desenvolvidos a partir de diversas plataformas e a relação dos ambientes com seu respectivo propósito deverá ser apresentada em uma tabela que especifica que detalha Ambiente, Plataforma e Link de Acesso. 
Nota: Vide documento modelo do estudo de caso "Portal de Notícias" e defina também os ambientes e frameworks que serão utilizados no desenvolvimento de aplicações móveis.

## Controle de Versão

A ferramenta de controle de versão adotada no projeto foi o
[Git](https://git-scm.com/), sendo que o [Github](https://github.com)
foi utilizado para hospedagem do repositório.

O projeto segue a seguinte convenção para o nome de branches:

- `main`: versão estável já testada do software
- `unstable`: versão já testada do software, porém instável
- `testing`: versão em testes do software
- `dev`: versão de desenvolvimento do software

Quanto à gerência de issues, o projeto adota a seguinte convenção para
etiquetas:

- `documentation`: melhorias ou acréscimos à documentação
- `bug`: uma funcionalidade encontra-se com problemas
- `enhancement`: uma funcionalidade precisa ser melhorada
- `feature`: uma nova funcionalidade precisa ser introduzida

Discuta como a configuração do projeto foi feita na ferramenta de versionamento escolhida. Exponha como a gerência de tags, merges, commits e branchs é realizada. Discuta como a gerência de issues foi realizada.

> **Links Úteis**:
> - [Microfundamento: Gerência de Configuração](https://pucminas.instructure.com/courses/87878/)
> - [Tutorial GitHub](https://guides.github.com/activities/hello-world/)
> - [Git e Github](https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA)
>  - [Comparando fluxos de trabalho](https://www.atlassian.com/br/git/tutorials/comparing-workflows)
> - [Understanding the GitHub flow](https://guides.github.com/introduction/flow/)
> - [The gitflow workflow - in less than 5 mins](https://www.youtube.com/watch?v=1SXpE08hvGs)

## Gerenciamento de Projeto

### Divisão de Papéis

 Os papéis *Scrum* foram estabelecidos da seguinte forma:

Papel                | Responsável
---------------------| -------------------------
***Product Owner***  | Felipe Joseph S de Almeida
***Scrum Master***   | Eduardo Gonçalves Sena
***Developers***     | Simon Henrique Souza C, Stefany Barbosa Ribeiro, Pedro Henrique Gomes de Souza, Gabriel Yan Moreira Laignier

### Processo

Para a organização e distribuição das tarefas do projeto, o grupo esta utilizando o GitHub, seguindo os critérios de:

- `Backlog`: todas as atividades que devem ser realizadas no projeto, desde a documentação até o desenvolvimento final do site.
- `To do (atualizado a cada vencimento de prazo)`: Apresenta o prazo da sprint atual e o que foi definido previamente para ser  realizado até o final da mesma.
- `In progress`: O que está sendo feito.
- `Done`: Tudo o que foi finalizado.

#### Backlog em 01/03/2024
![Backlog010324](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t2-G4-VacinaPlus/assets/128644865/eadd5187-ff64-4bd7-b1c7-8723fe261fae)


### Ferramentas

O desenvolvimento deste projeto foi facilitado pelo uso das seguintes ferramentas:

Finalidade                                          | Ferramenta                   |
--------------------------------------------------- |----------------------------- |
Hospedagem do código-fonte                          | *Github*                     |
Hospedagem da documentação                          | *Github*                     |
Gerenciamento do projeto                            | *Github*                     |
Criação dos *wireframes* e do *userflow* interativo |                       |
Comunicação assíncrona                              | *WhatsApp*                   |
Comunicação síncrona                                | *Microsoft Teams*            |
Edição de código e texto                            |          |
Servidor de hospedagem                              | *Github*                     |
