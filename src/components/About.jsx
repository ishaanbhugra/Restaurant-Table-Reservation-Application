import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            Welcome to Grill-Ishh, where sizzling flavors meet cozy vibes. Nestled in the heart of West Delhi, we take pride in crafting a menu that blends the best of grilled goodness with a touch of warmth.
<br/>
At Grill-Ishh, our chefs meticulously select top-quality ingredients to create dishes that ignite your taste buds. Whether you're here for a quick bite or a leisurely meal, our inviting ambiance sets the perfect stage for a delightful dining experience.
<br/>

Our commitment goes beyond the grill – we strive to make every moment memorable. From attentive service to a diverse menu inspired by both local tastes and global influences, Grill-Ishh is where simplicity meets culinary excellence.
<br/>

Join us for a taste adventure at Grill-Ishh, where every bite tells a flavorful story.
            </p>
            {/* <Link to={"menu"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link> */}
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;