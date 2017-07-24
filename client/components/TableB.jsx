import React from 'react';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import shallowCompare from 'react-addons-shallow-compare';

var c = 0;

export default class TableB extends React.PureComponent {

    renderTableHead() {
        return (
            <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell numeric>Calories</TableCell>
                <TableCell numeric>Fat (g)</TableCell>
                <TableCell numeric>Carbs (g)</TableCell>
                <TableCell numeric>Protein (g)</TableCell>
            </TableRow>
        );
    }

    renderTableBody(data) {
        return data.map(item => {
            let { id, name, calories, fat, carbs, protein } = item;

            return (
                <TableRow key={id}>
                    <TableCell>{name}</TableCell>
                    <TableCell numeric>{calories}</TableCell>
                    <TableCell numeric>{fat}</TableCell>
                    <TableCell numeric>{carbs}</TableCell>
                    <TableCell numeric>{protein}</TableCell>
                </TableRow>
            );
        })
    }

    /* Use PureComponent or this method in case of specific props  */

    // shouldComponentUpdate(nextProps, nextState) {
    //     return shallowCompare(this, nextProps, nextState);
    // }

    render() {
        console.log('%cRender Table A', 'color: blue; font-size: 16px;');
        c = c + 1;
        let { style, data } = this.props;

        return (
            <div>
                <h1 style={style.header}>Table B {`render: ${c}`}</h1>
                <Table>
                    <TableHead>
                        { this.renderTableHead() }
                    </TableHead>
                    <TableBody>
                        { this.renderTableBody(data) }
                    </TableBody>
                </Table>
            </div>
        );
    }
}