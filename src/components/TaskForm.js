import React from 'react';
import './styles.css';

const TaskForm = ({ task, setTask, handleSubmit, isEdit }) => {
	return (
		<div className='formWrapper'>
			<h3>Add Your Tasks Here...</h3>
			<input
				placeholder='enter task'
				value={isEdit ? task.title : task}
				onChange={(e) => setTask(isEdit ? { ...task, title: e.target.value } : e.target.value)}
			/>
			<button onClick={handleSubmit}>{isEdit ? 'update' : 'submit'}</button>
		</div>
	);
};

export default TaskForm;
