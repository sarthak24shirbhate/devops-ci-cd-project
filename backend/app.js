const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Backend API Working Successfully — Deployed with GitLab CI/CD & EKS!');
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Backend running on port ${port}`));
