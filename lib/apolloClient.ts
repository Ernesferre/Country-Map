import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/', // URL de la API GraphQL
  cache: new InMemoryCache(), // Caché para almacenar datos y optimizar consultas
});

export default client;
