import axios from 'axios';


export const fetchData =  () => {
    return axios.get('http://localhost:8070/Reviewer/');
};

export const fetchAdminData =  () => {
    return axios.get('http://localhost:8070/Admin/');
};
export const fetchAttendeeData =  () => {
    return axios.get('http://localhost:8070/Attendee/');
};
export const fetchEditorData =  () => {
    return axios.get('http://localhost:8070/editor/');
};

fetchData('react');
fetchAdminData('react');
fetchAttendeeData('react');
fetchEditorData('react');
