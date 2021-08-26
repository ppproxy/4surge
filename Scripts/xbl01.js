console.log(JSON.parse($response));
let obj = JSON.parse($response).body;
obj.data.qrColor = "GREEN";
$done({ body: JSON.stringify(obj) });
