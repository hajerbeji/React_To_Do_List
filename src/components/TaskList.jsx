import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  // import font awesome
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const TaskList = ({category,categorieslist,moodtoggle}) => {
    const [tasks, setTasks] = useState(category.tasks);
    const [newtask, setnewtask] = useState('');

    useEffect(() => {
        const updatedddcategory = categorieslist.find((el) => el.index === category.index);
        if (updatedddcategory) {
            setTasks(updatedddcategory.tasks);
        }
    }, [categorieslist, category]);
    // whenever the categorieslist or category have changes the useEffect works

    const suppression = (taskId) => {
        const apressuppression = tasks.filter(task => task.id !== taskId);
        setTasks(apressuppression);
    }; //delte a task
    
    const addingnewtask = () => {
        if (newtask.trim() === '') return;

        const newtaskItem = {
            id: tasks.length + 1,
            task: newtask,
        };
        setTasks([...tasks, newtaskItem]);
        setnewtask('');
    };
    return (
        <div className={ (moodtoggle)? 'tasklist': 'tasklist lightmood_tasklist'}>
            <h1> {category.name} </h1>
            <span className="sous_h1">
                <span className='input_add'>
                    <input type="text" className='put_task' placeholder='put your task here ...' onChange={(e)=>setnewtask(e.target.value)} value={newtask} />
                    <button className='btn_add' onClick={addingnewtask}>Add</button>
                </span>
                <ul> {tasks.map((tasksss)=>(tasksss.task!=='')?<li key={tasksss.id} >
                    <span className="sous_ul1">
                        <input type='checkbox' className='check' />
                        <p> {tasksss.task} </p>
                    </span>
                    <span className="sous_ul2">
                        <FontAwesomeIcon icon={faTrash} className='icon2' onClick={() => suppression(tasksss.id)} />
                    </span>
                    </li> :null )} 
                </ul>
            </span>
        </div>
    )
}

export default TaskList

// import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrash } from '@fortawesome/free-solid-svg-icons';

// const TaskList = ({ category, categorieslist, moodtoggle }) => {
//     const [tasks, setTasks] = useState(category.tasks);
//     const [newTask, setNewTask] = useState('');

//     useEffect(() => {
//         const updatedCategory = categorieslist.find(cat => cat.index === category.index);
//         if (updatedCategory) {
//             setTasks(updatedCategory.tasks);
//         }
//     }, [categorieslist, category]);

//     const suppression = (taskId) => {
//         const updatedTasks = tasks.filter(task => task.id !== taskId);
//         setTasks(updatedTasks);
//     };

//     const addingnewtask = () => {
//         if (newTask.trim() === '') return;

//         const newTaskItem = {
//             id: tasks.length + 1,
//             task: newTask,
//         };

//         setTasks([...tasks, newTaskItem]);
//         setNewTask('');
//     };

//     return (
//         <div className={moodtoggle ? 'tasklist' : 'tasklist lightmood_tasklist'}>
//             <h1>{category.name}</h1>
//             <span className="sous_h1">
//                 <span className='input_add'>
//                     <input
//                         type="text"
//                         className='put_task'
//                         placeholder='put your task here ...'
//                         onChange={e => setNewTask(e.target.value)}
//                         value={newTask}
//                     />
//                     <button className='btn_add' onClick={addingnewtask}>Add</button>
//                 </span>
//                 <ul>
//                     {tasks.map(task => (task.task !== '' ?
//                         <li key={task.id}>
//                             <span className="sous_ul1">
//                                 <input type='checkbox' className='check' />
//                                 <p> {task.task} </p>
//                             </span>
//                             <span className="sous_ul2">
//                                 <FontAwesomeIcon icon={faTrash} className='icon2' onClick={() => suppression(task.id)} />
//                             </span>
//                         </li>
//                         : null))}
//                 </ul>
//             </span>
//         </div>
//     );
// }

// export default TaskList;
