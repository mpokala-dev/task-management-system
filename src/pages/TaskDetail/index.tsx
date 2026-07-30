import { useParams, Link } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';

function TaskDetail() {
  const { id } = useParams<{ id: string }>();

  return (
    <section aria-label="Task details">
      <h2>Task Detail</h2>
      <p>Viewing task ID: {id}</p>
      <p>Full task detail view is coming in a future story.</p>
      <Link to={ROUTES.DASHBOARD}>Back to Dashboard</Link>
    </section>
  );
}

export default TaskDetail;
