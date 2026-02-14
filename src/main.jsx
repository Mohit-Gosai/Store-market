import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '../src/index.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'


import Home from './Routes/Home.jsx'
import StoreOnboarding from './Components/StoreOnboarding.jsx'
import CreateCoupon from './Routes/CreateCoupon.jsx'
import CouponWallet from './Routes/CouponWallet.jsx'
import StoreDetails from './Routes/StoreDetailsPage.jsx'
import MerchantDashboard from './Routes/MerchantDashboard.jsx'
import TrendingDeals from './Routes/TrendingDeals.jsx'
import SavedStores from './Routes/SavedStores.jsx'

const route = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path:'',
        element:<Home/>
      },
      {
        path:'store/:id',
        element:<StoreDetails/>
      },
      {
        path: 'onboarding',
        element: <StoreOnboarding/>
      },
      {
        path:"create-coupon",
        element:<CreateCoupon/>
      },
      {
        path: 'my-coupons',
        element: <CouponWallet/>
      },
      {
        path: 'merchant-dashboard',
        element: <MerchantDashboard/>
      },
      {
        path: 'deals',
        element: <TrendingDeals/>
      },
      {
        path:'saved',
        element: <SavedStores/>
      }

    ],
    baseName: '/Store-market' // Ensure this matches the "homepage" field in package.json
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={route} />
  </StrictMode>,
)
