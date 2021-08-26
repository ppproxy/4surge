console.log($response);
if ($request.method != "POST" || $response.status != 200) {
  $done({});
} else {
  let obj = JSON.parse($response.body);
  obj.data.qrColor = "GREEN";
  obj.data.lastScanCity = "北京";
  $done({ body: JSON.stringify(obj) });
}
