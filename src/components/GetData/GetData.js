import React ,{useState, useEffect} from 'react'
import './GetData.scss'

const GetData = (props) => {

    const hits= props.hits.filter(a=>a.title !== null)
    const totalHits= hits.map(a=>{
        console.log(a)
        return <div className="cards">
                <span>
                    <a href={a.url}>{a.title}</a>
                </span>
            <div className="cards_details">
                <span>Author:{a.author}</span>
                <span>Points:{a.points}</span>
                <span>Comments:{a.num_comments}</span>
            </div>
            <div>
                
            </div>            
        </div>
    })

    return ( 
        <div className="parent">
        {totalHits}
        </div> );
}
 
export default GetData;