$().ready( function() {
$("#form-join_us").validate({
    rules: {
        nameJoin: {
            required: true,
            minlength: 3
        },
        linkJoin: {
            required: true,
        },
        textareaJoin: {
            maxlength: 300
        }
    },
    messages: {
        nameJoin: {
            required: "Обов\'язково вкажіть ім\'я",
            minlength: "Ім\'я не може бути коротше за 3 символи"
        },
        linkJoin: {
            required: "Обов\'язково вкажіть свій контакт (посилання на соц. мережу або телефон\\e-mail)",
        },
        textareaJoin: {
            maxlength: "Задовгий коментар"
        }
    },
    onsubmit: true,
    focusCleanup: true,
    focusInvalid: false
});

// $("input").addClass("form-control");
// $("textarea").addClass("form-control");
});
