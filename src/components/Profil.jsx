import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  // import font awesome
import { faFacebook,faInstagram,faGithub,faLinkedin,faWhatsapp,faTiktok } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';

const Profil = ({moodtoggle,setmoodtoggle}) => {
    const [profilphoto, setprofilphoto] = useState("https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg")
    const [navlist, setnavlist] = useState(0)
    const navigate=useNavigate()
    return (
        <div className={(moodtoggle)? ' darkprofil profil':'profil'}>
            <section>
                {(moodtoggle)?<h1>To do List</h1>:<img src="https://previews.123rf.com/images/imagecatalogue/imagecatalogue1611/imagecatalogue161115045/68016116-pour-faire-la-liste-texte-caoutchouc-sceau-cachet-en-filigrane-tag-%C3%A0-l-int%C3%A9rieur-de-la-banni%C3%A8re.jpg" alt="" className='couverture' />}
            </section>
            <span>
                <div className='profilphoto'>
                    <img src={profilphoto} alt="Profil Photo" />
                    <input type="file" name="" id="profil-input" accept='image/*' onChange={(e)=>setprofilphoto(URL.createObjectURL(e.target.files[0]))} />
                    <label htmlFor="profil-input">Profil Photo</label>
                </div>
                <div className='navprofil'>
                    <h2>Full Name</h2>
                    <ul>
                        <li onClick={()=>setnavlist(1)} >Social Media</li>
                        <li onClick={()=>setnavlist(2)}>Account Details</li>
                        <li onClick={()=>setnavlist(3)}>Settings</li>
                        <li onClick={()=>navigate('/')}>LogOut</li>
                    </ul>
                </div>
            </span>
            {(navlist===1)?
            <div className='social_media'>
                <h2>Social Media Accounts</h2>
                <ul>
                    <li><FontAwesomeIcon icon={faFacebook} /> facebook</li>
                    <li><FontAwesomeIcon icon={faInstagram} /> instagram</li>
                    <li><FontAwesomeIcon icon={faWhatsapp} /> whatsup</li>
                    <li><FontAwesomeIcon icon={faGithub} /> github</li>
                    <li><FontAwesomeIcon icon={faLinkedin} /> linkedin</li>
                    <li><FontAwesomeIcon icon={faTiktok} /> tiktok</li>
                </ul>
            </div>:(navlist===2)?
            <div className='social_media'>
                <h2>Account Details</h2>
                <ul>
                    <li>Useername : .................</li>
                    <li>Email : ...........@gmail.com</li>
                    <li>Password : ...................</li>
                </ul>
            </div> 
            : (navlist===3)?
            <div className='social_media'>
                <h2>settings</h2>
                <ul>
                    <li>Change the Language</li>
                    <li>Help</li>
                    <li>Change the Password</li>
                </ul>
            </div> 
            : null}
            
        </div>
    )
}

export default Profil
