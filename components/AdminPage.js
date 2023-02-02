import React, { useState } from "react";
import UsersTable from "./UsersTable";
import TrainingsTable from "./TrainingsTable";

const AdminPage = () => {
  const [selectedTab, setSelectedTab] = useState("users");

  return (
    <div>
      <div>
        <button
          onClick={() => setSelectedTab("users")}
          disabled={selectedTab === "users"}
        >
          Users
        </button>
        <button
          onClick={() => setSelectedTab("trainings")}
          disabled={selectedTab === "trainings"}
        >
          Trainings
        </button>
      </div>
      {selectedTab === "users" && <UsersTable />}
      {selectedTab === "trainings" && <TrainingsTable />}
    </div>
  );
};

export default AdminPage;
``
