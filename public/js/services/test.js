/**
 * Created by cendawei on 2018/1/26.
 */
import api from 'api'

export default {
    getItems() {
        return api({
            url: '/test/index',
            type: 'get'
        })
    }
}