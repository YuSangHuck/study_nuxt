<template>
  <div class="test-editor">
    <!-- <figure class="image"><img src="https://precium.io/img/MarkJang.cd19bf1d.png"><figcaption>캡션을 달아봣슴다</figcaption></figure><p>이분은 장뽀현</p> -->
    <!-- <no-ssr> -->
    <ckeditor v-model="content" :editor="editor" :config="editorConfig" :disabled="true"/>
    <!-- </no-ssr> -->
  </div>
</template>

<script lang='js'>
import Vue from 'vue';
import Component from 'nuxt-class-component';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
let ClassicEditor, CKEditor;
if (process.client) {
  CKEditor = require('@ckeditor/ckeditor5-vue')
  ClassicEditor = require('@ckeditor/ckeditor5-build-classic');
}
@Component({
  components : {
    ckeditor: process.client ? CKEditor.component : null,
  },
})
export default class TestEditor extends Vue {
  editor = {};
  editorConfig = {};
  content = `<figure class="image"><img src="https://precium.io/img/MarkJang.cd19bf1d.png"><figcaption>캡션을 달아봣슴다</figcaption></figure><p>이분은 장뽀현</p>
  <figure class="image"><img src="https://precium.io/img/MarkJang.cd19bf1d.png"><figcaption>캡션을 달아봣슴다</figcaption></figure><p>이분은 장뽀현</p>
  <figure class="image"><img src="https://precium.io/img/MarkJang.cd19bf1d.png"><figcaption>캡션을 달아봣슴다</figcaption></figure><p>이분은 장뽀현</p>
  <figure class="image"><img src="https://precium.io/img/MarkJang.cd19bf1d.png"><figcaption>캡션을 달아봣슴다</figcaption></figure><p>이분은 장뽀현</p>
  <figure class="image"><img src="https://precium.io/img/MarkJang.cd19bf1d.png"><figcaption>캡션을 달아봣슴다</figcaption></figure><p>이분은 장뽀현</p>`
  created() {
    if (process.client) {
      this.editor = ClassicEditor;
      this.editorConfig = {
        toolbar: [],
      };
    }
  };
}
</script>

<style lang="scss" scoped>
::v-deep .ck-content.ck-editor__editable {
  width: 70vw;
  // height: 80vh;
}
</style>
