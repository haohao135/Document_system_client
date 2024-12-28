import React, { createRef } from "react";
import SquareConfirmOTP from '../../../components/SquareConfirmOTP/squareConfirmOTP.js'
import './confirmOTP.scss'
class ConfirmOTP extends React.Component {
    constructor(props) {
        super(props);
        this.inputRefs = Array.from({ length: 6 }, () => createRef());
    }

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
                        <hr className="styled-hr"/>
                        <div>
                            <p>Vui lòng nhập tài khoản của bạn vào ô bên dưới chúng tôi sẽ gửi mã OTP về tài khoản Email của bạn</p>
                        </div>
                        <div className="input-group-2">
                            {this.inputRefs.map((ref, index) => (
                                <SquareConfirmOTP
                                    key={index}
                                    nextRef={this.inputRefs[index + 1] || null}
                                />
                            ))}
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
export default ConfirmOTP;