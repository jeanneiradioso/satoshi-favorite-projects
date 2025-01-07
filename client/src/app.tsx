import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes/routes';
import { Header } from './components';

const App: React.FC = () => {
  const renderRoutes = (routes: any[]) => {
    return routes.map(({ path, layout: Layout, children }, index) => (
      <Route key={index} path={path} element={<Layout />}>
        {children && children.map((child: any, childIndex: number) => (
          <Route key={childIndex} path={child.path} element={<child.element />} />
        ))}
      </Route>
    ));
  };

  return (
    <Router>
      <Header />
      <Suspense fallback={<div></div>}>
        <Routes>{renderRoutes(routes)}</Routes>
      </Suspense>
    </Router>
  );
};

export default App;
