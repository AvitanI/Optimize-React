import React from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';
import TableA from './components/TableA.jsx';
import TableB from './components/TableB.jsx';

let theme = createMuiTheme();

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const data = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const styles = {
    tableA: {
        header: {
            color: 'red'
        }
    },
    tableB: {
        header: {
            color: 'blue'
        }
    },
    divider: {
        margin: '80px 0'
    },
    btn: {
        float: 'right'
    }
};

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            x: false
        };
    }

    componentWillMount() {
        /* demonstrate other processes that change the app state and cause to app re-render */
        setInterval( ()=> { 
            this.handleOnClick();
        }, 10000);
    }

    handleOnClick() {
        this.setState({ x: !this.state.x });
    }

    renderTables() {
        return (
            <div>
                <TableA data={data} style={{ header: { color: 'red' } }} />
                <Divider style={styles.divider} />
                <TableB data={data} style={styles.tableB} />
            </div>
        );
    }

   render() {
    console.log('App Render');

    return (
        <MuiThemeProvider theme={theme}>
            <div>
                <Button 
                    raised 
                    style={styles.btn} 
                    onClick={ this.handleOnClick.bind(this, null) }
                >   
                    Change App State
                </Button>
                { this.renderTables() }
            </div>
         </MuiThemeProvider>
      );
   }
}