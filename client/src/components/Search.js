import React from 'react'
import Autocomplete from 'react-autocomplete'

class Search extends React.Component{
    constructor(props){
        super(props)
        this.state={value:''}
    }
    render(){
        return(
            <div class="input group mb-3" style={{display:'flex',flexDirection:'row'}}>
                <div className="input-group-prepend">
                    <p className="input-group-text">Search</p>
                </div>
<Autocomplete
  getItemValue={(item) => item.name}
  items={this.props.obj}
  shouldItemRender={(item, value) => (item.name+item.author+item.tag).toLowerCase().indexOf(value.toLowerCase()) > -1}

  renderItem={(item, isHighlighted) =>
    <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
      {item.name}
    </div>
  }
  value={this.state.value}
  onChange={(e) => 
    this.setState({value:e.target.value})}
  onSelect={(val) => {
    this.setState({value:val})
    this.props.handler(val)}}
/>
</div>)}
}
export default Search