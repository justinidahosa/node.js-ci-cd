require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const SECRET_MESSAGE = process.env.SECRET_MESSAGE || 'No secret configured';
const AUTH_USERNAME = process.env.USERNAME || 'admin';
const AUTH_PASSWORD = process.env.PASSWORD || 'password';

// helper: send 401 and Basic auth challenge
function requestAuth(res) {
  res.set('WWW-Authenticate', 'Basic realm="Protected"');
  return res.status(401).send({ error: 'Authentication required' });
}

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/secret', (req, res) => {
  const auth = req.headers['authorization'];
  if (!auth || !auth.startsWith('Basic ')) {
    return requestAuth(res);
  }

  try {
    const base64 = auth.split(' ')[1];
    const [user, pass] = Buffer.from(base64, 'base64').toString().split(':');

    if (user === AUTH_USERNAME && pass === AUTH_PASSWORD) {
      return res.json({ secret: SECRET_MESSAGE });
    } else {
      return res.status(403).json({ error: 'Invalid credentials' });
    }
  } catch (err) {
    return res.status(400).json({ error: 'Malformed Authorization header' });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
