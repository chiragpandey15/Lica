import React from 'react';
import { useUser, UserButton } from "@clerk/clerk-react";
import { FaFontAwesome, FaPen, FaLightbulb, FaToolbox, FaArrowUp } from 'react-icons/fa';
import myImage from '../icon.png'; 

import './Sidebar.css'

function Sidebar() {

    const { user } = useUser();
    
  return (
    
        <div className="sidebar">
        <ul>
            <li>
            <div className='company'>
                <div className="logo">
                    <img src={myImage} alt="Company Logo" />
                </div>
<<<<<<< HEAD
                <span>CMS</span>
=======
                <span>Lica </span>
>>>>>>> 9eb881ae797dfcb5a30a00701fa97e90cf8af5cf
            </div>

            </li>
            <li style={{backgroundColor:"lightgray", borderRadius:"5px", padding:"10px"}}>
                <FaPen /> Create
            </li>
            <li>
            <FaFontAwesome /> Post
            </li>
            <li>
            <FaLightbulb /> Content Idea
            </li>
            <li>
            <FaToolbox /> Tools
            </li>
            <li>
                <FaArrowUp /> Upgrade
            </li>
        </ul>
        <div className="sign-out">
        <UserButton />
            <span>{user.fullName}</span>
            
        </div>
        </div>

        
  );
};

export  {Sidebar};
