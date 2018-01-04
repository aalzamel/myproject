import { extendObservable } from "mobx";
class myStore {
    constructor() {
        extendObservable(this, {
            header: "Home",
        })
    }
}
export default new myStore()
