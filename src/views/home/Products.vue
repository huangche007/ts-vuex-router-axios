<template>
  <div style="padding: 25px;">
    <div class="container">
      <div class="row">
        <div
          class="col-md-4"
          v-for="product in products"
          :key="product.id"
        >
          <ProductCard :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { mapActions, mapGetters } from 'vuex'
import ProductCard from './ProductCard.vue'
export default defineComponent({
  components: {
    ProductCard,
  },
  computed: {
    ...mapGetters('product', ['products']),
  },
  methods: {
    ...mapActions('product', ['getProducts', 'addCart', 'removeCart']),
  },
  mounted() {
    this.getProducts()
  },
  setup() {},
})
</script>
