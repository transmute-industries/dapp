
import Middleware from './middleware'

export const enroll = () => async (dispatch: any) => {
    dispatch({
        type: 'BCID_RECEIVED',
        payload: await Middleware.enroll()
    })
}

export default {
    enroll
}