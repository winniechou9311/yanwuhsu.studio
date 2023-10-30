import { DataList } from "./DataList";

const ProductMenu = () => {
  return (
    <div>
      <div className="row">
        {DataList.map((item) => {
          return (
            <div className="col-4 p-0" key={item.id}>
              <div
                className="carousel slide"
                data-bs-ride="carousel"
                style={{
                  height: "40rem",
                  width: "100%",
                  border: "none",
                  margin: "0",
                }}
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={item.src}
                      className="d-block"
                      alt={item.alt}
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "contain",
                      }}
                    ></img>
                    <div className="carousel-caption">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.caption}</p>
                      <a href={item.link} className="btn btn-light">
                        {item.btnCaption}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductMenu;
