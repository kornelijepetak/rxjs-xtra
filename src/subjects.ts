import { BehaviorSubject as RxBehaviorSubject } from "rxjs"

export class BehaviorSubject<T> extends RxBehaviorSubject<T> {
    update<U extends T> (mapping: (item: T) => U): void {
        this.next(mapping(this.value))
    }
}
