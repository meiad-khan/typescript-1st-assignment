# How Generics Make TypeScript Powerful and Reusable

## Introduction

One of the most powerful features of TypeScript is **Generics**. Generics allow you to write reusable and flexible code while still maintaining strong type safety.

Instead of writing separate functions for different data types, generics let you write a single function that works for all types.

---

## The Problem Without Generics

Without generics, we often duplicate code:

```ts
function getString(value: string): string {
  return value;
}

function getNumber(value: number): number {
  return value;
}
```

This approach is repetitive and not scalable.

---

## Using Generics

Generics solve this problem by introducing a **type parameter**.

```ts
function getValue<T>(value: T): T {
  return value;
}
```

Now the function works for any type:

```ts
getValue<string>("Hello");
getValue<number>(42);
getValue<boolean>(true);
```

---

## Generics with Arrays

```ts
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

getFirstElement<number>([1, 2, 3]); // 1
getFirstElement<string>(["a", "b"]); // "a"
```

---

## Generics with Objects

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const user = { id: 1, name: "John" };

getProperty(user, "name"); // "John"
```

Here, `K extends keyof T` ensures that the key must exist in the object.

---

## Why Generics Are Important

Generics help to:

* Reduce code duplication
* Maintain strong type safety
* Improve code reusability
* Catch errors at compile time

---

## Conclusion

Generics allow developers to write flexible yet type-safe code. They eliminate redundancy and make applications easier to maintain.
