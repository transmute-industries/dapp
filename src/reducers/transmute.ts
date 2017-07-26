

const handlers = {

  ['TRANSMUTE_WEB3_ACCOUNTS_RECEIVED']: (state: any, action: any) => {
    let defaultAddress = action.payload[0]
    return {
      ...state,
      defaultAddress: defaultAddress,
      addresses: action.payload,
    }
  },
  ['TRANSMUTE_FACTORY_RECEIVED']: (state: any, action: any) => {
    return {
      ...state,
      [action.payload.readModelType]: action.payload
    }
  },
  ['TRANSMUTE_EVENTSTORE_EVENTS_RECEIEVED']: (state: any, action: any) => {
    return {
      ...state,
      ['events']: action.payload.events
    }
  },

  ['EVENTSTORE_ADDRESS_UPDATED']: (state: any, action: any) => {
    return {
      ...state,
      ['selectedContract']: action.payload
    }
  },
  ['RECORD_EVENT_DIALOG_UPDATE']: (state: any, action: any) => {
    return {
      ...state,
      ['activeDialog']: action.payload,
    }
  },
  ['PATIENT_SUMMARY_UPDATED']: (state: any, action: any) => {
    return {
      ...state,
      ['patientSummary']: action.payload,
    }
  },
}

export const reducer = (state: any, action: any) => {
  if (handlers[action.type]) {
    return handlers[action.type](state, action)
  }
  return {
    patientSummary: JSON.parse(<any>localStorage.getItem('patientSummary')) || {},
    defaultAddress: localStorage.getItem('defaultAddress') || null,
    selectedContract: localStorage.getItem('selectedContract') || null,
    addresses: null,
    provider: localStorage.getItem('provider') || 'testrpc',
    ...state
  }
}

