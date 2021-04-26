import { gql } from "@apollo/client"

export const GET_FOOD_BY_SLUGS = (slug) => {
    return gql`
            query {
                foods(where: { slug:  "${slug}" }) {
                    id
                    name
                    description
                    image{
                        url
                    }
                    price
                    is_available
                    images{
                        url
                    }
                    restaurant{
                        name
                        image{
                          url
                        }
                      }
              
                }
            }
    `
}

export const GET_ALL_FOOD_SLUGS = gql`
{
    foods {
        id
        slug
    }
}
`

// export const GET_FOOD = gql`
// food (id: "2") {
//     id
//     name
//     slug
//     price
//     image {
//       url
//     }
// }
// `


export const GET_FOODS = gql`
{
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
`
