import axios from 'axios';

const instance = axios.create(
    {
        baseURL: 'https://react-my-order-a093f-default-rtdb.firebaseio.com/'

    }
);

export default instance;