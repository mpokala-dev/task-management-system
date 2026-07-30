import { useEffect } from 'react';
import { AlertTriangle, CalendarClock, CheckCircle2, Hourglass } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { loadRecentTasks } from '@/features/tasks/store/taskSlice';
import { selectTaskStatistics } from '@/features/tasks/store/selectors';
import StatCard from '@/components/common/StatCard';
import styles from './TaskStatisticsWidget.module.css';

function TaskStatisticsWidget() {
  const dispatch = useAppDispatch();
  const { loading, error, initialized } = useAppSelector((state) => state.tasks);
  const stats = useAppSelector(selectTaskStatistics);

  useEffect(() => {
    if (!initialized && !loading) {
      dispatch(loadRecentTasks());
    }
  }, [dispatch, initialized, loading]);

  return (
    <section className={styles.widget} aria-labelledby="task-stats-heading">
      <h3 id="task-stats-heading" className={styles.heading}>
        Task statistics
      </h3>

      {error && (
        <div className={styles.errorState} role="alert">
          {error}
        </div>
      )}

      {!error && !loading && initialized && stats.highPriority === 0 && stats.pending === 0 && (
        <p className={styles.emptyState}>
          No task data yet. Statistics will appear here once you have tasks.
        </p>
      )}

      {!error &&
        (loading || stats.highPriority > 0 || stats.pending > 0 || stats.completed > 0) && (
          <div className={styles.grid}>
            <StatCard
              label="High Priority"
              value={stats.highPriority}
              icon={<AlertTriangle size={18} />}
              variant="error"
              loading={loading}
            />
            <StatCard
              label="Due Today"
              value={stats.dueToday}
              icon={<CalendarClock size={18} />}
              variant="warning"
              loading={loading}
            />
            <StatCard
              label="Completed"
              value={stats.completed}
              icon={<CheckCircle2 size={18} />}
              variant="success"
              loading={loading}
            />
            <StatCard
              label="Pending Tasks"
              value={stats.pending}
              icon={<Hourglass size={18} />}
              variant="neutral"
              loading={loading}
            />
          </div>
        )}
    </section>
  );
}

export default TaskStatisticsWidget;
