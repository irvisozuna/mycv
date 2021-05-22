<template>
  <section>
    <main class="l-main">
        <Home/>
        <About/>
        <Skills/>
        <Work/>
        <Contact/>
    </main>
  </section>
</template>
<script>
import Contact from "@/components/Contact"
import Work from "@/components/Work"
import Skills from "@/components/Skills"
import About from "@/components/About"
import Home from "@/components/Home"

export default {
  components: {
    Contact,
    Work,
    Skills,
    About,
    Home,
  }
}
</script>

