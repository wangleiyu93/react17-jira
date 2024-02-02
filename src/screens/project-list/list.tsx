import React from "react";
import { User } from "./search-panel";
import { Table } from "antd";

interface Project {
  id: string;
  name: string;
  personId: string;
  pin: boolean;
  organization: string;
}

interface ListProps {
  list: Project[];
  users: User[];
}

export const List = ({ list, users }: ListProps) => {
  return (
    <Table
      pagination={false}
      columns={[
        {
          title: "名称",
          dataIndex: "name",
          sorter: (a, b) => a.name.localeCompare(b.name), //String.prototype.localeCompare()方法返回一个数字，表示参考字符串在排序顺序中是在给定字符串之前、之后还是与之相同
        },
        {
          title: "负责人",
          render(value, project) {
            return (
              <span>
                {users.find((user) => user.id === project.personId)?.name}
              </span>
            );
          },
        },
      ]}
      dataSource={list}
    />
  );
};
