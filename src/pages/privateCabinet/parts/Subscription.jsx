import React from "react";
import "../../../assets/styles/PrivateCabinet/parts/Subscription.scss";
import CommonBtn from "../../../components/Common/Button/CommonBtn";

function Subscription() {
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
        <CommonBtn work="refresh" />
      </div>
    </main>
  );
}

export default Subscription;
