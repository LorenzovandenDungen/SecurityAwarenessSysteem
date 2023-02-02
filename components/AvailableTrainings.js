import React, { useState, useEffect } from "react";

const AvailableTrainings = () => {
  const [trainings, setTrainings] = useState([]);

  useEffect(() => {
    fetch("/api/trainings")
      .then((res) => res.json())
      .then((data) => {
        setTrainings(data);
      });
  }, []);

  return (
    <div>
      <h2>Available Trainings</h2>
      <table>
        <thead>
          <tr>
            <th>Training Name</th>
            <th>Deadline</th>
          </tr>
        </thead>
        <tbody>
          {trainings.map((training) => (
            <tr key={training.id}>
              <td>{training.name}</td>
              <td>{training.deadline}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AvailableTrainings;
