import { createSlice } from '@reduxjs/toolkit'
import English from 'antd/locale/en_US'
import CSCZ from 'antd/locale/cs_CZ'


import { theme } from 'antd';
import { createRoot } from 'react-dom/client';

const { getDesignToken, useToken } = theme;


export const counterSlice = createSlice({
  name: 'calculate',
  initialState: {
    value: true,
    language:true,
    theme : {
        token: {
          // Seed Token，影响范围大
          colorPrimary: '#00b96b',
          borderRadius: 2,
      
          // 派生变量，影响范围小
          colorBgContainer: '#f6ffed',
        },
      }
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
    changeColor: state => {
        state.theme.token.colorPrimary = '#000'
        state.value = !state.value;
        if(  state.value){
            state.theme.token.colorPrimary = '#000'
            state.theme.token.colorBgBase = "#999"
            // state.theme.token.colorBgContainer = '#fff'
        }else{
            console.log(theme);
            state.theme = theme.defaultConfig;
        }
    },
    changeLanguage: state =>{
      console.log(state.language);
       state.language = !state.language
      
    }
  }
})

export const { increment , changeColor, changeLanguage} = counterSlice.actions

export default counterSlice.reducer