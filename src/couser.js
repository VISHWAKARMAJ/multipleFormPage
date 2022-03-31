import React from "react";
import Slider from "react-slick";
import NextArrow from "./component/NextArrow";
import PrevArrow from "./component/PrevArrow";
// import "./topbrand.css";
import "./styles.css";

const brandArray = [
  {
    id: 1,
    time: "18 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/bb30587d1148b6ab628a61945f64bf88_1625164768.png?output-format=webp"
  },
  {
    id: 2,
    time: "30 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252699.png?output-format=webp"
  },
  {
    id: 3,
    time: "17 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/396a89cdb1f7a999717b01aa98da7017_1631990846.png?output-format=webp"
  },
  {
    id: 4,
    time: "26 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/13…ab6b0ad351759e4_1611253489.png?output-format=webp"
  },
  {
    id: 5,
    time: "27 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/6a…aff2f5b21f61d23_1617187857.png?output-format=webp"
  },
  {
    id: 6,
    time: "37 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/46…b21795c3d21816d_1589433692.png?output-format=webp"
  },
  {
    id: 7,
    time: "25 min",
    cover:
      "	https://b.zmtcdn.com/data/brand_creatives/logos/22…b36ac1e7e0c0db3_1605099406.png?output-format=webp"
  }
];
const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />
};

const App = () => {
  return (
    <div className="top-brand " style={{ display: "flex" }}>
      <div className="collectin-title"> Top brands for you</div>
      <Slider {...settings}>
        {brandArray.map((brand) => {
          return (
            <div>
              <div className="top-brand-cover">
                <img
                  src={brand.cover}
                  alt={brand.time}
                  className="top-brand-image"
                />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default App;
