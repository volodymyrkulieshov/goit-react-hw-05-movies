// 1. Create routes ✅
// 2. Lazy imports ✅

// import Home from 'pages/Home';
// import Movies from 'pages/Movies';
// import MoviesDetails from 'pages/MoviesDetails';
// import Cast from './Cast/Cast';
// import Reviews from './Reviews/Reviews';
import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from '../Layout/Layout';
const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/MoviesPage'));
const MoviesDetails = lazy(() => import('../pages/MoviesDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

const App = () => {
  return (
    <>
      <Suspense fallback={<>loading...</>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MoviesDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            /
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
export default App;
