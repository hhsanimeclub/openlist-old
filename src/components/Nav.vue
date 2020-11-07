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

<style lang="scss">
.nav {
	display: flex;
	height: 75px;
	justify-content: center;
	left: 0;
	position: fixed;
	top: 0;
	transition: background .8s ease, color .2s;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none;
	width: 100%;
	z-index: 999;
}

.wrap {
	align-items: center;
	display: flex;
	height: 100%;
	margin-left: 50px;
	margin-right: 50px;
	max-width: 1050px;
	width: 100%;
}

.links {
	align-items: center;
	display: inline-flex;
	font-family: Overpass, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	font-size: 1.4rem;
	font-weight: 600;
	justify-content: center;
	text-transform: capitalize;
	width: 100%;
}

.link {
	letter-spacing: .01em;
	padding: 18px 16px;
}

.logo img {
	height: 50px;
	width: 50px;
}

.nav .router-link-active {
	color: rgb(var(--color-text));
}

.browse-wrap,
.user-wrap {
	position: relative;
}

.browse-wrap:hover .dropdown,
.user-wrap:hover .dropdown {
	animation: dropdown-in-data-v-4fbac4e1 .25s;
	opacity: 1;
	pointer-events: auto;
	-webkit-user-select: auto;
	-ms-user-select: auto;
	user-select: auto;
}

.browse-wrap:hover:after,
.user-wrap:hover:after {
	content: "";
	height: 20px;
	left: 0;
	position: absolute;
	width: 150%;
	top: 100%;
}
</style>