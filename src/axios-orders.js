import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-redux-test-9e0cf-default-rtdb.firebaseio.com'
})

export default instance
