import './App.css'

import { useState } from "react";
 
import './index.css'
// import RouterView from "./router/index.jsx";
import { RouterProvider ,createBrowserRouter } from 'react-router-dom'
import './App.css'
import { ConfigProvider } from 'antd'
import ShoppingLists from "./views/ShoppingLists.jsx"
import ShoppingList from "./views/ShoppingList";
import CreateShoppingList from "./views/CreateShoppingList";
import store from './store/index'
 
import English from 'antd/locale/en_US'
import CSCZ from 'antd/locale/cs_CZ'
import xx from '../locales/cs-CZ.js'
import { Provider ,useSelector } from "react-redux"

console.log(CSCZ)

// CSCZ = {
//   ...CSCZ,
//   ...xx
// }

// CSCZ = Proxy({},CSCZ,xx)

let xxx  = Object.assign({},CSCZ,xx)
console.log(xxx);

import { theme } from 'antd';
import csCZ from '../locales/cs-CZ.js';

const { getDesignToken } = theme;


 

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

console.log("kkkk", store);

 

const router = createBrowserRouter(routes)

function App() {

const [flag, setFlag] = useState(true);
const [ theme,setTheme ] = useState({})

store.subscribe(()=>{
  let cal = store.getState('cal')
   setTheme(cal.cal.theme)
})


store.subscribe(()=>{
  let cal = store.getState('lan')
  if(cal.lan.language){
    setFlag(true)
   }else{
    setFlag(false)
    
   }

 //  setTheme(cal.cal.theme)

 
 

})




  return (
    <Provider store={store}> 
      
    <ConfigProvider   locale={flag ? English : xxx}   theme={ theme } > 
   
    <RouterProvider router={ router } ></RouterProvider>
  </ConfigProvider> 
  </Provider>

  )
}

export default App
