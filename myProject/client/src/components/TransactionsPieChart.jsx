import { PieChart, Pie, Tooltip, Cell } from 'recharts';

const TransactionsPieChart = ({ month }) => {
    const [pieData, setPieData] = useState([]);
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    useEffect(() => {
        fetchPieChartData();
    }, [month]);

    const fetchPieChartData = async () => {
        try {
            const response = await axios.get('/api/pie-chart', { params: { month } });
            setPieData(response.data);
        } catch (error) {
            console.error('Failed to fetch pie chart data', error);
        }
    };

    return (
        <PieChart width={400} height={400}>
            <Pie
                data={pieData}
                dataKey="count"
                nameKey="_id"
                cx="50%"
                cy="50%"
                outerRadius={150}
                fill="#8884d8"
            >
                {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
            </Pie>
            <Tooltip />
        </PieChart>
    );
};

export default TransactionsPieChart;
