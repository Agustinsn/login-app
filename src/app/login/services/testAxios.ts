import axios from 'axios';

export const testAxios = async () => {
    const response = await axios.post('https://www.google.com/recaptcha/api/siteverify',
        {params:{secret:'6LcZ7QcqAAAAABUvP6GKUKY3bK-K6gnCyeN2bVci',response:'adasdasdasd'}}
    )
    console.log(response.data);
}