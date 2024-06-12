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
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="./images/theLeanStartupBook.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="./images/mixer.jpg"
          />
        </div>

        <div className="home-row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="./images/watch.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="./images/speaker.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="./images/ipad.jpg"
          />
        </div>

        <div className="home-row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="./images/curvedScreen.jpg"
          />
        </div>
        <div className="home-row">
          <Product
            id="898989889"
            title="Samsung Galazy S24 Ultra"
            price={750}
            rating={4}
            image="./images/phone.png"
          />
          <Product
            id="9852656"
            title="BENGOO G9000 Stereo Gaming Headset"
            price={300}
            rating={3}
            image="./images/headSet.png"
          />
          <Product
            id="56851565"
            title="SKDOIUL Men Sport Running Shoes"
            price={149}
            rating={5}
            image="./images/shoe.png"
          />
          <Product
            id="259874236"
            title="Acer Nitro V Gaming Laptop"
            price={949}
            rating={4}
            image="./images/laptop.png"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
