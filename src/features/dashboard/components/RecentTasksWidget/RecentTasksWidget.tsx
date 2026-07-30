import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { loadRecentTasks } from '@/features/tasks/store/taskSlice';
import { buildTaskDetailPath } from '@/constants/routes';
import styles from './RecentTasksWidget.module.css';

const STATUS_LABELS: Record<string, string> = {
  todo: 'To do',
  'in-progress': 'In progress',
  completed: 'Completed',
};

function RecentTasksWidget() {
  const dispatch = useAppDispatch();
  const { recentTasks, loading, error, initialized } = useAppSelector((state) => state.tasks);

  useEffect(() => {
    if (!initialized && !loading) {
      dispatch(loadRecentTasks());
    }
  }, [dispatch, initialized, loading]);

  return (
    <section className={styles.widget} aria-labelledby="recent-tasks-heading">
      <h3 id="recent-tasks-heading" className={styles.heading}>
        Recent tasks
      </h3>

      {error && (
        <div className={styles.errorState} role="alert">
          {error}
        </div>
      )}

      {!error && loading && (
        <ul className={styles.list} aria-label="Loading recent tasks">
          {[1, 2, 3].map((n) => (
            <li key={n} className={styles.skeletonRow} aria-hidden="true" />
          ))}
        </ul>
      )}

      {!error && !loading && recentTasks.length === 0 && (
        <p className={styles.emptyState}>No recent tasks. Tasks you work on will show up here.</p>
      )}

      {!error && !loading && recentTasks.length > 0 && (
        <ul className={styles.list}>
          {recentTasks.map((task) => (
            <li key={task.id} className={styles.item}>
              <Link to={buildTaskDetailPath(task.id)} className={styles.itemLink}>
                <span className={styles.itemTitle}>{task.title}</span>
                <span className={styles.itemStatus}>{STATUS_LABELS[task.status]}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default RecentTasksWidget;
