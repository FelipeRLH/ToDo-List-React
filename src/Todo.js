import React, { useEffect, useState } from "react";
import './Todo.css'
import Item from "./components/Item"
import TodoForm from "./components/TodoForm";
import List from "./components/List";

const savedVariable = "savedItems"

function Todo() {
    const [items, setItems] = useState([]);

    // Armazenando no localStorage
    useEffect(() => {
        let savedItems = JSON.parse(localStorage.getItem(savedVariable))
        if (savedItems) {
            setItems(savedItems);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(savedVariable, JSON.stringify(items))
    }, [items])

    // Função adicionar item
    function onAddItem(text) {
        let itemC = new Item(text)
        setItems([...items, itemC])
    }

    // Função remover item
    function onItemDeleted(item) {
        // filter retorna uma nova lista onde cada it de items seja diferente do item recebido como parâmetro
        let filteredItems = items.filter(it => it.id !== item.id)
        setItems(filteredItems)
    }

    // Função marcar concluido
    function onDone(item) {
        let updatedItem = items.map(it => {
            if (it.id === item.id) {
                it.done = !it.done;
            }
            return it;
        })

        setItems(updatedItem);
    }

    return (
        <div className="container">
            <div className="header">
                <h1>Todo</h1>
                <TodoForm onAddItem={onAddItem} />
            </div>

            <List onDone={onDone} onItemDeleted={onItemDeleted} items={items} />
        </div>
    )
}


export default Todo;