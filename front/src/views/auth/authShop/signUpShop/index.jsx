import React,{useState} from 'react'
import FormShop from './formShop/index'
import Maps from '../../authUser/signUpUser/formUser/maps'

const SignUpShop = () => {

    const [data, setData] = useState({
        shopname: '',
        email: '',
        password: '',
        address: '',
        latitude: '',
        longitude: '',
        role: "shop"
    })
    if (!data.shopname) return (<FormShop setData={setData} data={data} />)
    else return (<Maps setData={setData} data={data} />)
}

export default SignUpShop
