import Vue from 'vue';
import Message from './AnMessage.vue';

const MessageConstructor = Vue.extend(Message);

let instance: any = null;

export type MessageType = 'success' | 'warning' | 'info' | 'error'

interface AnMessageOptions {
    message: string;
    type: MessageType;
    duration: number;
}

export class AnMessage {
    constructor(options: string | Partial<AnMessageOptions>) {
        if (!options) return;
        if (typeof options === 'string') {
            options = {message: options}
        }
        instance = new MessageConstructor({ data: options })
        instance.$mount();
        document.body.appendChild(instance.$el);
        instance.visible = true;
        return instance
    }

    static error(options: string | Partial<AnMessageOptions>) {
        if (typeof options === 'string') {
            options = { message: options }
        }
        return new AnMessage({
            ...options,
            type: 'success'
        })
    }
}
