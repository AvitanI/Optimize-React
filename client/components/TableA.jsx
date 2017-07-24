import React from 'react';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

var c = 0;

export default class TableA extends React.Component {
    render() {
        console.log('%cRender Table A', 'color: red; font-size: 16px;');
        c = c + 1;

        return (
            <div style={this.props.style.header}>
                <h1>Table A {`render: ${c}`}</h1>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell numeric>Calories</TableCell>
                            <TableCell numeric>Fat (g)</TableCell>
                            <TableCell numeric>Carbs (g)</TableCell>
                            <TableCell numeric>Protein (g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {this.props.data.map(n => {
                        return (
                        <TableRow key={n.id}>
                            <TableCell>
                            {n.name}
                            </TableCell>
                            <TableCell numeric>
                            {n.calories}
                            </TableCell>
                            <TableCell numeric>
                            {n.fat}
                            </TableCell>
                            <TableCell numeric>
                            {n.carbs}
                            </TableCell>
                            <TableCell numeric>
                            {n.protein}
                            </TableCell>
                        </TableRow>
                        );
                    })}
                    </TableBody>
                </Table>
            </div>
        );
    }
}