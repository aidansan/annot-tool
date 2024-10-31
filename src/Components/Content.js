import { useEffect } from "react";
import ChangeItem from "./ChangeItem";
import { COLNAMES } from "../constants";


const Content = ({ list, handleCheck, handleDelete, rowIdx, setRowIdx, colIdx, setColIdx }) => {
    // useEffect(() => {
    //   console.log("This is content: ", rowIdx);
    // }, []);
    console.log(rowIdx)
    // console.log(list)
    // console.log(list[rowIdx])

    return (
      <main className="content">
        {list.length ? (
          <>
            <p>{list[rowIdx]['original']}</p>
            <p>{list[rowIdx][COLNAMES[colIdx]]}</p>
          </>
        ) : (<p>No Annotations</p>)
        }
        
        {/* {list.length ? (
          <ul>
            {list.map((item) => {
              return (
                <p>{item['original']}</p>
                // <li className="list" key={item.id}>
                //   <input
                //     onChange={() => handleCheck(item.id)}
                //     type="checkbox"
                //     checked={item.checked}
                //   />
  
                //   <label onDoubleClick={() => handleCheck(item.id)}>
                //     <h3>{item.item}</h3>
                //   </label>
  
                //   <button onClick={() => handleDelete(item.id)}>X</button>
                // </li>
              );
            })}
          </ul>
        ) : (
          <h3
            style={{
              marginTop: "2rem",
            }}
          >
            {" "}
            Empty List{" "}
          </h3>
        )} */}
        <ChangeItem
          setRowIdx={setRowIdx}
          list={list}/>
      </main>
    );
  };
  
  export default Content;