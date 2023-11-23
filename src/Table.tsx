import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const TableCell = ( data: any ) => (
  <View style={styles.cell}>
    <Text>{data}</Text>
  </View>
);

const TableRow = ( rowData: any ) => (
  <View style={styles.row}>
    { rowData.forEach((element: any) => {
        <TableCell  data={element} />
    })}
  </View>
);

const Table = ( headers: any, rows: any) => (
  <View style={styles.table}>
    <TableRow rowData={headers} />
    {rows.map((rowData: any) => (
      <TableRow rowData={rowData} />
    ))}
  </View>
);

const styles = StyleSheet.create({
  table: {
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  cell: {
    flex: 1,
    padding: 8,
    alignItems: 'center',
  },
});

export default Table;
