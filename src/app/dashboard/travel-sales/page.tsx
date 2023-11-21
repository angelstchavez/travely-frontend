import DashboardPage from "../page";
import TravelSaleForm from "@/components/travel-sales/travelSaleForm";
import TravelSaleTable from "@/components/travel-sales/travelSaleTable";
import TravelSaleReport from "@/components/travel-sales/travelSaleReport";

function travelSalesPage() {
  return (
    <DashboardPage>
      <div className="bg-secondary-100 p-8 rounded-xl mb-3">
        <TravelSaleForm />
      </div>
      <div className="bg-secondary-100 p-8 rounded-xl mb-3">
        <TravelSaleTable />
      </div>
      <div className="bg-secondary-100 p-8 rounded-xl mb-3">
        <TravelSaleReport />
      </div>
    </DashboardPage>
  );
}

export default travelSalesPage;
