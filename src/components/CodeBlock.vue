<!-- MonacoEditor.vue -->
<template>
  <div
    ref="editorContainer"
    class="monaco-container"
    :style="{ height: height }"
  ></div>
</template>

<script setup>
import { onMounted, ref, watch, onUnmounted } from 'vue';
import * as monaco from 'monaco-editor';

// Import workers for better performance
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';

// Set up workers
self.MonacoEnvironment = {
  getWorker(_, label) {
    if (label === 'json') return new jsonWorker();
    if (label === 'css' || label === 'scss' || label === 'less') return new cssWorker();
    if (label === 'html' || label === 'handlebars' || label === 'razor') return new htmlWorker();
    if (label === 'typescript' || label === 'javascript') return new tsWorker();
    return new editorWorker();
  }
};

const props = defineProps({
  code: { type: String, required: true },
  language: { type: String, default: 'javascript' },
  theme: { type: String, default: 'vs-dark' }, // 'vs', 'vs-dark', 'hc-black'
  readOnly: { type: Boolean, default: true },
  height: { type: String, default: '400px' },
  minimap: { type: Boolean, default: false },
  lineNumbers: { type: String, default: 'on' }, // 'on', 'off', 'relative'
  fontSize: { type: Number, default: 14 }
});

const emit = defineEmits(['update:code']);

const editorContainer = ref(null);
let editor = null;

onMounted(() => {
  editor = monaco.editor.create(editorContainer.value, {
    value: props.code,
    language: props.language,
    theme: props.theme,
    readOnly: props.readOnly,
    minimap: { enabled: props.minimap },
    scrollBeyondLastLine: false,
    fontSize: props.fontSize,
    fontFamily: 'JetBrains Mono, Fira Code, Consolas, monospace',
    automaticLayout: true,
    lineNumbers: props.lineNumbers,
    renderLineHighlight: 'none',
    scrollbar: {
      vertical: 'auto',
      horizontal: 'auto',
      useShadows: false,
      verticalHasArrows: false,
      horizontalHasArrows: false
    },
    overviewRulerBorder: false,
    hideCursorInOverviewRuler: true,
    overviewRulerLanes: 0
  });

  // Listen for content changes if not read-only
  if (!props.readOnly) {
    editor.onDidChangeModelContent(() => {
      emit('update:code', editor.getValue());
    });
  }
});

watch(() => props.code, (newCode) => {
  if (editor && editor.getValue() !== newCode) {
    editor.setValue(newCode);
  }
});

watch(() => props.language, (newLang) => {
  if (editor) {
    monaco.editor.setModelLanguage(editor.getModel(), newLang);
  }
});

watch(() => props.theme, (newTheme) => {
  if (editor) {
    monaco.editor.setTheme(newTheme);
  }
});

onUnmounted(() => {
  if (editor) {
    editor.dispose();
  }
});
</script>

<style scoped>
.monaco-container {
  border-radius: 8px;
  overflow: hidden;
}
</style>
