import { useEffect, useRef } from "react";
import { NOTES } from "../utils";
// import foundation from "../foundation.css";

// https://react.dev/learn/updating-arrays-in-state#replacing-items-in-an-array

const ChangeItem = ({ rowIdx, setRowIdx, list, setList}) => {
  const inputRef = useRef();
//   useEffect(() => {console.log(list)},
//   [list])
  return (
    <>
        <div class="grid-x grid-padding-x">
        <div class="cell small-2">
        <button
            onClick={() => {
                setList(list => 
                    list.map((item, idx) => 
                        idx === rowIdx ? {...item, is_paraphrase: !item.is_paraphrase} : item
                    )
                )
            }}
            className={"button " + (list.length && list[rowIdx]['is_paraphrase'] ? "" : "alert")}>
            {
                list.length && list[rowIdx]['is_paraphrase'] ? "VALID PARAPHRASE" : "INVALID PARAPHRASE"
            }
        </button>
        </div>
        { NOTES.map(note => (
            <div class="cell small-2">
            <button
                onClick={() => {
                    setList(list => 
                        list.map((item, idx) => 
                            idx === rowIdx ? {...item, 
                                notes: 
                                    item.notes.includes(note) ? 
                                    item.notes.filter(n => n !== note) :
                                    [...item.notes, note]} 
                            : item
                        )
                    )
                }}
                className={"button expanded " + (list.length && list[rowIdx].notes.includes(note) ? "alert" : "")}>
                {
                    list.length && list[rowIdx].notes.includes(note) ? note.toUpperCase() : "NO " + note.toUpperCase()
                }
            </button>
            </div>
        )) }
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

    </>
  );
};

export default ChangeItem;