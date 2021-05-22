<template>
  <!--===== FOOTER =====-->
  <footer class="footer">
      <p class="footer__title">Irvis Ozuna</p>
      <div class="footer__social">
          <a href="#" class="footer__icon"><i class='bx bxl-facebook' ></i></a>
          <a href="#" class="footer__icon"><i class='bx bxl-instagram' ></i></a>
          <a href="#" class="footer__icon"><i class='bx bxl-twitter' ></i></a>
      </div>
      <p>&#169; {{year}} copyright all right reserved</p>
  </footer>
</template>

<script>
export default {
  data(){
    return {
      year:new Date().getFullYear()
    }
  }
}
</script>

