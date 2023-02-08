<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div>
    <Message :msg="msg" v-show="msg" />
    <div>
      <form id="burger-form" @submit="createBurger">
        <div class="input-container">
          <label for="nome"> Nome do cliente: </label>
          <input type="text" name="nome" id="nome" v-model="nome" placeholder="Digite o seu nome">
        </div>
        <div class="input-container">
        <label for="pao">Escolha o pão:</label>
        <select name="pao" id="pao" v-model="pao">
          <option value="">Selecione o seu pão</option>
          <option v-for="pao in paes" :key="pao.id" :value="pao.tipo">{{ pao.tipo }}</option>
        </select>
      </div>
        <div class="input-container">
          <label for="carne"> Escolha a carne do seu burger: </label>
          <select name="carne" id="carne" v-model="carne">
            <option value=""> Selecione o tipo de carne </option>
            <option v-for="carne in carnes" :key="carne.id" :value="carne.tipo"> {{ carne.tipo }} </option>
          </select>
        </div>
        <div id="opcionais-container" class="input-container">
          <label id="opcionais-title" for="opcionais"> Selecione os opcionais: </label>
          <div class="checkbox-container" v-for="opcional in opcionaisdata" :key="opcional.id">
            <input type="checkbox" name="opcionais" v-model="opcionais" :value="opcional.tipo">
            <span> {{opcional.tipo}} </span>
          </div>
        </div>
        <div class="input-container">
          <input type="submit" class="submit-btn" value="Criar o meu burger!">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Message from './Message.vue';

export default {
  name: 'BurgerForm',
  components: {
    Message,
  },
  props: {},
  emits: [],
  methods: {
    async getIngredientes() {
      const req = await fetch('http://localhost:3000/ingredientes');
      const data = await req.json();

      // console.log(data);

      this.paes = data.paes;
      this.carnes = data.carnes;
      this.opcionaisdata = data.opcionais;
    },
    async createBurger(e) {
      e.preventDefault();
      // console.log('Criou o hamburguer!');

      const data = {
        nome: this.nome,
        pao: this.pao,
        carne: this.carne,
        opcionais: Array.from(this.opcionais),
        status: 'Solicitado',
      };

      // console.log(data);

      const dataJson = JSON.stringify(data);

      const req = await fetch('http://localhost:3000/burgers', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: dataJson,
      });

      // eslint-disable-next-line no-unused-vars
      const res = await req.json();
      // console.log(res);

      this.msg = `Pedido nº ${res.id} realizado com sucesso!`;

      setTimeout(() => {
        this.msg = '';
      }, 3000);

      this.nome = '';
      this.pao = '';
      this.carne = '';
      this.opcionais = '';
    },
  },
  mounted() {
    this.getIngredientes();
  },
  data() {
    return {
      paes: null,
      carnes: null,
      opcionaisdata: null,
      nome: null,
      pao: null,
      carne: null,
      opcionais: [],
      msg: null,
    };
  },
};
</script>

<style scoped>
#burger-form {
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
}

.input-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

label {
  font-weight: bold;
  margin-bottom: 15px;
  color: #222;
  ;
  padding: 5px 10px;
  border-left: 4px solid #fcba03;
}

input,
select {
  padding: 5px 10px;
  width: 300px;
}

#opcionais-container {
  max-width: 300px;
  flex-direction: row;
  flex-wrap: wrap;
}

#opcionais-title {
  width: 100%;
}

.checkbox-container {
  display: flex;
  align-items: flex-start;
  width: 50%;
  margin-bottom: 20px;
}

.checkbox-container span,
.checkbox-container input {
  width: auto;
}

.checkbox-container span {
  margin-left: 6px;
  font-weight: bold;
}

.submit-btn {
  background-color: #222;
  color: #fcba03;
  font-weight: bold;
  border: 2px solid #222;
  padding: 10px;
  font-size: 16px;
  margin: 0 auto;
  cursor: pointer;
  transition: .5s;
}

.submit-btn:hover {
  background-color: transparent;
  color: #222;
}
</style>
