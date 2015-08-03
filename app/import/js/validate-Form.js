//电话或手机验证规则  
jQuery.validator.addMethod("PhoneAndEmail", function(value, element) {
    var tm = /^[a-z0-9._%-]+@([a-z0-9-]+\.)+[a-z]{2,4}$|^1[3|4|5|7|8]\d{9}$/;
    return this.optional(element) || (tm.test(value));
}, "请输入有效的邮箱地址或手机号");
jQuery.validator.setDefaults({
    focusInvalid: false,
    ignore: "",
    errorClass: "text-danger",
    validClass: "text-success",
    rules: {
        url: {
            required: true,
            url: true
        },
        email: {
            required: true,
            email: true
        },
        PhoneAndEmail: {
            required: true,
            PhoneAndEmail: true
        },
        password: {
            required: true,
            minlength: 6,
            maxlength: 16
        },
        password_again: {
            required: true,
            minlength: 6,
            maxlength: 16,
            equalTo: "#password"
        }
    },
    highlight: function(element, errorClass) {
        $(element).parent().parent(".form-group").addClass("has-error").removeClass("has-success");
    },
    unhighlight: function(element, errorClass) {
        $(element).parent().parent(".form-group").addClass("has-success").removeClass("has-error");
    },
    submitHandler: function(form) {
        $.ajax({
            url: $(form).attr("action"),
            data: $(form).serialize(),
            type: "POST",
            beforeSend: function() {
                $(form).find(".btn-submit").attr("disabled", "disabled");
            },
            success: function(data) {
                switch (data.returnCode) {
                    case "register":
                        if (data.status == '001') {
                            showTips('success', form, "注册成功,请登录...")
                            setTimeout(function() {
                                $("#modal-register").modal('hide');
                                $("#modal-login").modal('show');
                            }, 1600);
                            clearForm(form)
                        } else if (data.status == '002') {
                            showTips('error', form, "该邮箱或手机已被注册...")
                        } else {
                            showTips('error', form, "注册失败,请稍后重试...")
                        }
                        break;
                    case "login":
                        alert(data.status)
                        if (data.status == "001") {

                        } else {

                        }
                        break;
                }
                $(form).find(".btn-submit").removeAttr("disabled");
            }
        });
    }
});
$("#fAddNav").validate({
});
$("#fLogin").validate({
});
$("#fRegister").validate({
});

function showTips(type, form, message) {
    var text = $(form).find(".btn-submit").text();
    if (type == "success") {
        $(form).find(".btn-submit").text(message)
        setTimeout(function() {
            $(form).find(".btn-submit").text(text)
        }, 1500)
    } else if (type == "error") {
        $(form).find(".btn-submit").text(message).removeClass('btn-green').addClass('btn-danger');
        setTimeout(function() {
            $(form).find(".btn-submit").text(text).addClass('btn-green').removeClass('btn-danger');
        }, 1500)
    }
}

function clearForm(form) {
    $(form).find(":input").not(":button,:submit,:reset,:hidden").val("").removeAttr("checked").removeAttr("selected");
}