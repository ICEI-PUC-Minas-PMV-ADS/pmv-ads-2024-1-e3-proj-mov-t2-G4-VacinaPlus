import firebase from '../config/firebase'; // Importe o firebase configurado
import vacinasData from './vacinas.json'; // Importe o JSON com os dados das vacinas

// Função para verificar se os dados já foram inseridos
const verificarDadosInseridos = async () => {
  try {
    // Referência para o nó 'vacinas' no Realtime Database
    const dbRef = firebase.database().ref('vacinas');

    // Verifica se o nó 'vacinas' já possui dados
    const snapshot = await dbRef.once('value');
    return snapshot.exists(); // Retorna true se já existirem dados, false caso contrário
  } catch (error) {
    console.error("Erro ao verificar dados das vacinas:", error);
    return false; // Em caso de erro, consideramos que os dados não foram inseridos
  }
}

// Função para inserir dados de várias vacinas no Realtime Database
const inserirDadosVacinas = async () => {
  try {
    // Verifica se os dados já foram inseridos anteriormente
    const dadosInseridos = await verificarDadosInseridos();
    
    // Se os dados já foram inseridos, não faz nada
    if (dadosInseridos) {
      console.log("Os dados das vacinas já foram inseridos anteriormente. Não é necessário inserir novamente.");
      return;
    }

    // Referência para o nó 'vacinas' no Realtime Database
    const dbRef = firebase.database().ref('vacinas');

    // Insere os dados de cada vacina do JSON na base de dados
    for (const vacina of vacinasData) {
      await dbRef.push(vacina);
    }

    console.log("Dados das vacinas inseridos com sucesso!");
  } catch (error) {
    console.error("Erro ao inserir dados das vacinas:", error);
  }
}

// Chamada da função para inserir os dados das vacinas ao iniciar o aplicativo
inserirDadosVacinas();

// Exporte a função inserirDadosVacinas para que ela possa ser usada em outros arquivos
export default inserirDadosVacinas;
