export const schema = `#graphql

type Flights {
  id: ID!
  destino: String
  origen: String
  fechayhora:String
}

type Query {
  getFlight(id: ID!): Flights
  
}

type Mutation {
  addFlight(origen: String!, destino: String!, fechayhora: String!): Flights!
}
`;