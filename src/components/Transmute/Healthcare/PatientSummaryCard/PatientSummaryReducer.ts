

import TransmuteFramework from '../../../../../src/transmute'

let { PatchLogic } = TransmuteFramework

import { hasFever } from './PatientSumaryLogic'

const handlers = {

    ['TEMPERATURE_REPORTED']: (state: any, action: any) => {
        return {
            ...state,
            model: {
                ...state.model,
                lastTemperature: action.payload.data,
            }

        }
    },
    ['SYMPTOMS_REPORTED']: (state: any, action: any) => {
        return {
            ...state,
            model: {
                ...state.model,
                lastSymptoms: action.payload.data,
            }
        }
    }

}


export const readModel = {
    readModelStoreKey: '', // readModelType:contractAddress
    readModelType: 'PatientSummary',
    contractAddress: '0x0000000000000000000000000000000000000000',
    lastEvent: null, // Last Event Index Processed
    model: {} // where all the updates from events will be made
}

export const reducer = (state: any, action: any) => {
    if (handlers[action.type]) {
        state = handlers[action.type](state, action)
    } else {
        state = {
            ...readModel,
            ...state
        }
    }

    let stateWithThresholds = {
        ...state,
        model: {
            ...state.model,
            feverThreshold: 100
        }
    }

    state.model.hasFever = PatchLogic.applyJsonLogic(hasFever, stateWithThresholds)
    
    return state
}

