import { Notifier } from "../interface/notifier.interface";

export class SmsNotifier implements Notifier {
    send(message: string): void {
        console.log(`Send SMS: ${message}`)
    }
}
