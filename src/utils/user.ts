import {Project} from 'screens/project-list/list'
import { useAsync } from './use-async'
import { useEffect } from 'react'
import { useHttp } from "utils/http";
import { cleanObject } from "utils";
import { User } from 'screens/project-list/search-panel';

export const useUsers=(param?:Partial<User>)=>{
    const {run,...result}=useAsync<User[]>()
    const client = useHttp();

    useEffect(()=>{
        run(client("users", { data: cleanObject(param||{}) }))
    },[param])

    return result
}

