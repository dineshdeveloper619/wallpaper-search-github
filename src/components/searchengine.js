import React from "react";
import "./App.css"




class SearchInput extends React.Component{

    constructor(props){
        super(props)
        this.state={entry : ''}
    }

    onFormSubmit = (event)=>{
        event.preventDefault();
        this.props.onSearchSubmit(this.state.entry)

    }
    


    
    render(){
        return(
            <div className="ui container">
            <div className="ui segment" style={{marginTop:'30px'}}>
            <form action="" className="ui form" onSubmit={this.onFormSubmit}> 
                <div className="field">
                    <div className="ui icon input">
                        <input placeholder="Search Wallpapers Here ..."
                        onChange={(event)=>this.setState({entry:event.target.value.toLowerCase()})}
                        ></input>
                        <button type="submit" className="submit" id="button"><i className="search icon"></i></button>
                    </div>
                </div>
            </form>
        </div>
        </div>
         
        )
    }
}

export default SearchInput;