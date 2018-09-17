import uuid from 'uuid';

export function addPost (task) {
    return {
        type: 'ADD_POST',
        todo: {
          id: uuid(),
          task: task,
          completed: false
        }
    }
}

export function togglePost (id) {
    return {
        type: 'TOGGLE_POST',
        id
    }
}

export function deletePost (id) {
    return {
        type: 'DELETE_POST',
        id
    }
}

