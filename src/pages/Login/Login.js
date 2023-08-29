import React from "react";
import "./Login.css";
import image1 from "../../img/Logo.png";
import image2 from "../../img/logo_wecode.png";

const Login = () => {
  return (
    <div className="container">
      <div className="main">
        <div className="main_head">
          <div className="main_head_image">
            <img src={image1} alt="wecodeImage"></img>
          </div>
          <div className="main_head_text">
            <img src={image2} alt="wecodeImage"></img>
          </div>
        </div>

        <div className="main_body">
          <div className="input_box">
            <input
              className="input_text_box"
              type="text"
              placeholder="이메일"
            ></input>
          </div>

          <div className="input_box">
            <input
              className="input_text_box"
              type="password"
              placeholder="비밀번호"
            ></input>
          </div>

          <div className="input_box">
            <button className="button">로그인</button>
          </div>

          <div className="bottom_button">
            <button className="user_sign_button">회원가입</button>
            <hr className="line"></hr>
            <button className="user_sign_button">비밀번호 찾기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
