import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import BarChartOne from "../../components/charts/bar/BarChartOne";
import PageMeta from "../../components/common/PageMeta";

export default function BarChart() {
  return (
    <div>
      <PageMeta
        title="Painel de controle com gráficos React.js | Modelo de painel de administração React.js"
        description="Esta é a página do painel de controle com gráficos React.js - um modelo de painel de administração React.js Tailwind CSS."
      />
      <PageBreadcrumb pageTitle="Gráfico de barras" />
      <div className="space-y-6">
        <ComponentCard title="Gráfico de barras 1">
          <BarChartOne />
        </ComponentCard>
      </div>
    </div>
  );
}
