import { useEffect } from "react";
import ChangeItem from "./ChangeItem";
import AnnotationBar from "./AnnotationBar";
import { str_word_diff, COLNAMES } from "../utils";

const Content = ({ list, setList, handleCheck, handleDelete, rowIdx, setRowIdx }) => {
    // useEffect(() => {
    //   console.log("This is content: ", rowIdx);
    // }, []);
    console.log(rowIdx)
    console.log(list);

    // console.log(list)
    // console.log(list[rowIdx])

    return (
      <main className="content">
        <p>{Math.floor(rowIdx / COLNAMES.length) + 1} </p>
        {list.length ? (
          <>
            <p>{list[rowIdx]['original']}</p>
            <p>{str_word_diff(list[rowIdx]['original'], list[rowIdx]['paraphrase'])}</p>
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
        <AnnotationBar
          rowIdx={rowIdx}
          setRowIdx={setRowIdx}
          setList={setList}
          list={list}/>
        <ChangeItem
          rowIdx={rowIdx}
          setRowIdx={setRowIdx}
          list={list}/>
      </main>
    );
  };
  
  export default Content;