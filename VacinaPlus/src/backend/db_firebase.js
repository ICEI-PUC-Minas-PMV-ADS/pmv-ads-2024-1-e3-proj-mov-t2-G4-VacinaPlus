// db_firebase.js

import firebase from '../config/firebase'; // Importe o firebase configurado
import vacinasData from './vacinas.json'; // Importe o arquivo JSON com os dados das vacinas

// Função para verificar se os dados já foram inseridos
export const verificarDadosInseridos = async () => {
  try {
    const dbRef = firebase.database().ref('vacinas');
    const snapshot = await dbRef.once('value');
    return snapshot.exists();
  } catch (error) {
    console.error("Erro ao verificar dados das vacinas:", error);
    return false;
  }
}

// Função para inserir dados de várias vacinas no Realtime Database
export const inserirDadosVacinas = async () => {
  try {
    const dadosInseridos = await verificarDadosInseridos();
    if (dadosInseridos) {
      console.log("Os dados das vacinas já foram inseridos anteriormente. Não é necessário inserir novamente.");
      return;
    }
    const dbRef = firebase.database().ref('vacinas');
    for (const vacina of vacinasData) {
      await dbRef.push(vacina);
    }
    console.log("Dados das vacinas inseridos com sucesso!");
  } catch (error) {
    console.error("Erro ao inserir dados das vacinas:", error);
  }
}

// Função para recuperar as vacinas associadas ao usuário do Realtime Database
export const recuperarVacinasUsuario = async (userId) => {
  try {
    const userRef = firebase.firestore().collection("Pessoas").doc(userId);
    const userSnapshot = await userRef.get();
    if (userSnapshot.exists) {
      const userData = userSnapshot.data();
      return userData.vacinas || [];
    } else {
      console.error("Usuário não encontrado.");
      return [];
    }
  } catch (error) {
    console.error("Erro ao recuperar vacinas do usuário:", error);
    return [];
  }
}

// Função para recuperar vacinas aleatórias do Realtime Database
export const recuperarVacinasAleatorias = async (numVacinas) => {
  try {
    const dbRef = firebase.database().ref('vacinas');
    const snapshot = await dbRef.once('value');
    const vacinas = snapshot.val();
    const vacinasArray = Object.values(vacinas);
    const vacinasAleatorias = [];
    for (let i = 0; i < numVacinas; i++) {
      const randomIndex = Math.floor(Math.random() * vacinasArray.length);
      vacinasAleatorias.push(vacinasArray[randomIndex]);
    }
    return vacinasAleatorias;
  } catch (error) {
    console.error("Erro ao recuperar vacinas aleatórias:", error);
    return [];
  }
}

// Função para associar vacinas aleatórias ao usuário logado
export const associarVacinasAoUsuario = async (userId) => {
  try {
    const userRef = firebase.firestore().collection("Pessoas").doc(userId);
    const userSnapshot = await userRef.get();
    if (userSnapshot.exists) {
      const userData = userSnapshot.data();
      if (userData.vacinas && userData.vacinas.length > 0) {
        console.log("O usuário já tem vacinas associadas.");
        return;
      }
    }

    const vacinasAleatorias = await recuperarVacinasAleatorias(5);
    await userRef.update({
      vacinas: vacinasAleatorias
    });
    console.log("Vacinas associadas ao usuário com sucesso!");
  } catch (error) {
    console.error("Erro ao associar vacinas ao usuário:", error);
  }
}

// Chamada da função para inserir os dados das vacinas ao iniciar o aplicativo
inserirDadosVacinas();

export default inserirDadosVacinas;
