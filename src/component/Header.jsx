import '../styles/header.css'
const Header = () => {

    return (
        <div className="header-wrapper">
            <div className="header-info">
                <div className="hotline">
                    HOTLINE: 0377272837
                </div>
                <div className="email">
                    EMAIL: qchung582@gmail.com
                </div>
            </div>
            <div className="header-nav">
                <div className="header-nav-logo">
                    Tết Việt
                </div>
                <div className="header-nav-text">
                   Trang chủ
                </div>
            </div>
           <div className="text-box">
                <h3 className="uppercase">
                    <strong>TẾT VIỆT</strong>
                </h3>
               <h4>Món quà sum vầy!</h4>
               <div>
               </div>
               <p>
                   <span>
                       <strong>
                           <i>
                               “Tết là khoảnh khắc quan trọng nhất trong năm, nơi mà mọi người sum vầy bên gia đình,
                           </i>
                           <br/>
                           <i>
                                tưởng nhớ tổ tiên và chia sẻ niềm vui với nhau.”</i>
                       </strong>
                   </span>
               </p>
           </div>
        </div>
    )
}
export default Header;