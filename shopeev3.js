
(function() {
    var script = document.createElement("SCRIPT");
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
    script.type = 'text/javascript';
    script.onload = function() {
        var $ = window.jQuery;
        var isClicked = false;
        var jQueryIsReady = function() {
            if (window.location.href.indexOf("/cart/") > -1) {
                $(".cart-page-footer__checkout-text").parent().click();
            } else if (window.location.href.indexOf("/checkout/") > -1) {
               $(".checkout-payment-setting__payment-methods-tab").eq(2).click();
                $(".stardust-button").click();
            } else {
                if (!isClicked) {
                    $("._2O0llP button.btn-solid-primary").click();
                    isClicked = true;
                }
            }
        };
        var checkJquery = function() {
            if (typeof jQuery === "undefined") {
                return false;
            } else {
                clearTimeout(interval);
                setInterval(jQueryIsReady, 500);
            }
        };
        var interval = setInterval(checkJquery, 500);
    };
    document.getElementsByTagName("head")[0].appendChild(script);
})();
