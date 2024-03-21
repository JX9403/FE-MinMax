import SideBar from "../../Components/SideBar";
import './ProductPage.scss'
function ProductPage() {
  return (
    <>
      <div className="productPage">
        <div className="productPage__sideBar">
          <SideBar />
        </div>
        <div className="productPage__content">Trang san pham</div>
      </div>
    </>
  );
}

export default ProductPage;
