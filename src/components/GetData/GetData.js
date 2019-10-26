import React ,{useState, useEffect} from 'react'
import './GetData.scss'

const GetData = (props) => {

    const hits= props.hits.filter(a=>a.title !== null)
    const totalHits= hits.map(a=>{
        console.log(a)
        return <div className="cards">
            <p>{a.title}</p>
            <a href={a.url}>More</a>
        </div>
    })

    return ( 
        <div className="parent">
        {totalHits}
        </div> );
}
 
export default GetData;