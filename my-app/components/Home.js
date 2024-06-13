import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import PopularJobs from './PopularJobs';
import FeaturedJobs from './FeaturedJobs';

const Home = ({ user }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.email}>{user.email}</Text>
        </View>
        <TextInput
          style={styles.searchInput}
          placeholder="Search a job or position"
        />
      </View>
      <FeaturedJobs />
      <PopularJobs />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20,
  },
  name: {
    fontSize: 24,
    color: '#2c3e50',
  },
  email: {
    fontSize: 16,
    color: '#7f8c8d',
  },
  searchInput: {
    padding: 10,
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,
    width: 300,
  },
});

export default Home;
