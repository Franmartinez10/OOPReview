"use strict";
exports.__esModule = true;
exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    function Mobile(name, model, trademark, sdsize, color, is5G, cameraNumber, price) {
        this.name = name;
        this.model = model;
        this.model = trademark;
        this.sdsize = sdsize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }
    Mobile.prototype.getName = function () {
        return this.name;
    };
    Mobile.prototype.getModel = function () {
        return this.model;
    };
    Mobile.prototype.getTradeMark = function () {
        return this.trademark;
    };
    Mobile.prototype.getSdsize = function () {
        return this.sdsize;
    };
    Mobile.prototype.getColor = function () {
        return this.color;
    };
    Mobile.prototype.getIs5g = function () {
        return this.is5G;
    };
    Mobile.prototype.getCameraNumber = function () {
        return this.cameraNumber;
    };
    Mobile.prototype.getPrice = function () {
        return this.price;
    };
    Mobile.prototype.setName = function (name) {
        this.name = name;
    };
    Mobile.prototype.setModel = function (model) {
        this.model = model;
    };
    Mobile.prototype.setTradeMark = function (trademark) {
        this.trademark = trademark;
    };
    Mobile.prototype.setSdsize = function (sdsize) {
        this.sdsize = sdsize;
    };
    Mobile.prototype.setColor = function (color) {
        this.color = color;
    };
    Mobile.prototype.setIs5g = function (is5g) {
        this.is5G = is5g;
    };
    Mobile.prototype.setCameraNumber = function (cameraNumber) {
        this.cameraNumber = cameraNumber;
    };
    Mobile.prototype.setPrice = function (price) {
        this.price = price;
    };
    Mobile.prototype.getPrint = function () {
        console.log("The characteristics of the mobile" + this.name + " are:" + "\n" +
            "  *  Name: " + this.name + "\n" +
            "  *  Model: " + this.model + "\n" +
            "  *  TradeMark: " + this.trademark + "\n" +
            "  *  SD Size (GB): " + this.sdsize + "\n" +
            "  *  Color: " + this.color + "\n" +
            "  *  Is 5g?: " + this.is5G + "\n" +
            "  *  Number of Cameras: " + this.cameraNumber + "\n");
    };
    return Mobile;
}());
exports.Mobile = Mobile;
