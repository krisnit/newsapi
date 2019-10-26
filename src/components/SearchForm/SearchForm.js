import React, {useEffect, useState} from 'react'
import axios from 'axios'
import GetData from '../GetData/GetData';
import './SearchForm.scss'

const SearchForm = () => {

    const [hits, modifyHits]=useState([])
    const [pageValue, modifyPageValue]=useState('')
    const [searchValue, setSearchValue]=useState('')
    const [inputValue, setInputValue]=useState('')

     const onInputText=(e)=>{
        setInputValue(e.target.value)
    }

    const onSubmitSearch=(input)=>{
        setSearchValue(input)
        
    }

    useEffect(()=>{
        const url= (`https://hn.algolia.com/api/v1/search?query=${searchValue}`)
        axios.get(url)
           .then(res=>{modifyHits(res.data.hits);
                       modifyPageValue(res.data.page)
           })
       console.log(url)
       },[searchValue])
 

    return ( 
        <div className='page'>
        <div className='header'>
        <h1>Search for latest News</h1>
        <form type="submit" onSubmit={e=>{onSubmitSearch(inputValue); 
                                        e.preventDefault()}}>
            <input type="text" value={inputValue} onChange={onInputText} ></input>
            <button type="submit">Search</button>
        </form>
        </div>
        <GetData hits={hits}/>
       </div> 
     );
}
 
export default SearchForm;