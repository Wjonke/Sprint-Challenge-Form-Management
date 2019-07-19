import React, { useEffect, useState } from 'react'
import {axiosWithAuth} from './axiosWithAuth'

const SecretInfo = () => {
  const [secrets, setSecrets] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get('http://localhost:5000/api/restricted/data')
      .then(res => {
        console.log(res.data);
        // setSecrets(res.data);
        //   })
    
        //   .catch(err => {console.err('err')
             }, [secrets] );
       

  return (
    <div>
      <h1>this is where the secrets go</h1>
      {/* {secrets.map(secret => (
              
              <div key={secret.name}>
                <h1>{secret.course}</h1>
                <h2>{secret.technique}</h2>
                <h2>{secret.ingredients}</h2>
              </div>
                  
            ))} */}

    </div>
  )
  
}
)}
export default SecretInfo





  
 


  
//   useEffect(() => {
//     axiosWithAuth()
//       .get('/friends')
//       .then(res => {
//         console.log(res.data);
//         setFriends(res.data);
//       })

//       .catch(err => {console.err('err')
//         }, [friends]);



//     return (
//       <div>
//         <h1>My Friends</h1>                                   
//         {friends.map(friend => (
              
//           <div key={friend.id}>
//             <h1>{friend.name}</h1>
//             <h2>{friend.age}</h2>
//             <h2>{friend.email}</h2>
//           </div>
              
//         ))}
//       </div> 
//     );
  
// }
// )} 
