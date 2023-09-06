import React, { useState } from 'react'
import FormShop from './formShop/index'
import Maps from '../../authUser/signUpUser/formUser/maps'

const SignUpShop = () => {

    const [data, setData] = useState({
        fullname: '',
        lastname: '',
        email: '',
        password: '',
        address: '',
        latitude: '',
        longitude: '',
        role: "business" 
    })
    if (!data.fullname) return (<FormShop setData={setData} data={data} />)
    else return (<Maps setData={setData} data={data} />)
}

export default SignUpShop
