import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from '../pages/main-page/MainPage';
import Agreement from '../pages/agreement/Agreement';
import PrivacyPolicy from '../pages/privacy-policy/PrivacyPolicy';
import Legal from '../pages/legal/Legal';
import Offer from '../pages/offer/Offer';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/legal',
    element: <Legal />,
  },
  {
    path: '/legal/agreement',
    element: <Agreement />,
  },
  {
    path: '/legal/privacy-policy',
    element: <PrivacyPolicy />,
  },
  {
    path: '/offer',
    element: <Offer />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
