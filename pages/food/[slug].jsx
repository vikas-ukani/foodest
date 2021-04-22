import { getFoodBySlug, getFoodSlugs } from "../../apollo/foods";

function Food({ food }) {
    const API_URL = process.env.NEXT_PUBLIC_API_URL
    return (
        <div>
            Foods
            <pre>{JSON.stringify(food, null, 1)}</pre>
        </div>
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