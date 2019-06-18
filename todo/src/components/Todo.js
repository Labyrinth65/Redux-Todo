import React from "react";
import PropTypes from "prop-types";

const Todo = ({ onClick, completed, text, deleteTodo }) => (
	<div className="todo">
		<li className={`${completed}`}>{text}</li>
		<div className="toggle" onClick={onClick}>
			<i class="fas fa-check" />
		</div>
		<div className="delete" onClick={deleteTodo}>
			<i className="far fa-trash-alt" />
		</div>
	</div>
);

Todo.propTypes = {
	onClick: PropTypes.func.isRequired,
	completed: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired,
	delete: PropTypes.func.isRequired
};

export default Todo;
