<template>
  <div class="wrap">
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
              What do you like to watch? Who are your favorite voice actors?
              Watch your habits over time with detailed statistics.
            </div>
          </div>
        </div>
        <div class="feature-card">
          <div class="icon">
            <img src="/img/landing/apps.svg" />
          </div>
          <div>
            <h3 class="title">Bring the app anywhere</h3>
            <div class="description">
              Use OpenList on Android, Linux, Windows, and MacOS! As an added
              bonus, all of these apps have their sources available on GitHub.
            </div>
          </div>
        </div>
        <div class="feature-card">
          <div class="icon">
            <img src="/img/landing/social.svg" />
          </div>
          <div>
            <h3 class="title">Join the discussion</h3>
            <div class="description">
              Communicate with other people in forums for each anime or manga.
            </div>
          </div>
        </div>
        <div class="feature-card">
          <div class="icon">
            <img src="/img/landing/custom.svg" />
          </div>
          <div>
            <h3 class="title">Make it yours</h3>
            <div class="description">
              Customize the color scheme, the title format, your scoring system,
              and much more! Dark mode included, vampires rejoice!
            </div>
          </div>
        </div>
      </div>
      <a href="/signup" class="join-btn">
        <div class="label">
          Join Now
        </div>
        <div class="circle">
          <font-awesome-icon :icon="['fas', 'chevron-right']" />
        </div>
      </a>
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

.wrap {
  margin-top: 50px;
}

.join-btn {
  align-items: center;
  background: #3577ff;
  border-radius: 30px;
  box-shadow: 0 2px 40px rgba(0, 0, 0, 0.4);
  display: grid;
  grid-template-columns: auto 38px;
  height: 49px;
  padding-left: 20px;
  padding-right: 7px;
  width: 200px;
  margin: 0 auto;
  margin-bottom: -78px;
  transition: box-shadow 0.4s ease;
}

.join-btn .label {
  color: #f7fafc;
  font-size: 1.8rem;
  font-weight: 800;
  text-align: center;
}

.join-btn .circle {
  background: #d9e6ff;
  color: #3577ff;
  font-size: 2rem;
  height: 37px;
  padding-left: 3px;
  width: 37px;
}

.join-btn:hover {
  box-shadow: 0 2px 43px rgba(8, 150, 230, 0.6);
}

@media (max-width: 1040px) {
  .wrap {
    margin-top: 0;
  }
}

@media (max-width: 1040px) {
  .landing {
    border-radius: 0;
    padding: 70px 50px;
  }
}

@media (max-width: 760px) {
  .landing {
    padding: 70px 40px;
    padding-bottom: 30px;
  }
}

@media (max-width: 410px) {
  .landing {
    padding: 70px 30px;
  }
}

@media (max-width: 350px) {
  .landing {
    padding: 70px 15px;
  }
}

@media (max-width: 350px) {
  .heading {
    font-size: 2.4rem;
  }
}

@media (max-width: 350px) {
  .sub-heading {
    font-size: 1.8rem;
  }
}

@media (max-width: 760px) {
  .feature-cards {
    grid-template-columns: minmax(200px, 500px);
    grid-gap: 50px;
    margin-top: 70px;
  }
}

@media (max-width: 350px) {
  .feature-card {
    grid-gap: 15px;
  }
}

@media (max-width: 1040px) {
  .join-btn {
    margin-bottom: -90px;
  }
}

@media (max-width: 760px) {
  .join-btn {
    margin-bottom: -50px;
  }
}

@media (max-width: 410px) {
  .join-btn {
    margin-bottom: -90px;
  }
}
</style>
