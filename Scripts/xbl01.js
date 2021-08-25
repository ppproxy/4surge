let obj = JSON.parse($response.body);
obj.data.qrColor = "GREEN";
obj.data.lastScanCity = "北京";
$done({ body: JSON.stringify(obj) });
