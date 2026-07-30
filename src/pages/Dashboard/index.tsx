import { useAppSelector } from '@/app/hooks';
import { Handshake } from 'lucide-react';

function Dashboard() {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const user = useAppSelector((state) => state.auth.user);
  if (isAuthenticated)
    return (
      <section aria-label="Dahboard navigation" aria-description="Welcome Section">
        <h2 style={{ display: 'flex', flexDirection: 'row', backgroundColor: 'yellowgreen' }}>
          Welcome, {user?.name} !{' '}
          <Handshake style={{ marginLeft: '2px' }} size={30} aria-hidden={true} />
        </h2>
        <h3 style={{ backgroundColor: 'cyan' }}>Here's an overview of your workspace.</h3>
      </section>
    );
  return (
    <h1
      aria-label="Dahboard navigation"
      aria-description="This is a preview of the dashboard. Sign in to access your personalised workspace."
    >
      This is a preview of the dashboard. Sign in to access your personalised workspace.
    </h1>
  );
}

export default Dashboard;
