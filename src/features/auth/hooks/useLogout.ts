import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/app/hooks';
import { logout } from '@/features/auth/store/authSlice';
import { ROUTES } from '@/constants/routes';

export function useLogout() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return () => {
    dispatch(logout());
    navigate(ROUTES.LOGIN, { replace: true });
  };
}
