import { Application } from "https://deno.land/x/oak/mod.ts";
import { environment } from "./services/environment.ts";

import {
  CommonRoutes,
  PostRoutes,
  PublicationRoutes,
  UserRoutes,
} from "./routes/index.ts";

const app = new Application();

app.use(async (context, next) => {
  await next();
  console.log(context.request.method, context.request.url.pathname);
});

app.use(UserRoutes.routes());
app.use(CommonRoutes.routes());
app.use(PostRoutes.routes());
app.use(PublicationRoutes.routes());

await app.listen({ port: parseInt(environment.APP_PORT) });
