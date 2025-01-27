/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Banner from "../Components/Layouts/Banner";
import Header from "../Components/Layouts/Header";
import Footer from "../Components/Layouts/Footer";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/esm/Button";
import CalendarButton from "../Components/Common/CalendarButton";
import ChatBot from "../Components/Common/ChatBot";

const Codeacademy = () => {
  return (
    <div className="body-container pages-content">
      <Banner />
      <Header />
      <CalendarButton />
      <ChatBot/>
      <div className="container">
        <div className="main-content">
          <h2 className="fw-bold text-center my-5">
            Kodlama, pek çok olasılığı içinde barındıran bir dünya. Başlamak
            için tek gereken ise merak ve öğrenme dürtüsü.
          </h2>
          <div>
            <Row>
              <Col md={3}>
                <img src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fca-1.cf0e22ca.png&w=256&q=75" />
              </Col>
              <Col md={8}>
                <p className="fs-4">
                  Dünya çapında milyonlarca insanın günümüz dijital dünyasında
                  başarılı olmak için ihtiyaç duyduğu becerileri eğlenceli bir
                  şekilde edinmelerine olanak sağlayan
                  <a href="https://www.codecademy.com/learn">
                    {" "}
                    <span style={{ color: "#7A29CC" }}>Codecademy* </span>
                  </a>
                  içerikleri şimdi Tobeto deneyimi ile sana daha yakın!
                </p>
                <p className="fs-5 text-muted">
                  *Codecademy; 2011'den beri, 50 milyondan fazla üyenin kendi
                  için yeni bir yaşam ve kariyer geliştirmesine, projelerini
                  hayata geçirmesine yardımcı olan bir kodlama eğitimi
                  platformudur.
                </p>
              </Col>
            </Row>
          </div>
          <div className="my-5">
            <h2>Codecademy & Tobeto</h2>
            <p>
              Codecademy'nin tüm kaynaklarına Tobeto aboneliği ile
              erişebilirsin.
            </p>
            <p>
              Aboneliğin sağlayacağı Türkçe canlı dersler, alanında uzman
              eğitmenler ve öğrenmeni kolaylaştıracak mentör desteğiyle ile
              öğrenmeni destekleyici kaynaklarımız bu süreci kolaylaştırmak ve
              hızlandırmak için senin yanında!
            </p>
            <Button className="m-0">Hemen abone ol!</Button>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#11162F" }}>
        <div className="d-flex justify-content-center">
          <img
            src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcacode.e3ffebc4.gif&w=1920&q=75"
            className="my-5"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
      <div className="container text-white">
        <div className="my-5">
          <h2>
            Şimdi <br />
            Codecademy'nin <br />
            zengin kataloğu ile :
          </h2>
          <p>
            Gerçek zamanlı, kendi hızında kod yaz, anında geri bildirim al,
            etkileşimle yaparak öğren. Öğrenme deneyimine destek için makaleler,
            videolar ve projelerden faydalan.
          </p>
          <Button className="m-0 mb-2">Hemen abone ol!</Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default Codeacademy;
