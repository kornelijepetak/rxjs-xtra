import { expect, test } from "vitest"
import { BehaviorSubject } from "../subjects"
import { BehaviorSubject as RxBehaviorSubject } from "rxjs"

test("BehaviorSubjectXtra extends BehaviorSubject", () => {
    const subject = new BehaviorSubject(0)
    expect(subject).toBeInstanceOf(RxBehaviorSubject)
})

test("BehaviorSubjectXtra.update correctly updates the subject's value", () => {
    const subject = new BehaviorSubject(0)

    subject.update(() => 1848)
    expect(subject.value).toBe(1848)

    subject.update(value => value + 1)
    expect(subject.value).toBe(1849)

    subject.update(value => value * 2)
    expect(subject.value).toBe(3698)
})
