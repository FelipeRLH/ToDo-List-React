import React, {useState} from "react";


function TodoForm(props) {
    const [text, setText] = useState("");

    function handleChange(e) {
        let value = e.target.value;
        setText(value);
    }

    function addItem(e) {
        e.preventDefault();
        if (text) {
            props.onAddItem(text)
            setText("")
        }
    }


    return (
        <form >
            <input className="forminput" type="text" value={text} onChange={handleChange} placeholder="Digite sua Tarefa!"></input>
            <button className="btninput" onClick={addItem}>Add</button>
        </form>
    )
}

export default TodoForm;