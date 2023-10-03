import React from "react";
import "../../../assets/styles/PrivateCabinet/parts/Profile.scss";
import CommonBtn from "../../../components/Common/Button/CommonBtn";
function Profile() {
  return (
    <main className="private-profile-container">
      <div className="label-input">
        <label htmlFor="nameSurname">Mövcud şifrə</label>
        <input type="password" value={12345678910} id="nameSurname" />
      </div>
      <div className="label-input">
        <label htmlFor="nameSurname">Yeni şifrə</label>
        <input type="password" value={12345678910} id="nameSurname" />
      </div>
      <div className="label-input">
        <label htmlFor="nameSurname">Yeni şifrənin təkrarı</label>
        <input type="password" value={12345678910} id="nameSurname" />
      </div>
      <div className="label-input">
        <label htmlFor="nameSurname">Adınız və Soyadınız</label>
        <input type="text" placeholder="Adınız və Soyadınız" id="nameSurname" />
      </div>
      <div className="label-input">
        <label htmlFor="email">Email</label>
        <input type="email" value={"aygunaliyeva@gmail.com"} id="nameSurname" />
      </div>
      <nav style={{width:"300px",margin:"10px"}} className="profile-commonbtn">

      <CommonBtn work='save'/>
      </nav>
    </main>
  );
}

export default Profile;

{
  /* <div className="label-input">
  <label htmlFor="nameSurname">Adınız və Soyadınız</label>
  <input type="text" placeholder="Adınız və Soyadınız" id="nameSurname" />
</div>; */
}
