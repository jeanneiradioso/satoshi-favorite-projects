import { lazy } from 'react';
import { DashboardLayout } from '../layouts';
import { Navigate } from 'react-router-dom';

const List = lazy(() => import('../pages/projects/list/list'));
const Details = lazy(() => import('../pages/projects/details/details'));

const DefaultLayout = () => <Navigate to="/projects" replace />;

export const routes = [
  {
    path: '/projects',
    label: 'Projects',
    layout: DashboardLayout,
    children: [
      { path: '', element: List,  label: 'Project List' },
      { path: 'new', element: Details, label: 'Create Project'},
      { path: ':projectId', element: Details, label: 'View Project'},
      { path: ':projectId/edit', element: Details, label: 'Edit Project'},
    ],
  },
  {
    path: '/',
    layout: () => <DefaultLayout />, 
    element: <DefaultLayout />,
  },
];
