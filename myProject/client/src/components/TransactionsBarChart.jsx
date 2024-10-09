import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const TransactionsBarChart = ({ month }) => {
    const [barData, setBarData] = useState([]);

    useEffect(() => {
        fetchBarChartData();
    }, [month]);

    const fetchBarChartData = async () => {
        try {
            const response = await axios.get('/api/bar-chart', { params: { month } });
            setBarData(response.data);
        } catch (error) {
            console.error('Failed to fetch bar chart data', error);
        }
    };

    return (
        <BarChart width={600} height={300} data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="range" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
    );
};

export default TransactionsBarChart;
