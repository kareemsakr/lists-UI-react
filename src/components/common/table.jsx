import React, { Component } from "react";

import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

class Table extends Component {
  render() {
    const { TableColumns, sort, onSort, data } = this.props;
    return (
      <React.Fragment>
        <table className="table col-xs-8">
          <TableHeader columns={TableColumns} sort={sort} onSort={onSort} />
          <TableBody columns={TableColumns} data={data} />
        </table>
      </React.Fragment>
    );
  }
}

export default Table;
