import CustomerReport from "../customerReport";

const CustomerCompanyReport: React.FC = () => {
  return (
    <CustomerReport endpoint="/companies" label="Descargar reporte-empresas" />
  );
};

export default CustomerCompanyReport;
