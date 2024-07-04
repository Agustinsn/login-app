import axios from 'axios';
import { headers } from 'next/headers';

export const testAxios = async () => {
    const response = await axios.post('https://www.google.com/recaptcha/api/siteverify',
        {
            params:{secret:'6LcZ7QcqAAAAAPuMXSWEMmRtnc4UZbc5Pw6raHLy',response:'adasdasdasd'},
            headers:{
                'Content-Type':'application/x-www-form-urlencoded',
                'Access-Control-Allow-Origin':'*'
            }
        }
    )
    console.log(response.data);
}