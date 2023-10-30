import React from "react";

const About = () => {
  return (
    <div style={{ padding:"4rem"}}>
      <div className="container-fluid mt-3">
        <h1>/ About YAN-WU /</h1>
        <p>言午快覽</p>
      </div>

      <div className="row">
        <div className="col-sm-4 p-5 text-white">
          <img
            src="/img/Profile/yanwu_hsu_Profile.jpg"
            alt="YAN-WU Image"
            width="100%"
            style={{ borderRadius: "20% 0 20% 0" }}
          />
        </div>
        <div className="col-sm-8 p-5 text-dark">
          <h5>Q: 這攝影好像脾氣不太好？</h5>
          <p>
            A:
            沒有他其實沒有脾氣不好，他只是不喜歡低能兒跟免費仔而已。他很重視他自己的價值。
          </p>
          <br />
          <h5>Q: 他是不是討厭我？</h5>
          <p>A: 沒有他只是臉臭還有不知道要說什麼而已。</p>
          <br />
          <h5>Q: 可以拍一拍當他第二個女朋友嗎？</h5>
          <p>A: 不行！</p>
          <br />
          <h5>Q: 他喜歡的模特兒是怎樣的？</h5>
          <p>
            A:
            他喜歡有趣的人，不一定要多漂亮但要有趣照片要有自己的想法的模特兒。
          </p>
          <br />
          <p>Photo By : @_________adam511</p>
        </div>
      </div>
    </div>
  );
};

export default About;
