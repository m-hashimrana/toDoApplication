import React from 'react';

const AddedTasks = ({ taskList, setTaskList, task, setTask, isEdit, setIsEdit }) => {
	const deleteTask = (task) => {
		const updatedList = [...taskList];
		const taskIndex = taskList.findIndex((t) => t.id === task.id);
		updatedList.splice(taskIndex, 1);
		setTaskList(updatedList);
	};

	const editTask = (task) => {
		setIsEdit(true);
		setTask(task);
	};

	return (
		<div className='formWrapper'>
			<h4>You have added following tasks...</h4>
			{taskList?.map((task) => (
				<div className='addedTask' key={task?.id}>
					<h5>{task?.title}</h5>
					<div className='actions'>
						<a onClick={() => editTask(task)}>Edit</a>
						<a onClick={() => deleteTask(task)}>Delete</a>
					</div>
				</div>
			))}
		</div>
	);
};

export default AddedTasks;
