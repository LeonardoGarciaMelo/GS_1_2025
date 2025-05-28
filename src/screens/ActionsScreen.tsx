import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const ActionsScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Ações de Mitigação</Text>

      <Text style={styles.sectionTitle}>Medidas Preventivas:</Text>
      <Text style={styles.text}>• Não construa em áreas de encosta ou próximas a barrancos.</Text>
      <Text style={styles.text}>• Mantenha a vegetação natural, pois ela ajuda a estabilizar o solo.</Text>
      <Text style={styles.text}>• Evite o descarte irregular de lixo e entulho.</Text>
      <Text style={styles.text}>• Corrija vazamentos em encanamentos que podem aumentar a umidade do solo.</Text>

      <Text style={styles.sectionTitle}>Antes do Deslizamento:</Text>
      <Text style={styles.text}>• Observe sinais de movimentação do solo, como rachaduras em paredes ou muros.</Text>
      <Text style={styles.text}>• Fique atento a inclinações anormais de árvores ou postes.</Text>
      <Text style={styles.text}>• Em caso de alerta das autoridades, desloque-se imediatamente para locais seguros.</Text>

      <Text style={styles.sectionTitle}>Durante o Deslizamento:</Text>
      <Text style={styles.text}>• Saia rapidamente da área de risco.</Text>
      <Text style={styles.text}>• Evite tentar salvar pertences pessoais.</Text>
      <Text style={styles.text}>• Auxilie crianças, idosos e pessoas com mobilidade reduzida.</Text>

      <Text style={styles.sectionTitle}>Após o Deslizamento:</Text>
      <Text style={styles.text}>• Mantenha-se afastado da área afetada.</Text>
      <Text style={styles.text}>• Aguarde a liberação das autoridades competentes.</Text>
      <Text style={styles.text}>• Informe a Defesa Civil sobre a ocorrência.</Text>

      <Text style={styles.sectionTitle}>Contatos de Emergência:</Text>
      <Text style={styles.text}>• Defesa Civil: 199</Text>
      <Text style={styles.text}>• Corpo de Bombeiros: 193</Text>
      <Text style={styles.text}>• SAMU: 192</Text>
    </ScrollView>
  );
};

export default ActionsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 15,
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
});
