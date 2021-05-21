import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Row } from "reactstrap";
import { getFoods } from "../../apollo/foods";

const Foods = ({ foods }) => {
    return (
        <div>
            Foods
            <Row>
                {/* {foods.map((food) => (
                    <Col xs="6" sm="4" style={{ padding: 0 }} key={food.id}>
                        <Card style={{ margin: "0 10px" }}>
                            <CardImg
                                top={true}
                                style={{ height: 250 }}
                                src={`${process.env.NEXT_PUBLIC_API_URL}${food.image.url}`}
                            />
                            <CardBody>
                                <CardTitle>{food.name}</CardTitle>
                                <CardText>{food.description}</CardText>
                            </CardBody>
                            <div className="card-footer">
                                <Button outline color="primary">
                                    + Add To Cart
                  </Button>

                                <style jsx>
                                    {`
                                        a {
                                            color: white;
                                        }
                                        a:link {
                                            text-decoration: none;
                                            color: white;
                                        }
                                        .container-fluid {
                                            margin-bottom: 30px;
                                        }
                                        .btn-outline-primary {
                                            color: #007bff !important;
                                        }
                                        a:hover {
                                            color: white !important;
                                        }
                                        `}
                                </style>
                            </div>
                        </Card>
                    </Col>
                ))} */}
            </Row>
            <pre>{JSON.stringify(foods, null, 1)}</pre>
        </div>
    );
}

export const getStaticProps = async (ctx) => {


    const foodRes = await getFoods()
    const foods = foodRes.data

    console.log('foods', foods);
    return {
        props: {
            foods
        }
    }
}

export default Foods;