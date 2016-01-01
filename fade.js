var fade = function (type, ms, el, callback, cel) {
               
                var isIn = type === 'in',
                oppStatus = isIn ? 'out' : 'in',
                opacity = isIn ? 0 : 1,
                interval = 50,
                gap = interval / ms;
 
                if (isIn) {
                    el.style.display = 'block';
                    el.style.opacity = opacity;
                }
 
                function func() {
                    opacity = isIn ? opacity + gap : opacity - gap;
                    el.style.opacity = opacity;
 
                    if (opacity <= 0) el.style.display = 'none'
                    if (opacity <= 0 || opacity >= 1) {
                        window.clearInterval(fading);
                        if (typeof callback !== 'undefined' && typeof cel !== 'undefined') {
                            callback(oppStatus, ms, cel);
                        }
                    }
                }
                var fading = window.setInterval(func, interval);
            }
