import React, { Component } from "react";

class TableHeader extends Component {
  raiseSort = path => {
    const order =
      path === this.props.sort.path
        ? this.props.sort.order === "asc"
          ? "desc"
          : "asc"
        : "asc";
    this.props.onSort({ path, order });
  };

  renderSortIcon = column => {
    if (column.path !== this.props.sort.path) return null;
    if (this.props.sort.order === "asc")
      return <i className="fa fa-sort-asc" />;
    else return <i className="fa fa-sort-desc" />;
  };
  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map(column => (
            <th
              onClick={() => this.raiseSort(column.path)}
              scope="col"
              key={column.path || column.key}
              className="clickable"
            >
              {column.label} {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
