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
        while (_) try {
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clicker = void 0;
var puppeteer_1 = __importDefault(require("puppeteer"));
var Clicker = (function () {
    function Clicker() {
        this.clickedTimes = 0;
    }
    Clicker.prototype.initScript = function (headless) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, howMany, pages, index, page, startDate, span, i, index, page;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.clickedTimes = 0;
                        _a = this;
                        return [4, puppeteer_1.default.launch({
                                headless: headless,
                            })];
                    case 1:
                        _a.browser = _b.sent();
                        howMany = document.getElementById('select');
                        pages = [];
                        index = 0;
                        _b.label = 2;
                    case 2:
                        if (!(index < +howMany.value)) return [3, 6];
                        return [4, this.browser.newPage()];
                    case 3:
                        page = _b.sent();
                        return [4, page.goto('https://popcat.click/')];
                    case 4:
                        _b.sent();
                        pages.push(page);
                        _b.label = 5;
                    case 5:
                        index++;
                        return [3, 2];
                    case 6:
                        startDate = document.getElementById('startDate');
                        if (startDate) {
                            span = document.createElement('span');
                            span.textContent = " " + new Date().toString();
                            startDate.appendChild(span);
                            startDate.style.display = 'block';
                        }
                        i = 0;
                        _b.label = 7;
                    case 7:
                        if (!(i < 100)) return [3, 16];
                        index = 0;
                        _b.label = 8;
                    case 8:
                        if (!(index < pages.length)) return [3, 15];
                        page = pages[index];
                        console.log('page');
                        return [4, page.keyboard.press('a')];
                    case 9:
                        _b.sent();
                        return [4, page.keyboard.press('d')];
                    case 10:
                        _b.sent();
                        return [4, page.keyboard.press('w')];
                    case 11:
                        _b.sent();
                        return [4, page.keyboard.press('g')];
                    case 12:
                        _b.sent();
                        return [4, page.keyboard.press('p')];
                    case 13:
                        _b.sent();
                        this.clickedTimes += 5;
                        _b.label = 14;
                    case 14:
                        index++;
                        return [3, 8];
                    case 15:
                        i += 1;
                        console.log('Clicked');
                        return [3, 7];
                    case 16: return [2];
                }
            });
        });
    };
    Clicker.prototype.exit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var finishDate, text, timesClicked, clicks;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.browser) return [3, 2];
                        finishDate = document.getElementById('finishDate');
                        if (finishDate) {
                            text = document.createTextNode(" " + new Date().toString());
                            finishDate.appendChild(text);
                            finishDate.style.display = 'block';
                        }
                        timesClicked = document.getElementById('timesClicked');
                        if (timesClicked) {
                            clicks = document.createTextNode(this.clickedTimes.toString());
                            timesClicked.appendChild(clicks);
                            timesClicked.style.display = 'block';
                        }
                        return [4, this.browser.close()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2];
                }
            });
        });
    };
    Clicker.prototype.initScriptWithMultiplePages = function (headless) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, howMany, startDate, span, browsers, index;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.headless = headless;
                        _a = this;
                        return [4, puppeteer_1.default.launch({
                                headless: false,
                            })];
                    case 1:
                        _a.browser = _b.sent();
                        this.clickedTimes = 0;
                        howMany = document.getElementById('select');
                        startDate = document.getElementById('startDate');
                        if (startDate) {
                            span = document.createElement('span');
                            span.textContent = " " + new Date().toString();
                            startDate.appendChild(span);
                            startDate.style.display = 'block';
                        }
                        browsers = [];
                        for (index = 0; index < +howMany.value; index++) {
                            browsers.push(new Promise(function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4, this.initScript(false)];
                                        case 1:
                                            _a.sent();
                                            return [2];
                                    }
                                });
                            }); }));
                        }
                        return [4, Promise.all(browsers)];
                    case 2:
                        _b.sent();
                        return [4, this.exit()];
                    case 3:
                        _b.sent();
                        return [2];
                }
            });
        });
    };
    return Clicker;
}());
exports.Clicker = Clicker;
//# sourceMappingURL=popClickScript.js.map