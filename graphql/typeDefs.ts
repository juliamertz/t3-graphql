import { readFileSync } from "fs";

const schemaName = "./schema.graphql";
export const typeDefs = readFileSync(schemaName, { encoding: "utf-8" });
