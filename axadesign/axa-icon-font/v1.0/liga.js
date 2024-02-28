/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'add': '&#x2b;',
            'arrow dropdown': '&#x25bc;',
            'calendar': '&#x1f4c5;',
            'call': '&#x1f4de;',
            'check circle': '&#x2611;',
            'close': '&#x2715;',
            'done': '&#x2713;',
            'download': '&#x1f4c2;',
            'east': '&#x2192;',
            'email': '&#x2709;',
            'error': '&#x1c3;',
            'error outline': '&#x2622;',
            'expand less': '&#x2c4;',
            'expand more': '&#x2c5;',
            'info': '&#x1f6c8;',
            'menu': '&#x2630;',
            'navigate before': '&#x3c;',
            'navigate next': '&#x3e;',
            'search': '&#x1f50d;',
            'share': '&#x269f;',
            'warning': '&#x26a0;',
            'west': '&#x2190;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/icomoon-liga/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
