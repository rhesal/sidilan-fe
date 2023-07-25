<script setup>

</script>

<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div class="container">
        <router-link :to="{ name: 'home' }" class="navbar-brand">SIDILAN</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link :to="{ name: 'pages.peserta' }" class="nav-link" aria-current="page">Beranda</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: '' }" class="nav-link" aria-current="page">Jadwal</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: '' }" class="nav-link" aria-current="page">Panduan</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: '' }" class="nav-link" aria-current="page">Kontak</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'posts.index' }" class="nav-link active" aria-current="page">POSTS</router-link>
            </li>
          </ul>
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0" role="search">
            <a
              href=""
              target="_blank"
              class="btn btn-success"
              >Masuk</a>
          </ul>
        </div>
      </div>
    </nav>

    <!--- render router view -->
    <router-view></router-view>

    <footer class="bg-dark py-4 text-white text-center">
      <p>Hak Cipta © {{ currentYear }} Nama Perusahaan. Seluruh Hak Cipta Dilindungi.</p>
    </footer>
  </div>
</template>