import React, { useContext } from 'react';
import img from '../Images/LogoNav.jpg';
import { IoIosClose } from "react-icons/io";
import { Link } from "react-scroll";
import './Home.css'
import ProfileContext from './ProfileContext'
const Profile = () => {
    const { show, setShow } = useContext(ProfileContext)
    return (
        <div id='Profile'>
        <div
            className={`hidden_profile py-5 w-75 h-75  p-5  border rounded ${show ? "show-profile" : ""
                }`}
            style={{ backgroundColor: "#1c1c2b" }}
        >
            <div className="row align-items-center position-relative">
                <div className="col text-white">
                    <h1 className="fw-bold">Oxunjon Kabirjonov</h1>
                    <p className="mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
                        recusandae ipsum aliquam culpa voluptates minima error voluptate
                        sapiente quia.
                    </p>
                    <ul className='Information_OF_PROFILE w-50'>
                        <li className='d-flex justify-content-between'>Ism:<b>Oxunjon</b></li>
                        <li className='d-flex justify-content-between'>Familya:<b>Kabirjonov</b></li>
                        <li className='d-flex justify-content-between'>Yosh:<b>{new Date().getFullYear()-2005} yosh</b></li>
                        <li className='d-flex justify-content-between'>Yashash joyi:<b>Toshkent</b></li>

                    </ul>

                    <div className="d-flex justify-content-start mt-4">
                        <Link spy to="contact" className="btn btn-primary btn-lg me-3">
                            Contact me
                        </Link>
                        <Link spy to="project" className="btn btn-outline-light d-flex align-items-center">
                            Projects
                        </Link>
                    </div>
                </div>
                <div className="col ">
                    <img
                        className="img-fluid rounded"
                        src={img}
                        alt="Profile"
                        style={{ maxWidth: "100%", objectFit: "cover" }}
                    />

                </div>

            </div>
            <IoIosClose className="close_hiddenProfile rounded " onClick={()=>setShow(!show)} />

        </div>
        </div>

    );
}

export default Profile;
