import '../styles/header.css'
const Header = () => {
    const handleReload = () => {
        window.location.reload();
    };

    return (
        <div className="header-wrapper">
            <div className="header-info">
                <div className="hotline">
                    HOTLINE: 0857938789
                </div>
                <div className="email">
                    EMAIL: thuy.datvieteco@gmail.com
                </div>
            </div>
            <div className="header-nav">
                <button className="header-nav-logo" onClick={handleReload}>
                    Tết Việt
                </button>
                <button className="header-nav-text" onClick={handleReload}>
                        Trang chủ
                </button>
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
                               “Tết là khoảnh khắc quan trọng nhất trong năm, nơi mà mọi người sum vầy bên gia đình
                           </i>
                           <br/>
                           <i>
                                và chia sẻ niềm vui với nhau.”</i>
                       </strong>
                   </span>
               </p>
           </div>
        </div>
    )
}
export default Header;