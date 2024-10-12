const accountId = 94594;
let accountEmail = "parth@gmail.com"
var accountPassword = "23434"
accountCity = "Jaipur"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

// accountId = 943984 - NOT ALLOWED

accountEmail = "dkj@gmail.com"
accountPassword = 392030
accountCity = "Bengaluru"

console.table([accountId, accountEmail,accountPassword,accountCity]);