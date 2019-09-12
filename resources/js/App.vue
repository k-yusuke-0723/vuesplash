<template>
<!-- このファイルがルートコンポーネント -->
<!-- ルートコンポーネントとは、コンポーネントツリーの頂上に位置し、 -->
<!-- <div id="app"></div> にこのコンポーネントが描画される -->
  <div>
    <header>
      <Navbar />
    </header>
    <main>
      <div class="container">
        <!-- URLが変わるたびに<RouterView />の部分に、URLに対応するHTML部品が入れ替わって描画される -->
        <RouterView />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>