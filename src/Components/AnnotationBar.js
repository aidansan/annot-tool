import { useEffect, useRef } from "react";
import { NOTES } from "../utils";
import settings from "../settings/settings.json"
// import foundation from "../foundation.css";

// https://react.dev/learn/updating-arrays-in-state#replacing-items-in-an-array

const ChangeItem = ({ rowIdx, setRowIdx, list, setList}) => {
  const inputRef = useRef();
//   useEffect(() => {console.log(list)},
//   [list])
//    useEffect(() => {console.log(myData)},
//    [myData])
  return (
    <>
    {
        settings['annotation_fields'].map(field => (
        <div class="grid-x grid-padding-x">
            <div class="cell small-2">
                <h6>{field.text}</h6>
            </div>
            {field.options.map(option => 
            <div class="cell small-2">
            <button
            onClick={() => {
                setList(list => 
                    list.map((item, idx) => 
                        idx === rowIdx ? {...item, 
                            [field]: !item[field]} : item
                    )
                )
            }}
            className={"button expanded" + (list.length && [].includes('X') ? "alert" : "")}>
            {
                option
            }
            </button>
            </div>
            )
            }
        </div>
        ))
        }
        <br></br>
        <br></br>
    </>
  );
};

export default ChangeItem;