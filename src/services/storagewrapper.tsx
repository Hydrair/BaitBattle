import { User } from "../types";

class StorageWrapper {
    storage: Storage;

    constructor() {
        this.storage = sessionStorage;
    }
    //get user either from localstorage or from sessionstorage
    getUser() {
        let user = localStorage.getItem("user");
        if (user == null) {
            user = sessionStorage.getItem("user");
        }
        if (user == null) {
            return {} as User;
        }
        return JSON.parse(user!) as User;
    }

    //set user to localstorage or sessionstorage
    setUser(user: User, remember?: boolean) {
        if (remember) {
            this.clearUser();
            this.storage = localStorage;
        }
        this.storage.setItem("user", JSON.stringify(user));
    }

    //clear user from localstorage or sessionstorage
    clearUser() {
        this.storage.removeItem("user");
    }
}

export const storageWrapper = new StorageWrapper();
