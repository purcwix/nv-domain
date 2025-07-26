const express = require('express');
const domain = require('./domain');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Nova API is live! Try POST /api/respondToHate');
});

app.post('/api/:action', async (req, res) => {
  const { action } = req.params;
  const args = req.body.args || [];

  const fn = domain[action];
  if (typeof fn !== 'function') return res.status(404).json({ error: 'Not found' });

  try {
    const result = await fn(...args);
    res.json({ result });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.listen(10000); // Render uses PORT env var anyway
