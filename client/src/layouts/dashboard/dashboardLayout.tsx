import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Sidebar } from '../../components';

const DashboardLayout: React.FC = () => (
  <div className="flex">
    <Sidebar />
    <main className="flex-1 p-4">
      <Outlet />
    </main>
  </div>
);

export default DashboardLayout;
