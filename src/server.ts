import { fastifyCors } from "@fastify/cors";
import fastifyMultipart from "@fastify/multipart";
import { fastify } from "fastify";
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from "fastify-type-provider-zod";
import { env } from "./env.ts";
import { createQuestionRoute } from "./http/routes/create-question.ts";
import { createRoomRoute } from "./http/routes/create-room.ts";
import { getRoomQuestionsRoute } from "./http/routes/get-room-questions.ts";
import { getRoomsRoute } from "./http/routes/get-rooms.ts";
import { uploadAudioRoute } from "./http/routes/upload-audio.ts";

const app = fastify().withTypeProvider<ZodTypeProvider>();
app.register(fastifyMultipart);
app.register(fastifyCors, {
  origin: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
});

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(getRoomsRoute);
app.register(createRoomRoute);
app.register(getRoomQuestionsRoute);
app.register(createQuestionRoute);
app.register(uploadAudioRoute);

app.listen({ port: env.PORT });
