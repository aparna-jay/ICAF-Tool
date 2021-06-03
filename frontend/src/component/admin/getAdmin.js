import axios from 'axios';


export const fetchData =  () => {
    return axios.get('http://localhost:8070/Reviewer/');
};

export const fetchAdminData =  () => {
    return axios.get('http://localhost:8070/Admin/');
};

fetchData('react');
fetchAdminData('react');
