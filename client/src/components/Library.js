import React from 'react'
import axios from 'axios'
import Row from './Row'
import Search from './Search'

class Library extends React.Component{
    constructor(props){
        super(props)
        this.state={array:[],search:''}
        this.handler=this.handleSelect.bind(this)
    }
    componentDidMount(){
        axios('/books/get')
            .then((res)=>{
                console.log("This is my Data")
                console.log(res.data)
                this.setState({array:res.data})
            })
            .catch((err)=>console.log(err))
    }
    handleSelect(e){
        this.setState({search:e})
    }
    renderRow(){
        if(this.state.search!==""){
            for(let i=0;i<this.state.array.length;i++)
            {
                if(this.state.array[i].name===this.state.search)
                {
                    const item=this.state.array[i]
                    return(<Row key ={i} id={i+1} name={item.name} author={item.author} tags={item.tag} link={item.link} preview={item.preview} />)

                }
            }
        }
        return this.state.array.map((item,i)=>{
            return(<Row key ={i} id={i+1} name={item.name} author={item.author} tags={item.tag} link={item.link} preview={item.preview} />)
        })

    }

    render(){
        return(
            <div className="container">
                <div>
                    <h2>Books List</h2>
                    <Search obj={this.state.array} handler={this.handler}/>
                </div>
                <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Preview</td>
                            <td>Name</td>
                            <td>Author</td>
                            <td>Tags</td>
                            <td>Download</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRow()}
                    </tbody>
                </table>
            </div>
        )
    }

}
export default Library