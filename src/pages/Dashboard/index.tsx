import { useAppSelector } from '@/app/hooks';
import { Handshake } from 'lucide-react';
import SummaryCards from '@features/dashboard/components/SummaryCards/SummaryCards';
import styles from './Dashboard.module.css';

interface DashboardProps {
  forcePreview?: boolean;
}

function Dashboard({ forcePreview = false }: DashboardProps) {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const user = useAppSelector((state) => state.auth.user);
  if (isAuthenticated && !forcePreview)
    return (
      <section aria-label="Dahboard welcome">
        <h2 className={styles.welcomeHeading}>
          Welcome, {user?.name}! <Handshake aria-hidden="true" size={30} />
        </h2>
        <p>Here's an overview of your workspace.</p>
        <SummaryCards />
      </section>
    );
  return (
    <h1 aria-label="Dahboard welcome">
      This is a preview of the dashboard. Sign in to access your personalised workspace.
    </h1>
  );
}

export default Dashboard;
