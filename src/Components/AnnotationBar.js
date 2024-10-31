import { useEffect, useRef } from "react";

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
            }}>
            {
                list.length && list[rowIdx]['is_paraphrase'] ? "VALID PARAPHRASE" : "INVALID PARAPHRASE"
            }
        </button>
        <button
            onClick={() => {
                setList(list => 
                    list.map((item, idx) => 
                        idx === rowIdx ? {...item, 
                            notes: 
                                item.notes.includes("grammar issue") ? 
                                item.notes.filter(note => note !== "grammar issue") :
                                [...item.notes, "grammar issue"]} 
                        : item
                    )
                )
            }}>
            {
                list.length && list[rowIdx].notes.includes("grammar issue") ? "GRAMMAR ISSUE" : "NO GRAMMAR ISSUE"
            }
        </button>
        {/* Same thing for typo, repetion, joined words */}
        <button
            onClick={() => {
                setList(list => 
                    list.map((item, idx) => 
                        idx === rowIdx ? {...item, 
                            notes: 
                                item.notes.includes("typo") ? 
                                item.notes.filter(note => note !== "typo") :
                                [...item.notes, "typo"]} 
                        : item
                    )
                )
            }}>
            {
                list.length && list[rowIdx].notes.includes("typo") ? "TYPO" : "NO TYPO"
            }
        </button>
        <button
            onClick={() => {
                setList(list => 
                    list.map((item, idx) => 
                        idx === rowIdx ? {...item, 
                            notes: 
                                item.notes.includes("repetition") ? 
                                item.notes.filter(note => note !== "repetition") :
                                [...item.notes, "repetition"]} 
                        : item
                    )
                )
            }}>
            {
                list.length && list[rowIdx].notes.includes("repetition") ? "REPETITION" : "NO REPETITION"
            }
        </button>
        <button
            onClick={() => {
                setList(list => 
                    list.map((item, idx) => 
                        idx === rowIdx ? {...item, 
                            notes: 
                                item.notes.includes("joined words") ? 
                                item.notes.filter(note => note !== "joined words") :
                                [...item.notes, "joined words"]} 
                        : item
                    )
                )
            }}>
            {
                list.length && list[rowIdx].notes.includes("joined words") ? "JOINED WORDS" : "NO JOINED WORDS"
            }
        </button>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

    </>
  );
};

export default ChangeItem;