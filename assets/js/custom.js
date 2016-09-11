require([
    "jquery", "template", "text", "underscore",
    "text!../template/leftPanel.tpl"], function ($, template) {

    var leftPanel = require("text!../template/leftPanel.tpl");
    var render = template.compile(leftPanel);
    $.ajax({
        type: "GET",
        url: "/assets/json/leftPanel.json",
        success: function (data) {
            $('#leftPanel').html(render(data));
            require(["amazeui"]);
            $('.item_click').on("click", function (event) {
                var dom = $(this);
                var indexData = dom.data("index");
                var result = null;
                if (indexData.indexOf(".") != -1) {
                    var index = indexData.split(".");
                    var parentHref = index[0];
                    var parentObj = null;
                    for (var i = 0; i < data.items.length; i++) {
                        if (data.items[i].href == parentHref) {
                            parentObj = data.items[i];
                            break;
                        }
                    }
                    if (parentObj != null) {
                        for (var j = 0; j < parentObj.child.length; j++) {
                            var now = parentObj.child[j];
                            if (now.href == index[1]) {
                                result = now;
                                break;
                            }
                        }
                    }
                } else {
                    for (var i = 0; i < data.items.length; i++) {
                        if (data.items[i].href == indexData) {
                            result = data.items[i];
                            break;
                        }
                    }
                }
                if (result != null && result.content != null) {
                    var html = decodeURI(result.content);
                    $('#article').html(html);
                }

            })


        },
        error: function () {

        }
    });

})