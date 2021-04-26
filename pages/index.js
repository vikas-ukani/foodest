import RestaurantLists from "../Components/RestaurantList";

export default function Home() {
  return (
    <div>
      <div id="top" className="starter_container bg">
        <div className="follow_container">
          <div className="col-md-6 col-md-offset-3">
            <h2 className="top-title"> Restaurant</h2>
            <h2 className="white second-title">" Best in the city "</h2>
            <hr />
          </div>
        </div>
      </div>
      {/* ABOUT */}
      <section id="story" className="description_content">
        <div className="text-content container">
          <div className="col-md-6">
            <h1>About us </h1>
            <div className="fa fa-cutlery fa-2x"></div>
            <p className="desc-text">
              Restaurant is a place for simplicity. Good food, good beer, and good service. Simple is the name of the game, and we’re good at finding it in all the right places, even in your dining experience. We’re a small group from Denver, Colorado who make simple food possible. Come join us and see what simplicity tastes like.</p>
          </div>
          <div className="col-md-6">
            <div className="img-section">
              <img className="m-2" src="images/kabob.jpg" width="250" height="220" />
              <img className="m-2" src="images/limes.jpg" width="250" height="220" />
              <img className="m-2" src="images/radish.jpg" width="250" height="220" />
              <img className="m-2" src="images/corn.jpg" width="250" height="220" />
            </div>
          </div>
        </div>
      </section>

      <RestaurantLists />


      <section id="pricing" className="description_content">
        <div className="pricing background_content">
          <h1><span>Affordable</span> pricing</h1>
        </div>
        <div className="text-content container">
          <div className="container">
            <div className="row">
              <div id="w">
                <ul id="filter-list" className="clearfix">
                  <li className="filter" data-filter="all">All</li>
                  <li className="filter" data-filter="breakfast">Breakfast</li>
                  <li className="filter" data-filter="special">Special</li>
                  <li className="filter" data-filter="desert">Desert</li>
                  <li className="filter" data-filter="dinner">Dinner</li>
                </ul>
                <ul id="portfolio">
                  <li className="item breakfast">
                    <img src="images/food_icon01.jpg" alt="Food" />
                    <h2 className="white">$20</h2>
                  </li>

                  <li className="item dinner special">
                    <img src="images/food_icon02.jpg" alt="Food" />
                    <h2 className="white">$20</h2>
                  </li>
                  <li className="item dinner breakfast">
                    <img src="images/food_icon03.jpg" alt="Food" />
                    <h2 className="white">$18</h2>
                  </li>
                  <li className="item special">
                    <img src="images/food_icon04.jpg" alt="Food" />
                    <h2 className="white">$15</h2>
                  </li>
                  <li className="item dinner">
                    <img src="images/food_icon05.jpg" alt="Food" />
                    <h2 className="white">$20</h2>
                  </li>
                  <li className="item special">
                    <img src="images/food_icon06.jpg" alt="Food" />
                    <h2 className="white">$22</h2>
                  </li>
                  <li className="item desert">
                    <img src="images/food_icon07.jpg" alt="Food" />
                    <h2 className="white">$32</h2>
                  </li>
                  <li className="item desert breakfast">
                    <img src="images/food_icon08.jpg" alt="Food" />
                    <h2 className="white">$38</h2>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="description_content">
        <div className="beer background_content">
          <h1>Great <span>Place</span> to enjoy</h1>
        </div>
        <div className="text-content container">
          <div className="col-md-5">
            <div className="img-section">
              <img src="images/beer_spec.jpg" width="100%" />
            </div>
          </div>
          <br />
          <div className="col-md-6 col-md-offset-1">
            <h1>OUR BEER</h1>
            <div className="icon-beer fa-2x"></div>
            <p className="desc-text">Here at Restaurant we’re all about the love of beer. New and bold flavors enter our doors every week, and we can’t help but show them off. While we enjoy the classics, we’re always passionate about discovering something new, so stop by and experience our craft at its best.</p>
          </div>
        </div>
      </section>




      <section id="bread" className=" description_content">
        <div className="bread background_content">
          <h1>Our Breakfast <span>Menu</span></h1>
        </div>
        <div className="text-content container">
          <div className="col-md-6">
            <h1>OUR BREAD</h1>
            <div className="icon-bread fa-2x"></div>
            <p className="desc-text">We love the smell of fresh baked bread. Each loaf is handmade at the crack of dawn, using only the simplest of ingredients to bring out smells and flavors that beckon the whole block. Stop by anytime and experience simplicity at its finest.</p>
          </div>
          <div className="col-md-6">
            <img src="images/bread1.jpg" width="260" alt="Bread" />
            <img src="images/bread1.jpg" width="260" alt="Bread" />
          </div>
        </div>
      </section>




      <section id="featured" className="description_content">
        <div className="featured background_content">
          <h1>Our Featured Dishes <span>Menu</span></h1>
        </div>
        <div className="text-content container">
          <div className="col-md-6">
            <h1>Have a look to our dishes!</h1>
            <div className="icon-hotdog fa-2x"></div>
            <p className="desc-text">Each food is handmade at the crack of dawn, using only the simplest of ingredients to bring out smells and flavors that beckon the whole block. Stop by anytime and experience simplicity at its finest.</p>
          </div>
          <div className="col-md-6">
            <ul className="image_box_story2">
              <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                  <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                  <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                </ol>

                <div className="carousel-inner">
                  <div className="item active">
                    <img src="images/slider1.jpg" alt="..." />
                    <div className="carousel-caption">

                    </div>
                  </div>
                  <div className="item">
                    <img src="images/slider2.jpg" alt="..." />
                    <div className="carousel-caption">

                    </div>
                  </div>
                  <div className="item">
                    <img src="images/slider3.JPG" alt="..." />
                    <div className="carousel-caption">

                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </section>


      <section id="reservation" className="description_content">
        <div className="featured background_content">
          <h1>Reserve a Table!</h1>
        </div>
        <div className="text-content container">
          <div className="inner contact">
            <div className="contact-form">
              <form id="contact-us" method="post" action="reserve.php">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 col-md-6 col-xs-12">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-xs-6">
                          <input type="text" name="first_name" id="first_name" required="required" className="form" placeholder="First Name" />
                          <input type="text" name="last_name" id="last_name" required="required" className="form" placeholder="Last Name" />
                          <input type="text" name="state" id="state" required="required" className="form" placeholder="State" />
                          <input type="text" name="datepicker" id="datepicker" required="required" className="form" placeholder="Reservation Date" />
                        </div>

                        <div className="col-lg-6 col-md-6 col-xs-6">
                          <input type="text" name="phone" id="phone" required="required" className="form" placeholder="Phone" />
                          <input type="text" name="guest" id="guest" required="required" className="form" placeholder="Guest Number" />
                          <input type="email" name="email" id="email" required="required" className="form" placeholder="Email" />
                          <input type="text" name="subject" id="subject" required="required" className="form" placeholder="Subject" />
                        </div>

                        <div className="col-xs-6 ">
                          <button type="submit" id="submit" name="submit" className="text-center form-btn form-btn">Reserve</button>
                        </div>

                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-xs-12">
                      <div className="right-text">
                        <h2>Hours</h2>
                        <hr />
                        <p>Monday to Friday: 7:30 AM - 11:30 AM</p>
                        <p>Saturday & Sunday: 8:00 AM - 9:00 AM</p>
                        <p>Monday to Friday: 12:00 PM - 5:00 PM</p>
                        <p>Monday to Saturday: 6:00 PM - 1:00 AM</p>
                        <p>Sunday to Monday: 5:30 PM - 12:00 AM</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="clear"></div>
              </form>
            </div>
          </div>
        </div>
      </section>


      <section className="social_connect">
        <div className="text-content container">
          <div className="col-md-6">
            <span className="social_heading">FOLLOW</span>
            <ul className="social_icons">
              <li><a className="icon-twitter color_animation" href="#" target="_blank"></a></li>
              <li><a className="icon-github color_animation" href="#" target="_blank"></a></li>
              <li><a className="icon-linkedin color_animation" href="#" target="_blank"></a></li>
              <li><a className="icon-mail color_animation" href="#"></a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <span className="social_heading">OR DIAL</span>
            <span className="social_info"><a className="color_animation" href="tel:883-335-6524">(941) 883-335-6524</a></span>
          </div>
        </div>
      </section>


      <section id="contact">
        <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.664063989472!2d91.8316103150038!3d24.909437984030877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37505558dd0be6a1%3A0x65c7e47c94b6dc45!2sTechnext!5e0!3m2!1sen!2sbd!4v1444461079802" width="100%" height="450" frameBorder="0" style={{ border: "0" }} allowFullScreen></iframe>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="inner contact">
                <div className="contact-form">
                  <form id="contact-us" method="post" action="contact.php">
                    <div className="col-md-6 ">
                      <input type="text" name="name" id="name" required="required" className="form" placeholder="Name" />
                      <input type="email" name="email" id="email" required="required" className="form" placeholder="Email" />
                      <input type="text" name="subject" id="subject" required="required" className="form" placeholder="Subject" />
                    </div>
                    <div className="col-md-6">
                      <textarea name="message" id="message" className="form textarea" placeholder="Message"></textarea>
                    </div>
                    <div className="relative fullwidth col-xs-12">
                      <button type="submit" id="submit" name="submit" className="form-btn">Send Message</button>
                    </div>
                    <div className="clear"></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
