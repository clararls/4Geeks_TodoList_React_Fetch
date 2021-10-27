import React, { useState } from "react";
import Task from "./task.jsx";

//create your first component
const Home = () => {
	const [taskList, setTaskList] = useState([]);

	const deleteElement = i => {
		setTaskList(taskList.filter((item, index) => index !== i));
	};
	const textInput = React.useRef();

	const clearInput = () => (textInput.current.value = "");

	return (
		<div className="d-flex flex-column container w-50 p-3">
			<h1 className="row">TODOLIST</h1>
			<input
				type="text"
				ref={textInput}
				className="row d-flex text-info w-50 p-3"
				placeholder="What needs to be done?"
				onKeyDown={event => {
					if (event.key === "Enter") {
						setTaskList([...taskList, event.target.value]);
						clearInput();
					}
				}}
			/>
			<div className="row d-flex w-50 p-3">
				{taskList.map((item, i) => {
					return <Task key={i} content={item} />;
				})}
				{taskList.map((item, i) => {
					return (
						<button
							key={i}
							className="btn btn-danger col-sm-1"
							onClick={() => deleteElement(i)}>
							x
						</button>
					);
				})}
			</div>
			<p className="row text-muted text-center mt-5">
				{taskList.length} items left
			</p>
		</div>
	);
};

export default Home;
