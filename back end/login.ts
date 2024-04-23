import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Parse JSON request bodies
app.use(express.json());

// Route for handling login requests
app.post('/login', (req: Request, res: Response) => {
  // Retrieve the username and password from the request body
  const { username, password } = req.body;

  // Perform your login logic here
  // For example, you can check if the username and password are valid
  if (username === 'admin' && password === 'password') {
    // Return a success response if the login is successful
    res.json({ success: true, message: 'Login successful' });
  } else {
    // Return an error response if the login fails
    res.status(401).json({ success: false, message: 'Incorrect username or password' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});