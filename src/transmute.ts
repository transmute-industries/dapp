import TransmuteFramework from 'transmute-framework';

let config: any = {
    env: 'testrpc',
    aca: require('./contracts/RBAC'),
    esa: require('./contracts/UnsafeEventStore'),
    esfa: require('./contracts/UnsafeEventStoreFactory')
};

export default TransmuteFramework.init(config);
