/**
 * Created by cendawei
 * @param opts
 * @param successfunc
 * @param failfunc
 * @returns {*}
 */
module.exports = function (opts, successfunc, failfunc) {
    var deff = $.Deferred();
    if(!opts || !opts.url) {
        deff.reject('no url specified!');
    }
    var option = $.extend(true, {
        type: 'get',
        dataType: 'json'
    }, opts);
    $.ajax(option).done(function(res){
        successfunc && successfunc(res);
        deff.resolve(res);
    }).fail(function(err){
        failfunc && failfunc(err)
        deff.reject(err);
    });
    return deff.promise();
}