import React, { useState, useEffect } from "react";
import WeatherData from "./utils/ForecastWeather.json";

const WeatherSelect = ({ WeatherSelect }) => {
  // useState渲染區
  const [county, setCounty] = useState([]);
  const [sitename, setSitename] = useState([]);
  const [cardText, setCardText] = useState([]);
  const [cardTextWrap, setCardTextWrap] = useState([]);

  // 初始渲染 縣市select
  const county_set = () => {
    let county_option = [];
    WeatherData.records.map((data_obj) => {
      county_option.push(data_obj.county);
    });
    county_option = [...new Set(county_option)];
    return county_option;
  };
  useEffect(() => {
    setCounty(county_set());
  }, []);

  // 縣市select onChang事件
  const countyChangeFn = (county_name) => {
    // document.querySelector("#air_action_wrap #sitename").selectedIndex = 0;
    let city_option = [];
    WeatherData.records.map((data_obj) => {
      if (data_obj.county === county_name) {
        city_option.push({
          index: WeatherData.records.indexOf(data_obj),
          name: data_obj.sitename
        });
      }
    });
    setSitename(city_option);
  };

  // 測站名稱select onChang事件
  const sitenameChangeFn = (city_index) => {
    let text = [];
    if (city_index === "請選擇") {
      setCardText(text);
      return;
    }
    WeatherData.fields.map((obj) => {
      text.push({
        lable: obj.info.label,
        content: WeatherData.records[city_index][obj.id]
      });
    });
    setCardText(text);
  };

  return (
    <main className="pt-3 pb-5">
      <h1>空氣品質查看</h1>
      <div id="air_action_wrap" className="sticky-top bg-light pt-2 pb-2">
        <label for="county">縣市：</label>
        <select
          id="county"
          name="county"
          onChange={(c) => countyChangeFn(c.target.value)}
        >
          <option>請選擇</option>
          {county.map((e) => {
            return <option value={e}>{e}</option>;
          })}
        </select>
        {/* <br /> */}
        <label className="ms-4" for="sitename">
          測站名稱：
        </label>
       
        <select
          id="sitename"
          name="sitename"
          onChange={(c) => sitenameChangeFn(c.target.value)}
        >
          <option>請選擇</option>
          {sitename.map((e) => {
            return <option value={e.index}>{e.name}</option>;
          })}
        </select>
      </div>

      {/* select顯示 */}
      <div className="card w-75 m-auto mt-2">
        <div className="card-body">
          <div className="card-text text-start">
            {cardText.map((obj) => {
              return (
                <p>
                  <b>{obj.lable}：</b>
                  {obj.content !== "" ? (
                    obj.content
                  ) : (
                    <span className="fst-italic text-decoration-line-through">
                      無資料
                    </span>
                  )}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default WeatherSelect;
