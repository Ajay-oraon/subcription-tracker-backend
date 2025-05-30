import express from "express";
import { PORT } from "./config/env.js";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import connectToDatabase from "./database/mongodb.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import cookieParser from "cookie-parser";
import arcjetMiddleware from "./middlewares/arcjet.middleware.js";
import workflowRouter from "./routes/wrokflow.routes.js";
import cors from "cors";
const app = express();
app.use(express.json());
// In your Express app (e.g., server.js or app.js)

app.use(
  cors({
    origin: [
      "http://127.0.0.1:5500",
      "https://subscription-tracker-frontend.vercel.app",
    ], // 👈  frontend URL
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(arcjetMiddleware)
app.get("/", (req, res) => {
  res.send("Welcome to the Subscription Tracker API");
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);
app.use("/api/v1/workflows", workflowRouter);
app.use(errorMiddleware);
app.listen(PORT, async () => {
  console.log(
    `Subscription Tracker API is running on http://localhost:${PORT}`
  );
  //connnect to DB
  await connectToDatabase();
});
