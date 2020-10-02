<template>
  <form @submit="trySubmit" class="d-flex flex-column">
    <h4>Ajouter un produit :</h4>
    <hr class="w-100" />
    <div class="form-group">
      <label>Image</label>
      <input v-model="form.img" type="text" class="form-control" />
    </div>
    <div class="form-group">
      <label>Titre</label>
      <input v-model="form.title" type="text" class="form-control" />
    </div>
    <div class="form-group">
      <label>Description</label>
      <textarea v-model="form.description" class="form-control"></textarea>
    </div>
    <div class="form-group">
      <label>Prix</label>
      <input v-model="form.price" type="number" class="form-control" />
    </div>
    <!-- <pre>
      {{ $data }}
    </pre> -->
    <ul v-if="errors.length">
      <li class="alert alert-danger" v-for="error in errors" :key="error">
        {{ error }}
      </li>
    </ul>
    <button class="btn btn-primary">Ajouter</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        img: "",
        title: "",
        description: "",
        price: "",
      },
      errors: [],
    };
  },
  methods: {
    trySubmit(e) {
      e.preventDefault();
      if (this.formIsValid()) {
        console.log(this.form);
      }
    },
    formIsValid() {
      this.errors = [];
      if (!this.form.img) {
        this.errors.push("Image requis");
      }
      if (!this.form.title) {
        this.errors.push("Titre requis");
      }
      if (!this.form.description) {
        this.errors.push("Description requis");
      }
      if (!this.form.price) {
        this.errors.push("Prix requis");
      }
      return this.errors.length ? false : true;
    },
  },
};
</script>

<style></style>
