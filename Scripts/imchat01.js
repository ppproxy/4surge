let obj = JSON.parse($response.body);
obj.d.vip = "1";
obj.d.age = "37";
obj.d.city = "北京";
obj.d.birthday = "1900\/01\/01";
obj.d.score = "233";
$done({ body: JSON.stringify(obj) });