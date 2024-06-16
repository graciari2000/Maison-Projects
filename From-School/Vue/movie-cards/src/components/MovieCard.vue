<template>
  <div class="movie-card">
    <div class="movie-image-wrapper">
      <img :src="movie.image" alt="Movie Poster" class="movie-image" />
    </div>
    <div class="movie-details">
      <div class="movie-date">{{ movie.date }}</div>
      <div class="movie-category">{{ movie.category }}</div>
      <h2 class="movie-title">{{ movie.title }}</h2>
      <p class="movie-resume">{{ movie.resume }}</p>
      <div class="movie-actions">
        <span class="movie-likes">👍 {{ movie.nbLike }}</span>
        <span class="movie-comments">💬 {{ movie.comment }}</span>
        <a :href="movie.trailer" target="_blank" class="movie-trailer">🎬 Watch Trailer</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    movie: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.movie-card {
  position: relative;
  width: 300px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 16px;
  color: white;
  background-color: #000;
}

.movie-image-wrapper {
  position: relative;
}

.movie-image {
  width: 100%;
  height: auto;
  display: block;
}

.movie-details {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
  padding: 16px;
}

.movie-date, .movie-category, .movie-title, .movie-resume, .movie-actions {
  margin: 0;
}

.movie-date {
  font-size: 12px;
  opacity: 0.7;
}

.movie-category {
  font-size: 14px;
  font-weight: bold;
}

.movie-title {
  font-size: 18px;
  margin: 8px 0;
}

.movie-resume {
  font-size: 14px;
  opacity: 0.9;
}

.movie-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.movie-actions .movie-likes, .movie-actions .movie-comments {
  font-size: 14px;
}

.movie-actions .movie-trailer {
  color: #ff4500;
  text-decoration: none;
}
</style>