import express from "express";
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Success route
app.get("/success", (req, res) => {
  // 200: OK - The request was successful.
  res
    .status(200)
    .json({ status: "success", message: "This is a successful response." });
});

// Route: Error response 
app.get('/error', (req, res) => {
  res.status(500).json({ status: 'error', message: 'An internal server error occurred.' });
});


// Default route for undefined endpoints
app.use((req, res) => {
  // 404: Not Found
  res
    .status(404)
    .json({ status: "not found", message: "Route does not exist." });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
