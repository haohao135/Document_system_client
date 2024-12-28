import React from "react";
import './login.scss';
import logoTDTU from '../../assets/images/logo_tdtu.png'
import ForgotPassword from '../popup/ForgotPassword/forgotPassword.js'
import ConfirmOTP from '../popup/ConfirmOTP/confirmOTP.js'
import ChangePassword from '../popup/ChangePassword/changePassword.js'
import iconUser from '../../assets/icons/user-regular.svg'
import iconPassword from '../../assets/icons/lock-solid.svg'
import { Link } from 'react-router-dom';
class Login extends React.Component {
    state = {
        showPopup: false
    }
    forgotPasswordhandle = () => {
        this.setState({ showPopup: true })
    }
    handleClosePopup = () => {
        this.setState({ showPopup: false });
    };
    render() {
        const { showPopup } = this.state;
        return (
            <>
                <div className="container">
                    <div className="form-login">
                        <div className="component-left">
                            <div className="contain-img"><img src={logoTDTU} className="img" /></div>
                            <div className="text">
                                Hệ thống công văn
                            </div>
                        </div>
                        <div className="component-right">
                            <h2>Xin chào!</h2>
                            <div className="input-group">
                                <span className="icon" >
                                    <img src={iconUser} alt="userIcon" />
                                </span>
                                <input placeholder="Tên đăng nhập" className="input-login" type="text" />
                            </div>
                            <div className="input-group">
                                <span className="icon" >
                                    <img src={iconPassword} alt="userIcon" />
                                </span>
                                <input placeholder="Mật khẩu" className="input-login" type="password" />
                            </div>
                            <div className="forgot-password">
                                <a href="#" onClick={(e) => { e.preventDefault(); this.forgotPasswordhandle() }}>Quên mật khẩu</a>
                            </div>
                            <div className="buttons">
                                <button className="loginButton">Đăng nhập</button>
                                <Link to='/register'>
                                    <button className="registerButton">Đăng ký</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                {showPopup && <ForgotPassword onClose={this.handleClosePopup} />}
                {/* {showPopup && <ConfirmOTP onClose={this.handleClosePopup} />} */}
                {/* {showPopup && <ChangePassword onClose={this.handleClosePopup} />} */}
            </>
        );
    }
}
export default Login;