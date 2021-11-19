import {Component, Vue, Watch} from 'vue-property-decorator';

@Component({name: 'AnMessage'})
export default class extends Vue {
    // 是否可见
    visible: boolean = false;

    // 消息
    message: string = '';

    // 是否已经关闭
    closed: boolean = false;

    // 倒计时计时器
    timer: number | null = null;

    // 倒计时时长
    duration: number = 3000;

    // 动画结束，删除组件
    handleAfterLeave() {
        this.$destroy();
        this.$el.parentNode!.removeChild(this.$el);
    }

    // 关闭
    close() {
        this.closed = true;
    }

    @Watch('closed')
    setVisible(value: boolean) {
        if (!value) return;
        this.visible = false;
    }

    // 开始计时
    startTimer() {
        if (this.duration > 0) {
            this.timer = window.setTimeout(() => {
                if (this.closed) return;
                this.close();
            }, this.duration);
        }
    }

    mounted() {
        this.startTimer();
    }
}
