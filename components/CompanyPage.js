import React, { useState, useEffect } from "react";

const CompanyPage = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("/api/employees")
      .then((res) => res.json())
      .then((data) => {
        setEmployees(data);
      });
  }, []);

  return (
    <div>
      <h2>My Grades</h2>
      <table>
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Year</th>
            <th>Attempts</th>
            <th>Score</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.year}</td>
              <td>{employee.attempts}</td>
              <td>{employee.score}</td>
              <td>{employee.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button>Request Re-exam</button>
    </div>
  );
};

export default CompanyPage;
