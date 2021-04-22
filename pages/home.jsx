import { ApolloClient, InMemoryCache, gql } from "@apollo/client";


const Home = ({ restorents }) => {
    console.log('restorents', restorents);
    return (
        <div className="pt-5">
            {restorents.map((r, i) => {
                console.log('r', r.name);
                return (
                    <p key={i}>{r.name}</p>
                )
            })}
        </div>
    );
}

export async function getStaticProps() {

    const API_URL = process.env.API_URL
    const client = new ApolloClient({
        // uri: 'https://api.spacex.land/graphql/',
        uri: 'http://localhost:1337/graphql',
        // uri: API_URL + '/graphql',
        cache: new InMemoryCache()
    })

    const { data } = await client.query({
        query: gql`
        {
            restorents {
              id 
              name 
              updated_at
              published_at
              description
              is_active
            }
        }`
    })
    return {
        props: {
            restorents: data.restorents
        }
    }
}

export default Home;