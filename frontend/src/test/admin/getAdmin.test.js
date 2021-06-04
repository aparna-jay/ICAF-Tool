import axios from 'axios';
import { fetchData } from '../../component/admin/getAdmin';
import { fetchAdminData } from '../../component/admin/getAdmin';

jest.mock('axios');

    it('Fetches data correctly from the URL http://localhost:8070/Reviewer/ ',  () => {
        const errorMessage = 'Incorrect URL accessed';

        axios.get.mockImplementationOnce(() =>
            Promise.reject(new Error(errorMessage)),
        );

        expect(axios.get).toHaveBeenCalledWith(
            `http://localhost:8070/Reviewer/`,
        );
    });

        it('Fetches data correctly from the URL http://localhost:8070/Admin/ ',  () => {
            const errorMessage = 'Incorrect URL accessed';

            axios.get.mockImplementationOnce(() =>
                Promise.reject(new Error(errorMessage)),
            );

            expect(axios.get).toHaveBeenCalledWith(
                `http://localhost:8070/Admin/`,
            );
});
