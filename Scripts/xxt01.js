if ($request.method != "POST" || $response.status != 200) {
  $done({});
} else {
  let obj = JSON.parse($response.body);
  obj.cumulateHour = parseFloat(obj.cumulateHour)+1000;
  $done({ body: JSON.stringify(obj) });
}
