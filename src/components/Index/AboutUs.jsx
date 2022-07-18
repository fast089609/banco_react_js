import React from "react";
import "./../../css/about.css";
import bancovertica from "./../../images/banco_vertical.jpg";

const AboutUs = () => {
  return (
    <div className="container my-24 px-6 mx-auto">
      <section className="mb-32 text-gray-800">
        <div className="container mx-auto xl:px-32 text-center lg:text-left">
          <div className="grid lg:grid-cols-2 flex items-center">
            <div className="mb-12 lg:mb-0">
              <div className="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14 about_us_info">
                <h2 className="text-3xl font-bold mb-6">Enjoy the moment</h2>
                <p className="text-gray-500 mb-6 pb-2 lg:pb-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                  soluta corporis voluptate ab error quam dolores doloremque,
                  quae consectetur.
                </p>
                <p className="text-gray-500 mb-0">
                  In ac turpis justo. Vivamus auctor quam vitae odio feugiat
                  pulvinar. Sed semper ligula sed lorem tincidunt dignissim. Nam
                  sed cursus lectus. Proin non rutrum magna. Proin gravida,
                  justo et imperdiet tristique, turpis nisi viverra est, nec
                  posuere ex arcu sit amet erat. Sed a dictum sem. Duis pretium
                  condimentum nulla, ut aliquet erat auctor sed. Aenean
                  facilisis neque id ligula maximus scelerisque. Nunc sed velit
                  rhoncus, interdum dolor at, lacinia lacus. Proin eleifend
                  viverra posuere. Ut commodo risus lacus, ac scelerisque quam
                  aliquam dictum. Etiam dignissim pulvinar eros eget auctor.
                  Quisque congue turpis quis libero ullamcorper imperdiet.
                  Vivamus a orci maximus, dignissim ligula a, congue dui. Morbi
                  et lectus sit amet neque luctus viverra.
                </p>
              </div>
            </div>

            <div>
              <img
                src={bancovertica}
                className="w-full rounded-lg shadow-lg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
