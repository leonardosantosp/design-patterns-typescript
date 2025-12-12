import { Notifier } from "../interface/notifier.interface";

export class EmailNotifier implements Notifier {
    send(message: string) {
        console.log(`Send email: ${message}`)
    }
}
