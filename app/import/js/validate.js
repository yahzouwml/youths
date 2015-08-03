jQuery(document).ready(function($) {
    "use strict";
    $('form.validateform').submit(function() {
        var posturl = $(this).attr("action"),
            f = $(this).find('.field'),
            ferror = false,
            emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;
        f.children('input').each(function() {
            var i = $(this);
            var rule = i.attr('data-rule');
            if (rule != undefined) {
                var ierror = false;
                var pos = rule.indexOf(':', 0);
                if (pos >= 0) {
                    var exp = rule.substr(pos + 1, rule.length);
                    rule = rule.substr(0, pos);
                } else {
                    rule = rule.substr(pos + 1, rule.length);
                }
                switch (rule) {
                    case 'required':
                        if (i.val() == '') {
                            ferror = ierror = true;
                        }
                        break;
                    case 'maxlen':
                        if (i.val().length < parseInt(exp)) {
                            ferror = ierror = true;
                        }
                        break;
                    case 'email':
                        if (!emailExp.test(i.val())) {
                            ferror = ierror = true;
                        }
                        break;
                    case 'checked':
                        if (!i.attr('checked')) {
                            ferror = ierror = true;
                        }
                        break;
                    case 'regexp':
                        exp = new RegExp(exp);
                        if (!exp.test(i.val())) {
                            ferror = ierror = true;
                        }
                        break;
                }
                i.next('.validation').html((ierror ? (i.attr('data-msg') != undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
            }
        });
        f.children('textarea').each(function() {
            var i = $(this);
            var rule = i.attr('data-rule');
            if (rule != undefined) {
                var ierror = false;
                var pos = rule.indexOf(':', 0);
                if (pos >= 0) {
                    var exp = rule.substr(pos + 1, rule.length);
                    rule = rule.substr(0, pos);
                } else {
                    rule = rule.substr(pos + 1, rule.length);
                }
                switch (rule) {
                    case 'required':
                        if (i.val() == '') {
                            ferror = ierror = true;
                        }
                        break;
                    case 'maxlen':
                        if (i.val().length < parseInt(exp)) {
                            ferror = ierror = true;
                        }
                        break;
                }
                i.next('.validation').html((ierror ? (i.attr('data-msg') != undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
            }
        });
        if (ferror) return false;
        else var str = $(this).serialize();
        if (posturl == "/Service/EryaHelper") {
            $("#aimFrame").attr('src', $("#key").val());
            return false;
        }
        $.ajax({
            type: "POST",
            url: posturl,
            data: str,
            success: function(json) {
                //$("#sendmessage").addClass("show");
                //$("#errormessage").ajaxComplete(function (event, request, settings) {
                //    if (msg == 'OK') {
                //        $("#sendmessage").addClass("show");
                //    }
                //    else {
                //        $("#sendmessage").removeClass("show");
                //        result = msg;
                //    }
                //    $(this).html(result);
                //});
                if (posturl == "/Service/Erya") {
                    json = eval(json);
                    if (json.length == 0) {
                        $("#result").html("<p class='text-danger'>很抱歉,没有找到相关题目，期待Youths题库的更新吧！</p><p class='text-info'>贡献Youths，帮助Youths有充足的资金完善题库吧！</p>");
                        return;
                    }
                    var html = "";
                    var item, type, answer;
                    for (var i = 0; i < json.length; i++) {
                        item = json[i];
                        if (item.QType == 2) {
                            type = "判断：";
                            if (item.QAnswer == "0") {
                                answer = "<span class='aerror'></span>";
                            } else {
                                answer = "<span class='acorrect'></span>";
                            }
                        } else {
                            type = "选择：";
                            answer = item.QAnswer;
                        }
                        html += "<p class='Title'>" + "<span class='qtype'>" + type + "</span>" + item.QTitle + "</P>";
                        html += "<p class='Answer'>" + answer + "</P>";
                    }
                    $("#result").html(html);
                }
            }
        });
        return false;
    });
});
