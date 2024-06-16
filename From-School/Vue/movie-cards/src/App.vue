<template>
  <div id="app">
    <header>
      <h1> Movie Cards</h1>
    </header>
    <div class="movies-container">
      <MovieCard v-for="movie in paginatedMovies" :key="movie.id" :movie="movie" />
    </div>
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>
  </div>
</template>

<script>
import MovieCard from './components/MovieCard.vue';

export default {
  name: 'App',
  components: {
    MovieCard
  },
  data() {
    return {
       movies: [
        {
          id: "4365",
          title: "Le Roi",
          date: "24 septembre 2019",
          category: "Drame historique",
          resume: "Dans l'Angleterre du 15e siècle, Hal, un prince capricieux et bon à rien, devient un roi puissant lorsqu'il hérite à contrec?ur du trône et de ses conflits",
          like: false,
          nbLike: 18,
          comment: 3,
          bookmark: false,
          trailer: "https://www.youtube.com/watch?v=bVH7LurFHHc",
          image: "images/the-king.jpg"
        },
        {
          id: "5307",
          title: "Joker",
          date: "09 Octobre 2019",
          category: "Drame / Thriller",
          resume: "A Gotham City, Arthur Fleck, un comédien de stand-up raté. Méprisé de tous et bafoué, il bascule peu à peu dans la folie pour devenir le Joker, un dangereux tueur psychotique.",
          like: false,
          nbLike: 7,
          comment: 1,
          bookmark: false,
          trailer: "https://www.youtube.com/watch?v=zAGVQLHvwOY",
          image: "images/joker.jpg"
        },
        {
          id: "6798",
          title: "Docteur Sleep",
          date: "30 Octobre 2019",
          category: "Fantasy / Thriller",
          resume: "Suite de Shining dans laquelle Danny, devenu adulte, est encore traumatisé et souffre de problèmes d'alcoolisme et de gestion de la colère. Comme son père.",
          like: false,
          nbLike: 10,
          comment: 6,
          bookmark: false,
          trailer: "https://www.youtube.com/watch?v=BOzFZxB-8cw",
          image: "images/docteur-sleep.jpg"
        }
      ],
      currentPage: 1,
      itemsPerPage: 10
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.movies.length / this.itemsPerPage);
    },
    paginatedMovies() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.movies.slice(start, end);
    }
  },
  created() {
    fetch('../public/movies.txt')
      .then(response => {
        console.log('Fetch response:', response); // Logging fetch response
        return response.json();
      })
      .then(data => {
        console.log('Movies data:', data); // Logging fetched data
        this.movies = data;
      })
      .catch(error => console.error('Error fetching movies:', error));
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    }
  }
};
</script>

<style>
#app {
  text-align: center;
  margin-top: 20px;
}
header {
  background-color: #f8f9fa;
  padding: 20px;
  border-bottom: 1px solid #dee2e6;
}
.movies-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
}
.pagination {
  margin: 20px 0;
}
.pagination button {
  margin: 0 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>