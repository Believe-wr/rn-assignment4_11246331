import React from 'react';
import JobCard from './JobCard';

const FeaturedJobs = () => {
  const jobCards = [
    { title: "Software Engineer", company: "Facebook", salary: "$180,000/y", location: "Accra, Ghana" },
    { title: "Jr Developer", company: "Google", salary: "$160,000/y", location: "California, US" },
    { title: "Product Manager", company: "Facebook", salary: "$120,000/y", location: "New York, US" },
    { title: "Senior Developer", company: "Amazon", salary: "$150,000/y", location: "Seattle, US" },
    // Add more job cards to make at least 8
  ];

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2 style={{ color: '#8e44ad' }}>Featured Jobs</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {jobCards.map((card, index) => (
          <JobCard key={index} title={card.title} company={card.company} salary={card.salary} location={card.location} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
