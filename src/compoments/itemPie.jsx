
import { Card, List, Button, Input } from "antd";

import { useLayoutEffect ,useEffect , useState } from 'react'

import * as echarts from 'echarts'

function ItemPie(props) {
     


     useLayoutEffect(()=>{
console.log("5555", props.list.items);

let num = 0;
 props.list.items.forEach(ele=>{ 
  console.log("gggg",ele);
  if(ele.isDone){
    num = num+1;
  }

})


console.log( "xxxx", num);

let xx = props.list.items.length-num


          // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('pie'));

      // 指定图表的配置项和数据
      var option = {
        title: {
          text: 'Visualization of solved and unsolved items',
          left:"center"
        },
        tooltip: {
          trigger: 'item'
        },

        series: [
          {
          
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label:{
            show:true,
            formatter:`{b} : {c}`,
            position:'inside'
          },
          data: [
            { value: num, name: 'Solved' },
            { value: xx, name: 'Unsolved' },
      
          ]
        }

        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);


     },[props.list])


    return (
        <div>
            
                <div id="pie" className="chartsLists" ></div>
        </div>
    )
}

export default ItemPie;