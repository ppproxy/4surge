let obj = JSON.parse($response.body);
obj.d.vip = "1";
$done({ body: JSON.stringify(obj) });