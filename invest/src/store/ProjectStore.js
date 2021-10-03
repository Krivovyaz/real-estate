import { makeAutoObservable} from "mobx";

export default class ProjectStore{

    constructor() {
        this._projects = []
        makeAutoObservable(this)
    }

    setProjects(projects) {
        this._projects = projects
    }

    setProject(project) {
        this._project = project
    }

    get projects() {
        return this._projects
    }

    get project() {
        return this._project
    }
}