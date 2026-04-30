import app from "../src/app.js";

// ポート番号
const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});