import { Button, ConfigProvider, Space } from "antd";
import "./HeaderClient.scss";
import { NavLink } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";

function HeaderClient() {
  return (
    <>
      <div className="header-client">
        <div className="header-client__logo">
          <NavLink to="/">MinMax</NavLink>
        </div>

        <div className="header-client__menu">
          <ul>
            <li>
              <NavLink to="/">TRANG CHỦ</NavLink>
            </li>
            <li>
              <NavLink to="/product">SẢN PHẨM</NavLink>
            </li>
            <li>
              <NavLink to="/sale">KHUYẾN MẠI</NavLink>
            </li>
            <li>
              <NavLink to="/contact">LIÊN HỆ</NavLink>
            </li>
            <li className="header-client__icon-search">
              <SearchOutlined
                
                style={{ fontSize: "25px" }}
              />
            </li>
          </ul>
        </div>
        {/* ConfigProvider dùng để custom lại css cho component button của ant des */}
        <ConfigProvider
          theme={{
            token: {
              // Seed Token
              colorPrimary: "#5eb600",
              borderRadius: 2,

              // Alias Token
              colorBgContainer: "#fff",
            },
          }}
        >
          <Space>
            <Button className="header-client__btn" shape="round">
              Đăng nhập
            </Button>
          </Space>
        </ConfigProvider>
      </div>
    </>
  );
}
export default HeaderClient;
