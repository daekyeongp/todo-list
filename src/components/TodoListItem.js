import React from "react";
import {
    MdCheckBox,
    MdRemoveCircleOutline,
    MdCheckBoxOutlineBlank,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';

<<<<<<< HEAD
const TodoListItem = ({ todo, onRemove, onToggle, style }) => {
    const { id, text, checked } = todo;

    return (
        <div className="TodoListItem-virtualized" style={style}>
            <div className="TodoListItem">
                <div className={cn('checkbox', {checked})} onClick={() => onToggle(id)}>
                    {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                    <div className="text">{text}</div>
                </div>
                <div className="remove" onClick={() => onRemove(id)}>
                    <MdRemoveCircleOutline />
                </div>
=======
const TodoListItem = ({ todo, onRemove, onToggle }) => {
    const { id, text, checked } = todo;

    return (
        <div className="TodoListItem">
            <div className={cn('checkbox', {checked})} onClick={() => onToggle(id)}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline />
>>>>>>> 521791f1fb649cac08491c6749f94cdbd130c22f
            </div>
        </div>
    );
};

<<<<<<< HEAD
export default React.memo(TodoListItem);
=======
export default TodoListItem;
>>>>>>> 521791f1fb649cac08491c6749f94cdbd130c22f
