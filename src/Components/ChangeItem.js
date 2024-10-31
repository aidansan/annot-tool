import { useRef } from "react";
import { COLNAMES } from "../constants";

const ChangeItem = ({ rowIdx, setRowIdx, colIdx, setColIdx, list}) => {
  const inputRef = useRef();
  return (
    <>
        <button
            onClick={() => {
                if (colIdx === 0) {
                    if (rowIdx !== 0) {
                        setColIdx(COLNAMES.length - 1);
                        setRowIdx(idx => idx - 1);
                    }
                }
                else {
                    setColIdx(idx => idx - 1);
                }
            }}>
            PREVIOUS
        </button>
        <button
            onClick={() => {
                if (colIdx === COLNAMES.length - 1) {
                    if (rowIdx !== list.length - 1) {
                        setColIdx(0);
                        setRowIdx(idx => idx + 1);
                    }
                }
                else {
                    setColIdx(idx => idx + 1);
                }
            }}>           
            NEXT
        </button>

    </>
    // <form className="addForm" onSubmit={handleSubmit}>
    //   <label htmlFor="addItem">Add Item</label>

    //   <input
    //     type="text"
    //     id="addItem"
    //     autoFocus
    //     ref={inputRef}
    //     placeholder="Add Item"
    //     required
    //     value={newItem}
    //     onChange={(e) => setNewItem(e.target.value)}
    //   />

    //   <button
    //     type="submit"
    //     aria-label="Add Item"
    //     onClick={() => inputRef.current.focus()}
    //   >
    //     <h3>+</h3>
    //   </button>
    // </form>
  );
};

export default ChangeItem;