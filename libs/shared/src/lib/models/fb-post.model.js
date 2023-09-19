'use strict';
var _a, _b;
Object.defineProperty(exports, '__esModule', { value: true });
exports.FbPostModel = exports.FbPostSchema = exports.FbPost = void 0;
const tslib_1 = require('tslib');
const lib_1 = require('mongoose/lib');
const mongoose_1 = require('@nestjs/mongoose');
const graphql_1 = require('@nestjs/graphql');
const mongoose_2 = tslib_1.__importDefault(require('mongoose'));
let FbPost = class FbPost {};
tslib_1.__decorate(
  [
    (0, graphql_1.Field)(() => String),
    tslib_1.__metadata(
      'design:type',
      typeof (_b =
        typeof lib_1.Schema !== 'undefined' &&
        (_a = lib_1.Schema.Types) !== void 0 &&
        _a.ObjectId) === 'function'
        ? _b
        : Object
    ),
  ],
  FbPost.prototype,
  '_id',
  void 0
);
tslib_1.__decorate(
  [
    (0, graphql_1.Field)(() => Date),
    (0, mongoose_1.Prop)(),
    tslib_1.__metadata('design:type', Date),
  ],
  FbPost.prototype,
  'createdAt',
  void 0
);
tslib_1.__decorate(
  [
    (0, graphql_1.Field)(() => String),
    (0, mongoose_1.Prop)(),
    tslib_1.__metadata('design:type', String),
  ],
  FbPost.prototype,
  'message',
  void 0
);
FbPost = tslib_1.__decorate(
  [(0, graphql_1.ObjectType)(), (0, mongoose_1.Schema)()],
  FbPost
);
exports.FbPost = FbPost;
exports.FbPostSchema = mongoose_1.SchemaFactory.createForClass(FbPost);
exports.FbPostModel = mongoose_2.default.model('FbPost', exports.FbPostSchema);
//# sourceMappingURL=fb-post.model.js.map
