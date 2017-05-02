/**
 * Created by cendawei on 2017/4/17.
 */
import api from 'api';
import $ from 'jquery';
import validate from 'validate';
// import ui from 'ui';
import utils from 'utils';

/*
var submitFunc = function () {
    if(validate.isEmpty($('#apply-name').val())) {
        ui.tips('姓名不能为空！')
        return false;
    }
    if(validate.isEmpty($('#apply-telephone').val())) {
        ui.tips('手机号码不能为空！')
        return false;
    }
    if(!validate.isMobile($('#apply-telephone').val())) {
        ui.tips('手机号码格式不正确！')
        return false;
    }
    ui.renderAfterEmpty('.modal-content', 'activity_xiaomi/modal', utils.getImagePath());
    $('.xioami-modal').removeClass('xiaomi-activity-hide');
    /!*api({
        url:'/index.php?m=activity_xiaomi&c=activity_xiaomi_update&a=init',
        type: 'post',
        data: {
            name: $('#apply-name').val(),
            phone: $('#apply-telephone').val()
        }
    }).done(function (res) {
        if(res.result === 'ok') {
            $('.xioami-modal').removeClass('xiaomi-activity-hide');
            ui.renderAfterEmpty('activity_xiaomi/modal', utils.getImageData());
        } else {
            ui.tips(res.message);
        }
    }).fail(function (err) {
        ui.tips("提交失败");
    })*!/
}

$('.apply-form-submit-button').on('click', function () {
    submitFunc();
})
$('#apply-telephone').on('keyup', function (e) {
    e = e || window.event;
    if(e.keyCode === 13) {
        submitFunc();
    }
})
$('.xiaomi-wrapper').on('click', '.modal-close', function () {
    $('.xioami-modal').addClass('xiaomi-activity-hide');
})
*/

require(['ui'], function (ui) {
    var submitFunc = function () {
        if(validate.isEmpty($('#apply-name').val())) {
            ui.tips('姓名不能为空！')
            return false;
        }
        if(validate.isEmpty($('#apply-telephone').val())) {
            ui.tips('手机号码不能为空！')
            return false;
        }
        if(!validate.isMobile($('#apply-telephone').val())) {
            ui.tips('手机号码格式不正确！')
            return false;
        }
        ui.renderAfterEmpty('.modal-content', 'activity_xiaomi/modal', utils.getImagePath());
        $('.xioami-modal').removeClass('xiaomi-activity-hide');
        console.log('aaaabbbb')
        /*api({
            url:'/index.php?m=activity_xiaomi&c=activity_xiaomi_update&a=init',
            type: 'post',
            data: {
                name: $('#apply-name').val(),
                phone: $('#apply-telephone').val()
            }
        }).done(function (res) {
            if(res.result === 'ok') {
                $('.xioami-modal').removeClass('xiaomi-activity-hide');
                // document.documentElement.style.overflow="hidden";
            } else {
                ui.tips(res.message);
            }
        }).fail(function (err) {
            ui.tips("提交失败");
        })*/
    }

    $('.apply-form-submit-button').on('click', function () {
        submitFunc();
    })
    $('#apply-telephone').on('keyup', function (e) {
        e = e || window.event;
        if(e.keyCode === 13) {
            submitFunc();
        }
    })
    $('.xiaomi-wrapper').on('click', '.modal-close', function () {
        $('.xioami-modal').addClass('xiaomi-activity-hide');
        // document.documentElement.style.overflow="scroll";
    })
})
