import PassengerForm from "@/components/passengers/passengerForm";
import PassengerReport from "@/components/passengers/passengerReport";
import PassengerTable from "@/components/passengers/passengerTable";
import React from "react";
import DashboardPage from "../page";

function passengersPage() {
  return (
    <DashboardPage>
      <div className="bg-secondary-100 p-8 rounded-xl mb-3">
        <PassengerForm />
      </div>
      <div className="bg-secondary-100 p-8 rounded-xl mb-3">
        <PassengerTable />
      </div>
      <div className="bg-secondary-100 p-8 rounded-xl mb-3">
        <PassengerReport />
      </div>
    </DashboardPage>
  );
}

export default passengersPage;
