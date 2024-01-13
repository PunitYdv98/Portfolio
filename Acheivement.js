import React from 'react';

const Achievement = ({description }) => (
  <div  style={{
    border: '1px solid #ccc',
    padding: '15px',
    margin: '10px',
    maxWidth: '400px', // Adjust as needed
    width: '100%',
    textAlign: 'center',
  }}>
    <p className="description">{description}</p>
  </div>
);

const Achievements = () => {
  const achievementsData = [
    {
      description: 'RedHat Certified System Engineer',
    },
    {
      description: 'Rank 10 on Geeks for geeks in campus',
    },
    {
        description: '3 star on Code Chef',
      },
    // Add more achievements as needed
  ];

  return (
    <div   style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '20px', // Add padding for spacing if needed
      }}>
      <h2>My Achievements</h2>
      {achievementsData.map((achievement, index) => (
        <Achievement key={index} {...achievement} />
      ))}
    </div>
  );
};

export default Achievements;
