import { NotifierFactory } from './factory-method/notifier-factory'

function main() {
    const emailNotifier = NotifierFactory.create('email')
    emailNotifier.send("Enviando email!")

    const smsNotifier = NotifierFactory.create('sms')
    smsNotifier.send("Enviando sms!")
}

main()
