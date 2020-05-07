import React from 'react'
import axios from 'axios'
import {Alert} from 'react-bootstrap'

class Add extends React.Component{
    constructor(props){
        super(props)
        this.state={name:'',author:'',tag:'',link:'',preview:'',submitted:false}
        this.onSubmit=this.onSubmit.bind(this)
        this.onChangeName=this.onChangeName.bind(this)
        this.onChangeAuthor=this.onChangeAuthor.bind(this)
        this.onChangeTag=this.onChangeTag.bind(this)
        this.onChangeLink=this.onChangeLink.bind(this)
        this.onChangePreview=this.onChangePreview.bind(this)
    }
    onChangeName(e){
        this.setState({name:e.target.value,submitted:false})
    }
    onChangeAuthor(e){
        this.setState({author:e.target.value})
    }
    onChangeTag(e){
        this.setState({tag:e.target.value})
    }
    onChangeLink(e){
        this.setState({link:e.target.value})
    }
    onChangePreview(e){
        this.setState({preview:e.target.value})
    }
    onSubmit(e){
        e.preventDefault()
        const formObj={
            name:this.state.name,
            author:this.state.author,
            tag:this.state.tag,
            link:this.state.link,
            preview:this.state.preview
        }
        axios.post("/books/add",formObj)
            .then((res)=>{
                console.log(res)
                this.setState({submitted:true})
            })
            .catch((err)=>console.log(err))
        this.setState({name:'',author:'',tag:'',link:'',preview:''})
    }
    render(){
        return(
            <div className="container">
                {
                    (this.state.submitted===true)
                    &&
                    <Alert variant="success">Book Added successfully</Alert>
                }
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <h2 className="form-title">Add Book</h2>
                        <p style={{color:'red'}}>*required</p>
                    </div>
                    <div className="form-group">
                        <label>Name<sup style={{color:'red'}}>*</sup></label>
                        <input type="text" className="form-control" placeholder="Enter Book Name" value={this.state.name} onChange={this.onChangeName} required/>
                    </div>
                    <div className="form-group">
                        <label>Author<sup style={{color:'red'}}>*</sup></label>
                        <input type="text" className="form-control" placeholder="Enter Book Author" value={this.state.author} onChange={this.onChangeAuthor} required/>
                    </div>
                    <div className="form-group">
                        <label>Tag</label>
                        <input type="text" className="form-control" placeholder="Enter Tag" value={this.state.tag} onChange={this.onChangeTag} />
                    </div>
                    <div className="form-group">
                        <label>Link<sup style={{color:'red'}}>*</sup></label>
                        <input type="text" className="form-control" placeholder="Enter Book Link" value={this.state.link} onChange={this.onChangeLink} required/>
                    </div>
                    <div className="form-group">
                        <label>Preview</label>
                        <input type="text" className="form-control" placeholder="Enter Preview image link" value={this.state.preview} onChange={this.onChangePreview} />
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-primary" value="Add Book" />
                    </div>
                </form>
            </div>
        )
    }
}
export default Add