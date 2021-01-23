import Axios from 'axios';

const devApiUrl = 'http://localhost:5000';
const components = '/api/v1/components/';

export const getData = async () => {
  return Axios.get(devApiUrl + components)
    .then(response => {
      return response;
    })
    .catch(error => {
      console.log('error');
    });
};
