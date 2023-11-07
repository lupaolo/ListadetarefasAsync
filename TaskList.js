import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './TaskListStyles';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [taskText, setTaskText] = useState('');
    const [editingTaskId, setEditingTaskId] = useState(null);
  
    useEffect(() => {
      loadTasks();
    }, []);
  
    const loadTasks = async () => {
      try {
        const taskData = await AsyncStorage.getItem('tasks');
        if (taskData !== null) {
          setTasks(JSON.parse(taskData));
        }
      } catch (error) {
        console.error('Erro ao carregar tarefas: ' + error.message);
      }
    };
  
    const saveTasks = async () => {
      try {
        await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
      } catch (error) {
        console.error('Erro ao salvar tarefas: ' + error.message);
      }
    };
  
    const addTask = () => {
      if (taskText) {
        if (editingTaskId !== null) {
          // Editar tarefa existente
          const updatedTasks = tasks.map((task) =>
            task.id === editingTaskId ? { id: task.id, text: taskText } : task
          );
          setTasks(updatedTasks);
          setEditingTaskId(null);
        } else {
          // Adicionar nova tarefa
          const newTask = { text: taskText, id: Date.now() };
          setTasks([...tasks, newTask]);
        }
        setTaskText('');
        saveTasks();
      }
    };
  
    const editTask = (taskId, taskText) => {
      setEditingTaskId(taskId);
      setTaskText(taskText);
    };
  
    const deleteTask = (taskId) => {
      const updatedTasks = tasks.filter((task) => task.id !== taskId);
      setTasks(updatedTasks);
      setEditingTaskId(null);
      saveTasks();
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Lista de Tarefas</Text>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          value={taskText}
          onChangeText={(text) => setTaskText(text)}
        />
        <Button title={editingTaskId ? 'Editar' : 'Adicionar'} onPress={addTask} />
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.taskItem}>
              <Text style={styles.taskText}>{item.text}</Text>
              <Button
                title="Editar"
                onPress={() => editTask(item.id, item.text)}
                color="blue"
              />
              <Button
                title="Excluir"
                onPress={() => deleteTask(item.id)}
                color="red"
              />
            </View>
          )}
        />
      </View>
    );
  };
  
  export default TaskList;