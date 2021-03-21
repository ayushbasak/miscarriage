import { useState } from "react"

const Form = ()=>{

    
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [country, setCountry] = useState('')
    const [email, setEmail] = useState('')

    const nameHandler = (e)=>{
        console.log(e.target.value)
        setName(e.target.value);
    }
    const ageHandler = (e)=>{
        setAge(e.target.value);
    }
    const countryHandler = (e)=>{
        setCountry(e.target.value);
    }
    const emailHandler = (e)=>{
        setEmail(e.target.value);
    }
    const onSubmit = ()=>{
        console.log('ButtonClicked')
        setName('')
        setAge('')
        setCountry('')
        setEmail('')
    }
    return (
        <div className="form">
            <input onChange = {nameHandler} placeholder="Name" className="input" value={name}/>
            <input onChange = {ageHandler} placeholder="age" type ="number" max ="100" className="input" value ={age}/>
            <input onChange = {countryHandler} placeholder="country" className="input" value={country}/>
            <input onChange = {emailHandler} placeholder="email" className="input" value={email}/>
            <button onClick={onSubmit}>Submit</button>
        </div>
    )
}
export default Form