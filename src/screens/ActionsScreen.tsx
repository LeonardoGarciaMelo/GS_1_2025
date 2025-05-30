import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const ActionsScreen: React.FC = () => {
  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Ações de Mitigação</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Medidas Preventivas</Text>
        <View style={styles.listItem}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.text}>Não construa em áreas de encosta ou próximas a barrancos</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.text}>Mantenha a vegetação natural, pois ela ajuda a estabilizar o solo</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.text}>Evite o descarte irregular de lixo e entulho</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.text}>Corrija vazamentos em encanamentos que podem aumentar a umidade do solo</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Antes do Deslizamento</Text>
        <View style={styles.listItem}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.text}>Observe sinais de movimentação do solo, como rachaduras em paredes ou muros</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.text}>Fique atento a inclinações anormais de árvores ou postes</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.text}>Em caso de alerta das autoridades, desloque-se imediatamente para locais seguros</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Durante o Deslizamento</Text>
        <View style={styles.listItem}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.text}>Saia rapidamente da área de risco</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.text}>Evite tentar salvar pertences pessoais</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.text}>Auxilie crianças, idosos e pessoas com mobilidade reduzida</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Após o Deslizamento</Text>
        <View style={styles.listItem}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.text}>Mantenha-se afastado da área afetada</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.text}>Aguarde a liberação das autoridades competentes</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.text}>Informe a Defesa Civil sobre a ocorrência</Text>
        </View>
      </View>

      <View style={[styles.card, styles.emergencyCard]}>
        <Text style={[styles.sectionTitle, styles.emergencyTitle]}>Contatos de Emergência</Text>
        <TouchableOpacity style={styles.contactItem}>
          <Text style={[styles.text, styles.contactText]}>Defesa Civil: 199</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactItem}>
          <Text style={[styles.text, styles.contactText]}>Corpo de Bombeiros: 193</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactItem}>
          <Text style={[styles.text, styles.contactText]}>SAMU: 192</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ActionsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 32,
  },
  header: {
    marginBottom: 20,
    padding: 16,
    backgroundColor: '#3498db',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  emergencyCard: {
    borderLeftWidth: 4,
    borderLeftColor: '#e74c3c',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: 12,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ecf0f1',
  },
  emergencyTitle: {
    color: '#e74c3c',
    borderBottomColor: '#fadbd8',
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'flex-start',
  },
  bullet: {
    fontSize: 16,
    color: '#3498db',
    marginRight: 8,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 15,
    lineHeight: 22,
    color: '#34495e',
    flex: 1,
  },
  contactItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#fef5f5',
    borderRadius: 8,
    marginBottom: 8,
  },
  contactText: {
    color: '#c0392b',
    fontWeight: '500',
  },
});