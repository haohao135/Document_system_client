import React from "react";
import './footer.scss'
import logoTDTU from '../../assets/images/logo_tdtu.png'
import iconHome from '../../assets/icons/house-solid.svg'
import iconPhone from '../../assets/icons/phone-solid.svg'
import iconEmail from '../../assets/icons/envelope-regular.svg'
import iconFacebook from '../../assets/icons/facebook-f-brands-solid.svg'
class Footer extends React.Component {
    render() {
        return (
            <div className="footer-container">
                <div className="above">
                    <div className="above1">
                        <img src={logoTDTU} className="logoTDTU"/>
                        <div className="content">
                            ĐẠI HỌC TÔN ĐỨC THẮNG
                        </div>
                    </div>
                    <div className="above2">
                        <div className="above2-1">
                            <div className="above2-1-1">
                                Khoa Công nghệ thông tin
                            </div>
                            <div className="above2-1-2">
                                <img src={iconHome} className="icon" />
                                Địa chỉ: Phòng C004, Số 19 Nguyễn Hữu Thọ, <br/>
                                P. Tân Phong, Quận 7, Tp. Hồ Chi Minh.
                            </div>
                            <div className="above2-1-2">
                                <img src={iconPhone} className="icon"/>
                                Điện thoại: 028 37755046
                            </div>
                        </div>
                        <div className="above2-1">
                            <div className="above2-1-1">
                                Liên hệ:
                            </div>
                            <div className="above2-1-2">
                                Phòng Đại học
                            </div>
                            <div className="above2-1-2">
                                <img src={iconPhone} className="icon"/>
                                028.3775.5052
                            </div>
                            <div className="above2-1-2">
                                <img src={iconEmail} className="icon"/>
                                phongdaihoc@tdtu.edu.vn
                            </div>
                        </div>
                        <div className="above2-1">
                            <div className="above2-1-1">
                                Phòng Đại học
                            </div>
                            <div className="above2-1-2">
                                <img src={iconPhone} className="icon"/>
                                028.3775.5052
                            </div>
                            <div className="above2-1-2">
                                <img src={iconEmail} className="icon"/>
                                phongdaihoc@tdtu.edu.vn
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="above2">
                        <div className="above2-1">
                            <div className="above2-1-1">
                                Liên hệ kĩ thuật
                            </div>
                            <div className="above2-1-2">
                                <img src={iconPhone} className="icon"/>
                                028.3775.5052
                            </div>
                            <div className="above2-1-2">
                                <img src={iconFacebook} className="icon"/>
                                Khoa công nghệ thông tin
                            </div>
                        </div>
                        <div className="above2-1">
                            <div className="above2-1-1">
                                Phòng Đại học
                            </div>
                            <div className="above2-1-2">
                                <img src={iconEmail} className="icon"/>
                                028.3775.5052
                            </div>
                            <div className="above2-1-2">
                                <img src={iconPhone} className="icon"/>
                                phongdaihoc@tdtu.edu.vn
                            </div>
                        </div>
                        <div className="above2-1">
                            <div className="above2-1-1">
                                Phòng Đại học
                            </div>
                            <div className="above2-1-2">
                                <img src={iconEmail} className="icon"/>
                                028.3775.5052
                            </div>
                            <div className="above2-1-2">
                                <img src={iconPhone} className="icon"/>
                                phongdaihoc@tdtu.edu.vn
                            </div>
                        </div>
                    </div>
                </div>
                <div className="below">
                    <div>Copyright ©2025 Đại học Tôn Đức Thắng</div>
                    <div>Ứng dụng được phát triển bởi Nhóm phát triển Sigma</div>
                </div>
            </div>
        );
    }
}
export default Footer;