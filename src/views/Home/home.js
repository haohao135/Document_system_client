import React from "react";
import Header from '../../components/Header/header.js'
import './home.scss'
import Footer from "../../components/Footer/footer.js";
class Home extends React.Component{
    render(){
        return(
            <div className="home-container">
                <Header />
                <Footer />
            </div>
        );
    }
}
export default Home;