import { FC, useState, useEffect } from 'react';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { DashboardWrapper } from './Dashboard.styled';
import ProductService from '../../services/ProductService';
import ProductData from '../../types/ProductData';
import ProductsGraph from '../ProductsGraph/ProductsGraph';

Chart.register(CategoryScale);

const Dashboard: FC = () => {
    const [products, setProducts] = useState<ProductData[]>([]);
    const [chartData, setChartData] = useState<any>({
        labels: [], 
        datasets: [
            {
                label: "Quantidade total de produtos",
                data: [],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.7)",   // Vermelho pastel
                    "rgba(255, 159, 64, 0.7)",   // Laranja pastel
                    "rgba(75, 192, 192, 0.7)",   // Verde pastel
                    "rgba(54, 162, 235, 0.7)",   // Azul pastel
                ],
                borderColor: "black",
                borderWidth: 2
            }
        ]
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await ProductService.getAllProducts();
                const productsData: ProductData[] = response.data.product;

                // Agrupa os produtos pelo campo 'brand'
                const groupedProducts = groupProductsByBrand(productsData);

                // Atualiza o estado dos produtos
                setProducts(productsData);

                // Atualiza o estado do gráfico
                setChartData({
                    labels: Object.keys(groupedProducts), 
                    datasets: [
                        {
                            label: "Quantidade de produtos",
                            data: Object.values(groupedProducts).map(products => sumProductsQuantity(products)),
                            backgroundColor: [
                                "rgba(255, 99, 132, 0.7)",   // Vermelho pastel
                                "rgba(255, 159, 64, 0.7)",   // Laranja pastel
                                "rgba(75, 192, 192, 0.7)",   // Verde pastel
                                "rgba(54, 162, 235, 0.7)",   // Azul pastel
                            ],
                            borderColor: "black",
                            borderWidth: 2
                        }
                    ]
                });
            } catch (error) {
                console.error('Erro ao carregar produtos:', error);
            }
        };

        fetchData();
    }, []);

    // Função para agrupar os produtos pelo campo 'brand'
    const groupProductsByBrand = (products: ProductData[]) => {
        return products.reduce((acc, product) => {
            if (!acc[product.brand]) {
                acc[product.brand] = [];
            }
            acc[product.brand].push(product);
            return acc;
        }, {} as { [key: string]: ProductData[] });
    };

    const sumProductsQuantity = (products: ProductData[]) => {
        return products.reduce((acc, product) => acc + product.quantity, 0);
    };

    if (products.length === 0) {
        return <DashboardWrapper>Loading...</DashboardWrapper>;
    }

    return (
        <DashboardWrapper>
            <ProductsGraph chartData={chartData} />
        </DashboardWrapper>
    );
}

export default Dashboard;
