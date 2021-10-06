<<<<<<< HEAD
import React, { useCallback } from "react";
import { List } from 'react-virtualized';
=======
import React from "react";
>>>>>>> 521791f1fb649cac08491c6749f94cdbd130c22f
import TodoListItem from "./TodoListItem";
import './TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle }) => {
<<<<<<< HEAD
    const rowRenderer = useCallback(
        ({ index, key, style }) => {
            const todo = todos[index];
            return (
                <TodoListItem
                todo = {todo}
                key = {key}
                onRemove = {onRemove}
                onToggle = {onToggle}
                style = {style}
                />
            );
        }, [onRemove, onToggle, todos]
    );

    return (
        <List
        className="TodoList"
        width={495.2} // 전체 크기
        height={57} // 전체 높이
        rowCount={todos.length} // 항목 개수
        rowHeight={57} // 항목 높이
        rowRenderer={rowRenderer} // 항목을 렌더링할 때 사용하는 함수
        list={todos} // 배열
        style={{ outline: 'none' }} // List에 기본 적용되는 outline 스타일 제거
        />
    );
};

export default React.memo(TodoList);
=======
    return (
        <div className="TodoList">
            {todos.map(todo => (
                <TodoListItem todo={todo} key={todo.id} onRemove={onRemove}
                onToggle={onToggle}/>
            ))}
        </div>
    );
};

export default TodoList;
>>>>>>> 521791f1fb649cac08491c6749f94cdbd130c22f
