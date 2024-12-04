import React, {createContext,useState} from 'react'

const ProfileContext = createContext()

export const ProfileProvider = ({children})=>{
    const [show,setShow]= useState(false)
    return(
        <ProfileContext.Provider value={{show,setShow}}>
            {children}
        </ProfileContext.Provider>
    )
}

export default ProfileContext
