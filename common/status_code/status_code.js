// Informational responses (100–199)
// Successful responses (200–299)
// Redirects (300–399)
// Client errors (400–499)
// Server errors (500–599)

var Code_InfomationRes = 100;
var Code_SuccessRes = 200;
var Code_Redirect = 300;
var Code_ClientError = 400;
var Code_ServerError = 500;

// exports.Infomation_res = Infomation_res;
// exports.Success_res = Success_res;
// exports.Redirects = Redirects;
// exports.Client_errors = Client_errors;
// exports.Server_errors = Server_errors;

module.exports = {
    Code_ClientError: Code_ClientError,
    Code_SuccessRes: Code_SuccessRes,
    Code_ServerError: Code_ServerError,
    Code_Redirect: Code_Redirect,
    Code_InfomationRes: Code_InfomationRes
};
