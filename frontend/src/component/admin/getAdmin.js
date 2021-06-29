import axios from 'axios';


export const fetchData =  () => {
    return axios.get('https://icaf-tool.herokuapp.com/Reviewer/');
};

export const fetchAdminData =  () => {
    return axios.get('https://icaf-tool.herokuapp.com/Admin/');
};
export const fetchAttendeeData =  () => {
    return axios.get('https://icaf-tool.herokuapp.com/Attendee/');
};
export const fetchEditorData =  () => {
    return axios.get('https://icaf-tool.herokuapp.com/editor/');
};

fetchData('react');
fetchAdminData('react');
fetchAttendeeData('react');
fetchEditorData('react');
