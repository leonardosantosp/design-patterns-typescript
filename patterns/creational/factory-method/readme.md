# Factory Method Pattern – Notification Example

This project demonstrates the **Factory Method Design Pattern** using a simple notification system (Email and SMS). The goal is to show how the factory method helps decouple object creation from business logic, improving flexibility, maintainability, and scalability.

---

## 📌 What Is the Factory Method Pattern?

The **Factory Method** is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses or dedicated factory classes to decide which specific class to instantiate.

In practice, it helps you:

* Avoid using `new` directly throughout your code.
* Isolate object creation in a single place.
* Swap implementations without changing your project's core logic.
* Add new types easily without breaking existing code.

---

## 🧠 Why Use It Here?

In this project, we have different types of **Notifiers**:

* `EmailNotifier`
* `SmsNotifier`

If your application creates these classes using `new EmailNotifier()` everywhere, your system becomes tightly coupled to the concrete implementation.

By using a **factory**, all object creation happens in one place:

```ts
const notifier = NotifierFactory.create('email');
```

If you ever switch to SMS, WhatsApp, Push Notification, or any other channel, you only change the factory — not the entire codebase.

---

## 🏗️ Project Structure

```
src/
  interface/
    notifier.interface.ts

  notifiers/
    email-notifier.ts
    sms-notifier.ts

  factory-method/
    notifier-factory.ts

  main.ts
```

---

## 🧩 Interface

All notifiers implement the same interface, ensuring consistency.

```ts
export interface Notifier {
  send(message: string): void;
}
```

---

## 📬 Concrete Implementations

### EmailNotifier

```ts
export class EmailNotifier implements Notifier {
  send(message: string) {
    console.log(`Send email: ${message}`);
  }
}
```

### SmsNotifier

```ts
export class SmsNotifier implements Notifier {
  send(message: string) {
    console.log(`Send SMS: ${message}`);
  }
}
```

---

## 🏭 Factory Method

```ts
export class NotifierFactory {
  static create(type: 'email' | 'sms') {
    switch (type) {
      case 'email':
        return new EmailNotifier();
      case 'sms':
        return new SmsNotifier();
      default:
        throw new Error('Invalid notification type');
    }
  }
}
```

This factory:

* Centralizes object creation
* Reduces coupling
* Makes it easier to add new notifiers later

---

## ▶️ Usage Example

```ts
function main() {
  const emailNotifier = NotifierFactory.create('email');
  emailNotifier.send("Enviando email!");

  const smsNotifier = NotifierFactory.create('sms');
  smsNotifier.send("Enviando sms!");
}

main();
```

---

## 🚀 Benefits of Using the Factory Method Here

### ✔ Single Responsibility

Creation logic is isolated from business logic.

### ✔ Open/Closed Principle

You can add new notifiers without modifying existing code.

### ✔ Easier Refactoring

To switch the default notification type, you update just the factory.

### ✔ Cleaner Codebase

No scattered `new ClassName()` calls.

---

## 💡 Adding a New Notification Type

For example, a `PushNotifier`:

1. Create a new class implementing the `Notifier` interface.
2. Add a new case to the factory.
3. Use it with `NotifierFactory.create('push')`.

No other file changes are required.

---

## 🧪 Running the Project

```
npm install
npx ts-node main.ts
```

---

## 📘 Summary

The **Factory Method Pattern** helps you:

* Control object creation
* Swap concrete implementations easily
* Keep your code extensible and clean

This simple example shows how the pattern solves everyday design problems in real applications.

---

Feel free to extend the project and add new notification methods!
