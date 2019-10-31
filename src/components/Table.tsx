import React from "react";
import { Table as AntTable } from "antd";

interface Props {
  dispatch?: () => void;
  dataSource: Array<any>;
  columns: Array<any>;
  isLoading: boolean;
}

// TODO: Fix Props interface and substitute any type
const Table = (props: any) => {
  return (
    <AntTable
      dataSource={props.dataSource}
      columns={props.columns}
      loading={props.isLoading}
    />
  );
};

export default Table;
