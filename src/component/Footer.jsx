import '../styles/footer.css';
import React from "react";
const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="footer-top">
                <div className="footer-group">
                    <h3>
                        Tết Việt cam kết với khách hàng
                    </h3>
                    <div className="line-footer"></div>
                    <div className="footer-description">
                        <p>
                            <span>
                                <i className="bi-footer bi-arrow-right-circle-fill"></i>
                            </span>
                            Chúng tôi cam kết cung cấp những sản phẩm Tết chất lượng cao, đảm bảo an toàn và vệ sinh thực phẩm.
                        </p>
                        <p>
                            <span>
                                <i className="bi-footer bi-arrow-right-circle-fill"></i>
                            </span>
                            Tất cả các sản phẩm trên website đều được lựa chọn kỹ càng, đảm bảo đáp ứng sự hài lòng của khách hàng.
                        </p>
                        <p>
                            <span>
                                <i className="bi-footer bi-arrow-right-circle-fill"></i>
                            </span>
                            Chúng tôi cam kết đảm bảo dịch vụ giao hàng nhanh chóng, đúng hẹn và đảm bảo an toàn cho sản phẩm.
                        </p>
                        <p>
                            <span>
                                <i className="bi-footer bi-arrow-right-circle-fill"></i>
                            </span>
                            Mọi thông tin cá nhân và giao dịch của khách hàng sẽ được bảo mật tuyệt đối và không được tiết lộ cho bất kỳ bên thứ ba nào.
                        </p>
                        <p>
                            <span>
                                <i className="bi-footer bi-arrow-right-circle-fill"></i>
                            </span>
                            Chúng tôi cam kết hỗ trợ khách hàng một cách nhiệt tình và chu đáo, đồng hành cùng họ trong quá trình mua sắm và sử dụng sản phẩm Tết.
                        </p>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                Copyright © 2024 Tet Viet
            </div>
        </div>
    )
}
export default Footer;