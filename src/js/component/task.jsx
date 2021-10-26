import React from "react";
import PropTypes from "prop-types";

const Task = props => {
	return <div className="text-center">{props.content}</div>;
};

export default Task;

Task.propTypes = {
	content: PropTypes.string
};
