import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import JobCard from './JobCard';

const PopularJobs = () => {
  const jobCards = [
    { title: "Jr Executive", company: "Burger King", salary: "$96,000/y", location: "Los Angeles, US" },
    { title: "Product Manager", company: "Beats", salary: "$84,000/y", location: "Florida, US" },
    { title: "Product Manager", company: "Facebook", salary: "$86,000/y", location: "Florida, US" },
    { title: "Software Engineer", company: "Facebook", salary: "$180,000/y", location: "Accra, Ghana" },
    { title: "Jr Developer", company: "Google", salary: "$160,000/y", location: "California, US" },
    // Add more job cards to make at least 8
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular Jobs</Text>
      <View style={styles.jobCards}>
        {jobCards.map((card, index) => (
          <JobCard key={index} title={card.title} company={card.company} salary={card.salary} location={card.location} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#e74c3c',
    textAlign: 'center',
    marginBottom: 20,
  },
  jobCards: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});

export default PopularJobs;
