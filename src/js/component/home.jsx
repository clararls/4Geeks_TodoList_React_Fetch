import React, { useState, useEffect } from "react";
import Task from "./task.jsx";

//create your first component
const Home = () => {
	const [taskList, setTaskList] = useState([]);

	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/clararls", {
			method: "GET"
		})
			.then(resp => {
				console.log("ok?:", resp.ok); // will be true if the response is successfull
				console.log("status?:", resp.status); // the status code = 200 or code = 400 etc.
				return resp.json();
			})
			.then(data => {
				setTaskList(data);
			})
			.catch(error => {
				console.log(error);
			});
	}, []);

	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/clararls", {
			method: "PUT",
			body: JSON.stringify(taskList),
			headers: { "Content-Type": "application/json" }
		});
	}, [taskList]);

	const deleteElement = i => {
		setTaskList(taskList.filter((item, index) => index !== i));
	};
	const textInput = React.useRef();

	const clearInput = () => (textInput.current.value = "");

	return (
		<div className="d-flex flex-column container">
			<h1 className="row">TODOLIST</h1>
			<input
				type="text"
				ref={textInput}
				className="row d-flex"
				placeholder="What needs to be done?"
				onKeyDown={event => {
					if (event.key === "Enter" && event.target.value !== "") {
						if (taskList.indexOf(event.target.value) == -1) {
							setTaskList([
								...taskList,
								{ label: event.target.value, done: false }
							]);
							clearInput();
						} else {
							alert("The task is on the list!!");
						}
					}
				}}
			/>
			<div className="row d-flex">
				{taskList.map((item, i) => {
					return (
						<div key={i} className="d-flex justify-content-between">
							<Task content={item.label} />
							<button
								className="btn btn-danger col-sm-1"
								onClick={() => deleteElement(i)}>
								x
							</button>
						</div>
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
