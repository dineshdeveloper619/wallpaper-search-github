import React from "react";

import SearchInput from "./searchengine";
import ImageList from "./imagelist";
import './App.css'
import axios from "axios";

class Home extends React.Component{
    constructor(props){
      super(props)

      this.state = {images:[],imag:[]}
      this.onSearchSubmit = this.onSearchSubmit.bind(this)
    }
    
    async onSearchSubmit(entry){
        const response= await axios.get(`https://pixabay.com/api/?key=17483291-ee3056df16440f063991ace00&q=${entry}&image_type=photo&pretty=true`)
        console.log(response.data.hits)
        this.setState({images:response.data.hits,imag:response.data.total})
      };

      
    
    render(){
      return(
        <div>
            <SearchInput onSearchSubmit={this.onSearchSubmit}/>
            <ImageList images={this.state.images}/>
        </div>
      )
    }
    
    }
    
    export default Home;
    