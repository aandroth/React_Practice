import React, { Component } from 'react';
import PropTypes from 'prop-types'
import ToDo from './ToDo';

const ToDoList = ({ todos, onTodoList }) => (
    <ul>
        {todos.map((todo, index) => (
            <ToDo key={index} {...todo} onClick{() => onTodoClick(index)} />
        ))}
    </ul>
)

ToDoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
}

export default ToDoList