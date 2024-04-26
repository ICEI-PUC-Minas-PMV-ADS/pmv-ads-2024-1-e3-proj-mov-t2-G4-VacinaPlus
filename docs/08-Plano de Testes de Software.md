# Plano de Testes de Software
Os requisitos para realização dos testes de software são: <br>
 * Computador ou smartphone. <br>
 * Navegador da Internet - Chrome, Firefox ou Edge <br>

Os testes funcionais a serem realizados na aplicação são descritos a seguir.
 
| **Caso de Teste** 	| **CT-01 – Criar perfil** 	|
|:---:	|:---	|
|	Requisito Associado 	| RF-001 - O sistema deve permitir criar o perfil de usuários autorizados com credenciais únicas |
| Objetivo do Teste 	| Verificar se o usuário consegue se cadastrar na aplicação. |
| Passos 	| - Acessar a aplicação <br> - Clicar em "Entrar" <br> - Preencher os campos obrigatórios (Nome, CPF, E-mail, Data de Nascimento, CNS, Senha,  Confirmar senha) <br> - Clicar em "Criar" |
|Critério de Êxito | O cadastro foi realizado com sucesso. |
|  	|  	|
| **Caso de Teste** 	| **CT-02 – Efetuar login**	|
|Requisito Associado | RF-002	- O sistema deve permitir o login de usuários autorizados com credenciais únicas |
| Objetivo do Teste 	| Verificar se o usuário consegue realizar login. |
| Passos 	| - Acessar a aplicação <br> - Clicar no botão "Entrar" <br> - Preencher o campo de e-mail <br> - Preencher o campo da senha <br> - Clicar em "Login" |
|Critério de Êxito | O login foi realizado com sucesso. |
|  	|  	|
| **Caso de Teste** 	| **CT-07 – Notificação**	|
|Requisito Associado | RF-004	- A aplicação deve fornecer um sistema de notificação para lembrar o usuário sobre datas importantes relacionadas à administração de vacinas, como datas de reforço ou atualizações necessárias. |
| Objetivo do Teste 	| Verificar se os usuários recebem suas notificações. |
| Passos 	|  - Acessar a aplicação <br> - Entrar com seu email e senha <br> - Selecionar o icone de sino no canto superior direito <br> |
|Critério de Êxito |  O usuário consegue ver suas notificações com sucesso |
|  	|  	|
| **Caso de Teste** 	| **CT-03 – Gerenciar Cadastro**	|
|Requisito Associado | RF-005	- O sistema deve permitir ao usuário gerenciar o cadastro das vacinas. |
| Objetivo do Teste 	| Verificar se o usuário consegue modificar e adicionar informações. |
| Passos 	| - Acessar a aplicação <br> - Entrar com seu email e senha <br> - Acessar a area de vacinas no campo inferior <br> - Adicionar, editar ou remover alguma informação em qualquer campo editável da tela <br> - Clicar em "Salvar" <br> |
|Critério de Êxito | A informação foi adicionada, editada ou removida com sucesso. |
|  	|  	|
| **Caso de Teste** 	| **CT-04 – Histórico de Vacina**	|
|Requisito Associado | RF-006	- O aplicativo deve mostrar o histórico das vacinas cadastradas pelo usuário. |
| Objetivo do Teste 	| Verificar se o usuário consegue visualizar seu histórico |
| Passos 	| - Acessar a aplicação <br> - Entrar com seu email e senha <br> - Acessar a area de vacinas no campo inferior <br> - Localizar "Histórico de Vacinas" abaixo das vacinas registradas no campo "Minhas Vacinas" <br> |
|Critério de Êxito | O usuário visualiza seu histórico com sucesso. |
|  	|  	|
| **Caso de Teste** 	| **CT-06 – Adicionar Infomações**	|
|Requisito Associado | RF-012 - O sistema deve possibilitar ao usuário adicionar informações sobre alergias ou restrições médicas relevantes para a administração de vacinas. |
| Objetivo do Teste 	| Verificar se o usuário consegue registrar suas alergias e restrições médicas. |
| Passos 	| - Acessar a aplicação <br> - Entrar com seu email e senha <br> - Acessar seu perfil no campo inferior da tela <br> - Selecionar o campo "Alergias/Restrições" <br> - Adicionar, editar ou remover alguma informação em qualquer campo editável da tela <br> - Selecionar "Salvar" <br> |
|Critério de Êxito | As informações foram salvas com sucesso. |
|  	|  	|
| **Caso de Teste** 	| **CT-08 – Coleta de Informações**	|
|Requisito Associado | RF-007	- O aplicativo deve permitir ao usuário buscar informações sobre diferentes tipos de vacinas disponíveis, incluindo sua eficácia, efeitos colaterais e recomendações de uso. |
| Objetivo do Teste 	| Verificar se as notícias atualizam junto ao site oficial do SUS. |
| Passos 	|  - Acessar a aplicação <br> - Entrar com seu email e senha <br> - Visualizar o campo de notícias na tela inicial <br> - Selecionar alguma notícia <br> |
|Critério de Êxito |  O sistema entrega a notícia correta com sucesso. |

 
## Ferramentas de Testes 

A equipe deve usar a ferramenta [*QA complete*](https://smartbear.com/product/qacomplete/overview/) adequada a metodologia utilizada durante o processo.
![QAComplete-Logo](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t2-G4-VacinaPlus/assets/128644865/9eb3f28a-60e9-4481-8850-0f7874d8d5e9)
