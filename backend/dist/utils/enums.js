"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROLES = exports.AUTH_TYPE = void 0;
var AUTH_TYPE;
(function (AUTH_TYPE) {
    AUTH_TYPE["JWT"] = "JWT";
    AUTH_TYPE["BASIC"] = "BASIC";
})(AUTH_TYPE || (exports.AUTH_TYPE = AUTH_TYPE = {}));
var ROLES;
(function (ROLES) {
    ROLES["ADMIN"] = "admin";
    ROLES["SUPER_ADMIN"] = "super_admin";
})(ROLES || (exports.ROLES = ROLES = {}));
