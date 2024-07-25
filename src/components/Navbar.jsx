import React from 'react'
import { useEffect } from 'react'


const Navbar = ({ color }) => {

    //Case 1 : Run  on  every first Render 
    useEffect(() => {
        alert("Hey i will run on every render")
    })

    //Case 2 : Run only on first Render 
    useEffect(() => {
        alert("Hey welcome to my page , this is the first render")
    }, [])

    //Case 3 : Run only on  when certain value changed
    useEffect(() => {
        alert("Hey i am running because color was changed")

    }, [color])

    return (
        <div>
            i am Navbar of {color} hehe...
        </div>
    )
}

export default Navbar
