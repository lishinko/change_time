/// <reference path="../../typings/tsd.d.ts" />
$(function () {
    $('#datetimepicker').datetimepicker({
        format: "dddd, YYYY/MM/DD, HH:mm:ss z"
    });
    $('#submit-time').click(function () {
        const date = $('#datetimepicker :input').val();
        alert(date);
        $.ajax({
            url: '/servertime',
            dataType: 'json',
            data: { time: date },
            type: 'PUT',
            success: function (data, status) {
                alert(data);
            },
        });
    });
});
