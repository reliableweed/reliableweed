<template>
  <div>
    <span @click="toggleMenu" class="f2">
      <!-- hamburger menu SVG, use preserveAspectRatio to make it scale to the size of the container -->
      <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" 
      v-show="!isDesktop"
      class="w3 h3">
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
          fill="white"
        />
      </svg>
    </span>
<div :class="tachyonsClass">
      <ul class="list ma0 pa3">
        <li class="mv4 ph3">
          <a href="#flowers">Flower</a>
        </li>
        <li class="mv4 ph3">
          <a href="#hash">Hash</a>
        </li>
        <li class="mv4 ph3">
          <a href="#hash">Extracts</a>
        </li>
        <li class="mv4 ph3">
          <a href="#pre-rolls">Pre-rolls</a>
        </li>
        <li class="mv4 ph3">
          <a href="#oil-cartridges">Oil Cartridges</a>
        </li>
        <li class="mv4 ph3">
          <a href="#edibles">Edibles</a>
        </li>
        <li class="mv4 ph3">
          <a href="#mushrooms">Mushrooms</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const sidebarOpen = ref(false)

// on mounted, check if we are on mobile, if so make sideBarOpen false, if not make it true
onMounted(() => {
  if (window.innerWidth < 600) {
    sidebarOpen.value = false
  } else {
    sidebarOpen.value = true
  }

  const isDesktop = computed(() => {
    return window.innerWidth > 600
  })
})

const tachyonsClass = computed(() => {
  return sidebarOpen.value ? 'w-100 w-third-l fl br b--black pr4 f2 vh-100-l' : 'dn'
})

function toggleMenu() {
  sidebarOpen.value = !sidebarOpen.value
}

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}
</script>