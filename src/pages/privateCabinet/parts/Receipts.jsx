import React from "react";
import "../../../assets/styles/PrivateCabinet/parts/Receipts.scss";

function Receipts() {
  return (
    <main className="private-receipts-container">
      <div className="table">
        <div className="table-head">
          <h6>Qəbz ID</h6>
          <h6>Abunə tarixi</h6>
          <h6>Məbləğ</h6>
        </div>
        <div className="table-body">
          <div className="body-row">
            <p>
              <i className="fa-solid fa-receipt"></i> 000000001
            </p>
            <p>12.02.2022</p>
            <p>10 AZN</p>
          </div>
          <div className="body-row">
            <p>
              <i className="fa-solid fa-receipt"></i> 000000001
            </p>
            <p>12.02.2022</p>
            <p>10 AZN</p>
          </div>
          <div className="body-row">
            <p>
              <i className="fa-solid fa-receipt"></i> 000000001
            </p>
            <p>12.02.2022</p>
            <p>10 AZN</p>
          </div>
          <div className="body-row">
            <p>
              <i className="fa-solid fa-receipt"></i> 000000001
            </p>
            <p>12.02.2022</p>
            <p>10 AZN</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Receipts;
