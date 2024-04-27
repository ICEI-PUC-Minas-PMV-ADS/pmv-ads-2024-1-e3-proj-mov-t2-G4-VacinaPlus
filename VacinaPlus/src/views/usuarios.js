import { useEffect, useState } from 'react';
import { FlatList, Image, Pressable, StyleSheet, Text, View, TextInput } from 'react-native';
import firebase from '../config/firebase';
import { useNavigation } from '@react-navigation/native';

const UsuariosComponent = () => {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [datanascimento, setDataNascimento] = useState("");
  const [cns, setCns] = useState("");
  const [pessoas, setPessoas] = useState([]);
  const [editId, setEditId] = useState("");
  let [editState, setEditState] = useState("none");

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = firebase.firestore().collection('Pessoas').onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setPessoas(data);
    });
    return () => unsubscribe();
  }, []);
  
  const excluirPessoa = (id) => {
    firebase.firestore().collection('Pessoas').doc(id).delete();
  }

  const criarUsuario = async () => {
    try {
      const newUserCredential = await firebase.auth().createUserWithEmailAndPassword(email, senha);
  
      await firebase.firestore().collection("Pessoas").doc(newUserCredential.user.uid).set({
        nome: nome,
        cpf: cpf,
        email: email,
        datanascimento: datanascimento,
        cns: cns,
      });
  
      alert("Usuário criado com sucesso! ID: " + newUserCredential.user.uid);
    } catch (error) {
      alert("Erro ao criar usuário: " + error.message);
    }
  }

  const atualizarPessoa = (id, dados) => {
    firebase.firestore().collection('Pessoas').doc(id).update(dados);
    closeEdit();
  }

  const showEdit = (id) => {
    setEditState("flex")
    setEditId(id)
    const pessoaSelecionada = pessoas.find(pessoa => pessoa.id === id);
    if (pessoaSelecionada) {
      setEditState("flex");
      setEditId(id);
      setNome(pessoaSelecionada.nome);
      setCpf(pessoaSelecionada.cpf);
      setEmail(pessoaSelecionada.email);
      setDataNascimento(pessoaSelecionada.datanascimento);
      setCns(pessoaSelecionada.cns);
    } else {
      console.log("Pessoa não encontrada.");
    }
  }

  const closeEdit = () => {
    setEditState("none")
    setEditId("")
  }

  const renderPessoa = ({ item }) => (
    <View style={styles.pessoa}>
      <View style={styles.variaveis}>
        <Text style={styles.nome}>{`${item.nome}`}</Text>
        <Text style={styles.cpf}>{`CPF: ${item.cpf}`}</Text>
        <Text style={styles.email}>{`Email: ${item.email}`}</Text>
        <Text style={styles.datanascimento}>{`Data Nasc: ${item.datanascimento}`}</Text>
        <Text style={styles.cns}>{`CNS: ${item.cns}`}</Text>
      </View>
      <View style={styles.acoes}>
        <Pressable onPress={() => showEdit(item.id)}>
          <Image style={styles.edit} source={require(
            '../../assets/pencil.png',
          )}></Image>
        </Pressable>
        <Pressable onPress={() => excluirPessoa(item.id)}>
          <Image style={styles.trash} source={require(
            '../../assets/trash.png',
          )}></Image>
        </Pressable>
      </View>
    </View>
  );

  const editBox = () => {
    return(
      <View style={[styles.editContainer, { display: editState }]}>
        <View style={styles.editBox}>
          <View style={styles.editTitle}>
            <Text style={styles.titletext}>Editar</Text>
          </View>
          <View style={styles.editform}>
            <TextInput
              style={styles.input}
              placeholder='Nome'
              onChangeText={text => setNome(text)}
              value={nome}
            />
            <TextInput
              style={styles.input}
              placeholder='CPF'
              onChangeText={text => setCpf(text)}
              value={cpf}
            />
            <TextInput
              style={styles.input}
              placeholder='Email'
              onChangeText={text => setEmail(text)}
              value={email}
            />
            <TextInput
              style={styles.input}
              placeholder='Data Nascimento'
              onChangeText={text => setDataNascimento(text)}
              value={datanascimento}
            />
            <TextInput
              style={styles.input}
              placeholder='CNS'
              onChangeText={text => setCns(text)}
              value={cns}
            />
          </View>
          <View style={styles.editButtons}>
            <Pressable style={styles.editButton} onPress={closeEdit}>
              <Text style={styles.editButtonText}>Voltar</Text>
            </Pressable>
            <Pressable style={styles.editButton} onPress={() => atualizarPessoa(editId, { nome, cpf, email, datanascimento, cns })}>
              <Text style={styles.editButtonText}>Editar</Text>
            </Pressable>
          </View>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {editBox()}
      <Text style={styles.title}>Lista de Usuários</Text>
      <FlatList
        data={pessoas}
        renderItem={renderPessoa}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
      <Pressable onPress={() => navigation.goBack()} style={styles.button}>
        <Text style={styles.buttonText}>Voltar</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    height: "100%",
    paddingBottom: 25,
    gap: 45
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  list: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  pessoa: {
    flexDirection: "row",
    backgroundColor: '#eee',
    padding: 10,
    marginVertical: 10,
    width: '90%',
    borderRadius: 8,
    alignItems: 'flex-start',
    justifyContent: "space-between"
  },
  variaveis: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginVertical: 7,
    gap: 4,
    flex: 1 
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cpf: {
    fontSize: 16,
  },
  email: {
    fontSize: 16,
  },
  datanascimento: {
    fontSize: 16,
  },
  cns: {
    fontSize: 16,
  },
  acoes: {
    height: "100%",
    gap: 5,
  },
  edit: {
    height: 20,
    width: 20,
  },
  trash: {
    height: 25,
    width: 25,
    backgroundColor: '#e7131357',
    borderRadius: 5
  },
  button: {
    backgroundColor: '#1fb6ff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    width: '35%', // Largura responsiva
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  editContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    top: '11%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  editBox: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: "85%",
    aspectRatio: 0.8,
    elevation: 5,
    padding: 15,
    alignItems: "center",
  },
  buttons: {
    width: '65%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  editButtons: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  editButton:{
    backgroundColor: '#1fb6ff',
    justifyContent: "center",
    borderRadius: 20,
    alignItems: 'center',
    width: "30%",
    aspectRatio: 1.9,
    marginTop: 15,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  titletext: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    padding: 12,
    width: '80%',
    height: 40,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  editform: {
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
  },
});

export default UsuariosComponent;