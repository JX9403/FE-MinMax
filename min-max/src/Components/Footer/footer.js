import { Container } from "react-bootstrap"
import "./style.css" 
import { MdEmail } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
function Footer(){
    return (
        <>
        <footer className="text-center text-md-start">
            <Container >
                <div className="row">
                <div className="col-md-6 ">
                    <h2 className="logo">MinMax</h2>
                    <p>Sự lựa chọn hoàn hảo</p>
                    <div className="signup-footer d-flex align-items-center">
                        <p className="align-middle">Đăng ký tài khoản ngay</p>
                        <button className="btn signup-btn">Đăng ký</button>
                    </div>
                </div>
                <div className="col-md-3">
                    <h2 className="footer-heading">Link</h2>
                    <div className="footer-nav d-flex flex-column">
                    <a className="text-decoration-none" href="#" >Trang chủ</a>
                    <a className="text-decoration-none" href="#" >Sản phẩm</a>
                    <a className="text-decoration-none" href="#" >Khuyến mãi</a>
                    <a className="text-decoration-none" href="#" >Liên hệ</a>
                    </div>
                </div>
                <div className="col-md-3">
                    <h2 className="footer-heading">Liên hệ</h2>
                    <div className="footer-nav d-flex flex-column">
                    <a className="text-decoration-none" href="#" ><MdEmail /> Email:</a>
                    <a className="text-decoration-none" href="#" ><BiPhoneCall /> Số điện thoại:</a>
                    </div>
                </div>
                </div>
            </Container>
        </footer>
        </>
    )
}
export default Footer