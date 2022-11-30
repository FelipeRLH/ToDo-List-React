import React from "react";
import ListItem from "./ListItem";


function List(props) {

    return (
        <ul>
            {props.items.map(item => <ListItem item={item} onDone={props.onDone} onItemDeleted={props.onItemDeleted} key={item.id}/>)}
        </ul>
    )

}

export default List;