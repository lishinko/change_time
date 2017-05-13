$(function () {
    const dateFormat = "YYYY-MM-DD HH:mm:ss";
    $('#datetimepicker').datetimepicker({
        format: dateFormat
    });
    $('#submit-time').click(function () {
        const date = $('#datetimepicker :input').val();
        $.ajax({
            url: '/servertime',
            dataType: 'json',
            data: { time: date },
            type: 'PUT',
            success: function (data, status) {
                $('#current-time').text(data.newtime);
            },
            error: function (data, status) {
                alert(data);
            }
        });
    });
});
