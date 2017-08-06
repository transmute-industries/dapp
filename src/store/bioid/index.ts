import * as actions from './actions'
import * as reducer from './reducer'

export { actions, reducer }
export default { ...actions, ...reducer }