<template>
  <div id="app">
    <table border="1">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prénom</th>
          <th>Company</th>
          <th>Counter</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(entry, index) in paginatedEntries" :key="index">
          <td><input v-model="entry.nom" placeholder="Enter Nom" /></td>
          <td><input v-model="entry.prenom" placeholder="Enter Prénom" /></td>
          <td><input v-model="entry.company" placeholder="Enter Company" /></td>
          <td>{{ entry.counter }}</td>
        </tr>
      </tbody>
    </table>
    <button @click="addEntry">Add</button>
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      entries: [],
      currentPage: 1,
      entriesPerPage: 10  // Updated to 10 entries per page
    };
  },
  computed: {
    paginatedEntries() {
      const start = (this.currentPage - 1) * this.entriesPerPage;
      const end = start + this.entriesPerPage;
      return this.entries.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.entries.length / this.entriesPerPage);
    }
  },
  watch: {
    entries: {
      handler() {
        this.updateCounters();
      },
      deep: true
    }
  },
  methods: {
    addEntry() {
      this.entries.push({ nom: '', prenom: '', company: '', counter: 0 });
      this.updateCounters();
    },
    updateCounters() {
      this.entries.forEach((entry, index) => {
        entry.counter = (index % 10) + 1;
      });
    },
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
table {
  margin: auto;
  width: 50%;
  border: #e51b23;
}
button {
  margin-top: 20px;
}
.pagination {
  margin-top: 20px;
}
.pagination button {
  margin: 0 10px;
}
input {
  width: 100%;
  box-sizing: border-box;
}

table {
  border: 5px solid #e51b23;
}
</style>



