import React, { useEffect, useState } from "react";
import { List } from "./list";
import { SearchPanel } from "./search-panel";
import { cleanObject, useMount, useDebounce } from "utils";
import { useHttp } from "utils/http";

export const ProjectListScreen = () => {
  const [list, setList] = useState([]);
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const debounceParam = useDebounce(param, 300);
  const [users, setUsers] = useState([]);
  const client = useHttp();

  useEffect(() => {
    client("projects", { data: cleanObject(debounceParam) }).then(setList);
  }, [debounceParam]);
  useMount(() => {
    client("users").then(setUsers);
  });
  return (
    <div>
      <SearchPanel
        param={param}
        setParam={setParam}
        users={users}
      ></SearchPanel>
      <List list={list} users={users}></List>
    </div>
  );
};
