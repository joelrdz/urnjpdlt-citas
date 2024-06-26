import React, { useState } from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import Form from './src/components/Form';
import Appointment from './src/components/Appointment';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [appointments, setAppointments] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Administrador de Citas {''}
        <Text style={styles.titleBold}>Veterinaria</Text>
      </Text>

      <Pressable
        onPress={() => setModalVisible(!modalVisible)}
        style={styles.buttonNewAppointment}>
        <Text style={styles.buttonTextNewAppointment}>Nueva Cita</Text>
      </Pressable>

      {appointments.length === 0 ? (
        <Text style={styles.noAppointments}>No hay citas aún</Text>
      ) : (
        <FlatList
          data={appointments}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => {
            return <Appointment item={item} />;
          }}
          style={styles.list}
        />
      )}

      <Form
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        appointments={appointments}
        setAppointments={setAppointments}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F4F6',
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: '600',
  },
  titleBold: {
    fontWeight: '900',
    color: '#6D28D9',
  },
  buttonNewAppointment: {
    backgroundColor: '#6D28D9',
    padding: 15,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  buttonTextNewAppointment: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 18,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  noAppointments: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
  },
  list: {
    marginTop: 50,
    marginHorizontal: 30,
  },
});

export default App;
