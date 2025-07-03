"use strict";
function addId(obj) {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
}
let user = addId({
    name: "Mashrafi",
    age: 40,
    country: "BD",
});
var ResTypes;
(function (ResTypes) {
    ResTypes[ResTypes["SUCCESS"] = 0] = "SUCCESS";
    ResTypes[ResTypes["FAILURE"] = 1] = "FAILURE";
    ResTypes[ResTypes["UNAUTHANTICATED"] = 2] = "UNAUTHANTICATED";
    ResTypes[ResTypes["FORBIDDEN"] = 3] = "FORBIDDEN";
})(ResTypes || (ResTypes = {}));
const response1 = {
    status: ResTypes.SUCCESS,
    type: "Ok",
    data: { data: "..." }
};
