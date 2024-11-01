import { useRef } from "react";
import { useEffect } from "react";
// import "../foundation.css";

<div class="row">
  <div class="small-3 small-centered columns">3 centered</div>
</div>

const prevItem = (rowIdx, setRowIdx, list) => {
    if (rowIdx !== 0) {
        setRowIdx(idx => idx - 1);
    }
}

const nextItem = (rowIdx, setRowIdx, list) => {
    if (rowIdx !== list.length - 1) {
        setRowIdx(idx => idx + 1);
    }
}

const ChangeItem = ({ rowIdx, setRowIdx, list}) => {
    useEffect(() => {
        const onKeyDown = (e) => {
            if(e.key === 'ArrowRight'){
                console.log('Right')
                nextItem(rowIdx, setRowIdx, list)
            }
            else if(e.key === 'ArrowLeft'){
                console.log('Left')
                prevItem(rowIdx, setRowIdx, list)
            }
        }
        
        window.addEventListener('keydown', onKeyDown)
        return () => window.removeEventListener('keydown', onKeyDown)
        },[rowIdx, setRowIdx, list])

  const inputRef = useRef();
  return (
    <>
        <div class="grid-x">
        <div class="cell small-2 large-offset-2">
        <button
            onClick={() => prevItem(rowIdx, setRowIdx, list)}
            class="button">
            PREVIOUS
        </button>
        </div>
        <div class="cell small-1">
        <button
            onClick={() => nextItem(rowIdx, setRowIdx, list)}
            class="button">           
            NEXT
        </button>
        </div>
        </div>
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