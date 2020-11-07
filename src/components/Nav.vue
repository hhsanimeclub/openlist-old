<template>
  <div
    id="nav"
    class="nav nav-unscoped"
    style="transition: background 0.8s ease 0s, top 0.5s ease 0s;"
  >
    <div class="wrap guest">
      <a href="/" class="logo router-link-exact-active router-link-active"
        ><img src="/img/icons/icon.svg"
      /></a>
      <div class="links">
        <span class="browse-wrap">
          <a href="/search/anime" class="link">browse</a>
          <div class="dropdown">
            <div class="primary-links">
              <div class="primary-link">
                <a href="/search/anime">
                  <font-awesome-icon :icon="['fas', 'play']" />
                </a>
                <section>
                  <a href="/search/anime" class="primary-link-text">
                    Anime
                  </a>
                  <div class="secondary-links">
                    <a href="/search/anime/top-100">Top 100</a>
                    <a href="/search/anime/trending">Trending</a>
                    <a href="/search/anime/top-movies">Top Movies</a>
                  </div>
                </section>
              </div>
              <div class="primary-link">
                <a href="/search/manga">
                  <font-awesome-icon :icon="['fas', 'book-open']" />
                </a>
                <section>
                  <a href="/search/manga" class="primary-link-text">
                    Manga
                  </a>
                  <div class="secondary-links">
                    <a href="/search/manga/top-100">Top 100</a>
                    <a href="/search/manga/trending">Trending</a>
                    <a href="/search/manga/top-manhwa">Top Manhwa</a>
                  </div>
                </section>
              </div>
            </div>
            <div class="footer">
              <a href="/search/staff">
                <font-awesome-icon :icon="['fas', 'user-tie']" />
                Staff
              </a>
              <a href="/search/characters">
                <font-awesome-icon :icon="['fas', 'user-astronaut']" />
                Characters
              </a>
              <a href="/reviews">
                <font-awesome-icon :icon="['fas', 'star']" />
                Reviews
              </a>
              <a href="/recommendations">
                <font-awesome-icon :icon="['fas', 'thumbs-up']" />
                Recommendations
              </a>
            </div>
          </div>
        </span>
        <a href="/social" class="link">social</a>
        <a href="/forum/overview" class="link">forum</a>
        <a href="/login" class="link login">Login</a>
        <a href="/signup" class="link signup">Sign Up</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
