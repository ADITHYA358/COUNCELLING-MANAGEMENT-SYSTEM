import React, { useState} from 'react'
import axios from 'axios'

const FetchRegistrations = () => {
    const [res, setRes] = useState(null)
    if(res==null){
    axios.get('http://localhost:8080/retrive',{})
    .then(responce=>{
        setRes(responce.data)
        console.log(responce.data)
    })
}
    return (
    <div><h1><center>Registations</center></h1>
     <table border='2' align='center'>
            <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Email</th>
                <th>Password</th>
            </tr>
            {res.map((user)=>{
                return(
                    <tr>
                    <td>{user.name}</td>
                    <td>{user.role}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                </tr>
                )
            })
           
}
        </table>

    </div>
    
  )
}

export default FetchRegistrations