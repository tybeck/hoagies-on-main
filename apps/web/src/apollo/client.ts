import {ApolloClient, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
  uri: `${process.env.EXPO_PUBLIC_BASE_URI}/graphql/`,
  cache: new InMemoryCache(),
});

export {client};
