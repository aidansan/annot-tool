import { useRef } from "react";

const ChangeItem = ({ rowIdx, setRowIdx, list}) => {
  const inputRef = useRef();
  return (
    <>
        <button
            onClick={() => {
                if (rowIdx !== 0) {
                    setRowIdx(idx => idx - 1);
                }
            }}>
            PREVIOUS
        </button>
        <button
            onClick={() => {
                if (rowIdx !== list.length - 1) {
                    setRowIdx(idx => idx + 1);
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