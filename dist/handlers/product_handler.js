"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var product_1 = require("../models/product");
var jwt = require('jsonwebtoken');
var store = new product_1.ProductStore();
var index = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var products;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, store.index()];
            case 1:
                products = _a.sent();
                res.json(products);
                return [2 /*return*/];
        }
    });
}); };
var show = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var product;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, store.show(req.body.id)];
            case 1:
                product = _a.sent();
                res.json(product);
                return [2 /*return*/];
        }
    });
}); };
var create = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var authorizationHeader, token, product, newProduct, err_1;
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                try {
                    authorizationHeader = (_b = (_a = req.headers) === null || _a === void 0 ? void 0 : _a.authorization) !== null && _b !== void 0 ? _b : "01";
                    token = authorizationHeader.split(' ')[1];
                    jwt.verify(token, process.env.TOKEN_SECRET);
                }
                catch (err) {
                    res.status(401);
                    res.json('Access denied, invalid token');
                    return [2 /*return*/];
                }
                _c.label = 1;
            case 1:
                _c.trys.push([1, 3, , 4]);
                product = {
                    name: req.body.name,
                    price: req.body.price
                };
                return [4 /*yield*/, store.create(product)];
            case 2:
                newProduct = _c.sent();
                res.json(newProduct);
                return [3 /*break*/, 4];
            case 3:
                err_1 = _c.sent();
                res.status(400);
                res.json(err_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var destroy = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var authorizationHeader, token, deleted, error_1;
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                try {
                    authorizationHeader = (_b = (_a = req.headers) === null || _a === void 0 ? void 0 : _a.authorization) !== null && _b !== void 0 ? _b : "01";
                    token = authorizationHeader.split(' ')[1];
                    jwt.verify(token, process.env.TOKEN_SECRET);
                }
                catch (err) {
                    res.status(401);
                    res.json('Access denied, invalid token');
                    return [2 /*return*/];
                }
                _c.label = 1;
            case 1:
                _c.trys.push([1, 3, , 4]);
                return [4 /*yield*/, store["delete"](req.body.id)];
            case 2:
                deleted = _c.sent();
                res.json(deleted);
                return [3 /*break*/, 4];
            case 3:
                error_1 = _c.sent();
                res.status(400);
                res.json({ error: error_1 });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var productRoutes = function (app) {
    app.get('/products', index);
    app.get('/products/:id', show);
    app.post('/products', create);
    app["delete"]('/products', destroy);
};
exports["default"] = productRoutes;
