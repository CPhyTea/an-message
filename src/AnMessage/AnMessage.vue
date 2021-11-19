<template>
  <transition name="message-fade" @after-leave="handleAfterLeave">
    <div v-show="visible" class="an-message">
      <div class="icon-wrapper">
        <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"
             xmlns:xlink="http://www.w3.org/1999/xlink"
             class="error-icon" @click="close"
        >
          <!-- Generator: Sketch 60.1 (88133) - https://sketch.com -->
          <title>切片</title>
          <desc>Created with Sketch.</desc>
          <defs>
            <path
                d="M0,6.66666667 C0,10.3333333 3,13.3333333 6.66666667,13.3333333 L6.66666667,13.3333333 C10.3333333,13.3333333 13.3333333,10.3333333 13.3333333,6.66666667 L13.3333333,6.66666667 C13.3333333,3 10.3333333,0 6.66666667,0 L6.66666667,0 C3,0 0,3 0,6.66666667 L0,6.66666667 Z M9.06666667,3.33333333 L10,4.26733333 L7.6,6.66666667 L10,9.06666667 L9.06666667,10 L6.66666667,7.6 L4.26666667,10 L3.33333333,9.06666667 L5.73333333,6.66666667 L3.33333333,4.26733333 L4.26666667,3.33333333 L6.66666667,5.73266667 L9.06666667,3.33333333 Z"
                id="path-1"></path>
          </defs>
          <g id="手持设备端" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="登录/无权限" transform="translate(-32.000000, -548.000000)">
              <g id="通服/弹窗/全局提示/错误" transform="translate(16.000000, 536.000000)">
                <g id="icon/Close-Circle-Fill" transform="translate(16.000000, 12.000000)">
                  <g id="编组" transform="translate(1.333333, 1.333333)">
                    <mask id="mask-2" fill="white">
                      <use xlink:href="#path-1"></use>
                    </mask>
                    <g id="Clip-2"></g>
                    <polygon id="Fill-1" fill="#FF4D4F" mask="url(#mask-2)"
                             points="-3.33333333 16.6666667 16.6666667 16.6666667 16.6666667 -3.33333333 -3.33333333 -3.33333333"></polygon>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>

      <div class="message-text">{{ message }}</div>
    </div>
  </transition>

</template>

<script lang="ts" src="./AnMessage.ts">

</script>

<style lang="css" scoped src="./style.css">

</style>
