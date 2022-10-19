"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentUser = void 0;
var common_1 = require("@nestjs/common");
exports.CurrentUser = (0, common_1.createParamDecorator)(function (data, context) {
    var request = context.switchToHttp().getRequest();
    // console.log(request.session.userId);
    return request.currentUser;
});
//# sourceMappingURL=current-user.decorator.js.map