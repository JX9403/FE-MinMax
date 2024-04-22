import { FaUserCircle } from "react-icons/fa";
import "./HeaderManagement.scss"
function HeaderManagement(){
    return (
        <>
        <div className="header-management d-flex justify-content-between">
        <div className="brand-container d-flex justify-content-center align-items-center">
            <a className="brand-name text-decoration-none  " role="button">MinMax</a>
        </div>
        <div role="button" className="header-management__container text-end d-flex justify-content-end align-items-center container ">
        <FaUserCircle className="header-management__icon" />
        </div>
        </div>
        </>
    )
}

export default HeaderManagement