import { makeAutoObservable} from "mobx";

export default class UserStore{

    constructor() {
        this._isAuth = false
        this._user = {}
        this._isActivated = false
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }

    setUser(user) {
        this._user = user
    }

    setIsActivated(bool) {
        this._isActivated = bool
    }

    get isAuth() {
        return this._isAuth
    }

    get user() {
        return this._user
    }

    get isActivated() {
        return this._isActivated
    }
}