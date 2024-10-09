const Statistics = ({ month }) => {
    const [stats, setStats] = useState({ totalSaleAmount: 0, totalSoldItems: 0, totalNotSoldItems: 0 });

    useEffect(() => {
        fetchStatistics();
    }, [month]);

    const fetchStatistics = async () => {
        try {
            const response = await axios.get('/api/statistics', { params: { month } });
            setStats(response.data);
        } catch (error) {
            console.error('Failed to fetch statistics', error);
        }
    };

    return (
        <div>
            <h3>Statistics for {month}</h3>
            <p>Total Sale Amount: {stats.totalSaleAmount}</p>
            <p>Total Sold Items: {stats.totalSoldItems}</p>
            <p>Total Not Sold Items: {stats.totalNotSoldItems}</p>
        </div>
    );
};

export default Statistics;
