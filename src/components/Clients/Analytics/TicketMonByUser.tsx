import { Table } from "antd";
import React from "react";
interface TicketMonByUserProps {
  data: any;
}
import type { ColumnsType } from "antd/es/table";

const TicketMonByUser: React.FC<TicketMonByUserProps> = ({ data }) => {
  console.log(data);
  interface DataType {
    key: string;
    name: string;
    total_tickets: number;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: "Stt",
      dataIndex: "key",
      align: "center",
      render: ( index) => <span>{index + 1}</span>,
    },
    {
      title: "Tên",
      dataIndex: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Số vé",
      className: "column-money",
      dataIndex: "total_tickets",
      align: "center",
      render: (text) => <a>{text} vé</a>,
      width: "15%",
      // render: (text) => <span>{formatter(Number(text))}</span>,
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        bordered
        scroll={{ x: 500, y: 100 }}
        title={() => "Số vé được in theo tháng bởi nhân viên"}
      />
    </>
  );
};

export default TicketMonByUser;
