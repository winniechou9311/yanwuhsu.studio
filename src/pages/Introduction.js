import React from "react";
import ServiceSwiper from "src/components/image/Swiper/ServiceSwiper";
import ServiceSwiper2 from "src/components/image/Swiper/ServiceSwiper2";
import ServiceSwiper3 from "src/components/image/Swiper/ServiceSwiper3";

const Introduction = () => {
  return (
    <div className="container">
      <h1>Service</h1>
      <div class="row">
        <div class="col-sm-4 text-black">
          <p>個人寫真</p>
          <ServiceSwiper />
        </div>

        <div class="col-sm-4 text-black">
        <p>情侶/閨蜜寫真</p>
          <ServiceSwiper2 />
        </div>

        <div class="col-sm-4 text-black">
        <p>高山攝影</p>
          <ServiceSwiper3 />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
