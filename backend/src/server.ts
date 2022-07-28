import { app } from "./app";

app.listen(process.env.NODE_PORT, () => {
  console.log(
    `⚡️[server]: Server is running at http://localhost:${process.env.NODE_PORT}`
  );
});
