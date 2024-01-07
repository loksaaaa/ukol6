import { createSlice } from '@reduxjs/toolkit'
import English from 'antd/locale/en_US'
import CSCZ from 'antd/locale/cs_CZ'


import { theme } from 'antd';
import { createRoot } from 'react-dom/client';

const { getDesignToken, useToken } = theme;


export const counterSlice = createSlice({
  name: 'lan',
  initialState: {
    value: true,
    language:true,
 
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
 
    changeLanguage: state =>{
      console.log(state.language);
       state.language = !state.language
      
    }
  }
})

export const { changeLanguage} = counterSlice.actions

export default counterSlice.reducer