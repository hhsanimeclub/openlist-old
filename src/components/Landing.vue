<template>
  <div class="landing">
    <h1 class="heading">
      <span>OpenList: </span> Reverse-enginnering AniList one step at a time
    </h1>
    <h2 class="sub-heading">
      Track, share, and discover your favorite anime and manga, all on an
      open-source website.
    </h2>
    <div class="feature-cards">
      <div class="feature-card">
        <div class="icon">
          <img src="/img/landing/stats.svg" />
        </div>
        <div>
          <h3 class="title">Discover the best shows</h3>
          <div class="description">
            What do you like to watch? Who are your favorite voice actors? Watch
            your habits over time with detailed statistics.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.landing {
  background: #0a1625;
  border-radius: 20px;
  font-family: Overpass, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  margin: 0 auto;
  margin-bottom: 70px;
  max-width: 1100px;
  overflow: visible;
  padding: 60px 80px;
  width: 100%;
}

.feature-cards {
  display: grid;
  grid-gap: 70px 60px;
  grid-template-columns: repeat(2, minmax(300px, 400px));
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 90px;
  margin-top: 85px;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.feature-card {
  display: grid;
  grid-template-columns: 80px auto;
  grid-gap: 40px;
}

.title {
  color: #ecf6fe;
  font-size: 1.8rem;
  font-weight: 600;
  margin: 0;
  margin-bottom: 8px;
  padding: 0;
}

.description {
  color: #acd5f2;
  font-size: 1.4rem;
  line-height: 146%;
}

.heading {
  color: #f0f3f6;
  font-size: 3.2rem;
  font-weight: 700;
  margin: 0 auto;
  margin-bottom: 20px;
  text-align: center;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.heading span {
  display: none;
}

.sub-heading {
  color: #acd5f2;
  font-size: 2.1rem;
  line-height: 142%;
  margin: 0 auto;
  max-width: 370px;
  text-align: center;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
