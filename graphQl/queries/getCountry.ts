import { gql } from '@apollo/client';

export const GET_COUNTRY = gql`
  query GetCountry($code: ID!) {
    country(code: $code) {
    name
    continent {
        name
    }
    emoji
    capital
  }
}
`;
