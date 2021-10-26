import React, { useState } from "react";
import Task from "./task.jsx";

//create your first component
const Home = () => {
	const [taskList, setTaskList] = useState(["comer", "cocinar", "beber"]);
	return (
		<div className="d-flex justify-content-center flex-column">
			<h1 className="text-center mt-5">TODOLIST</h1>
			<input type="text" className="mx-auto text-info w-50 p-3" />
			{taskList.map((item, i) => {
				return <Task key={i} content={item} />;
			})}
		</div>
	);
};

export default Home;
