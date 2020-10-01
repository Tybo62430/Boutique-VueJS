<template>
  <div class="w-25 p-3 product-container d-flex flex-column">
    <div class="d-flex flex-row justify-content-center">
      <img style="height: 150px" :src="product.img" />
    </div>
    <div>
      <h3>{{ product.title }}</h3>
    </div>
    <div>
      <p>{{ product.decription }}</p>
    </div>
    <div>
      <span>{{ product.price }}</span>
      <button class="btn btn-primary btn-sm float-right">Commander</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        img:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTpTCeVlLaMqbuML3wH5KINojhSqRrIQtX4mw&usqp=CAU",
        title: "MacBook Pro",
        description:
          "Conçu pour les pros qui repoussent les limites du possible, le nouveau MacBook Pro est de loin l’ordinateur portable le plus puissant que nous ayons jamais créé. Avec un écran Retina de 16 pouces immersif, des processeurs ultra‑rapides, des cartes graphiques de nouvelle génération, la plus grande capacité de batterie jamais vue sur un MacBook Pro, un nouveau Magic Keyboard et une capacité de stockage considérable, c’est le portable pro par excellence. Prêt pour les projets les plus ambitieux.",
        price: "2949€",
      },
    };
  },
};
</script>

<style>
.product-container {
  height: 400px;
}

.p {
  font-size: 12px;
}
</style>
