"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGuard = void 0;
var AuthGuard = /** @class */ (function () {
    function AuthGuard() {
    }
    AuthGuard.prototype.canActivate = function (context) {
        var request = context.switchToHttp().getRequest();
        return request.session.userId;
    };
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth.guard.js.map