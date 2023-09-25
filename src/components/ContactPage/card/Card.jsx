import React from "react";
import "../../../assets/styles/ContactPage/Card/Card.scss";
import { Container, Row, Col } from "react-bootstrap";
import { contactData } from "../../../data/ContactCard.js";

function Card() {
  return (
    <>
      {contactData.map((item, index) => (
        <div className="contact-card">
          <span
            className="contact-headicon"
            dangerouslySetInnerHTML={{ __html: item.icon }}
          ></span>
          <h4 className="contac-name">{item.contactName}</h4>
          <div className="contact-method-box" >
          <span className="contact-method">{item.num}</span>
          {index === 0? <span className="contact-method">{item.num2}</span> : null}

          </div>
          <div className="contact-card-icons">
            {index === 3 ? (
              <>
                <i className={item.icons1}></i>
                <i className={item.icons2}></i>
                <i className={item.icons3}></i>
                <i className={item.icons4}></i>
              </>
            ) : null}
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
