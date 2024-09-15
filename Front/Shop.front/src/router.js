import { createBrowserRouter } from 'react-router-dom';
import HomePage from "./components/HomePage"
import Contact from "./components/Contact"
import Layout from './components/Layout';
import OurPastry from './components/OurPastry';
import About from './components/About';
import Login from './components/Login';
import UserInfo from './components/UserInfo';
import Signup from './components/Signup';
import ShoppingCart from './components/ShoppingCart';
import Payment from './components/Payment';
import PastryInpormation from './components/PastryInpormation';




const router = createBrowserRouter([
    {
        element: <Layout />, children: [
          { path: "/", element: <HomePage /> },
          {
            path: "/about",
            element:<About/>
          },
          {
            path: "/contact",
            element: <Contact />
          },
          {
            path: "/payment",
            element:<Payment/>
          },
          {
            path: "/shoppingCart",
            element:<ShoppingCart/>
          },
          {
            path: "/login",
            element:<Login/>
          },
          {
            path: "/signup",
            element:<Signup/>
          },
          {
            path: "/userInfo",
            element:<UserInfo/>
          },
        {
          path: "/ourPastry",
          children: [
              {
                  index: true,
                  element: <OurPastry />,
              },
              {
                  path: ":name",
                  element: < PastryInpormation/>,
              },
          ]
      }
        ]
      }
]

);

export default router //מנווט את הדפים
