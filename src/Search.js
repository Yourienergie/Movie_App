import React, { Component } from 'react';
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
            <input type="text" onChange={(e)=> this.props.search(e.target.value)} />
            </div>
         );
    }
}
 
export default Search;