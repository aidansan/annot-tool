// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit haha <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;




import "./App.css";
import Content from "./Components/Content";
import AddList from "./Components/AddList";
// import request from "./Components/Request";
import { useState, useEffect } from "react";
import { COLNAMES } from "./utils";

function App() {
  const API_url = "http://127.0.0.1:5000/";
  const GET_url =  API_url + "get-data";
  const POST_url = API_url + "set-data";

  const [list, setList] = useState([]);

  const [newItem, setNewItem] = useState("");

  const [error, setError] = useState(null);
  
  const [rowIdx, setRowIdx] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(GET_url);

        if (!response.ok) throw Error("Error Message");

        const listItem = await response.json();
        console.log(listItem);

        setList(listItem['data']);
        console.log(list)

        setError(null);
      } catch (error) {}
    };

    fetchData();
  }, []);
  useEffect(() => {
    fetch(POST_url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(list),
  })}, [list])

  // Add new Item to the list

  //  Create a function to update the checked property

  const handleCheck = async (id) => {
    const listItem = list.map((item) =>
      item.id === id
        ? {
            ...item,

            checked: !item.checked,
          }
        : item
    );

    setList(listItem);

    const myitem = listItem.filter((list) => list.id === id);

    const updateOptions = {
      method: "PATCH",

      headers: {
        "content-Type": "application/json",
      },

      body: JSON.stringify({
        checked: myitem[0].checked,
      }),
    };

    const reqUrl = `${API_url}/${id}`;

    //const result = await request(reqUrl, updateOptions);

    // if (result) setError(result);
  };

  //  create a function to delete an item

  const handleDelete = async (id) => {
    const listItem = list.filter((item) => item.id !== id);

    setList(listItem);

    const deleteOptions = {
      method: "DELETE",
    };

    const reqUrl = `${API_url}/${id}`;

    // const result = await request(reqUrl, deleteOptions);

    // if (result) setError(result);
  };

  //  create a function to prevent default submit action

  const handleSubmit = (e) => {
    e.preventDefault();

    setNewItem("");
  };

  return (
    <div className="App">

      {/* <AddList
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      /> */}

      <Content
        list={list}
        setList={setList}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        rowIdx={rowIdx}
        setRowIdx={setRowIdx}
        />
    </div>
  );
}

export default App;