import axios from 'axios';
import { fetchData } from '../../component/admin/getAdmin';
import { fetchAdminData } from '../../component/admin/getAdmin';
import { fetchEditorData } from '../../component/admin/getAdmin';
import { fetchAttendeeData } from '../../component/admin/getAdmin';

jest.mock('axios');

    it('Fetches data correctly from the URL https://icaf-tool.herokuapp.com/Reviewer/ ',  () => {
        const errorMessage = 'Incorrect URL accessed';

        axios.get.mockImplementationOnce(() =>
            Promise.reject(new Error(errorMessage)),
        );

        expect(axios.get).toHaveBeenCalledWith(
            `https://icaf-tool.herokuapp.com/Reviewer/`,
        );
    });

        it('Fetches data correctly from the URL https://icaf-tool.herokuapp.com/Admin/ ',  () => {
            const errorMessage = 'Incorrect URL accessed';

            axios.get.mockImplementationOnce(() =>
                Promise.reject(new Error(errorMessage)),
            );

            expect(axios.get).toHaveBeenCalledWith(
                `https://icaf-tool.herokuapp.com/Admin/`,
            );
});

it('Fetches data correctly from the URL https://icaf-tool.herokuapp.com/Attendee/ ',  () => {
    const errorMessage = 'Incorrect URL accessed';

    axios.get.mockImplementationOnce(() =>
        Promise.reject(new Error(errorMessage)),
    );

    expect(axios.get).toHaveBeenCalledWith(
        `https://icaf-tool.herokuapp.com/Attendee/`,
    );
});


it('Fetches data correctly from the URL https://icaf-tool.herokuapp.com/editor/ ',  () => {
    const errorMessage = 'Incorrect URL accessed';

    axios.get.mockImplementationOnce(() =>
        Promise.reject(new Error(errorMessage)),
    );

    expect(axios.get).toHaveBeenCalledWith(
        `https://icaf-tool.herokuapp.com/editor/`,
    );
});

