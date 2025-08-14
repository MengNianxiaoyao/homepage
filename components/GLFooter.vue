<script lang="ts" setup>
import GLFooter from 'valaxy-theme-gitlink/components/GLFooter.vue'
</script>

<template>
  <GLFooter>
    <div class="footer-powered" m="y-2">
        <span style="font-weight: bold;font-style: italic;">Powered by</span>
        <div class="footer-logo" style="gap: 20px;">
            <a href="https://vercel.com" i-logos-vercel></a>
            <a href="https://cloudflare.com" i-logos-cloudflare></a>
            <a href="https://edgeone.ai"><img src="https://edgeone.ai/media/34fe3a45-492d-4ea4-ae5d-ea1087ca7b4b.png" width="150px"></a>
        </div>
    </div>
  </GLFooter>
</template>

<style>
.footer-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 0.5rem;
}
</style>
