/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$(document).ready(function () {
    var usersApi = 'http://zadanie.laboratorium.ee/users.json';
    var activeUsers = [];
    var totalUsersCount = 0;
    var activeUsersCount = 0;
    var activeFemalesCount = 0;
    var activeMalesCount = 0;
    var activeUsersWith6MonthOffsetCount = 0;

    $.ajax({
        url: usersApi,
        type: "GET",
        dataType: "json"

    }).done(function (response) {

        // console.table(response);
        console.log(response);

        $.each(response, function (i, member) {

            if (member.active == true) {
                activeUsersCount++;
                var users = $(".active-list").find("ul").prepend($("<li></li>").text(member.last_name + "  " + member.first_name + ",   " + "Nickname: " + member.username));
                $(users).click(function () {
                    $("body").css("background-color", "pink");
                });
            };
            if (member.active == true && member.gender == "Female") {
                activeFemalesCount++;
            };
            if (member.active == true && member.gender == "Male") {
                activeMalesCount++;
            };
            if ("20/06/2016" < member.last_login) {
                activeUsersWith6MonthOffsetCount++;
            }
        });
        $(".all-members").find("span").text(response.length);
        $(".active-members").find("span").text(activeUsersCount);
        $(".active-female-members").find("span").text(activeFemalesCount);
        $(".active-male-members").find("span").text(activeMalesCount);
        $(".active-six-month-members").find("span").text(activeUsersWith6MonthOffsetCount);
    });
});

/***/ })
/******/ ]);