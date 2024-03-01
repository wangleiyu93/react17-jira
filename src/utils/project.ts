import {Project} from 'screens/project-list/list'
import { useAsync } from './use-async'
import { useEffect } from 'react'
import { useHttp } from "utils/http";
import { cleanObject } from "utils";

export const useProjects=(param?:Partial<Project>)=>{
    const {run,...result}=useAsync<Project[]>()
    const client = useHttp();
    useEffect(()=>{
        run(client("projects", { data: cleanObject(param||{}) }))
    },[param])
    return result
}

