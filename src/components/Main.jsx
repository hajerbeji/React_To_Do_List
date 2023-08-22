import React from 'react'
import TaskList from './TaskList'

const Main = ({moodtoggle,setmoodtoggle,selectedcategory,categorieslist,newtask,setnewtask,addingnewtask}) => {
    
    return (
        <div className={(moodtoggle)?'main':'main lightmood'}>
            
            <div className='tasks'>
                <div className='sous_nav'>
                    {selectedcategory && 
                    <TaskList key={selectedcategory.index} category={selectedcategory} categorieslist={categorieslist}
                        newtask={newtask} setnewtask={setnewtask} addingnewtask={addingnewtask} moodtoggle={moodtoggle} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Main
