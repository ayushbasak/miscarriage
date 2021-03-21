import Panel from "./Panel.components"
import axios from 'axios'
import { useEffect, useState } from "react"
const Right = ()=>{
    let [data, setData] = useState([])
    
    useEffect(()=>{
        axios.get(`http://localhost:5000/users`)
        .then(response => {
            setData(response.data)
        })
        .catch(err => console.log(err))

    },[])

    return (
        <div className="right">
            {data.map((curr,id) => {
               return  <Panel key={id} information={curr}/>
            })}
        </div>
    )
}
export default Right