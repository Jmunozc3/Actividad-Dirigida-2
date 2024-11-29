import { Collection, ObjectId } from "mongodb";
import { Flights, FlightsModel } from "./types.ts";
import { formModelToFlight } from "./utils.ts";

export const resolvers = {
  Query: {
    

    getFlight: async (
      _: unknown,
      { id }: { id: string },
      context: {
        FlightCollection: Collection<FlightsModel>;
      },
    ): Promise<Flights | null> => {
      const fliModel = await context.FlightCollection.findOne({
        _id: new ObjectId(id),
      });
      if (!fliModel) {
        return null;
      }
      return formModelToFlight(fliModel);
    },
  },

  Mutation: {
    addFlight: async (
      _: unknown,
      args: { origen: string, destino: string, fechayhora: string },
      context: {
        FlightCollection: Collection<FlightsModel>;
      },
    ): Promise<Flights> => {
      const { origen, destino, fechayhora } = args;

      const { insertedId } = await context.FlightCollection.insertOne({
        origen,
        destino,
        fechayhora,
      });
      const flightModel = {
        _id: insertedId,
        origen,
        destino,
        fechayhora,
      };
      return formModelToFlight(flightModel!);
    },
    
  },
};
