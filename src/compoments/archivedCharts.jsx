
import { Card, List, Button, Input } from "antd";

import { useLayoutEffect ,useEffect , useState } from 'react'

import * as echarts from 'echarts'

function ArchivedCharts(props) {


    console.log("uuu",props.list);

    let names = [];
    let nums = [];
    props.list.forEach(ele=>{ 
        names.push(ele.listName)
        nums.push(ele.itemNum)
      
      })




     useLayoutEffect(()=>{
     
   
       
          // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('main'));

      

      console.log(names,"klkkk");

      // 指定图表的配置项和数据
      var option = {
        title: {
        yAxis: {},
        text: 'Visualization of shopping lists with item counts',
          left:"center"
        },
        tooltip: {},
        xAxis: {
          data: names
        },
        yAxis: {},
        series: [
          {
            type: 'bar',
            data:  nums,
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            }
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);


     },[props.list])


    return (
        <div>
            
                <div id="main" className="chartsLists" ></div>
        </div>
    )
}

export default ArchivedCharts;