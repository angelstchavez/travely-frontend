import OfficeForm from "@/components/offices/officeForm";
import DashboardPage from "../page";
import OfficeTable from "@/components/offices/officeTable";
import OfficeReport from "@/components/offices/officeReport";

function officePage() {
  return (
    <DashboardPage>
      <div className="bg-secondary-100 p-8 rounded-xl mb-3">
        <OfficeForm />
      </div>
      <div className="bg-secondary-100 p-8 rounded-xl mb-3">
        <OfficeTable />
      </div>
      <div className="bg-secondary-100 p-8 rounded-xl mb-3">
        <OfficeReport />
      </div>
    </DashboardPage>
  );
}

export default officePage;
