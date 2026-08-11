const API_KEY = "shmk_live_243cd1b92526f7cc5a4dfcb253bbe76b99286c7741741c21";
const API_BASE = "https://api.sahmk.sa/api/v1";

exports.handler = async function(event) {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers: { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "*" }, body: "" };
  }
  var path = (event.queryStringParameters && event.queryStringParameters.p) || "/market/summary/";
  try {
    var res = await fetch(API_BASE + path, { headers: { "X-API-Key": API_KEY } });
    var body = await res.text();
    return {
      statusCode: res.status,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      body: body
    };
  } catch (e) {
    return { statusCode: 500, headers: { "Content-Type": "application/json" }, body: JSON.stringify({ error: e.message }) };
  }
};
