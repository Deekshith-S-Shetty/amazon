import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <img
          className="home-image"
          src="./images/landingPage.jpg"
          alt="Landing Page"
        />

        <div className="home-row">
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
