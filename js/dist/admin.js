/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/clientjs/dist/client.base.min.js":
/*!*******************************************************!*\
  !*** ./node_modules/clientjs/dist/client.base.min.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function (e, i) {
  if (true) module.exports = i();else { var n, t; }
}(this, function () {
  return function (e) {
    var i = {};
    function t(n) {
      if (i[n]) return i[n].exports;
      var o = i[n] = {
        i: n,
        l: !1,
        exports: {}
      };
      return e[n].call(o.exports, o, o.exports, t), o.l = !0, o.exports;
    }
    return t.m = e, t.c = i, t.d = function (e, i, n) {
      t.o(e, i) || Object.defineProperty(e, i, {
        enumerable: !0,
        get: n
      });
    }, t.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, t.t = function (e, i) {
      if (1 & i && (e = t(e)), 8 & i) return e;
      if (4 & i && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (t.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: e
      }), 2 & i && "string" != typeof e) for (var o in e) t.d(n, o, function (i) {
        return e[i];
      }.bind(null, o));
      return n;
    }, t.n = function (e) {
      var i = e && e.__esModule ? function () {
        return e["default"];
      } : function () {
        return e;
      };
      return t.d(i, "a", i), i;
    }, t.o = function (e, i) {
      return Object.prototype.hasOwnProperty.call(e, i);
    }, t.p = "", t(t.s = 0);
  }([function (e, i, t) {
    "use strict";

    var n,
      o,
      r = t(1)(),
      a = t(3),
      s = t(4),
      l = t(6),
      u = function u() {
        var e = new s();
        return n = e.getResult(), o = new l(), this;
      };
    u.prototype = {
      getSoftwareVersion: function getSoftwareVersion() {
        return "0.1.11";
      },
      getBrowserData: function getBrowserData() {
        return n;
      },
      getFingerprint: function getFingerprint() {
        var e = "|",
          i = n.ua,
          t = this.getScreenPrint(),
          o = this.getPlugins(),
          r = this.getFonts(),
          s = this.isLocalStorage(),
          l = this.isSessionStorage(),
          u = this.getTimeZone(),
          c = this.getLanguage(),
          d = this.getSystemLanguage(),
          b = this.isCookie(),
          m = this.getCanvasPrint();
        return a(i + e + t + e + o + e + r + e + s + e + l + e + u + e + c + e + d + e + b + e + m, 256);
      },
      getCustomFingerprint: function getCustomFingerprint() {
        for (var e = "|", i = "", t = 0; t < arguments.length; t++) i += arguments[t] + e;
        return a(i, 256);
      },
      getUserAgent: function getUserAgent() {
        return n.ua;
      },
      getUserAgentLowerCase: function getUserAgentLowerCase() {
        return n.ua.toLowerCase();
      },
      getBrowser: function getBrowser() {
        return n.browser.name;
      },
      getBrowserVersion: function getBrowserVersion() {
        return n.browser.version;
      },
      getBrowserMajorVersion: function getBrowserMajorVersion() {
        return n.browser.major;
      },
      isIE: function isIE() {
        return /IE/i.test(n.browser.name);
      },
      isChrome: function isChrome() {
        return /Chrome/i.test(n.browser.name);
      },
      isFirefox: function isFirefox() {
        return /Firefox/i.test(n.browser.name);
      },
      isSafari: function isSafari() {
        return /Safari/i.test(n.browser.name);
      },
      isMobileSafari: function isMobileSafari() {
        return /Mobile\sSafari/i.test(n.browser.name);
      },
      isOpera: function isOpera() {
        return /Opera/i.test(n.browser.name);
      },
      getEngine: function getEngine() {
        return n.engine.name;
      },
      getEngineVersion: function getEngineVersion() {
        return n.engine.version;
      },
      getOS: function getOS() {
        return n.os.name;
      },
      getOSVersion: function getOSVersion() {
        return n.os.version;
      },
      isWindows: function isWindows() {
        return /Windows/i.test(n.os.name);
      },
      isMac: function isMac() {
        return /Mac/i.test(n.os.name);
      },
      isLinux: function isLinux() {
        return /Linux/i.test(n.os.name);
      },
      isUbuntu: function isUbuntu() {
        return /Ubuntu/i.test(n.os.name);
      },
      isSolaris: function isSolaris() {
        return /Solaris/i.test(n.os.name);
      },
      getDevice: function getDevice() {
        return n.device.model;
      },
      getDeviceType: function getDeviceType() {
        return n.device.type;
      },
      getDeviceVendor: function getDeviceVendor() {
        return n.device.vendor;
      },
      getCPU: function getCPU() {
        return n.cpu.architecture;
      },
      isMobile: function isMobile() {
        var e = n.ua || navigator.vendor || window.opera;
        return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4));
      },
      isMobileMajor: function isMobileMajor() {
        return this.isMobileAndroid() || this.isMobileBlackBerry() || this.isMobileIOS() || this.isMobileOpera() || this.isMobileWindows();
      },
      isMobileAndroid: function isMobileAndroid() {
        return !!n.ua.match(/Android/i);
      },
      isMobileOpera: function isMobileOpera() {
        return !!n.ua.match(/Opera Mini/i);
      },
      isMobileWindows: function isMobileWindows() {
        return !!n.ua.match(/IEMobile/i);
      },
      isMobileBlackBerry: function isMobileBlackBerry() {
        return !!n.ua.match(/BlackBerry/i);
      },
      isMobileIOS: function isMobileIOS() {
        return !!n.ua.match(/iPhone|iPad|iPod/i);
      },
      isIphone: function isIphone() {
        return !!n.ua.match(/iPhone/i);
      },
      isIpad: function isIpad() {
        return !!n.ua.match(/iPad/i);
      },
      isIpod: function isIpod() {
        return !!n.ua.match(/iPod/i);
      },
      getScreenPrint: function getScreenPrint() {
        return "Current Resolution: " + this.getCurrentResolution() + ", Available Resolution: " + this.getAvailableResolution() + ", Color Depth: " + this.getColorDepth() + ", Device XDPI: " + this.getDeviceXDPI() + ", Device YDPI: " + this.getDeviceYDPI();
      },
      getColorDepth: function getColorDepth() {
        return screen.colorDepth;
      },
      getCurrentResolution: function getCurrentResolution() {
        return screen.width + "x" + screen.height;
      },
      getAvailableResolution: function getAvailableResolution() {
        return screen.availWidth + "x" + screen.availHeight;
      },
      getDeviceXDPI: function getDeviceXDPI() {
        return screen.deviceXDPI;
      },
      getDeviceYDPI: function getDeviceYDPI() {
        return screen.deviceYDPI;
      },
      getPlugins: function getPlugins() {
        for (var e = "", i = 0; i < navigator.plugins.length; i++) i == navigator.plugins.length - 1 ? e += navigator.plugins[i].name : e += navigator.plugins[i].name + ", ";
        return e;
      },
      isJava: function isJava() {
        return navigator.javaEnabled();
      },
      getJavaVersion: function getJavaVersion() {
        throw new Error("Please use client.java.js or client.js if you need this functionality!");
      },
      isFlash: function isFlash() {
        return !!navigator.plugins["Shockwave Flash"];
      },
      getFlashVersion: function getFlashVersion() {
        throw new Error("Please use client.flash.js or client.js if you need this functionality!");
      },
      isSilverlight: function isSilverlight() {
        return !!navigator.plugins["Silverlight Plug-In"];
      },
      getSilverlightVersion: function getSilverlightVersion() {
        return this.isSilverlight() ? navigator.plugins["Silverlight Plug-In"].description : "";
      },
      isMimeTypes: function isMimeTypes() {
        return !(!navigator.mimeTypes || !navigator.mimeTypes.length);
      },
      getMimeTypes: function getMimeTypes() {
        var e = "";
        if (navigator.mimeTypes) for (var i = 0; i < navigator.mimeTypes.length; i++) i == navigator.mimeTypes.length - 1 ? e += navigator.mimeTypes[i].description : e += navigator.mimeTypes[i].description + ", ";
        return e;
      },
      isFont: function isFont(e) {
        return o.detect(e);
      },
      getFonts: function getFonts() {
        for (var e = ["Abadi MT Condensed Light", "Adobe Fangsong Std", "Adobe Hebrew", "Adobe Ming Std", "Agency FB", "Aharoni", "Andalus", "Angsana New", "AngsanaUPC", "Aparajita", "Arab", "Arabic Transparent", "Arabic Typesetting", "Arial Baltic", "Arial Black", "Arial CE", "Arial CYR", "Arial Greek", "Arial TUR", "Arial", "Batang", "BatangChe", "Bauhaus 93", "Bell MT", "Bitstream Vera Serif", "Bodoni MT", "Bookman Old Style", "Braggadocio", "Broadway", "Browallia New", "BrowalliaUPC", "Calibri Light", "Calibri", "Californian FB", "Cambria Math", "Cambria", "Candara", "Castellar", "Casual", "Centaur", "Century Gothic", "Chalkduster", "Colonna MT", "Comic Sans MS", "Consolas", "Constantia", "Copperplate Gothic Light", "Corbel", "Cordia New", "CordiaUPC", "Courier New Baltic", "Courier New CE", "Courier New CYR", "Courier New Greek", "Courier New TUR", "Courier New", "DFKai-SB", "DaunPenh", "David", "DejaVu LGC Sans Mono", "Desdemona", "DilleniaUPC", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Engravers MT", "Eras Bold ITC", "Estrangelo Edessa", "EucrosiaUPC", "Euphemia", "Eurostile", "FangSong", "Forte", "FrankRuehl", "Franklin Gothic Heavy", "Franklin Gothic Medium", "FreesiaUPC", "French Script MT", "Gabriola", "Gautami", "Georgia", "Gigi", "Gisha", "Goudy Old Style", "Gulim", "GulimChe", "GungSeo", "Gungsuh", "GungsuhChe", "Haettenschweiler", "Harrington", "Hei S", "HeiT", "Heisei Kaku Gothic", "Hiragino Sans GB", "Impact", "Informal Roman", "IrisUPC", "Iskoola Pota", "JasmineUPC", "KacstOne", "KaiTi", "Kalinga", "Kartika", "Khmer UI", "Kino MT", "KodchiangUPC", "Kokila", "Kozuka Gothic Pr6N", "Lao UI", "Latha", "Leelawadee", "Levenim MT", "LilyUPC", "Lohit Gujarati", "Loma", "Lucida Bright", "Lucida Console", "Lucida Fax", "Lucida Sans Unicode", "MS Gothic", "MS Mincho", "MS PGothic", "MS PMincho", "MS Reference Sans Serif", "MS UI Gothic", "MV Boli", "Magneto", "Malgun Gothic", "Mangal", "Marlett", "Matura MT Script Capitals", "Meiryo UI", "Meiryo", "Menlo", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Sans Serif", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU-ExtB", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "Miriam Fixed", "Miriam", "Mongolian Baiti", "MoolBoran", "NSimSun", "Narkisim", "News Gothic MT", "Niagara Solid", "Nyala", "PMingLiU", "PMingLiU-ExtB", "Palace Script MT", "Palatino Linotype", "Papyrus", "Perpetua", "Plantagenet Cherokee", "Playbill", "Prelude Bold", "Prelude Condensed Bold", "Prelude Condensed Medium", "Prelude Medium", "PreludeCompressedWGL Black", "PreludeCompressedWGL Bold", "PreludeCompressedWGL Light", "PreludeCompressedWGL Medium", "PreludeCondensedWGL Black", "PreludeCondensedWGL Bold", "PreludeCondensedWGL Light", "PreludeCondensedWGL Medium", "PreludeWGL Black", "PreludeWGL Bold", "PreludeWGL Light", "PreludeWGL Medium", "Raavi", "Rachana", "Rockwell", "Rod", "Sakkal Majalla", "Sawasdee", "Script MT Bold", "Segoe Print", "Segoe Script", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Segoe UI", "Shonar Bangla", "Showcard Gothic", "Shruti", "SimHei", "SimSun", "SimSun-ExtB", "Simplified Arabic Fixed", "Simplified Arabic", "Snap ITC", "Sylfaen", "Symbol", "Tahoma", "Times New Roman Baltic", "Times New Roman CE", "Times New Roman CYR", "Times New Roman Greek", "Times New Roman TUR", "Times New Roman", "TlwgMono", "Traditional Arabic", "Trebuchet MS", "Tunga", "Tw Cen MT Condensed Extra Bold", "Ubuntu", "Umpush", "Univers", "Utopia", "Utsaah", "Vani", "Verdana", "Vijaya", "Vladimir Script", "Vrinda", "Webdings", "Wide Latin", "Wingdings"], i = "", t = 0; t < e.length; t++) o.detect(e[t]) && (i += t == e.length - 1 ? e[t] : e[t] + ", ");
        return i;
      },
      isLocalStorage: function isLocalStorage() {
        try {
          return !!r.localStorage;
        } catch (e) {
          return !0;
        }
      },
      isSessionStorage: function isSessionStorage() {
        try {
          return !!r.sessionStorage;
        } catch (e) {
          return !0;
        }
      },
      isCookie: function isCookie() {
        return navigator.cookieEnabled;
      },
      getTimeZone: function getTimeZone() {
        var e, i;
        return e = new Date(), (i = String(-e.getTimezoneOffset() / 60)) < 0 ? "-" + ("0" + (i *= -1)).slice(-2) : "+" + ("0" + i).slice(-2);
      },
      getLanguage: function getLanguage() {
        return navigator.language;
      },
      getSystemLanguage: function getSystemLanguage() {
        return navigator.systemLanguage || window.navigator.language;
      },
      isCanvas: function isCanvas() {
        var e = document.createElement("canvas");
        try {
          return !(!e.getContext || !e.getContext("2d"));
        } catch (i) {
          return !1;
        }
      },
      getCanvasPrint: function getCanvasPrint() {
        var e,
          i = document.createElement("canvas");
        try {
          e = i.getContext("2d");
        } catch (n) {
          return "";
        }
        var t = "ClientJS,org <canvas> 1.0";
        return e.textBaseline = "top", e.font = "14px 'Arial'", e.textBaseline = "alphabetic", e.fillStyle = "#f60", e.fillRect(125, 1, 62, 20), e.fillStyle = "#069", e.fillText(t, 2, 15), e.fillStyle = "rgba(102, 204, 0, 0.7)", e.fillText(t, 4, 17), i.toDataURL();
      }
    }, i.ClientJS = u;
  }, function (e, i, t) {
    "use strict";

    var n = t(2);
    e.exports = function () {
      return "object" == typeof __webpack_require__.g && __webpack_require__.g && __webpack_require__.g.Math === Math && __webpack_require__.g.Array === Array ? __webpack_require__.g : n;
    };
  }, function (e, i, t) {
    "use strict";

    "undefined" != typeof self ? e.exports = self : "undefined" != typeof window ? e.exports = window : e.exports = Function("return this")();
  }, function (e, i, t) {
    e.exports = function (e, i) {
      var t, n, o, r, a, s, l, u;
      for (t = 3 & e.length, n = e.length - t, o = i, a = 3432918353, s = 461845907, u = 0; u < n;) l = 255 & e.charCodeAt(u) | (255 & e.charCodeAt(++u)) << 8 | (255 & e.charCodeAt(++u)) << 16 | (255 & e.charCodeAt(++u)) << 24, ++u, o = 27492 + (65535 & (r = 5 * (65535 & (o = (o ^= l = (65535 & (l = (l = (65535 & l) * a + (((l >>> 16) * a & 65535) << 16) & 4294967295) << 15 | l >>> 17)) * s + (((l >>> 16) * s & 65535) << 16) & 4294967295) << 13 | o >>> 19)) + ((5 * (o >>> 16) & 65535) << 16) & 4294967295)) + ((58964 + (r >>> 16) & 65535) << 16);
      switch (l = 0, t) {
        case 3:
          l ^= (255 & e.charCodeAt(u + 2)) << 16;
        case 2:
          l ^= (255 & e.charCodeAt(u + 1)) << 8;
        case 1:
          o ^= l = (65535 & (l = (l = (65535 & (l ^= 255 & e.charCodeAt(u))) * a + (((l >>> 16) * a & 65535) << 16) & 4294967295) << 15 | l >>> 17)) * s + (((l >>> 16) * s & 65535) << 16) & 4294967295;
      }
      return o ^= e.length, o = 2246822507 * (65535 & (o ^= o >>> 16)) + ((2246822507 * (o >>> 16) & 65535) << 16) & 4294967295, o = 3266489909 * (65535 & (o ^= o >>> 13)) + ((3266489909 * (o >>> 16) & 65535) << 16) & 4294967295, (o ^= o >>> 16) >>> 0;
    };
  }, function (e, i, t) {
    var n;
    !function (o, r) {
      "use strict";

      var a = "function",
        s = "undefined",
        l = "object",
        u = "string",
        c = "model",
        d = "name",
        b = "type",
        m = "vendor",
        w = "version",
        g = "architecture",
        p = "console",
        f = "mobile",
        h = "tablet",
        v = "smarttv",
        y = "wearable",
        x = "embedded",
        k = "Amazon",
        S = "Apple",
        C = "ASUS",
        M = "BlackBerry",
        P = "Firefox",
        T = "Google",
        B = "Huawei",
        A = "LG",
        L = "Microsoft",
        U = "Motorola",
        E = "Opera",
        G = "Samsung",
        N = "Sony",
        j = "Xiaomi",
        _ = "Zebra",
        R = "Facebook",
        D = function D(e) {
          var i = {};
          for (var t in e) i[e[t].toUpperCase()] = e[t];
          return i;
        },
        I = function I(e, i) {
          return typeof e === u && -1 !== O(i).indexOf(O(e));
        },
        O = function O(e) {
          return e.toLowerCase();
        },
        z = function z(e, i) {
          if (typeof e === u) return e = e.replace(/^\s\s*/, "").replace(/\s\s*$/, ""), typeof i === s ? e : e.substring(0, 255);
        },
        F = function F(e, i) {
          for (var t, n, o, s, u, c, d = 0; d < i.length && !u;) {
            var b = i[d],
              m = i[d + 1];
            for (t = n = 0; t < b.length && !u;) if (u = b[t++].exec(e)) for (o = 0; o < m.length; o++) c = u[++n], typeof (s = m[o]) === l && s.length > 0 ? 2 == s.length ? typeof s[1] == a ? this[s[0]] = s[1].call(this, c) : this[s[0]] = s[1] : 3 == s.length ? typeof s[1] !== a || s[1].exec && s[1].test ? this[s[0]] = c ? c.replace(s[1], s[2]) : r : this[s[0]] = c ? s[1].call(this, c, s[2]) : r : 4 == s.length && (this[s[0]] = c ? s[3].call(this, c.replace(s[1], s[2])) : r) : this[s] = c || r;
            d += 2;
          }
        },
        q = function q(e, i) {
          for (var t in i) if (typeof i[t] === l && i[t].length > 0) {
            for (var n = 0; n < i[t].length; n++) if (I(i[t][n], e)) return "?" === t ? r : t;
          } else if (I(i[t], e)) return "?" === t ? r : t;
          return e;
        },
        W = {
          ME: "4.90",
          "NT 3.11": "NT3.51",
          "NT 4.0": "NT4.0",
          2e3: "NT 5.0",
          XP: ["NT 5.1", "NT 5.2"],
          Vista: "NT 6.0",
          7: "NT 6.1",
          8: "NT 6.2",
          8.1: "NT 6.3",
          10: ["NT 6.4", "NT 10.0"],
          RT: "ARM"
        },
        V = {
          browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [w, [d, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [w, [d, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [d, w], [/opios[\/ ]+([\w\.]+)/i], [w, [d, "Opera Mini"]], [/\bopr\/([\w\.]+)/i], [w, [d, E]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i, /(weibo)__([\d\.]+)/i], [d, w], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [w, [d, "UCBrowser"]], [/\bqbcore\/([\w\.]+)/i], [w, [d, "WeChat(Win) Desktop"]], [/micromessenger\/([\w\.]+)/i], [w, [d, "WeChat"]], [/konqueror\/([\w\.]+)/i], [w, [d, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [w, [d, "IE"]], [/yabrowser\/([\w\.]+)/i], [w, [d, "Yandex"]], [/(avast|avg)\/([\w\.]+)/i], [[d, /(.+)/, "$1 Secure Browser"], w], [/\bfocus\/([\w\.]+)/i], [w, [d, "Firefox Focus"]], [/\bopt\/([\w\.]+)/i], [w, [d, "Opera Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [w, [d, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [w, [d, "Dolphin"]], [/coast\/([\w\.]+)/i], [w, [d, "Opera Coast"]], [/miuibrowser\/([\w\.]+)/i], [w, [d, "MIUI Browser"]], [/fxios\/([-\w\.]+)/i], [w, [d, P]], [/\bqihu|(qi?ho?o?|360)browser/i], [[d, "360 Browser"]], [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i], [[d, /(.+)/, "$1 Browser"], w], [/(comodo_dragon)\/([\w\.]+)/i], [[d, /_/g, " "], w], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i], [d, w], [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i], [d], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[d, R], w], [/safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i], [d, w], [/\bgsa\/([\w\.]+) .*safari\//i], [w, [d, "GSA"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [w, [d, "Chrome Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[d, "Chrome WebView"], w], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [w, [d, "Android Browser"]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [d, w], [/version\/([\w\.]+) .*mobile\/\w+ (safari)/i], [w, [d, "Mobile Safari"]], [/version\/([\w\.]+) .*(mobile ?safari|safari)/i], [w, d], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [d, [w, q, {
            "1.0": "/8",
            1.2: "/1",
            1.3: "/3",
            "2.0": "/412",
            "2.0.2": "/416",
            "2.0.3": "/417",
            "2.0.4": "/419",
            "?": "/"
          }]], [/(webkit|khtml)\/([\w\.]+)/i], [d, w], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[d, "Netscape"], w], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [w, [d, "Firefox Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i], [d, w]],
          cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [[g, "amd64"]], [/(ia32(?=;))/i], [[g, O]], [/((?:i[346]|x)86)[;\)]/i], [[g, "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [[g, "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [[g, "armhf"]], [/windows (ce|mobile); ppc;/i], [[g, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [[g, /ower/, "", O]], [/(sun4\w)[;\)]/i], [[g, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [[g, O]]],
          device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [c, [m, G], [b, h]], [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i], [c, [m, G], [b, f]], [/\((ip(?:hone|od)[\w ]*);/i], [c, [m, S], [b, f]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [c, [m, S], [b, h]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [c, [m, B], [b, h]], [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i], [c, [m, B], [b, f]], [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i], [[c, /_/g, " "], [m, j], [b, f]], [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[c, /_/g, " "], [m, j], [b, h]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i], [c, [m, "OPPO"], [b, f]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [c, [m, "Vivo"], [b, f]], [/\b(rmx[12]\d{3})(?: bui|;|\))/i], [c, [m, "Realme"], [b, f]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [c, [m, U], [b, f]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [c, [m, U], [b, h]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [c, [m, A], [b, h]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [c, [m, A], [b, f]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [c, [m, "Lenovo"], [b, h]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[c, /_/g, " "], [m, "Nokia"], [b, f]], [/(pixel c)\b/i], [c, [m, T], [b, h]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [c, [m, T], [b, f]], [/droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [c, [m, N], [b, f]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[c, "Xperia Tablet"], [m, N], [b, h]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [c, [m, "OnePlus"], [b, f]], [/(alexa)webm/i, /(kf[a-z]{2}wi)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [c, [m, k], [b, h]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[c, /(.+)/g, "Fire Phone $1"], [m, k], [b, f]], [/(playbook);[-\w\),; ]+(rim)/i], [c, m, [b, h]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [c, [m, M], [b, f]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [c, [m, C], [b, h]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [c, [m, C], [b, f]], [/(nexus 9)/i], [c, [m, "HTC"], [b, h]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i], [m, [c, /_/g, " "], [b, f]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [c, [m, "Acer"], [b, h]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [c, [m, "Meizu"], [b, f]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [c, [m, "Sharp"], [b, f]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [m, c, [b, f]], [/(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [m, c, [b, h]], [/(surface duo)/i], [c, [m, L], [b, h]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [c, [m, "Fairphone"], [b, f]], [/(u304aa)/i], [c, [m, "AT&T"], [b, f]], [/\bsie-(\w*)/i], [c, [m, "Siemens"], [b, f]], [/\b(rct\w+) b/i], [c, [m, "RCA"], [b, h]], [/\b(venue[\d ]{2,7}) b/i], [c, [m, "Dell"], [b, h]], [/\b(q(?:mv|ta)\w+) b/i], [c, [m, "Verizon"], [b, h]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [c, [m, "Barnes & Noble"], [b, h]], [/\b(tm\d{3}\w+) b/i], [c, [m, "NuVision"], [b, h]], [/\b(k88) b/i], [c, [m, "ZTE"], [b, h]], [/\b(nx\d{3}j) b/i], [c, [m, "ZTE"], [b, f]], [/\b(gen\d{3}) b.+49h/i], [c, [m, "Swiss"], [b, f]], [/\b(zur\d{3}) b/i], [c, [m, "Swiss"], [b, h]], [/\b((zeki)?tb.*\b) b/i], [c, [m, "Zeki"], [b, h]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[m, "Dragon Touch"], c, [b, h]], [/\b(ns-?\w{0,9}) b/i], [c, [m, "Insignia"], [b, h]], [/\b((nxa|next)-?\w{0,9}) b/i], [c, [m, "NextBook"], [b, h]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[m, "Voice"], c, [b, f]], [/\b(lvtel\-)?(v1[12]) b/i], [[m, "LvTel"], c, [b, f]], [/\b(ph-1) /i], [c, [m, "Essential"], [b, f]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [c, [m, "Envizen"], [b, h]], [/\b(trio[-\w\. ]+) b/i], [c, [m, "MachSpeed"], [b, h]], [/\btu_(1491) b/i], [c, [m, "Rotor"], [b, h]], [/(shield[\w ]+) b/i], [c, [m, "Nvidia"], [b, h]], [/(sprint) (\w+)/i], [m, c, [b, f]], [/(kin\.[onetw]{3})/i], [[c, /\./g, " "], [m, L], [b, f]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [c, [m, _], [b, h]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [c, [m, _], [b, f]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [m, c, [b, p]], [/droid.+; (shield) bui/i], [c, [m, "Nvidia"], [b, p]], [/(playstation [345portablevi]+)/i], [c, [m, N], [b, p]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [c, [m, L], [b, p]], [/smart-tv.+(samsung)/i], [m, [b, v]], [/hbbtv.+maple;(\d+)/i], [[c, /^/, "SmartTV"], [m, G], [b, v]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[m, A], [b, v]], [/(apple) ?tv/i], [m, [c, "Apple TV"], [b, v]], [/crkey/i], [[c, "Chromecast"], [m, T], [b, v]], [/droid.+aft(\w)( bui|\))/i], [c, [m, k], [b, v]], [/\(dtv[\);].+(aquos)/i], [c, [m, "Sharp"], [b, v]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i], [[m, z], [c, z], [b, v]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[b, v]], [/((pebble))app/i], [m, c, [b, y]], [/droid.+; (glass) \d/i], [c, [m, T], [b, y]], [/droid.+; (wt63?0{2,3})\)/i], [c, [m, _], [b, y]], [/(quest( 2)?)/i], [c, [m, R], [b, y]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [m, [b, x]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i], [c, [b, f]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [c, [b, h]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[b, h]], [/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i], [[b, f]], [/(android[-\w\. ]{0,9});.+buil/i], [c, [m, "Generic"]]],
          engine: [[/windows.+ edge\/([\w\.]+)/i], [w, [d, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [w, [d, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i], [d, w], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [w, d]],
          os: [[/microsoft (windows) (vista|xp)/i], [d, w], [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i], [d, [w, q, W]], [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[d, "Windows"], [w, q, W]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /cfnetwork\/.+darwin/i], [[w, /_/g, "."], [d, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[d, "Mac OS"], [w, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86)/i], [w, d], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [d, w], [/\(bb(10);/i], [w, [d, M]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [w, [d, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [w, [d, "Firefox OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [w, [d, "webOS"]], [/crkey\/([\d\.]+)/i], [w, [d, "Chromecast"]], [/(cros) [\w]+ ([\w\.]+\w)/i], [[d, "Chromium OS"], w], [/(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [d, w], [/(sunos) ?([\w\.\d]*)/i], [[d, "Solaris"], w], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i, /(unix) ?([\w\.]*)/i], [d, w]]
        },
        _H = function H(e, i) {
          if (typeof e === l && (i = e, e = r), !(this instanceof _H)) return new _H(e, i).getResult();
          var t = e || (typeof o !== s && o.navigator && o.navigator.userAgent ? o.navigator.userAgent : ""),
            n = i ? function (e, i) {
              var t = {};
              for (var n in e) i[n] && i[n].length % 2 == 0 ? t[n] = i[n].concat(e[n]) : t[n] = e[n];
              return t;
            }(V, i) : V;
          return this.getBrowser = function () {
            var e,
              i = {};
            return i.name = r, i.version = r, F.call(i, t, n.browser), i.major = typeof (e = i.version) === u ? e.replace(/[^\d\.]/g, "").split(".")[0] : r, i;
          }, this.getCPU = function () {
            var e = {};
            return e.architecture = r, F.call(e, t, n.cpu), e;
          }, this.getDevice = function () {
            var e = {};
            return e.vendor = r, e.model = r, e.type = r, F.call(e, t, n.device), e;
          }, this.getEngine = function () {
            var e = {};
            return e.name = r, e.version = r, F.call(e, t, n.engine), e;
          }, this.getOS = function () {
            var e = {};
            return e.name = r, e.version = r, F.call(e, t, n.os), e;
          }, this.getResult = function () {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.getEngine(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU()
            };
          }, this.getUA = function () {
            return t;
          }, this.setUA = function (e) {
            return t = typeof e === u && e.length > 255 ? z(e, 255) : e, this;
          }, this.setUA(t), this;
        };
      _H.VERSION = "0.7.30", _H.BROWSER = D([d, w, "major"]), _H.CPU = D([g]), _H.DEVICE = D([c, m, b, p, f, v, h, y, x]), _H.ENGINE = _H.OS = D([d, w]), typeof i !== s ? (typeof e !== s && e.exports && (i = e.exports = _H), i.UAParser = _H) : t(5) ? (n = function () {
        return _H;
      }.call(i, t, i, e)) === r || (e.exports = n) : typeof o !== s && (o.UAParser = _H);
      var K = typeof o !== s && (o.jQuery || o.Zepto);
      if (K && !K.ua) {
        var Y = new _H();
        K.ua = Y.getResult(), K.ua.get = function () {
          return Y.getUA();
        }, K.ua.set = function (e) {
          Y.setUA(e);
          var i = Y.getResult();
          for (var t in i) K.ua[t] = i[t];
        };
      }
    }("object" == typeof window ? window : this);
  }, function (e, i) {
    (function (i) {
      e.exports = i;
    }).call(this, {});
  }, function (e, i) {
    e.exports = function () {
      var e = ["monospace", "sans-serif", "serif"],
        i = document.getElementsByTagName("body")[0],
        t = document.createElement("span");
      t.style.fontSize = "72px", t.innerHTML = "mmmmmmmmmmlli";
      var n = {},
        o = {};
      for (var r in e) t.style.fontFamily = e[r], i.appendChild(t), n[e[r]] = t.offsetWidth, o[e[r]] = t.offsetHeight, i.removeChild(t);
      this.detect = function (r) {
        var a = !1;
        for (var s in e) {
          t.style.fontFamily = r + "," + e[s], i.appendChild(t);
          var l = t.offsetWidth != n[e[s]] || t.offsetHeight != o[e[s]];
          i.removeChild(t), a = a || l;
        }
        return a;
      };
    };
  }]);
});

/***/ }),

/***/ "./src/admin/index.ts":
/*!****************************!*\
  !*** ./src/admin/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_addFingerprintHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/addFingerprintHeader */ "./src/common/addFingerprintHeader.ts");


flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('xypp/flarum-fingerprint-recorder', function () {
  (0,_common_addFingerprintHeader__WEBPACK_IMPORTED_MODULE_1__.addFingerprintHeader)();
  flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().extensionData["for"]('xypp-fingerprint-recorder').registerSetting({
    setting: 'xypp-fingerprint-recorder.max_count',
    type: 'number',
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('xypp-fingerprint-recorder.admin.max_count')
  }).registerSetting({
    setting: 'xypp-fingerprint-recorder.use_proxy',
    type: 'boolean',
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('xypp-fingerprint-recorder.admin.use_proxy')
  }).registerPermission({
    permission: 'xypp-fingerprint-recorder.view',
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('xypp-fingerprint-recorder.admin.view'),
    icon: 'fas fa-fingerprint'
  }, 'moderate');
  ;
});

/***/ }),

/***/ "./src/common/addFingerprintHeader.ts":
/*!********************************************!*\
  !*** ./src/common/addFingerprintHeader.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addFingerprintHeader: () => (/* binding */ addFingerprintHeader)
/* harmony export */ });
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clientjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clientjs */ "./node_modules/clientjs/dist/client.base.min.js");
/* harmony import */ var clientjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clientjs__WEBPACK_IMPORTED_MODULE_1__);


function addFingerprintHeader() {
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.override)(m, "request", function (o, options) {
    (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)(options, 'config', function (_, xhr) {
      xhr.setRequestHeader('X-FRONTEND-FINGER', new clientjs__WEBPACK_IMPORTED_MODULE_1__.ClientJS().getFingerprint() + "");
    });
    return o(options);
  });
}

/***/ }),

/***/ "./src/common/extend.ts":
/*!******************************!*\
  !*** ./src/common/extend.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extenders */ "flarum/common/extenders");
/* harmony import */ var flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_FingerprintRecord__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/FingerprintRecord */ "./src/common/models/FingerprintRecord.ts");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([new (flarum_common_extenders__WEBPACK_IMPORTED_MODULE_0___default().Store)().add(_models_FingerprintRecord__WEBPACK_IMPORTED_MODULE_1__["default"].TYPE, _models_FingerprintRecord__WEBPACK_IMPORTED_MODULE_1__["default"])]);

/***/ }),

/***/ "./src/common/index.ts":
/*!*****************************!*\
  !*** ./src/common/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extend: () => (/* reexport safe */ _extend__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/app */ "flarum/common/app");
/* harmony import */ var flarum_common_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extend */ "./src/common/extend.ts");


flarum_common_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('xypp/flarum-fingerprint-recorder', function () {});

/***/ }),

/***/ "./src/common/models/FingerprintRecord.ts":
/*!************************************************!*\
  !*** ./src/common/models/FingerprintRecord.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FingerprintRecord)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Model */ "flarum/common/Model");
/* harmony import */ var flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Model__WEBPACK_IMPORTED_MODULE_1__);


var FingerprintRecord = /*#__PURE__*/function (_Model) {
  function FingerprintRecord() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Model.call.apply(_Model, [this].concat(args)) || this;
    _this.user = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().hasOne("user");
    _this.finger = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute("finger");
    _this.userAgent = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute("user_agent_text");
    _this.userAgentHash = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute("user_agent");
    _this.ip = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute("ip");
    _this.count = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute("count");
    _this.createdAt = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute("created_at", (flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().transformDate));
    _this.updatedAt = flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().attribute("updated_at", (flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default().transformDate));
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(FingerprintRecord, _Model);
  return FingerprintRecord;
}((flarum_common_Model__WEBPACK_IMPORTED_MODULE_1___default()));
FingerprintRecord.TYPE = "fingerprint-records";


/***/ }),

/***/ "flarum/admin/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['admin/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/app'];

/***/ }),

/***/ "flarum/common/Model":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['common/Model']" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/Model'];

/***/ }),

/***/ "flarum/common/app":
/*!***************************************************!*\
  !*** external "flarum.core.compat['common/app']" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/app'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/common/extenders":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['common/extenders']" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/extenders'];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t, o);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./admin.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extend: () => (/* reexport safe */ _src_common__WEBPACK_IMPORTED_MODULE_0__.extend)
/* harmony export */ });
/* harmony import */ var _src_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/common */ "./src/common/index.ts");
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.ts");


})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=admin.js.map