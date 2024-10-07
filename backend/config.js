const corsOptions = {
  origin: "http://localhost:3000", // Allow only this origin
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
  credentials: true, // Include credentials (cookies, authorization headers, etc.)
};

module.exports = { corsOptions };
