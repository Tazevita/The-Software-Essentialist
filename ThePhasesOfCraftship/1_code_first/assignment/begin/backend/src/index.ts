import express, { Request, Response } from "express";
import cors from "cors";
import {
  createUserController,
  editUserController,
  getUserByEmailController,
} from "./controllers/userControllers";
import {
  getNewPostsController,
  getPopularPostsController,
} from "./controllers/postControllers";

const app = express();
app.use(express.json());
app.use(cors());

// Create a new user
app.post("/users/new", async (req: Request, res: Response) => {
  const { email, username, firstName, lastName } = req.query;

  if (
    typeof email !== "string" ||
    typeof username !== "string" ||
    typeof firstName !== "string" ||
    typeof lastName !== "string"
  ) {
    res.status(400).json({ error: "all params must be strings" });
    return;
  }

  const newUserData = { email, username, firstName, lastName };
  const result = await createUserController(newUserData);
  res.status(result.status).json(result.json);
});

// Edit a user
app.post("/users/edit/:userId", async (req: Request, res: Response) => {
  const { email, username, firstName, lastName } = req.query;
  const userIdString = req.params.userId;
  if (
    typeof email !== "string" ||
    typeof username !== "string" ||
    typeof firstName !== "string" ||
    typeof lastName !== "string"
  ) {
    res
      .status(400)
      .json({ error: "ValidationError", data: undefined, success: false });
    return;
  }
  const userIdNumber = Number(userIdString);
  const editUserData = {
    id: userIdNumber,
    email,
    username,
    firstName,
    lastName,
  };
  const result = await editUserController(editUserData);
  res.status(result.status).json(result.json);
});

// Get a user by email
app.get("/users", async (req: Request, res: Response) => {
  const email = req.query.email;
  if (typeof email !== "string") {
    res.status(400).json({ error: "email must be a string" });
    return;
  }
  const result = await getUserByEmailController(email);
  res.status(result.status).json(result.json);
});

app.get("/popular-posts", async (req: Request, res: Response) => {
  const postsLimitCount = Number(req.query.postsLimit);
  if (isNaN(postsLimitCount)) {
    res.status(400).json({ error: "postsLimit must be a number" });
    return;
  }
  const result = await getPopularPostsController(postsLimitCount);
  res.status(result.status).json(result.json);
});

app.get("/new-posts", async (req: Request, res: Response) => {
  const postsLimitCount = Number(req.query.postsLimit);
  if (isNaN(postsLimitCount)) {
    res.status(400).json({ error: "postsLimit must be a number" });
    return;
  }
  const result = await getNewPostsController(postsLimitCount);
  res.status(result.status).json(result.json);
});

const port = process.env.PORT || 3009;

app
  .listen(port, () => {
    console.log(`Server is running on port ${port}`);
  })
  .on("error", (err) => {
    console.error("Server error:", err);
  });
