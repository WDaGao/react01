import React from 'react'

function Hello(props){
    return (
    <div>
        <h1 style={{color:"red",textAlign:"center"}}>这是一个H1标签aaa---{props.name}</h1>
    </div>)
}

export default Hello