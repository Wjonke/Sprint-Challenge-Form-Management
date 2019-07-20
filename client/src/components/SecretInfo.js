import React, { useEffect, useState } from 'react'
import {axiosWithAuth} from './axiosWithAuth'
// import { useLocalStorage } from "../hooks/useLocalStorage";


const SecretInfo = () => {
  const [secrets, setSecrets] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get('http://localhost:5000/api/restricted/data')
      .then(res => {
      console.log(res.data)
       return setSecrets(res.data);
          })
    
          .catch(err => {console.log('err')
          } )},[]);

  return (
    <div>
      <h1>Super Secret Dinner Recipe:</h1>
      {secrets.map(secret  => (
              
              <div key={secret.name}>
                <h1>{secret.name}</h1>
                <h2>{secret.course}</h2>
                <h3>{secret.technique}</h3>
                <li>{secret.ingredients}</li>
              </div>
                  
            ))}

    </div>
  )
  
}
export default SecretInfo




