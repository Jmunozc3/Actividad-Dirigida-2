import { Flights, FlightsModel } from "./types.ts";

export const formModelToFlight = (flights: FlightsModel): Flights => {
  return {
    id: flights._id!.toString(),
    destino:flights.destino,
    origen:flights.origen,
    fechayhora:flights.fechayhora,
  };
};