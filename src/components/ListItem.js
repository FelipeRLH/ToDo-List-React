import React from "react";
import Card from "./Card";

function DoneImg(props) {

    if (props.done) {
        return (<img alt="done" src="./assets/done.png" className="imgMark"></img>)
    } else {
        return (<img alt="undone" src="./assets/off.png" className="imgMark"></img>)
    }
}

function ListItem(props) {

    return (
        <li>
            <Card className={props.item.done ? "done item doneColor" : "item"}>
                {props.item.text}
                <div>
                    <button onClick={() => { props.onDone(props.item) }}><DoneImg done={props.item.done} /></button>
                    <button onClick={() => { props.onItemDeleted(props.item) }}><img alt="delete" src="./assets/bin.png" className="imgBin"></img></button>
                </div>
            </Card>
        </li>)


}

export default ListItem;