* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  color: #17202a;
  background: #ffffff;
  line-height: 1.6;
}

.container {
  width: min(1120px, 92%);
  margin: auto;
}

/* HEADER */

.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: #111820;
  border-bottom: 1px solid #ffffff20;
}

.nav {
  min-height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  color: #ffffff;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.25rem;
}

.logo span {
  display: inline-grid;
  place-items: center;
  background: #f4b400;
  color: #111820;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  margin-right: 8px;
}

.nav nav {
  display: flex;
  gap: 22px;
}

.nav nav a {
  color: #ffffff;
  text-decoration: none;
  font-size: 0.94rem;
}

.nav nav a:hover {
  color: #f4b400;
}

.menu-btn {
  display: none;
  background: none;
  border: 0;
  color: #ffffff;
  font-size: 1.7rem;
}

/* HERO */

.hero {
  background: linear-gradient(135deg, #101820, #263642);
  color: #ffffff;
  padding: 90px 0 70px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 55px;
  align-items: center;
}

.eyebrow {
  color: #d39a00;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 2px;
  margin-bottom: 10px;
}

.hero h1 {
  font-size: clamp(2.6rem, 6vw, 5rem);
  line-height: 1.05;
  margin: 10px 0 20px;
}

.hero h1 span {
  color: #f4b400;
}

.hero-text {
  max-width: 650px;
  font-size: 1.12rem;
  color: #d8e0e5;
}

.buttons {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin: 28px 0;
}

.btn {
  display: inline-block;
  border: 0;
  border-radius: 10px;
  padding: 13px 20px;
  font-weight: 800;
  text-decoration: none;
  cursor: pointer;
}

.primary {
  background: #f4b400;
  color: #111820;
}

.primary:hover {
  background: #ffc62b;
}

.whatsapp {
  background: #20c66b;
  color: #ffffff;
}

.whatsapp:hover {
  background: #19a957;
}

.trust-row {
  display: flex;
  gap: 35px;
  margin-top: 35px;
}

.trust-row b {
  display: block;
  font-size: 1.8rem;
  color: #f4b400;
}

.trust-row small {
  color: #c8d0d5;
}

/* HERO CARD */

.hero-card {
  background: #ffffff;
  color: #17202a;
  border-radius: 24px;
  padding: 35px;
  box-shadow: 0 20px 60px #00000066;
  text-align: center;
}

.helmet {
  font-size: 4.5rem;
}

.hero-card h3 {
  font-size: 1.7rem;
}

.hero-card p {
  color: #64717b;
}

.card-line {
  text-align: left;
  border-top: 1px solid #e5e7e9;
  padding: 12px 0;
}

.card-call {
  display: block;
  background: #17202a;
  color: #ffffff;
  text-decoration: none;
  padding: 12px;
  border-radius: 9px;
  font-weight: 800;
}

/* SECTIONS */

.section {
  padding: 80px 0;
}

.section-head {
  text-align: center;
  max-width: 750px;
  margin: 0 auto 40px;
}

.section-head h2,
.two-col h2,
.contact-grid h2 {
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.1;
  margin-bottom: 14px;
}

.section-head > p:last-child {
  color: #68747d;
}

/* SERVICES */

.service-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}

.service-grid article {
  border: 1px solid #e5e7e9;
  border-radius: 16px;
  padding: 24px;
  background: #ffffff;
  transition: 0.25s;
  font-size: 1.8rem;
}

.service-grid article:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px #00000012;
}

.service-grid h3 {
  font-size: 1.05rem;
  margin: 8px 0 5px;
}

.service-grid p {
  font-size: 0.92rem;
  color: #68747d;
}

/* ABOUT */

.dark {
  background: #111820;
  color: #ffffff;
}

.two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
}

.two-col p {
  color: #ccd4d9;
  margin: 10px 0;
}

.info-box {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}

.info-box div {
  padding: 25px;
  border: 1px solid #ffffff1c;
  border-radius: 15px;
  text-align: center;
}

.info-box span {
  font-size: 2rem;
  color: #f4b400;
  font-weight: 800;
}

.info-box p {
  font-size: 0.8rem;
}

/* GALLERY */

.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.photo {
  min-height: 210px;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: #ffffff;
  background: linear-gradient(135deg, #34495e, #8b6b22);
  box-shadow: inset 0 0 0 1000px #00000022;
}

.photo span {
  font-size: 1rem;
  font-weight: 800;
  margin-top: 8px;
}

/* REVIEWS */

.soft {
  background: #f5f7f8;
}

.review-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.review-grid article {
  background: #ffffff;
  border-radius: 16px;
  padding: 25px;
  border: 1px solid #e5e7e9;
}

.review-grid article:first-line {
  color: #f4b400;
}

/* CONTACT */

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
}

.contact-list {
  margin-top: 25px;
}

.contact-list p {
  margin: 12px 0;
}

.contact-list a {
  color: #17202a;
  font-weight: 700;
}

form {
  display: grid;
  gap: 13px;
}

input,
select,
textarea {
  width: 100%;
  padding: 14px;
  border: 1px solid #d6dce0;
  border-radius: 10px;
  font: inherit;
}

textarea {
  resize: vertical;
}

/* FOOTER */

footer {
  background: #0b1015;
  color: #b8c0c6;
  padding: 25px 0;
}

.footer-flex {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  font-size: 0.85rem;
}

/* WHATSAPP BUTTON */

.floating-wa {
  position: fixed;
  right: 20px;
  bottom: 20px;
  background: #20c66b;
  color: #ffffff;
  width: 58px;
  height: 58px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  text-decoration: none;
  font-size: 1.5rem;
  box-shadow: 0 8px 25px #00000066;
  z-index: 200;
}

/* MOBILE */

@media (max-width: 850px) {

  .menu-btn {
    display: block;
  }

  .nav nav {
    display: none;
    position: absolute;
    left: 0;
    right: 0;
    top: 72px;
    background: #111820;
    padding: 20px;
    flex-direction: column;
  }

  .nav nav.open {
    display: flex;
  }

  .hero-grid,
  .two-col,
  .contact-grid {
    grid-template-columns: 1fr;
  }

  .service-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .gallery,
  .review-grid {
    grid-template-columns: 1fr 1fr;
  }

  .hero {
    padding-top: 60px;
  }

  .info-box {
    margin-top: 20px;
  }
}

@media (max-width: 520px) {

  .service-grid,
  .gallery,
  .review-grid {
    grid-template-columns: 1fr;
  }

  .trust-row {
    gap: 18px;
  }

  .trust-row b {
    font-size: 1.45rem;
  }

  .footer-flex {
    flex-direction: column;
  }

  .hero-card {
    padding: 25px;
  }
}
