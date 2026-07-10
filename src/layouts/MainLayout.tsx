/**Responsible for:

Header
Sidebar
Footer
Outlet

<Header />
<Sidebar />
<Outlet />
<Footer />
**/
import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <div>
      <header>Header placeholder</header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
