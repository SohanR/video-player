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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const video = document.getElementById('video');\nconst play = document.getElementById('play');\nconst stop = document.getElementById('stop');\nconst progress = document.getElementById('progress');\nconst timestamp = document.getElementById('timestamp');\n\n\n\n// Play and pause\n\nfunction videoStatus() {\n    if (video.paused) {\n        video.play();\n    } else {\n        video.pause();\n    }\n}\n\n//Update play/pause icon\n\nfunction updateIcon() {\n    if (video.paused) {\n        play.innerHTML = '<i class=\"fas fa-play fa-2x\"></i>';\n    } else {\n        play.innerHTML = '<i class=\"fas fa-pause fa-2x\"></i>';\n    }\n}\n\n// Update progress and timestamp\n\nfunction updateProgress() {\n    progress.value = (video.currentTime / video.duration) * 100;\n\n    // minutes\n\n    let mins = Math.floor(video.currentTime / 60);\n    if (mins < 10) {\n        mins = '0' + String(mins);\n    }\n\n    // Get seconds\n    let secs = Math.floor(video.currentTime % 60);\n    if (secs < 10) {\n        secs = '0' + String(secs);\n    }\n\n    timestamp.innerHTML = `${mins}:${secs}`;\n}\n\n\n//set video time progress\n\nfunction setVideoProgress() {\n    video.currentTime = (+progress.value * video.duration) / 100;\n}\n\n//stop video \nfunction stopVideo() {\n    video.currentTime = 0;\n    video.pause();\n}\n\n//Event Listener\n\nvideo.addEventListener('click', videoStatus);\nvideo.addEventListener('pause', updateIcon);\nvideo.addEventListener('play', updateIcon);\nvideo.addEventListener('timeupdate', updateProgress);\n\nplay.addEventListener('click', videoStatus);\n\nstop.addEventListener('click', stopVideo);\n\nprogress.addEventListener('change', setVideoProgress);\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanM/N2JhNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB2aWRlbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWRlbycpO1xuY29uc3QgcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5Jyk7XG5jb25zdCBzdG9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0b3AnKTtcbmNvbnN0IHByb2dyZXNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2dyZXNzJyk7XG5jb25zdCB0aW1lc3RhbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZXN0YW1wJyk7XG5cblxuXG4vLyBQbGF5IGFuZCBwYXVzZVxuXG5mdW5jdGlvbiB2aWRlb1N0YXR1cygpIHtcbiAgICBpZiAodmlkZW8ucGF1c2VkKSB7XG4gICAgICAgIHZpZGVvLnBsYXkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2aWRlby5wYXVzZSgpO1xuICAgIH1cbn1cblxuLy9VcGRhdGUgcGxheS9wYXVzZSBpY29uXG5cbmZ1bmN0aW9uIHVwZGF0ZUljb24oKSB7XG4gICAgaWYgKHZpZGVvLnBhdXNlZCkge1xuICAgICAgICBwbGF5LmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhcyBmYS1wbGF5IGZhLTJ4XCI+PC9pPic7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcGxheS5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXMgZmEtcGF1c2UgZmEtMnhcIj48L2k+JztcbiAgICB9XG59XG5cbi8vIFVwZGF0ZSBwcm9ncmVzcyBhbmQgdGltZXN0YW1wXG5cbmZ1bmN0aW9uIHVwZGF0ZVByb2dyZXNzKCkge1xuICAgIHByb2dyZXNzLnZhbHVlID0gKHZpZGVvLmN1cnJlbnRUaW1lIC8gdmlkZW8uZHVyYXRpb24pICogMTAwO1xuXG4gICAgLy8gbWludXRlc1xuXG4gICAgbGV0IG1pbnMgPSBNYXRoLmZsb29yKHZpZGVvLmN1cnJlbnRUaW1lIC8gNjApO1xuICAgIGlmIChtaW5zIDwgMTApIHtcbiAgICAgICAgbWlucyA9ICcwJyArIFN0cmluZyhtaW5zKTtcbiAgICB9XG5cbiAgICAvLyBHZXQgc2Vjb25kc1xuICAgIGxldCBzZWNzID0gTWF0aC5mbG9vcih2aWRlby5jdXJyZW50VGltZSAlIDYwKTtcbiAgICBpZiAoc2VjcyA8IDEwKSB7XG4gICAgICAgIHNlY3MgPSAnMCcgKyBTdHJpbmcoc2Vjcyk7XG4gICAgfVxuXG4gICAgdGltZXN0YW1wLmlubmVySFRNTCA9IGAke21pbnN9OiR7c2Vjc31gO1xufVxuXG5cbi8vc2V0IHZpZGVvIHRpbWUgcHJvZ3Jlc3NcblxuZnVuY3Rpb24gc2V0VmlkZW9Qcm9ncmVzcygpIHtcbiAgICB2aWRlby5jdXJyZW50VGltZSA9ICgrcHJvZ3Jlc3MudmFsdWUgKiB2aWRlby5kdXJhdGlvbikgLyAxMDA7XG59XG5cbi8vc3RvcCB2aWRlbyBcbmZ1bmN0aW9uIHN0b3BWaWRlbygpIHtcbiAgICB2aWRlby5jdXJyZW50VGltZSA9IDA7XG4gICAgdmlkZW8ucGF1c2UoKTtcbn1cblxuLy9FdmVudCBMaXN0ZW5lclxuXG52aWRlby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHZpZGVvU3RhdHVzKTtcbnZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ3BhdXNlJywgdXBkYXRlSWNvbik7XG52aWRlby5hZGRFdmVudExpc3RlbmVyKCdwbGF5JywgdXBkYXRlSWNvbik7XG52aWRlby5hZGRFdmVudExpc3RlbmVyKCd0aW1ldXBkYXRlJywgdXBkYXRlUHJvZ3Jlc3MpO1xuXG5wbGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdmlkZW9TdGF0dXMpO1xuXG5zdG9wLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RvcFZpZGVvKTtcblxucHJvZ3Jlc3MuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgc2V0VmlkZW9Qcm9ncmVzcyk7XG5cblxuXG5cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

/***/ })

/******/ });