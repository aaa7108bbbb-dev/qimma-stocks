export default async function handler(req, res) {
  const p = req.query.p || '/market/summary/';
  const url = 'https://api.sahmk.sa/api/v1' + p;
  try {
    const r = await fetch(url, {
      headers: { 'X-API-Key': 'shmk_live_243cd1b92526f7cc5a4dfcb253bbe76b99286c7741741c21' }
    });
    const data = await r.text();
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(r.status).send(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
