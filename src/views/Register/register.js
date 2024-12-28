import React from "react";
import './register.scss';
import logoTDTU from '../../assets/images/logo_tdtu.png'
import { Link } from 'react-router-dom';
import iconUser from '../../assets/icons/user-regular.svg'
import iconPassword from '../../assets/icons/lock-solid.svg'
import iconEmail from '../../assets/icons/envelope-regular.svg'
class Register extends React.Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="form-register">
                        <div className="component-left">
                            <h2>Đăng ký</h2>
                            <div className="input-group">
                                <span className="icon" >
                                    <img src={iconUser} alt="userIcon" />
                                </span>
                                <input placeholder="Tên người dùng" type="text" />
                            </div>
                            <div className="input-group">
                                <span className="icon" >
                                    <img src={iconEmail} alt="userIcon" />
                                </span>
                                <input placeholder="email" type="text" />
                            </div>
                            <div className="input-group">
                                <span className="icon" >
                                    <img src={iconPassword} alt="userIcon" />
                                </span>
                                <input placeholder="Mật khẩu" type="password" />
                            </div>
                            <div className="input-group">
                                <span className="icon" >
                                    <img src={iconPassword} alt="userIcon" />
                                </span>
                                <input placeholder="Xác nhận mật khẩu" type="password" />
                            </div>
                            <button className="registerButton">Đăng ký</button>
                            <div className="or">
                                <hr />
                                <span>hoặc</span>
                                <hr />
                            </div>
                            <Link to='/'>
                                <button className="loginButton">Đăng nhập</button>
                            </Link>
                        </div>
                        <div className="component-right">
                            <div className="contain-img"><img src={logoTDTU} className="img"></img></div>
                            <div className="text">
                                Hệ thống công văn
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default Register;