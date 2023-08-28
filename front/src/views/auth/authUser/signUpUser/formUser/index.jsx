import React, { useState } from 'react'
import Form from './form/index';
import Maps from './maps';

const FormUser = () => {

    const [data, setData] = useState({
    fullname: '',
    lastname: 'lastname',
    email: '',
    password: '',
    address: '',
    latitude: '',
    longitude: '',
    role: 2 //rol de usuario
});
    
    if (!data.fullname) return (<Form setData={setData} data={data}/>)
    else return (<Maps setData={setData} data={data}/>)
}

export default FormUser
