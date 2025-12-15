import { Notifier } from "../interface/notifier.interface";
import { EmailNotifier } from "../notifiers/email-notifier";
import { SmsNotifier } from "../notifiers/sms-notifier";

export class NotifierFactory {
    static create(type: 'email' | 'sms'): Notifier {
        switch (type) {
            case 'email':
                return new EmailNotifier()
            case 'sms':
                return new SmsNotifier
            default:
                throw new Error('Invalid notification type')
        }
    }
}
