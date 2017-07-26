import TransmuteFramework from 'transmute-framework'

const accessControlArtifacts = require('./contracts/RBAC')
const eventStoreArtifacts = require('./contracts/UnsafeEventStore')
const eventStoreFactoryArtifacts = require('./contracts/UnsafeEventStoreFactory')

export default TransmuteFramework.init({
    env: 'testrpc',
    aca: accessControlArtifacts,
    esa: eventStoreArtifacts,
    esfa: eventStoreFactoryArtifacts
})