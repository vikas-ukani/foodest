
// import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import { ApolloClient, gql, InMemoryCache, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react'
import Link from 'next/link';
import { Col, Row } from 'reactstrap';

const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache()
});
const GET_RESTAURANTS = gql`
{
    restorents {
        id 
        name 
        foods {
            id
            name
            slug
            price
            image {
              url
            }
        }
    }
}
`

const getRestaurants = async () => {
    const { loading, error, data } = await client.query({
        query: GET_RESTAURANTS
    })
    return { loading, error, data }
}

const RestaurantLists = () => {
    const [selectedRestaurant, setSelectedRestaurant] = useState(1)
    const [restaurants, setRestaurants] = useState([])

    useEffect(async () => {
        const { loading, error, data } = await getRestaurants()
        console.log('query', loading, error, data);

        if (error) {
            setErrors(error)
        }
        if (data.restorents) {
            setRestaurants(data.restorents)
        }
        if (loading) {
            setLoading(loading)
            setRestaurants([])
        }
    }, [])

    const getFoodBySelectedRestaurant = () => {
        let foodFiltered = [];
        if (selectedRestaurant == 0) {

            let data = restaurants.map(restaurant => {
                return restaurant.foods
            })
            data.forEach(foods => {
                foodFiltered.push(...foods)
            })

        } else {
            let data = restaurants.filter(restaurant => {
                return restaurant.id == selectedRestaurant
            })[0]
            if (data && data.foods) {
                foodFiltered = data.foods
            }
        }
        if (!foodFiltered) {
            return (<div></div>)
        }
        return foodFiltered.map(food => {
            let image = `images/food_icon0${parseInt(food.id > 8 ? (food.id - 8) : food.id)}.jpg`
            return (
                <Col md='3' sm='3' xs='3' lg='4' className="p-5" key={food.id}>
                    <Link href={`food/${food.slug}`}>
                        <a href='' className="item">
                            <img width="100%" src={image} alt="Food" />
                            <div className="bg-red p-15 font-white">
                                <b>{food.name} <sub>{food.price}</sub></b>
                            </div>
                        </a>
                    </Link>
                </Col >
            )
        })
    }

    return (
        <section id="restorents" className="description_content">
            <div className="pricing background_content">
                <h1> Best <span>Restorents</span></h1>
            </div>
            <div className="text-content container">
                <div className="container">
                    <div className="row">
                        <div id="w">
                            <ul id="filter-list" className="clearfix">
                                <li data-filter={`restaurant_0`} onClick={((e) => { setSelectedRestaurant(0) })} >All</li>
                                {restaurants.map((restaurant) => {
                                    return (
                                        <li data-filter={`restaurant_${restaurant.id}`} key={restaurant.id} onClick={((e) => { setSelectedRestaurant(restaurant.id) })} > { restaurant.name}</li>
                                    )
                                })}
                            </ul>
                            <ul >
                                <Row>
                                    {getFoodBySelectedRestaurant()}
                                </Row>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default RestaurantLists;