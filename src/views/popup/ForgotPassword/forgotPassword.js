import React from "react";
import './forgotPassword.scss'
import iconEmail from '../../../assets/icons/envelope-regular.svg'
class ForgotPassword extends React.Component {
    handleClosePopup = () => {
        this.props.onClose();
    }
    handlePopupClick = (e) => {
        e.stopPropagation();
    };
    render() {
        return (
            <>
                <div className="container-overlay" onClick={() => this.handleClosePopup()}>
                    <div className="popup" onClick={(e) => this.handlePopupClick(e)}>
                        <h2>Quên mật khẩu</h2>
                        <hr className="styled-hr" />
                        <div>
                            <p>Vui lòng nhập tài khoản của bạn vào ô bên dưới chúng tôi sẽ gửi mã OTP về tài khoảng Email của bạn</p>
                        </div>
                        <div className="input-group">
                            <span className="icon" >
                                <img src={iconEmail} alt="userIcon" />
                            </span>
                            <input type="text" placeholder="Nhập email" className="input-email"></input>
                        </div>
                        <div className="buttons">
                            <button>Gửi mã OTP</button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default ForgotPassword;