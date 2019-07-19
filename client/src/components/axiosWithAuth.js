import axios from 'axios';
import useLocalStorage from '../hooks/useLocalStorage'


export const axiosWithAuth =() => {
    const token = localStorage.getItem('token');
      
    return axios.create({
      
        headers: {
            'Content-Type': 'application/json',
            'authorization': `${token}`,
        }
    });
};

          // useLocalStorage(res.data.token);
          
