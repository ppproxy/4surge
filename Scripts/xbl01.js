console.log(JSON.stringify($response.body));
let obj = JSON.parse($response.body);
obj.data.qrColor = "GREEN";
$done({ body: JSON.stringify(obj) });
