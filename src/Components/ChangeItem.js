import { useRef } from "react";
import { COLNAMES } from "../constants";

const ChangeItem = ({ setRowIdx, list}) => {
  const inputRef = useRef();
  return (
    <>
        <button
            onClick={() => {
                setRowIdx(idx => {
                if (idx > 0) {
                    return idx - 1
                }
                return 0
                })
                }
            }>
            PREVIOUS
        </button>
        <button
            onClick={() => setRowIdx(idx => {
                if (idx < list.length - 1) {
                    return idx + 1
                }
                return list.length - 1
            })}>            
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