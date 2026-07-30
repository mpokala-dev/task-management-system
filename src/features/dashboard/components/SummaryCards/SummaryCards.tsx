import { useEffect } from 'react';
import { ListChecks, Clock, CheckCircle2, AlertTriangle } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { loadDashboardSummary } from '@/features/dashboard/store/dashboardSlice';
import StatCard from '@/components/common/StatCard';
import styles from './SummaryCards.module.css';

function SummaryCards() {
  const dispatch = useAppDispatch();
  const { summary, loading, error } = useAppSelector((state) => state.dashboard);

  useEffect(() => {
    dispatch(loadDashboardSummary());
  }, [dispatch]);

  if (error) {
    return (
      <div className={styles.errorState} role="alert">
        {error}
      </div>
    );
  }

  const isEmpty = !loading && summary && summary.total === 0;

  if (isEmpty) {
    return (
      <div className={styles.emptyState}>
        No tasks yet. Create your first task to see your stats here.
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      <StatCard
        label="Total"
        value={summary?.total ?? 0}
        icon={<ListChecks size={20} />}
        variant="neutral"
        loading={loading}
      />
      <StatCard
        label="In Progress"
        value={summary?.inProgress ?? 0}
        icon={<Clock size={20} />}
        variant="warning"
        loading={loading}
      />
      <StatCard
        label="Completed"
        value={summary?.completed ?? 0}
        icon={<CheckCircle2 size={20} />}
        variant="success"
        loading={loading}
      />
      <StatCard
        label="Overdue"
        value={summary?.overdue ?? 0}
        icon={<AlertTriangle size={20} />}
        variant="error"
        loading={loading}
      />
    </div>
  );
}

export default SummaryCards;
