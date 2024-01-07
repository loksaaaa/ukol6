import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import RouterView from "./router/index.jsx";
import { RouterProvider ,createBrowserRouter } from 'react-router-dom'
import './App.css'
import { ConfigProvider } from 'antd'
import ShoppingLists from "./views/ShoppingLists";
import ShoppingList from "./views/ShoppingList";
import CreateShoppingList from "./views/CreateShoppingList";

// import store from './store'
import store from './store/index'

import English from 'antd/locale/en_US'
import CSCZ from 'antd/locale/cs_CZ'


import { Provider ,useSelector } from "react-redux"




const routes = [
  {
    path: "/",
    element : ( <ShoppingLists />)
  },
  {
    path: "/list",
    element: ( <ShoppingList />)
  },
  {
    path: "/createList",
    element: ( <CreateShoppingList />)
  },
];

const router = createBrowserRouter(routes)

console.log("kkkk", store);

let flag = true
store.subscribe(()=>{
  let cal = store.getState('cal')
  console.log("4444",cal.cal.language);
  if(cal.cal.language){
    flag = true
   }else{
    flag = false
   }

   console.log("zzzz",flag);

    

})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    
    {/* <ConfigProvider locale={store.getState(theme.language)} store={store}>  */}
    {/* <Provider store={store}> 
    <ConfigProvider locale={flag ? English : CSCZ} store={store} > 
   
      <RouterProvider router={ router } ></RouterProvider>
    </ConfigProvider> 
    </Provider> */}
  </React.StrictMode>,
)
