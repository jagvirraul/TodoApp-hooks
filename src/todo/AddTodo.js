import React, { useState, useEffect } from 'react';
import deleteSVG from '../assests/delete.svg';
import editSVG from '../assests/edit.svg';
const getItemsTOLocal = () => {
    const addData = localStorage.getItem('todolist');
    if (addData) {
        return JSON.parse(addData);
    } else {
        return [];
    }
}

const AddTodo = () => {
    const [input, setInput] = useState("");
    const [valueId, setValueId] = useState("");
    const [items, setItems] = useState(getItemsTOLocal());

    const handleChange = () => {
        if (!input) return;
        if (valueId) {
            const updated = items.map((obj) => {
                if (obj.id === valueId) {
                    return { ...obj, name: input, active: false }
                };
                return {...obj, active: false};
            })
            setItems(updated);
            setInput("");
            setValueId('')
        } else {
            const newItem = { id: new Date().getTime().toString(), name: input };
            setItems([newItem, ...items]);
            setInput("");
            setValueId('')
        }
    }
    const handleKeyDown = (e) => {
        if (e.keyCode === 13) handleChange();
    }

    const deleteItems = (index) => {
        const updatedItems = items.filter((todo) => {
            return index !== todo.id;
        });
        setItems(updatedItems);
    }
    const editItems = (todoEdit) => {
        setItems(prev => prev.map(value => {
            if (value.id === todoEdit.id) {
                return { ...value, active: true }
            } else {
                return { ...value, active: false }
            }
        }))
        setInput(todoEdit.name);
        setValueId(todoEdit.id);
    }

    useEffect(() => {
        localStorage.setItem('todolist', JSON.stringify(items))
    }, [items]);

    const removeAllItems = () => {
        setItems([]);
        setInput("");
    }
    return (
        <div>
            <div className="addinputData">
                <input
                    type="text"
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Add Todo"
                    value={input}
                    onKeyDown={handleKeyDown}
                />
                <button onClick={handleChange}>Add</button>
            </div>
            <div className="content">
                {items.map((todo) => {
                    return (
                        <div className={`item ${todo.active ? 'active' : ""}`} key={todo.id} >
                            <div className="value" onClick={() => editItems(todo)}>
                                {todo.name}
                            </div>
                            <div className="edit" >
                                <img src={editSVG} alt="edit" onClick={() => editItems(todo)}/>
                            </div>
                            <div className="trash">
                                <img src={deleteSVG} alt="delete" onClick={() => deleteItems(todo.id)} />
                            </div>
                        </div>
                    );
                })
                }
            </div>
            <div className="removeall">
                <button onClick={() => removeAllItems()}>
                    Remove All
                </button>
            </div>
        </div>
    )
}
export default AddTodo;