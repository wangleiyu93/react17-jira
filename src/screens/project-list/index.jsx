import React,{ useEffect, useState } from "react"
import { List } from "./list"
import { SearchPanel } from "./search-panel"
import { cleanObject } from "utils";
import qs from "qs";

const apiUrl=process.env.REACT_APP_API_URL;
export const ProjectListScreen=()=>{
    const [list,setList]=useState([])
    const [param,setParam]=useState({
        name:"",
        personId:""
    })
    const [users,setUsers]=useState([])
    useEffect(()=>{
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(async response=>{
            if(response.ok){
                setList(await response.json())
            }
        })
    },[param])
    useEffect(()=>{
        fetch(`${apiUrl}/users`).then(async response=>{
            if(response.ok){
                setUsers(await response.json())
            }
        })
    },[])
    return <div>
        <SearchPanel param={param} setParam={setParam} users={users}></SearchPanel>
        <List list={list} users={users}></List>
    </div>
}