
import Sidebar from "../../../Components/Clients/Sidebar";
import "./ProductPage.scss";
function ProductPage() {
  return (
    <>
      <div className="productPage">
        
        <div className="productPage__sideBar">
        <div className="productPage__title"> Danh mục </div>
          <Sidebar />
        </div>
        <div className="productPage__content">Trang san pham</div>
      </div>
    </>
  );
}

export default ProductPage;
