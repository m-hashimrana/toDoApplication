import TaskForm from './components/TaskForm';
import AddedTasks from './components/AddedTasks';
import { useEffect, useState } from 'react';

function App() {
	const [task, setTask] = useState('');
	const [taskList, setTaskList] = useState([]);
	const [editValue, setEditValue] = useState('');
	const [lastId, setLastId] = useState(0);
	const [isEdit, setIsEdit] = useState(false);

	const handleSubmit = (value) => {
		if (isEdit) {
			const taskIndex = taskList.findIndex((t) => t.id === task.id);
			const updatedList = [...taskList];
			updatedList[taskIndex] = { ...updatedList[taskIndex], title: task.title };
			setTaskList(updatedList);
			setIsEdit(false);
			setTask('');
		} else {
			setTask(value);
			setTaskList([
				...taskList,
				{
					id: lastId + 1,
					title: task,
				},
			]);
			setLastId(lastId + 1);
			setTask('');
		}
	};

	return (
		<div className='App'>
			<TaskForm
				task={task}
				setTask={setTask}
				handleSubmit={handleSubmit}
				editValue={editValue}
				setEditValue={setEditValue}
				isEdit={isEdit}
				setIsEdit={setIsEdit}
			/>
			<AddedTasks
				task={task}
				taskList={taskList}
				setTaskList={setTaskList}
				setTask={setTask}
				isEdit={isEdit}
				setIsEdit={setIsEdit}
			/>
		</div>
	);
}

export default App;
