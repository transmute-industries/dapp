import TransmuteFramework from 'transmute-framework';

let config: any = {
    env: 'testrpc',
    // ipfsConfig: {
    //     host: 'ipfs.infura.io',
    //     port: '5001',
    //     options: {
    //         protocol: 'https'
    //     }
    // },
    aca: require('./contracts/RBAC'),
    esa: require('./contracts/UnsafeEventStore'),
    esfa: require('./contracts/UnsafeEventStoreFactory')
};

export default TransmuteFramework.init(config);
