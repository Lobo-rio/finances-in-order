
import RevenueVsExpensesChart from '../components/charts/RevenueVsExpensesChart';
import RecentTransactionsTable from '../components/RecentTransactionsTable';

const ReportCard = ({ title, value }: { title: string, value: string }) => (
    <div className="bg-white p-6 rounded-2xl shadow-card border border-card-border">
        <p className="text-sm text-text-secondary font-medium mb-2">{title}</p>
        <h3 className="text-3xl font-bold text-text-primary">{value}</h3>
    </div>
);

export default function Reports() {
    return (
        <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <ReportCard title="Total Revenue" value="R$ 25.430,50" />
                <ReportCard title="Active Users" value="1,204" />
                <ReportCard title="New Signups" value="152" />
                <ReportCard title="Pending Payments" value="R$ 1.280,00" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <RevenueVsExpensesChart />
                <RecentTransactionsTable />
            </div>
        </div>
    )
}
