/**
 * Typed versions of React-Redux's useDispatch and useSelector.
 * Use these throughout the app instead of the plain react-redux hooks,
 * so components get full TypeScript inference on state and dispatch
 * without importing RootState/AppDispatch everywhere individually.
 */
import { useSelector, useDispatch } from 'react-redux';
import type { AppDispatch, RootState } from './store';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export const useAppSelector = useSelector.withTypes<RootState>();
