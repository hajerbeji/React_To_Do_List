import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Main from './Main'
import Timer from './Timer'
import Profil from './Profil'

const Page = () => {
    const [counter, setcounter] = useState(0)
    const [categorieslist, setcategorieslist] = useState([
        {index:Math.random()*100, name: 'My tasks', tasks: [{id:counter+1,task:'',isDone:false}], open: false},
    ])
    const [addcategorybtn, setaddcategorybtn] = useState(false)
    const [newcategory, setnewcategory] = useState({
        index:counter+4, 
        name: '', 
        tasks: [{id:Math.random()*100,task:'',isDone:false}], 
        open: false
    })
    const [selectedcategory, setselectedcategory] = useState(categorieslist[0])
    const [newtask, setnewtask] = useState("")
    
    const [moodtoggle, setmoodtoggle] = useState(false)
    const [choose, setchoose] = useState(0)
    return (
    <div className='page'>
        <Sidebar moodtoggle={moodtoggle} setmoodtoggle={setmoodtoggle} addcategorybtn={addcategorybtn} setaddcategorybtn={setaddcategorybtn} newcategory={newcategory}setnewcategory={setnewcategory} categorieslist={categorieslist} setcategorieslist={setcategorieslist} setselectedcategory={setselectedcategory} choose={choose} setchoose={setchoose} />
        {(choose===0)||(choose===2)? <Main moodtoggle={moodtoggle} setmoodtoggle={setmoodtoggle} selectedcategory={selectedcategory} categorieslist={categorieslist} newtask={newtask} setnewtask={setnewtask} /> 
            :(choose===1)? <Timer moodtoggle={moodtoggle} setmoodtoggle={setmoodtoggle} />:
            (choose===3)? <Profil moodtoggle={moodtoggle} setmoodtoggle={setmoodtoggle} /> :null
        }
    </div>
    )
}

export default Page
