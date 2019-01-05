import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);
    return _.get(item, column.path);
  };

  createKey = (item, column) => {
    return item[this.props.keyProperty] + (column.path || column.key);
  };

  render() {
    const { data, columns, keyProperty } = this.props;
    return (
      <tbody>
        {data.map(item => (
          <tr key={item[keyProperty]}>
            {columns.map(col => (
              <td key={this.createKey(item, col)}>
                {this.renderCell(item, col)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
