import React from "react";
import DashboardPage from "../page";
import CustomerForm from "@/components/customers/customerForm";
import CustomerTable from "@/components/customers/customerTable";
import CustomerReport from "@/components/customers/customerReport";

function customerPage() {
  return (
    <DashboardPage>
      <div className="bg-secondary-100 p-8 rounded-xl mb-3">
        <CustomerForm />
      </div>
      <div className="bg-secondary-100 p-8 rounded-xl mb-3">
        <CustomerTable />
      </div>
      <div className="bg-secondary-100 p-8 rounded-xl mb-3">
        <CustomerReport />
      </div>
    </DashboardPage>
  );
}

export default customerPage;
