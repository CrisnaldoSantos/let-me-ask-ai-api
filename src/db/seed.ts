import { reset, seed } from "drizzle-seed";
import { client, db } from "./connection.ts";
import { schema } from "./schema/index.ts";

await reset(db, schema);

await seed(db, schema).refine((f) => {
  return {
    rooms: {
      count: 10,
      columns: {
        name: f.companyName(),
        description: f.loremIpsum(),
      },
      questions: {
        count: 5,
      },
    },
  };
});

await client.end();

// biome-ignore lint/suspicious/noConsole: only used in dev
console.log("Database reset and seeded successfully.");
