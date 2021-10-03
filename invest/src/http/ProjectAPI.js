import {$host} from './index'


export const fetchAllProjects = async () => {
    const {data} = await $host.get('api/project')
    return data
}

export const fetchProject = async (id) => {
    const {data} = await $host.get('api/project/' + id)
    console.log(data)
    return data
}