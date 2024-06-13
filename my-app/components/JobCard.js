import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const JobCard = ({ title, company, salary, location }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.company}>{company}</Text>
      <Text style={styles.salary}>{salary}</Text>
      <Text style={styles.location}>{location}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 20,
    margin: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    flex: 1,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    color: '#2c3e50',
  },
  company: {
    fontSize: 16,
    color: '#7f8c8d',
  },
  salary: {
    fontSize: 16,
    color: '#7f8c8d',
  },
  location: {
    fontSize: 16,
    color: '#7f8c8d',
  },
});

export default JobCard;
