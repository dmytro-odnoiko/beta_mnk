    (function () {
        var options = {
            facebook: "175500699130185", // Facebook page ID
            email: "mnk@mnk.org.ua", // Email
            company_logo_url: "//storage.whatshelp.io/widget/40/406b/406bbf830c92a8fb3614abfdb6d0f8e7/27066753_1943583215655249_3021360864225105135_n.png", // URL of company logo (png, jpg, gif)
            greeting_message: "Привіт, друже! Будемо раді відповісти на твоє запитання!", // Text of greeting message
            call_to_action: "", // Call to action
            // call_to_action: "Маєш питання? Напиши нам!", // Call to action
            button_color: "#b51120", // Color of button
            position: "left", // Position may be 'right' or 'left'
            order: "facebook,email" // Order of buttons
        };
        var proto = document.location.protocol, host = "whatshelp.io", url = proto + "//static." + host;
        var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
        s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
        var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
    })();
