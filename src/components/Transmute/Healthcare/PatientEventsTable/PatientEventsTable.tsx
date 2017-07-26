import * as React from 'react';
import * as _ from 'lodash';
import * as moment from 'moment'

import { Card } from 'material-ui/Card'
import IconButton from 'material-ui/IconButton'

import NavigationRefresh from 'material-ui/svg-icons/navigation/refresh'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import AddTemp from 'material-ui/svg-icons/places/hot-tub'
import AddSymp from 'material-ui/svg-icons/places/beach-access'

import { connect } from 'react-redux'

import {
  readAllContractEvents
} from '../../../../actions/transmute'


const styles = {
  container: {
    textAlign: 'center',
  },
  component: {
    margin: '60px 20px',
  },
  titleStyle: {
    fontSize: 16
  },
  footerToolbarStyle: {
    padding: '0 100px',
    display: 'none'
  },
  tableStyle: {
    tableLayout: 'auto',
  },
  tableBodyStyle: {
    overflowX: 'auto',
  },
  tableWrapperStyle: {
    padding: 5,
  },
}

const TABLE_COLUMNS_SORT_STYLE = [
  {
    key: 'type',
    label: 'Type',
    sortable: true,
  },
  // {
  //   key: 'txOrigin',
  //   label: 'Creator',
  // },
  {
    key: 'created',
    label: 'Created',
  },

]

import DataTables from 'material-ui-datatables'
import RecordEventDialog from '../RecordEventDialog/RecordEventDialog'

export class EventStoreTable extends React.Component<any, any> {

  componentWillReceiveProps(nextProps: any) {
    let data: any = []

    if (!nextProps.transmute.events && nextProps.transmute.selectedContract) {
      this.props.dispatch(readAllContractEvents(this.props.transmute.selectedContract, this.props.transmute.defaultAddress, 0))
    }

    if (nextProps.transmute.events) {
      console.log('events', nextProps.transmute.events)
      nextProps.transmute.events.forEach((event: any) => {
        data.push({
          type: event.type,
          // contractAddress: key,
          payload: event.payload,
          txOrigin: event.meta.txOrigin,
          created: moment.unix(event.meta.created).format('LLL')
        })
      })
    }
    this.setState({
      data: data
    })
  }

  public eventStores: any;

  constructor(props: any, context: any) {
    super(props, context)
    this.handleSortOrderChange = this.handleSortOrderChange.bind(this)
    this.handleFilterValueChange = this.handleFilterValueChange.bind(this)
    this.handleRowSelection = this.handleRowSelection.bind(this)
    this.handleRecord = this.handleRecord.bind(this)
    this.handleRefresh = this.handleRefresh.bind(this)

    this.eventStores = []; // this.state.eventStores
    this.state = {
      eventStores: this.eventStores,
      data: this.eventStores,
      page: 1,
      open: false,
      symptoms: []
    }
  }

  handleSortOrderChange(key: any, order: any) {
    // console.log('key:' + key + ' order: ' + order)
    let data = _.sortBy(this.state.eventStores, [key])
    if (order === 'desc') {
      data.reverse()
    }
    this.setState({
      data: data
    })
  }

  handleFilterValueChange(value: any) {
    // console.log('filter value: ' + value)
    let data = this.state.eventStores
    if (value !== '') {
      data = _.filter(data, _.matches({ 'contractAddress': value }))
    }
    this.setState({
      data: data
    })
  }

  handleRowSelection(selectedRows: any) {
    let selectedModel = this.state.data[selectedRows]
    this.setState({
      dialogTitle: 'Event',
      dialogBody: <pre>
        {JSON.stringify(selectedModel, null, 2)}
      </pre>,
      dialogActions: [
        <FlatButton
          label="Cancel"
          primary={true}
          onTouchTap={this.handleClose}
        />
      ]
    })
    this.handleOpen()
  }

  handleRecord(type: string) {
    this.props.dispatch({
      type: 'RECORD_EVENT_DIALOG_UPDATE',
      payload: {
        type: type
      }
    })
  }

  handleRefresh() {
    // console.log('handleRefresh')
    this.props.dispatch(readAllContractEvents(this.props.transmute.selectedContract, this.props.transmute.defaultAddress, 0))
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {

    return (
      <div>
        <Card>
          <DataTables
            title={'Patient Events'}
            titleStyle={styles.titleStyle}
            height={'auto'}
            selectable={true}
            showRowHover={true}
            columns={TABLE_COLUMNS_SORT_STYLE}
            data={this.state.data}
            showCheckboxes={false}
            showHeaderToolbar={true}
            footerToolbarStyle={styles.footerToolbarStyle}
            tableBodyStyle={styles.tableBodyStyle}
            tableStyle={styles.tableStyle}
            tableWrapperStyle={styles.tableWrapperStyle}
            count={100}
            onRowSelection={this.handleRowSelection}
            onFilterValueChange={this.handleFilterValueChange}
            onSortOrderChange={this.handleSortOrderChange}
            toolbarIconRight={[


              <IconButton
                onClick={() => {
                  this.handleRecord('TEMPERATURE')
                }}
              >
                <AddTemp />
              </IconButton>,
              <IconButton
                onClick={() => {
                  this.handleRecord('SYMPTOMS')
                }}
              >
                <AddSymp />
              </IconButton>,
              <IconButton
                onClick={this.handleRefresh}
              >
                <NavigationRefresh />
              </IconButton>
            ]}
          />
          <Dialog
            title={this.state.dialogTitle}
            actions={this.state.dialogActions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
          >
            {this.state.dialogBody}
          </Dialog>
          <RecordEventDialog />
        </Card>

      </div>
    )
  }
}

export default connect((state: any) => ({
  transmute: state.transmute
}))(EventStoreTable)
