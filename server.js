const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;
const DIRECTORY_DIST = path.join(__dirname, "dist");

/**
 * Static directories
 */
app.use(express.static(DIRECTORY_DIST));

/**
 * Routes
 */
app.get("*", (req, res) => {
	// Send the index.html file when visiting any route.
	res.sendFile(path.join(DIRECTORY_DIST, "index.html"));
});

/**
 * Server port
 */
app.listen(port);
