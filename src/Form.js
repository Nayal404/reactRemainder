import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const getLocalSItems =  ()=>{
    let remItems = localStorage.getItem('remainders')
    // console.log(remItems)
    if (remItems) {
        return JSON.parse(localStorage.getItem('remainders'))
    }
    else{
        return []
    }
}

const Form = () => {
    const [userRem, setUserRem] = useState("")
    const [rems, setRem] = useState(getLocalSItems())
    const remainder = ()=>{
        setRem([...rems, userRem])
    }
    const deleteAll = ()=>{
        setRem([])
    }
    useEffect(()=>{
        localStorage.setItem('remainders', JSON.stringify(rems))
    }, [rems])
    return (
        <>
            <div className="fluid">
                <div className="forms">
                    <label>Remainder</label>
                    <textarea rows="2" className="form-control" onChange={(event)=>setUserRem(event.target.value)}></textarea>
                    <button className="btn btn-success my-2" onClick={()=>remainder()}>Add</button>
                </div>
            </div>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Remainders</th>
                            <th scope="col"><button className="btn btn-danger" onClick={()=>deleteAll()}>Delete All</button></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            rems.map((remainder, index)=><tr key={index}>{remainder}</tr>)
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Form