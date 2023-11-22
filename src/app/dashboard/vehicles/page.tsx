import VehicleForm from "@/components/vehicles/vehicleForm";
import VehicleReport from "@/components/vehicles/vehicleReport";
import VehicleTable from "@/components/vehicles/vehicleTable";
import React from "react";
import DashboardPage from "../page";

function vehiclesPage() {
  return (
    <DashboardPage>
      <div className="bg-secondary-100 rounded-xl mb-3">
        <VehicleForm />
      </div>
      <div className="bg-secondary-100 p-4 rounded-xl mb-3">
        <VehicleTable />
      </div>
      <div className="bg-secondary-100 p-4 rounded-xl mb-3">
        <VehicleReport />
      </div>
    </DashboardPage>
  );
}

export default vehiclesPage;
