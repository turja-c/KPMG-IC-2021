import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Information from './MentorInformation';
import './InfoSearch.css'
import Card from 'react-bootstrap/Card'

class InfoSearch extends Component {

  constructor(){
    super();

    this.state={
      search:null
    };
  }

  searchSpace=(event)=>{
    let keyword = event.target.value;
    this.setState({search:keyword})
  }

  render(){
    const divStyle = {
      paddingRight:'150px',
      paddingLeft: '50px',
      marginRight: '-10px',
      overflow: 'none'
    }
    const divStyle2 ={
      border:'solid',
      borderRadius:'10px',
      paddingTop: '20px',
      position:'relative',
      overflow: 'none',
      left:'3vh',
      top: '-10vh',
      height:'5vh',
      width:'25vh',
      marginTop:'10vh',
      marginBottom:'2vh'
    }
    const items = Information.filter((data)=>{
      if(this.state.search == null)
          return data
      else if(data.name.toLowerCase().includes(this.state.search.toLowerCase()) || data.program.toLowerCase().includes(this.state.search.toLowerCase())){
          return data
      }
    }).map(data=>{
      return(
      <div className="containerInfoCard ">
          <div className="row">
        <ul>
          <li style={{position:'relative',right:'6vh',}} className="" >
            <span style={divStyle}>{data.name}</span>
            <span style={divStyle}>{data.year}</span>
            <span style={divStyle}>{data.program}</span>
          </li> 
        </ul>
      </div>
      </div>
      )
    })
    

    return (
        <>
        <div className="container">
        <Card className="container mainContainerCard" style={{ paddingRight: '50px', paddingLeft: '-20px', marginLeft: '00px'}}>
                    <Card.Header> 
                    <h1 style={{ color: 'white'}}> Mentors Online</h1>
                     </Card.Header>
            <div className=" row">
            <input type="text" placeholder="Enter item to be searched" style={divStyle2} onChange={(e)=>this.searchSpace(e)} />

                <div className=" slide" style={{ marginLeft: '200px', marginTop: '-80px', marginLeft: '10px'}}>
                                
                    {items}
                </div> 
            </div>
        </Card>
        </div>
    </>
    )
  }
}

export default InfoSearch;
