/**
 * Created by cendawei on 2017/4/17.
 */
import services from 'services'
import $ from 'jquery'
import ui from 'ui'

services.testService.getItems()
    .done(res => {
        res.code == 2000 ? $('.wrapper').find('#app').html('hello') : ui.tips('error')
        console.log(res)
    })
    .fail(err => {
        ui.tips('error')
    })

