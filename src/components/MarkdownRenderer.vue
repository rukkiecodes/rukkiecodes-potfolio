<template>
  <div class="markdown-content" v-html="renderedMarkdown"></div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
import hljs from 'highlight.js/lib/core';

// Import languages you need
import javascript from 'highlight.js/lib/languages/javascript';
import bash from 'highlight.js/lib/languages/bash';
import typescript from 'highlight.js/lib/languages/typescript';
import json from 'highlight.js/lib/languages/json';
import css from 'highlight.js/lib/languages/css';
import html from 'highlight.js/lib/languages/xml';

// Import theme
import 'highlight.js/styles/github-dark.css';

// Register languages
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('json', json);
hljs.registerLanguage('css', css);
hljs.registerLanguage('html', html);

const props = defineProps({
  content: { type: String, required: true }
});

// Configure marked with syntax highlighting
marked.use(markedHighlight({
  langPrefix: 'hljs language-',
  highlight(code, lang) {
    const language = hljs.getLanguage(lang) ? lang : 'plaintext';
    return hljs.highlight(code, { language }).value;
  }
}));

// Configure marked options
marked.setOptions({
  breaks: true,
  gfm: true
});

const renderedMarkdown = computed(() => {
  return marked.parse(props.content);
});
</script>

<style scoped>
.markdown-content {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: #b3b2b2;
  max-width: 100%;
}

/* Markdown Typography */
.markdown-content :deep(h1) {
  font-size: 2rem;
  font-weight: 700;
  margin: 2rem 0 1rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #eaecef;
}

.markdown-content :deep(h2) {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 1.5rem 0 1rem 0;
  padding-bottom: 0.3rem;
  border-bottom: 1px solid #eaecef;
}

.markdown-content :deep(h3) {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 1rem 0 0.5rem 0;
}

.markdown-content :deep(p) {
  margin: 0.8rem 0;
}

.markdown-content :deep(strong) {
  font-weight: 600;
}

.markdown-content :deep(em) {
  font-style: italic;
}

/* Inline code */
.markdown-content :deep(code) {
  padding: 0.2em 0.4em;
  border-radius: 3px;
  font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
  font-size: 0.85em;
  color: #e83e3e;
}

/* Code blocks */
.markdown-content :deep(pre) {
  background: #0d1117;
  border-radius: 8px;
  padding: 1rem;
  overflow-x: auto;
  margin: 1rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.markdown-content :deep(pre code) {
  background: transparent;
  padding: 0;
  color: inherit;
  font-size: 14px;
  line-height: 1.5;
}

/* Lists */
.markdown-content :deep(ul) {
  padding-left: 2rem;
  margin: 1rem 0;
}

.markdown-content :deep(ol) {
  padding-left: 2rem;
  margin: 1rem 0;
}

.markdown-content :deep(li) {
  margin: 0.25rem 0;
}

/* Horizontal rule */
.markdown-content :deep(hr) {
  border: none;
  height: 1px;
  background: #eaecef;
  margin: 2rem 0;
}

/* Blockquotes */
.markdown-content :deep(blockquote) {
  border-left: 4px solid #dfe2e5;
  padding-left: 1rem;
  margin: 1rem 0;
  color: #6a737d;
  font-style: italic;
}
</style>
