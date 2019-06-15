<template>
  <section class="container">
    <nuxt-link to="/">home</nuxt-link>
    <button @click="showSwal('basic')">basic</button>
    <button @click="showSwal('notBasic')">notBasic</button>
    <button @click="showSwal('timerCustomFunction')">timerCustomFunction</button>
  </section>
</template>

<script>
import Swal from 'sweetalert2/dist/sweetalert2.min.js';
export default {
  data() {
    return {
      timerInterval: 0,
      test: 'test',
    }
  },
  created() {
  },
  methods: {
    showSwal(swalName) {
      this[swalName]();
    },
    basic() {
      this.$swal('Any fool can use a computer')
    },
    notBasic() {
      this.$swal('notBasic')
    },
    timerCustomFunction() {
      const parent = this;
      this.$swal({
      title: 'Auto close alert!',
      html:
        'I will close in <strong></strong> seconds.<br/><br/>' +
        '<button id="increase" class="btn btn-warning">' +
          'I need 5 more seconds!' +
        '</button><br/>' +
        '<button id="stop" class="btn btn-danger">' +
          'Please stop the timer!!' +
        '</button><br/>' +
        '<button id="resume" class="btn btn-success" disabled>' +
          'Phew... you can restart now!' +
        '</button><br/>' +
        '<button id="toggle" class="btn btn-primary">' +
          'Toggle' +
        '</button>',
      timer: 10000,
      onBeforeOpen: function() {
        const content = Swal.getContent()
        const $ = content.querySelector.bind(content)

        const stop = $('#stop')
        const resume = $('#resume')
        const toggle = $('#toggle')
        const increase = $('#increase')

        Swal.showLoading()

        function toggleButtons () {
          stop.disabled = !Swal.isTimerRunning()
          resume.disabled = Swal.isTimerRunning()
        }

        stop.addEventListener('click', () => {
          Swal.stopTimer()
          toggleButtons()
        })

        resume.addEventListener('click', () => {
          Swal.resumeTimer()
          toggleButtons()
        })

        toggle.addEventListener('click', () => {
          Swal.toggleTimer()
          toggleButtons()
        })

        increase.addEventListener('click', () => {
          Swal.increaseTimer(5000)
        })

        parent.timerInterval = setInterval(() => {
          Swal.getContent().querySelector('strong')
            .textContent = (Swal.getTimerLeft() / 1000)
              .toFixed(0)
        }, 100)
      },
      onClose: () => {
        clearInterval(parent.timerInterval)
      }
    })
    }
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
