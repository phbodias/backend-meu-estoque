import app from "./app";

const PORT: number = Number(process.env.PORT) || 5009;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
