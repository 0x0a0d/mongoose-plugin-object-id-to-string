"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoosePluginObjectIdToString = void 0;
var mongoose_1 = require("mongoose");
var mongoosePluginObjectIdToString = function () {
    // default mongoose ObjectId to string
    mongoose_1.Schema.Types.ObjectId.get(function (v) { return v != null ? v.toString() : v; });
    var optionKeys = [
        'toObject',
        'toJSON',
    ];
    return function (schema) {
        optionKeys.forEach(function (optionKey) {
            if (schema.get(optionKey) == null) {
                schema.set(optionKey, {
                    getters: true,
                });
            }
        });
    };
};
exports.mongoosePluginObjectIdToString = mongoosePluginObjectIdToString;
