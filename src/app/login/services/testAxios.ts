import axios from 'axios';

export const testAxios = async () => {
    const response = await axios.post('https://www.google.com/recaptcha/api/siteverify',
        {
            params:{secret:'',response:''},
            headers:{
                'Content-Type':'application/x-www-form-urlencoded',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization'
            }
        }
    )
    console.log(response.data);
}