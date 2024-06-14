import { FC } from 'react';
import { Pie } from "react-chartjs-2";

interface ProductsGraph {
    chartData: any;
    title: string;
    description: string;
}

const ProductsGraph: FC<ProductsGraph> = ({ chartData, title, description }) => {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>{title}</h2>
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: description
            }
          }
        }}
      />
    </div>
  );
}

export default ProductsGraph;