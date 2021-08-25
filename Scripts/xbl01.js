let obj = $response.body;
obj.data.qrColor = "GREEN";
$done({ body: JSON.stringify(obj) });
