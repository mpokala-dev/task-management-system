/** Responsible for:

Login
Register
Forgot Password

<div className="auth-layout">
   <Outlet />
</div>

**/

import { Outlet } from 'react-router-dom';

function AuthLayout() {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AuthLayout;
