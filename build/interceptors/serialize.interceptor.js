"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SerializeInterceptor = exports.Serialize = void 0;
var common_1 = require("@nestjs/common");
var class_transformer_1 = require("class-transformer");
var operators_1 = require("rxjs/operators");
function Serialize(dto) {
    return (0, common_1.UseInterceptors)(new SerializeInterceptor(dto));
}
exports.Serialize = Serialize;
var SerializeInterceptor = /** @class */ (function () {
    function SerializeInterceptor(dto) {
        this.dto = dto;
    }
    SerializeInterceptor.prototype.intercept = function (context, handler) {
        var _this = this;
        // // Run something before a request is handled by the request handler
        // console.log('Im running before the handler', context);
        return handler.handle().pipe((0, operators_1.map)(function (data) {
            // // Run something before the response is ent out
            // console.log('Im running before the response is sent out', data);
            return (0, class_transformer_1.plainToClass)(_this.dto, data, {
                excludeExtraneousValues: true,
            });
        }));
    };
    return SerializeInterceptor;
}());
exports.SerializeInterceptor = SerializeInterceptor;
//# sourceMappingURL=serialize.interceptor.js.map