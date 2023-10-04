import React, { useState } from "react";
import "../../../assets/styles/PrivateCabinet/parts/Subscription.scss";
import CommonBtn from "../../../components/Common/Button/CommonBtn";

function Subscription() {
  const [modal, setModal] = useState(false);

  const handleClick = () => {
    setModal(true);
    // Modal açıldığında sayfanın kaydırılmasını engelle
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    setModal(false);
    // Modal kapatıldığında sayfanın kaydırılmasını yeniden etkinleştir
    document.body.style.overflow = "auto";
  };
  return (
    <main className="private-subscription-container">
      <div className="subscribe">
        <div className="warning">
          <span>Siz abunə deyilsiniz.</span>
        </div>
        <div className="info">
          <i className="fa-solid fa-circle-info"></i>
          <span>Aylıq abunə haqqı 10 AZN təşkil edir.</span>
        </div>
        <CommonBtn work="subscribe" />
      </div>
      <div className="refresh">
        <div className="info">
          <i className="fa-solid fa-circle-info"></i>
          <span>Sizin abunəliyiniz mövcuddur.</span>
        </div>
        <div className="exclamation">
          <i className="fa-solid fa-triangle-exclamation"></i>
          <span>15.03.2022 tarixində abunəliyiniz bitir.</span>
        </div>
        <CommonBtn work="refresh" handleClick={handleClick} />
        {modal ? (
          <main className="modal-main">
            <div className="refresh-modal">
              <div className="xmark" onClick={() => setModal(false)}>
                <i className="fa-solid fa-xmark"></i>
              </div>
              <div className="head">
                <p>
                  Sizin abunəliyiniz 15.03.2022 tarixində bitir. Abunəliyinizi
                  uzatmaq istədiyiniz tarixi seçin
                </p>
              </div>
              <div className="price-checkbox">
                <div className="price-row">
                  <div className="label-input">
                    <input type="radio" name="month" />
                    <label htmlFor="">1 ay</label>
                  </div>
                  <p>Məbləğ: 10 AZN</p>
                </div>
                <div className="price-row">
                  <div className="label-input">
                    <input type="radio" name="month" />
                    <label htmlFor="">2 ay</label>
                  </div>
                  <p>Məbləğ: 20 AZN</p>
                </div>
                <div className="price-row">
                  <div className="label-input">
                    <input type="radio" name="month" />
                    <label htmlFor="">3 ay</label>
                  </div>
                  <p>Məbləğ: 30 AZN</p>
                </div>
              </div>
              <div></div>
            </div>
          </main>
        ) : null}
      </div>
    </main>
  );
}

export default Subscription;
