import React from "react";
import './changePassword.scss'
import iconPassword from '../../../assets/icons/lock-solid.svg'
class ChangePassword extends React.Component {
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
                            <p>Bạn cần thay đổi mật khẩu mới. Hãy vui lòng nhập mật khẩu mới vào ô bên dưới</p>
                        </div>
                        <div className="input-group">
                            <span className="icon" >
                                <img src={iconPassword} alt="userIcon" />
                            </span>
                            <input type="text" placeholder="Nhập mật khẩu mới" className="input-email"></input>
                        </div>
                        <div className="input-group">
                            <span className="icon" >
                                <img src={iconPassword} alt="userIcon" />
                            </span>
                            <input type="text" placeholder="Xác nhận mật khẩu mới" className="input-email"></input>
                        </div>
                        <div className="buttons">
                            <button>Xác nhận</button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default ChangePassword;