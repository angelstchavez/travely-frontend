import EmployeeForm from "@/components/employees/employeeForm";
import DashboardPage from "../page";
import EmployeeTable from "@/components/employees/employeeTable";
import EmployeeReport from "@/components/employees/employeeReport";

function employeesPage() {
  return (
    <DashboardPage>
      <div className="bg-secondary-100 p-8 rounded-xl mb-3">
        <EmployeeForm />
      </div>
      <div className="bg-secondary-100 p-8 rounded-xl mb-3">
        <EmployeeTable />
      </div>
      <div className="bg-secondary-100 p-8 rounded-xl mb-3">
        <EmployeeReport />
      </div>
    </DashboardPage>
  );
}

export default employeesPage;
