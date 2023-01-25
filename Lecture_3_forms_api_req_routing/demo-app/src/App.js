
import './App.css';
import InputBox from './Components/todo/InputBox';
import OutputBox from './Components/todo/OutputBox';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
function App() {
  let [items, setItems] = useState([]);
  const acceptNewTask = (task) => {
    let newTaskArr = [...items, task];
    // state var 
    setItems(newTaskArr);
  }
  return (
    <div>
      <h1>Todo App</h1>
      <InputBox acceptNewTask={acceptNewTask}></InputBox>
      <OutputBox
        list={items}
      ></OutputBox>
    </div>
  );
  console.log("Before");
  /*        **************************/
  // let [users, setUsers] = useState([]);

  // useEffect(function () {
  //   // api request 
  //   (async function () {
  //     let res = await axios
  //       .get("https://jsonplaceholder.typicode.com/users")
  //     setUsers(res.data);
  //   })()
  // }, []);
  // console.log("I will execute ");
  // return (
  //   <>
  //     <h1>Fetching Data </h1>
  //     {/*conditional rendering*/}
  //     {users.length == 0 ? <h2>...Loading</h2> :
  //       <><h2> Users</h2>
  //         <ul>
  //           {users.map((user) => {
  //             return <li key={user.id}>
  //               {user.name}</li>
  //           })}
  //         </ul>
  //       </>
  //     }
  //   </>

  // )
}

export default App;
