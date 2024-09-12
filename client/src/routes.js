import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import DevicePage from "./pages/DevicePage";

import { ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, EDIT_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, ROOT, SHOP_ROUTE } from "./utils/consts"
import App from "./App";
import EditDevice from "./pages/EditDevice";


export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        element: <Admin/>
    },
    {
        path: BASKET_ROUTE,
        element: <Basket/>
    },
    {
        path:EDIT_ROUTE,
        element: <EditDevice/>
    },
   

]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        element: <Shop/>,
    },
    {
        path: LOGIN_ROUTE,
        element: <Auth/>
    },
    {
        path: REGISTRATION_ROUTE,
        element: <Auth/>
    },
    {
        path: DEVICE_ROUTE + "/:id",
        element: <DevicePage/>
    },
]