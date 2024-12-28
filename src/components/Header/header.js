import React from "react";
import logoTDTU from '../../assets/images/logo_tdtu.png'
import iconBell from '../../assets/icons/bell-regular.svg'
import KienFace from '../../assets/images/cccd.jpg'
import './header.scss'
class Header extends React.Component{
    render(){
        return(
            <div className="container-header">
                <div className="header-left">
                    <img src={logoTDTU} className="img-logo"/>
                    <div className="content-container">
                        <div>
                            Hệ thống công văn
                        </div>
                        <div>
                            Khoa công nghệ thông tin
                        </div>
                    </div>
                </div>
                <div className="header-right">
                    <span className="icon"><img src={iconBell}></img></span>
                    <div className="user-name">
                        Nguyễn Trung Kiên
                    </div>
                    <div className="user-avatar">
                        <img src={KienFace} className="img-avatar"/>
                    </div>
                </div>
            </div>
        );

    }
}
export default Header;