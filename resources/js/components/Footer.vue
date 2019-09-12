<template>
  <footer class="footer">
    <!-- ここでログアウトボタンを押した時に下のログアウトメソッドを呼び出すようにしている -->
    <button class="button button--link" @click="logout">Logout</button>
    <RouterLink class="button button--link" to="/login">
      Login / Register
    </RouterLink>
  </footer>
</template>

<script>
export default {
  methods: {
    async logout () {
      await this.$store.dispatch('auth/logout')

      this.$router.push('/login')
    }
  }
}
</script>