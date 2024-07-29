import { StyleSheet, FlatList, View, Button } from 'react-native';
import React, { useState } from 'react';
import { CheckBox } from 'react-native-elements';

import DisplayImage from '@/components/DisplayImage';
import Header from '@/components/Header';
import TodoInput from '@/components/TodoInput';
import TodoItem from '@/components/TodoItem';

interface Task {
  id: string;
  value: string;
  completed: boolean;
}

export default function HomeScreen() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [addTasks, setAddTasks] = useState(false);

  const addTaskHandler = (taskTitle: string) => {
    setTasks(currentTasks => [
      ...currentTasks,
      { id: Math.random().toString(), value: taskTitle, completed: false }
    ]);
    setAddTasks(false);
  };

  const deleteTaskHandler = (taskId: string) => {
    setTasks(currentTasks => {
      return currentTasks.filter(task => task.id !== taskId);
    });
  };

  const toggleTaskCompletion = (taskId: string) => {
    setTasks(currentTasks =>
      currentTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const cancelTaskAdditionHandler = () => {
    setAddTasks(false);
  };

  return (
    <View style={styles.container}>
      <Header title="To-Do App" />
      <View style={styles.screen}>
        <Button title="Add New Task" onPress={() => setAddTasks(true)} />
        <TodoInput
          visible={addTasks}
          onAddTask={addTaskHandler}
          onCancel={cancelTaskAdditionHandler}
        />
      </View>
      <DisplayImage taskStatus={tasks} />
      <View style={styles.screenlist}>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={tasks}
          renderItem={itemData => (
            <View style={styles.todoItemContainer}>
              <CheckBox
                checked={itemData.item.completed}
                onPress={() => toggleTaskCompletion(itemData.item.id)}
              />
              <TodoItem
                title={itemData.item.value}
                onDelete={deleteTaskHandler}
                id={itemData.item.id}
              />
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screen: {
    padding: 20,
  },
  screenlist: {
    padding: 20,
  },
  todoItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});