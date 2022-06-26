import React,{Component,setState} from 'react'
import './Tags.css'

class Tags extends Component {
    state = {
      divstyle : { border: '7px solid #F2F2F2'
        ,background: '#f0eeee' ,color:'black' }
    }
    ChangeColor = () =>{
        // Call setState method to update the state.
        this.setState({
         divstyle : {border: '10px solid white',color:'white',
            background:'black'}}
         )
 }
  render(){
    return (
        <div className='Container'>
            <div  className='TagName '>
            <div  onClick={this.ChangeColor} 
            style = {this.state.divstyle} className="Tag"><a >Gaming </a></div>
            <div className="Tag" ><a> One Piece </a></div>
            <div className="Tag"><a>Naruto</a></div>
            <div className="Tag"><a>Comedy</a></div>
            <div className="Tag"><a>Live</a></div>
            <div className="Tag"><a>Rounds</a></div>
            <div className="Tag"><a>Diablo</a></div>
            <div className="Tag"><a>React js</a></div>
            <div className="Tag"><a>Vue js</a></div>
            <div className="Tag"><a>Youtube</a></div>
            <div className="Tag"><a>Trend</a></div>
            <div className="Tag"><a>Funny</a></div>
            <div className="Tag"> <a>Food</a></div>
            <div className="Tag"><a>Live</a></div>
            <div className="Tag"><a>Rounds</a></div>
            <div className="Tag"><a>Diablo</a></div>
            <div className="Tag"><a>React js</a></div>
            <div className="Tag"><a>Vue js</a></div>
            <div className="Tag"><a>Youtube</a></div>
            <div className="Tag"><a>Trend</a></div>
            <div className="Tag"><a>Funny</a></div>
            <div className="Tag"> <a>Food</a></div>
            </div>
        </div>
      )
   
  }
}
export default Tags;