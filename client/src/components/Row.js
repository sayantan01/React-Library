import React from 'react'

function Row(props){
    return(
        <tr>
            <td>{props.id}</td>
            <td><img src={props.preview} alt="No preview available" style={{width:100, heigh:100}}/></td>
            <td>{props.name}</td>
            <td>{props.author}</td>
            <td>{props.tags}</td>
            <td><a href={props.link}>Download Pdf</a></td>
           {/*} <td><a href={props.preview}>Get Preview</a></td>*/}

        </tr>
    )
}
export default Row