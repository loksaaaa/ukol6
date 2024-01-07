import { Card, List, Button, Input } from "antd";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import mockData from "../mock/shoppingLists";

import { Calendar ,theme} from 'antd';
import { increment ,changeColor,changeLanguage} from "../store";
import { useSelector, useDispatch } from 'react-redux'
let dataMock = mockData.shoppinglists;
import ArchivedCharts from "../compoments/archivedCharts";

import ArchiveList from '../compoments/archivedLists'

function ShoppingLists() {
  const [list, setList] = useState([]);
  const count = useSelector((state)=> state.cal.value)
  const eee = useSelector( (state) => state.cal )
  let [len,setLen] = useState(list.length);
  let [unlen,setUnlen] = useState(0)
  const dispatch = useDispatch()
  

  useEffect(() => {
    let url = "http://127.0.0.1:3000/shoppingLists?id=656c2c457c450b82440081ca";

    fetch(url).then((res) => {
      console.log("res",res);
      if (res.status == 2040) {
        res.json().then((data) => {
          //console.log("xxxx",data);
         // setList(data.shoppingLists);
        // data.shoppingLists.length = 0
          if (data && data.shoppingLists && data.shoppingLists.length == 0) {
            console.log("kkkkdsddddd");
            setList(dataMock);
          } else {
            setList(data.shoppingLists);
          }
        });
      }else{
        setList(dataMock);
      }
    }).catch(()=>{
      setList(dataMock);
    })

    


 
  }, []);

  const handleAdd = ()=>{
    dispatch(increment())
  }

  const changeTheme= ()=>{
    dispatch(changeColor())
  }

  const changeLanguange = ()=>{
    dispatch(changeLanguage())
  }

  const delList = (id) => {
    let isDel = window.confirm(
      "Are you sure you want to remove this shopping list?"
    );
    if (isDel) {
      let filterArr = list.filter((item) => item._id !== id);

      let url = `http://127.0.0.1:3000/shoppingLists/del?id=${id}`;

      fetch(url).then((res) => {
        if (res.status == 200) {
          console.log(res);
          setList(filterArr);
        }
      });

      setList(filterArr);
    }
  };
  const archiveList = (id) => {
    let z = 0;
    let filterArr = list.map((item) => {
      console.log(item);
      if(!item.isDone){
        z++;
      }

      setLen(list.length)
      setUnlen(z)

      if (item._id == id) {
        let url = `http://127.0.0.1:3000/shoppingLists/changeArchive?id=${id}&isDone=${!item.isDone}`;

        fetch(url).then((res) => {
          if (res.status == 200) {
            res.json().then((data) => {
              console.log("xxxx", data);
              // setList(data.shoppingLists)
              // if( data.shoppingLists.length ==0){
              //   setList(data)
              // }else{
              //   setList(data.shoppingLists)
              // }

              if (data.shoppingLists.modifiedCount == 1) {
                console.log(data);
              }
            });
          }
        });
      

        return {
          ...item,
          isDone: !item.isDone,
        };
      } else {
        return item;
      }


     

    });

    setList(filterArr);
  };

  const unArchiveList = (id) => {
    // alert("unArchiveList");
    archiveList(id);
  };

  // const createListOne = () => {
  //   alert(" createListOne");
  // };

  return (
    <>
       <h2> Overview of Shopping lists</h2> 
     
       <Button onClick={changeTheme}>Change mode </Button>
       <Button onClick={ changeLanguange}> Change Language  </Button>
      <Card>
        <List
          bordered
          header={
            <div className="titleInRow">
              <Link to="createList">
                <Button type="primary"> Create new shopping list</Button>
              </Link>
            </div>
          }
          dataSource={list.filter((item) => item.isDone)}
          renderItem={(item) => (
            <List.Item>
              <div className="itemPosition">
                <Link to={{pathname:'list',query:{id:item._id}}} state={{id:item._id}}>
                  <div>{item.listName}</div>
                </Link>
                <Button
                  danger
                  className="midBtn"
                  onClick={() => {
                    delList(item._id);
                  }}
                >
                  Delete
                </Button>
                <Button
                  className="greenBtn"
                  onClick={() => {
                    archiveList(item._id);
                  }}
                >
                  Archive
                </Button>
              </div>
            </List.Item>
          )}
        ></List>

<ArchiveList list={list} unArchiveList = { unArchiveList } ></ArchiveList>

 
      </Card>

      <ArchivedCharts  list={list}   ></ArchivedCharts>
    </>
  );
}

export default ShoppingLists;
