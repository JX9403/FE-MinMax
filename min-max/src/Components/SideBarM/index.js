import "./SideBarM.scss";
import { Menu } from "antd";
import {AppstoreOutlined,CopyOutlined,UsergroupAddOutlined,ShoppingCartOutlined,BarChartOutlined } from "@ant-design/icons";
import MenuItem from "antd/es/menu/MenuItem";
import { useNavigate } from "react-router-dom";
// import { MdOutlineWindow } from "react-icons/md";
// import { IoCart } from "react-icons/io5";
// import { IoDocumentText } from "react-icons/io5";
// import { IoIosArrowForward } from "react-icons/io";
// import { FiUsers } from "react-icons/fi";
// import  'bootstrap/js/dist/collapse'
// import 'bootstrap/js/dist/dropdown'
// // import Nav from 'react-bootstrap/Nav';
// // import Navbar from 'react-bootstrap/Navbar';
// // import NavDropdown from 'react-bootstrap/NavDropdown';
function SideBarM() {
  const navigate=useNavigate()
  return (
    <>
    <Menu onClick={(item) =>{
      navigate(item.key)
    }}
     mode="inline" className="side-bar"
    >
      <Menu.Item  key="/general" className="side-bar__item  " icon={<span className="side-bar__icon"><AppstoreOutlined /></span>}>
        Tổng quan
      </Menu.Item>
      <Menu.SubMenu  key="pManagement" icon={<span className="side-bar__icon"><ShoppingCartOutlined /></span>} title={<span className="side-bar__item">Quản lý sản phẩm</span>}>
          <MenuItem key="/productm">Sản phẩm</MenuItem>
            <Menu.SubMenu  key="warehouse"  title={<span className="side-bar__item">Kho</span>}>
            <MenuItem key="/warehouse">Nhập Kho</MenuItem>
            <MenuItem key="/report">Kiểm kho</MenuItem>
            </Menu.SubMenu>
          <MenuItem key="/provider">Nhà cung cấp</MenuItem>
      </Menu.SubMenu>
      <Menu.Item key="2" className="side-bar__item" icon={<span className="side-bar__icon"><CopyOutlined /></span>}>
        Quản lý hóa đơn
      </Menu.Item>
      <Menu.SubMenu  key="bManagement" icon={<span className="side-bar__icon"><BarChartOutlined /></span>} title={<span className="side-bar__item">Thống kê</span>}>
          <MenuItem key="/productdashboard">Báo cáo bán hàng</MenuItem>
          <MenuItem key="/statistic">Báo cáo nhập hàng</MenuItem>
          <MenuItem key="/inventory">Báo cáo lợi nhuận</MenuItem>
      </Menu.SubMenu>
      <Menu.Item key="account" className="side-bar__item" icon={<span className="side-bar__icon"><UsergroupAddOutlined /></span>}>
        Quản lý tài khoản
      </Menu.Item>
    </Menu>
    </>
  );
}
export default SideBarM;
