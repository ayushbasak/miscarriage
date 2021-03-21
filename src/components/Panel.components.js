const Listing = ({text})=>{
    return (
        <p className="listing">{text}</p>
    )
}

const Panel = ({information})=>{
    const name = information.name
    const age = information.age
    const country = information.country
    const email = information.email
    return (
        <div className="panel">
            <img src = "https://images.livemint.com/img/2021/01/16/600x338/AFP_8YV89D_1610809110775_1610809126690.jpg" alt="cat" width="100px" height="100px"/>
            <div className="secondary-panel">
                {console.log(name)}
                <Listing text= {name}/>
                <Listing text= {age}/>
                <Listing text= {email}/>
                <Listing text= {country}/>
            </div>
        </div>
    )
}
export default Panel