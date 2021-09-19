import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
	const [tasks, setTasks] = useState<Task[]>([]);

	function handleAddTask(newTaskTitle: string) {
		let id = new Date().getTime()
		setTasks(current => [...current, {id: id, title: newTaskTitle, done: false}])

	}

	function handleToggleTaskDone(id: number) {
		const updatedTasks = tasks.map(task => ({...task}))
		const found =  updatedTasks.findIndex(task => task.id === id)
		updatedTasks[found].done = ! updatedTasks[found].done
		console.log(found)
		setTasks(updatedTasks)
  	}

  	function handleRemoveTask(id: number) {
		console.log(id)
		const newStateTasks = tasks.filter(task => task.id !== id)
		setTasks(newStateTasks)
  	}

  	return (
    	<View style={styles.container}>
    		<Header tasksCounter={tasks.length} />

    		<TodoInput addTask={handleAddTask} />

      		<TasksList 
				tasks={tasks} 
				toggleTaskDone={handleToggleTaskDone}
				removeTask={handleRemoveTask} 
			/>
    	</View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})