import CustomerReport from "../customerReport";

const CustomerPersonReport: React.FC = () => {
  return (
    <CustomerReport endpoint="/persons" label="Descargar reporte-personas" />
  );
};

export default CustomerPersonReport;
