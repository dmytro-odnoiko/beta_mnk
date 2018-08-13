$().ready( function() {
$("#form-mailing").validate({
    rules: {
        emailMailing: {
            required: true,
            email: true
        }
    },
    messages: {
        emailMailing: {
            required: "Обов\'язково вкажіть e-mail",
            email: "Не вірний формат e-mail"
        }
    },
    onsubmit: true,
    focusCleanup: true,
    focusInvalid: false
});
// $("input").addClass("form-control");
// $("textarea").addClass("form-control");
});
