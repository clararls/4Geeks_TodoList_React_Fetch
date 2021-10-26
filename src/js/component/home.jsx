import React, { useState } from "react";
import Task from "./task.jsx";

//create your first component
const Home = () => {
	const [taskList, setTaskList] = useState([]);

	//const deleteElement = index => {
	//	props.setTaskList(props.taskList.filter((item, i) => i !== index));
	//};

	return (
		<div className="d-flex justify-content-center flex-column">
			<h1 className="text-center mt-5">TODOLIST</h1>
			<input
				type="text"
				className="mx-auto text-info w-50 p-3"
				onKeyDown={event => {
					if (event.key === "Enter") {
						setTaskList([...taskList, event.target.value]);
					}
				}}
			/>

			{taskList.map((item, i) => {
				return <Task key={i} content={item} />;
			})}
			<p className="text-center mt-5">{taskList.length} items left</p>
		</div>
	);
};

export default Home;
