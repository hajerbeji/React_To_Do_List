import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  // import font awesome
import { faUser, faClock } from '@fortawesome/free-solid-svg-icons';
import {  faMoon, faSun } from '@fortawesome/free-solid-svg-icons';


const Sidebar = ({moodtoggle,setmoodtoggle,addcategorybtn,setaddcategorybtn,newcategory,setnewcategory,categorieslist,setcategorieslist,setselectedcategory,choose,setchoose}) => {
    return (
    <div>
        <div className={ (moodtoggle)? 'sidebar darksidebar': 'sidebar'}>
                <div className="in_sidebar">
                    <div className='nav'>
                        <span className="toggle">
                            <div className={ (moodtoggle)? "dark bg" : "dark"}> <FontAwesomeIcon icon={faMoon} onClick={()=>setmoodtoggle(!moodtoggle)} /> </div>
                            <span className={ (moodtoggle)? "light" : "light bg"}><FontAwesomeIcon icon={faSun} onClick={()=>setmoodtoggle(!moodtoggle)} /></span>
                        </span>
                    </div>
                    <ul className='sidebarlist'>
                        <li onClick={()=>setchoose(3)} ><FontAwesomeIcon icon={faUser} /> Profil</li>
                        <li onClick={()=>setchoose(1)} ><FontAwesomeIcon icon={faClock} /> Timer</li>
                    </ul>
                    <hr className='hr' />
                    <li onClick={()=>setchoose(2)} className='li_category' >Categories</li>
                    {(choose===2)?<section>
                        <div>
                            <button className='plusbtn' onClick={()=>setaddcategorybtn(true)} >+</button>
                            {(addcategorybtn)?
                                <div className='addcategory'>
                                    <input type="text" name="" id="" onChange={(e)=>setnewcategory({...newcategory,name:e.target.value})} />
                                    <span className="btnssss">
                                        <button onClick={()=>setcategorieslist([...categorieslist,newcategory])} >Add</button>
                                        <button onClick={()=>setaddcategorybtn(false)} className='x'>x</button>
                                    </span>
                                </div>:null
                            }
                        </div>
                        
                        <ul className='categorylist'>
                            {categorieslist.map((category)=>
                            <li key={category.index} onClick={()=>setselectedcategory(category)} > {category.name} </li>)}
                        </ul>
                    </section>:null}
                    
                </div>
            </div>
    </div>
    )
}

export default Sidebar
