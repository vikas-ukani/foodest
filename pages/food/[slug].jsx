import { useEffect, useState } from "react";
import { Button, Card, CardBody, Col, Row } from "reactstrap";
import { getFoodBySlug, getFoodSlugs } from "../../apollo/foods";
import RestaurantLists from "../../Components/RestaurantList";

function Food({ food, content }) {
    const API_URL = process.env.NEXT_PUBLIC_API_URL
    const restaurantImage = API_URL + food.restaurant.image.url;

    const [cartItems, setCartItems] = useState([])
    let cItems = []
    useEffect(() => {
        console.log('asd', localStorage.getItem("cartItems"));
        if (localStorage.getItem("cartItems")) {
            cItems = localStorage.getItem("cartItems")
        } else {
            cItems = []
        }
        if (cItems && cItems.length) {
            cItems.push(cartItems)
        } else {
            cItems = [cartItems]
        }
        localStorage.setItem('cartItems', cItems)
    }, [cartItems])

    return (
        <section className="description_content mb-10 pb-10">
            <div className="beer background_content"  >
                <h1> From <span>{food.restaurant.name}</span> Restaurant  </h1>
            </div>
            <div className="text-content container">
                <div className="img-section" style={{ width: '100%' }}>
                    <img
                        top={true}
                        style={{ height: 500, width: "100%" }}
                        src={API_URL + food.image.url}
                    />
                </div>
                <br />
                <br />
                <Card>
                    <CardBody>
                        <h1>{food.name}</h1>

                        <h1>Price {food.price} </h1>
                        <br />
                        <br />
                        <Button color="primary" size="lg" onClick={e => setCartItems(food)}>
                            + Add To Cart
                        </Button>
                        <div className="pull-right">
                            <div className="font-32">Available?</div>
                            <div className="badge badge-success">{food.is_available ? 'Yes' : 'No'}</div>
                        </div>
                        <Row>
                            <Col md='3' lg='3' sm='3'></Col>
                            <Col md='6' lg='6' sm='6'>
                                <div className="ml-15 font-blank-all text-left">
                                    <div dangerouslySetInnerHTML={{ __html: food.description }} ></div>
                                </div>
                            </Col>
                            <Col md='3' lg='3' sm='3'></Col>
                        </Row>

                    </CardBody>

                </Card>
                <RestaurantLists />

                <div className="col-lg-4 col-md-6 col-xs-12">
                    <div className="right-text">
                        <h2>Opening Times </h2>
                        <hr />
                        <p>Monday to Friday: 7:30 AM - 11:30 AM</p>
                        <p>Saturday & Sunday: 8:00 AM - 9:00 AM</p>
                        <p>Monday to Friday: 12:00 PM - 5:00 PM</p>
                        <p>Monday to Saturday: 6:00 PM - 1:00 AM</p>
                        <p>Sunday to Monday: 5:30 PM - 12:00 AM</p>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                </div>

            </div>

        </section >
    );
}

export const getStaticPaths = async () => {
    let { data } = await getFoodSlugs()
    let foods = data.foods
    let paths = [...foods.map(food => {
        return { params: { slug: food.slug } }
    })]
    return { paths, fallback: false };
}
export const getStaticProps = async ({ params }) => {
    let { data } = await getFoodBySlug(params.slug)
    let food = data.foods[0]

    return {
        props: {
            params,
            food
        },
    };
}

export default Food;