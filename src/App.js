import React from "react";
import './index.css'
import foto from './house.png'
const data_base = [
  {id:1,house_pic:'../house.png',home:'New Apartment Nice Wiew',location:'Quincy St,Brooklyn,NY,USA',bed:"4 Beds",bath:'5 Baths',garage:'1 Garage',wrap:'1200Sq Ft',price:'$7,500/mo',like:0,old_price:'$2,800/mo'}
]
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data:data_base
    }
  }
    render(){
      const wrap =()=>{
        return this.state.data.map((v)=>{
          return(
          <div className="card" key={v.id}>
            <div className="btn_wrap">
            <button className="button">FEATURED</button>
            <button className="button two">FOR SALE</button>
            </div>
              <img src={foto} alt="" className="img"/>
              <div className="justify">
              <div></div>
              <img src={foto} alt="" className="user_pic"/>
              </div>
              <p className="border">{v.home}</p>
              <p className="margin-left">{v.location}</p>
            <div className="fa">
            <i className="fa-solid fa-bed"></i>
            <i className="fa-solid fa-bath"></i>
            <i className="fa-solid fa-car"></i>
            <i className="fa-solid fa-ruler"></i>
            </div>
            <div className="fa2 ">
              <p>{v.bed}</p>
              <p>{v.bath}</p>
              <p>{v.garage}</p>
              <p>{v.wrap}</p>
            </div>
            <hr></hr>
            <div>
              <div>
              <del className="margin-left bottom">{v.old_price}</del>
              <p className="border">{v.price}</p>
              </div>
              <div>
                <i className="fa-solid fa-view"></i>
                <i className="fa-solid fa-like"></i>
              </div>
            </div>
          </div>
          )
        })
      }
      return (
        <>
        {wrap()}
        </>
      ); 
    }
}

export default App;
  