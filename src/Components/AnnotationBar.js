import { useEffect, useRef } from "react";
import { COLNAMES } from "../constants";

// https://react.dev/learn/updating-arrays-in-state#replacing-items-in-an-array

const ChangeItem = ({ rowIdx, setRowIdx, list, setList}) => {
  const inputRef = useRef();
//   useEffect(() => {console.log(list)},
//   [list])
  return (
    <>
        <button
            onClick={() => {
                setList(list => 
                    list.map((item, idx) => 
                        idx === rowIdx ? {...item, is_paraphrase: !item.is_paraphrase} : item
                    )
                )
                console.log(":)")
            }}>
            {
                list.length && list[rowIdx]['is_paraphrase'] ? "VALID PARAPHRASE" : "INVALID PARAPHRASE"
            }
        </button>
        <button
            onClick={() => {
                console.log(":)")
            }}>
            GRAMMAR ISSUE
        </button>
        <button
            onClick={() => {
                console.log(":)")
            }}>
            TYPO ISSUE
        </button>
        <button
            onClick={() => {
                console.log(":)")
            }}>
            REPETITION ISSUE
        </button>
        <button
            onClick={() => {
                console.log(":)")
            }}>
            JOINED ISSUE
        </button>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

    </>
  );
};

export default ChangeItem;