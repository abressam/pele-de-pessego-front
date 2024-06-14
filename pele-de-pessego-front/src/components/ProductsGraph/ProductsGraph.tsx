import { FC } from 'react';
import { Pie } from "react-chartjs-2";

interface ProductsGraph {
    chartData: any;
}

const ProductsGraph: FC<ProductsGraph> = ({ chartData }) => {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Produtos</h2>
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Quantidade de produtos por marca"
            }
          }
        }}
      />
    </div>
  );
}

export default ProductsGraph;