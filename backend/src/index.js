const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// ตัวอย่าง API
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express API 🚀" });
});

// Serve frontend (ตอน build เสร็จ)
app.use(express.static(path.join(__dirname, "../../frontend/dist")));

// Handle Vue router (SPA)
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
