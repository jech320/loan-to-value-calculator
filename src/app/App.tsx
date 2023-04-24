import { Route, Routes } from 'react-router-dom';
import { RoutesEnum } from '../shared/enums/RoutesEnum';
import { lazy } from 'react';
import { GuestRoute } from '../shared/components/GuestRoute';

const HomePage = lazy(() => import('./homePage/HomePage'));
const PageNotFound = lazy(
  () => import('./../shared/components/PageNotFound/PageNotFound')
);

const App = (): JSX.Element => {
  return (
    <Routes>
      <Route element={<GuestRoute />}>
        <Route path={RoutesEnum.HOME} element={<HomePage />} />
      </Route>
      <Route path={RoutesEnum.NOT_FOUND} element={<PageNotFound />} />
    </Routes>
  );
};

export default App;
