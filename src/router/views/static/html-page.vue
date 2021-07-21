<template>
  <div>
    <!-- パンくずリンクのCSSを読み込むため、非表示で要素を配置する -->
    <v-breadcrumbs class="d-none"></v-breadcrumbs>
    <div id="contents" v-html="includeHtml"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { ref, onMounted, onUpdated } from '@vue/composition-api';
import IncludeFileService from '@/logic/include-file.service';

export default Vue.extend({
  name: 'html-page',
  setup: (props, context) => {
    const route = context.root.$route;
    const includeHtml = ref<string>('');

    // インクルードファイルを取得
    const path = route.path.replace('ec', 'ec/static-html');
    IncludeFileService.fetchStaticHtmlFile(path).then((response) => {
      const dom = new DOMParser().parseFromString(response, 'text/html');

      const titles = dom.getElementsByTagName('title');
      if (titles && titles[0].textContent?.toString()) {
        document.title = titles[0].textContent?.toString();
      }

      const styles = dom.querySelectorAll('style');
      let style = '';
      styles.forEach((elem) => (style += elem.outerHTML));
      const html = dom.getElementById('contents')?.innerHTML || '';
      includeHtml.value = style + html;
    });

    /**
     * iframeを埋め込む。
     * 別の静的ページを参照しているものは、中身のみを埋め込む（これをしないと、ヘッダ／フッタが含まれた状態で埋め込まれるため）。
     */
    const embedIframe = async () => {
      const iframes = context.root.$el.querySelectorAll('iframe');
      iframes.forEach(async (iframe) => {
        const parentNode = iframe.parentNode;
        if (parentNode) {
          if (iframe.src.endsWith('.html')) {
            const alternativeNode = document.createElement('div');
            alternativeNode.className = iframe.className;
            alternativeNode.innerHTML = await IncludeFileService.fetchStaticHtmlFile(iframe.src);
            parentNode.replaceChild(alternativeNode, iframe);
          }
        }
      });
    };

    /**
     * v:htmlだとスクリプトが実行されないため、個別に実行する。
     */
    const runScript = () => {
      const scripts = context.root.$el.querySelectorAll('script');
      scripts.forEach((script) => {
        const parentNode = script.parentNode;
        const alternativeNode = document.createElement('script');
        if (parentNode) {
          if (script.src) {
            alternativeNode.src = script.src;
          } else {
            alternativeNode.textContent = script.textContent;
          }
          parentNode.replaceChild(alternativeNode, script);
        }
      });
    };

    /**
     * ページ内遷移を行う。
     */
    const scroll = () => {
      if (location.hash) {
        // レンダリングが完了するまでサイズが安定しないため、少し待つ
        setTimeout(() => {
          const id = location.hash.replace(/^#/g, '');
          const targetDom = document.getElementById(id);
          if (targetDom) {
            if ('scrollBehavior' in document.documentElement.style) {
              return window.scrollTo({ top: targetDom.offsetTop, behavior: 'smooth' });
            } else {
              return window.scrollTo(0, targetDom.offsetTop);
            }
          }
        }, 100);
      }
    };

    /**
     * HTMLレンダリング時に行う処理。
     */
    const onRender = () => {
      embedIframe();
      runScript();
      scroll();
    };

    onMounted(() => onRender());
    onUpdated(() => onRender());

    return {
      includeHtml
    };
  }
});
</script>
