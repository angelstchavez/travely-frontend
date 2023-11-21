import React from "react";
import DashboardPage from "../page";
import UserForm from "@/components/users/userForm";
import UserTable from "../../../components/users/userTable";
import UserReport from "../../../components/users/userReport";

function usersPage() {
  return (
    <DashboardPage>
      <div className="bg-secondary-100 p-8 rounded-xl mb-3">
        <UserForm />
      </div>
      <div className="bg-secondary-100 p-8 rounded-xl mb-3">
        <UserTable />
      </div>
      <div className="bg-secondary-100 p-8 rounded-xl mb-3">
        <UserReport />
      </div>
    </DashboardPage>
  );
}

export default usersPage;
