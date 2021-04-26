import { gql, useQuery } from "@apollo/client"
import client from "../client"
import { GET_ALL_FOOD_SLUGS, GET_FOODS, GET_FOOD_BY_SLUGS } from "./queries"

const callQuery = async QUERY => {
    return await client.query({
        query: QUERY
    })
}

export const getFoodBySlug = async (slug) => {
    const { loading, error, data } = await client.query({
        query: GET_FOOD_BY_SLUGS(slug)
    })
    return { loading, error, data }
}

export const getFoods = async () => {
    const { loading, error, data } = await callQuery(GET_FOODS)
    return { loading, error, data }
}

export const getFoodSlugs = async () => {
    const { loading, error, data } = await callQuery(GET_ALL_FOOD_SLUGS)
    return { loading, error, data }
}

