import React from "react";

const UserPage = ({ availableTrainings, myGrades }) => {
  return (
    <div>
      <h2>Available Trainings</h2>
      <ul>
        {availableTrainings.map((training) => (
          <li key={training.id}>
            {training.name} - Deadline: {training.deadline}
          </li>
        ))}
      </ul>
      <h2>My Grades</h2>
      <ul>
        {myGrades.map((grade) => (
          <li key={grade.id}>
            {grade.trainingName} - Score: {grade.score} - Approved by:{" "}
            {grade.approvedBy}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPage;
