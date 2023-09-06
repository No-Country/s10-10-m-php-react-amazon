import React, { useState } from 'react'
import Form from './form/index';
import Maps from './maps';

const FormUser = () => {

    const [data, setData] = useState({
    name: '',
    lastname: '',
    email: '',
    password: '',
    address: '',
    latitude: '',
    longitude: '',
    type: "person",
    description: " ",
    city: '',
    province: '',
    postal_code: ''
});
    
    if (!data.name) return (<Form setData={setData} data={data}/>)
    else return (<Maps setData={setData} data={data}/>)
}

export default FormUser
