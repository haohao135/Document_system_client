import React from "react";
import Header from '../../components/Header/header.js'
import './home.scss'
class Home extends React.Component{
    render(){
        return(
            <div className="home-container">
                <Header />
            </div>
        );
    }
}
export default Home;