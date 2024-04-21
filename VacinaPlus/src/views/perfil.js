import React, {useState} from 'react';
import { ScrollView, View, StyleSheet, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PerfilComponent = () => {
    const [user, setUser] = useState({ 
        name: 'Seu Nome',
        birthDate: '01/01/1990',
        cpf: '123.456.789-00',
        cns: '123456789012345',
        email: 'seuemail@example.com',
        phone: '(00) 12345-6789',
        gender: 'Masculino',
        country: 'Brasil',
      });
    
      const handleSave = () => {
        
        console.log('Perfil salvo:', user);
      };

      const navigation = useNavigation(); 

      return (
        <View style={{ flex: 1 }}>
          <View
            placement="left"
            centerComponent={{ text: 'Meu Perfil', style: { color: '#fff' } }}
          />
          <ScrollView style={{ flex: 1 }}>
            <View style={styles.container}>
              <View style={styles.avatarContainer}> 
                <View
                  rounded
                  size="large"
                  source={{ uri: 'https://via.placeholder.com/150' }}
                />
              </View>
              <TextInput
                label="Nome"
                value={user.name}
                onChangeText={(text) => setUser({ ...user, name: text })}
              />
              <TextInput
                label="Data de Nascimento"
                value={user.birthDate}
                onChangeText={(text) => setUser({ ...user, birthDate: text })}
              />
              <TextInput
                label="CPF"
                value={user.cpf}
                onChangeText={(text) => setUser({ ...user, cpf: text })}
              />
              <TextInput
                label="CNS"
                value={user.cns}
                onChangeText={(text) => setUser({ ...user, cns: text })}
              />
              <TextInput
                label="E-mail"
                value={user.email}
                onChangeText={(text) => setUser({ ...user, email: text })}
              />
              <TextInput
                label="Telefone"
                value={user.phone}
                onChangeText={(text) => setUser({ ...user, phone: text })}
              />
              <TextInput
                label="Gênero"
                value={user.gender}
                onChangeText={(text) => setUser({ ...user, gender: text })}
              />
              <TextInput
                label="País"
                value={user.country}
                onChangeText={(text) => setUser({ ...user, country: text })}
              />
              <TextInput
                label="Alergias/Restrições"
                multiline
                value={user.allergies}
                onChangeText={(text) => setUser({ ...user, allergies: text })}
              />
              <TextInput
                label="Senha"
                value={user.password}
                onChangeText={(text) => setUser({ ...user, password: text })}
                secureTextEntry
              />
              <Button title="Salvar Alterações" onPress={handleSave} />
            </View>
          </ScrollView>
        </View>
      );
    };     

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100
  },
  Logo: {
    width: 320,
    height: 320,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default PerfilComponent;