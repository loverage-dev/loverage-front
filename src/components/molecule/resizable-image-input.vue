<template>
  <input
    ref="input"
    type="file"
    accept="image/gif,image/jpeg,image/jpg,image/png"
    @change="resize()"
  >
</template>

<script>
// import base64ToBlob from 'b64-to-blob' // https://www.npmjs.com/package/b64-to-blob

export default {
  name: "ResizableImageInput",
  props: {
    drawImageArgs: {
      type: Function,
      required: true
    }
  },
  watch: {
      '$store.state.post_input.img_base64': function(value) {
        if(value == ''){
          global.$("input[type=file]").val("");
        }else{
          this.$store.commit("changeInputState", true);
        }
      },
      deep: true
  },
  methods: {
    resize () {
      const file = this.$refs.input.files[0]

      if (!file) {
        this.$emit('resized', { 'base64': '' })
        return
      }

      const reader = new FileReader()

      reader.onload = (event) => {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        const image = new Image()
        image.crossOrigin = 'Anonymous'

        image.onload = () => {
          const drawImageArgs = this.drawImageArgs(image)

          if (drawImageArgs.length === 9) {
            canvas.width = drawImageArgs[7]
            canvas.height = drawImageArgs[8]
          }

          ctx.drawImage(...drawImageArgs)

          const base64 = canvas.toDataURL()
          // this.$emit('resized', { base64, blob: base64ToBlob(base64.replace(/^.*,/, '')) })
          this.$emit('resized', { base64 })
        }

        image.src = event.target.result
      }

      reader.readAsDataURL(file)
    }
  }
}
</script>