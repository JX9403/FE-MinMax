import banner1 from "../../image/e3381c20ec9f466391095e6a3c93393b.jpg";
import "./Home.scss";
import Img01 from "./img/—Pngtree—blank sweater apparel_6650587.png";
import Img02 from "./img/image 7.png";
import React from "react";

function Home() {
  return (
    <>
      <div className="home">
        {/* Home banner */}
        <div className="home__banner">
          <div className="home__banner-img">
            <img src={banner1} alt="banner1" />
          </div>

          <div className="home__banner-content">
            <div className="home__banner-title">
              Tháng tươi xanh
              <br />
              Hot deal ngọt lành
            </div>
            <div className="home__banner-desc">
              Phủ xanh giỏ hàng cùng MinMax!
            </div>
            <div className="home__banner-btn">
              <button className="btn-1">
                Mua ngay
                {/* <i class="fa-solid fa-circle-arrow-right"></i> */}
              </button>
            </div>
          </div>
        </div>
        {/* End Home Banner */}

        {/* Home Slider */}

        {/* End Home Slider */}

        {/* Home Khuyen Mai */}
        <div className="home__sale">
          <div className="home__sale-wrap">
            <div className="home__sale-title">Khuyến mãi</div>
            <div className="home__sale-list">
              <div className="home__sale-item">
                <div className="home__sale-content">
                  <div className="home__sale-text1">UPTO 20% OFF</div>
                  <div className="home__sale-text2">Siêu hot</div>
                  <div className="home__sale-btn">
                    <button className="btn-1">Xem ngay</button>
                  </div>
                </div>
                <div className="home__sale-img">
                {/* eslint-disable-next-line */}
                  <img src={Img01} />
                </div>
              </div>

              <div className="home__sale-item">
                <div className="home__sale-content">
                  <div className="home__sale-text1">UPTO 20% OFF</div>
                  <div className="home__sale-text2">Tiết kiệm</div>
                  <div className="home__sale-btn">
                    <button className="btn-1">Xem ngay</button>
                  </div>
                </div>
                <div className="home__sale-img">
                  {/* eslint-disable-next-line */}
                  <img src={Img01} />
                </div>
              </div>

              <div className="home__sale-item">
                <div className="home__sale-content">
                  <div className="home__sale-text1">MUA NHIỀU</div>
                  <div className="home__sale-text2">Lãi lớn</div>
                  <div className="home__sale-btn">
                    <button className="btn-1">Xem ngay</button>
                  </div>
                </div>
                <div className="home__sale-img">
                  {/* eslint-disable-next-line */}
                  <img src={Img01} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Home Khuyen Mai */}

        {/* Home Gioi thieu */}
        <div className="home__about">
          <div className="home__about-wrap">
            <div className="home__about-title">About</div>
            <div className="home__about-content">
              <div className="home__about-img">
                {/* eslint-disable-next-line */}
                <img src = {Img02}/>
              </div>
              <div className="home__about-text">MinMax là một hệ thống siêu thị bán lẻ của Việt Nam được thành lập vào tháng 5 năm 2000. Trải qua quá trình phát triển không ngừng nghỉ, MinMax hiện là doanh nghiệp có nhiều siêu thị nhất Việt Nam, với hơn 250 siêu thị và đại siêu thị.</div>
            </div>
          </div>
        </div>
        {/* End Home Gioi thieu */}
      </div>
    </>
  );
}

export default Home;
