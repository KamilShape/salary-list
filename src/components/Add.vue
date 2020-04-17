<template>
  <div class="add__container">
    <label for>
      Imię:
      <input class="name" type="text" v-model="newName" />
    </label>
    <label for>
      Nazwisko:
      <input class="surname" type="text" v-model="newSurname" />
    </label>
    <label>
      Dział:
      <select v-model="newDepartament" class="departament">
        <option value="IT">IT</option>
        <option value="Administracja">Administracja</option>
        <option value="Handlowiec">Handlowiec</option>
      </select>
    </label>
    <label>
      Wynagrodzenie(PLN):
      <input class="salary" v-model="newSalary" type="number" />
    </label>
    <button @click="handelAdd">Dodaj pracownika</button>
  </div>
</template>
<script>
export default {
  props: [
    "workers",
    "ITSum",
    "AdSum",
    "HSum",
    "AllSum",
    "calculateAll",
    "calculateIT",
    "calculateH",
    "calculateAd"
  ],
  data() {
    return {
      newName: "",
      newSurname: "",
      newDepartament: "",
      newSalary: ""
    };
  },
  methods: {
    handelAdd() {
      if (
        this.newName !== "" &&
        this.newSurname !== "" &&
        this.newDepartament !== "" &&
        this.newSalary !== ""
      ) {
        this.workers.push({
          imie: this.newName,
          nazwisko: this.newSurname,
          dzial: this.newDepartament,
          wynagrodzenieKwota: this.newSalary * 1,
          wynagrodzenieWaluta: "PLN"
        });
        if (this.newDepartament === "IT") {
          this.calculateIT();
        } else if (this.newDepartament === "Handlowiec") {
          this.calculateH();
        } else if (this.newDepartament === "Administracja") {
          this.calculateAd();
        }
        this.calculateAll();
        alert("Dodano nowego pracownika do listy.");
      } else {
        alert("Sprawdź poprawność danych");
      }
      this.show = true;
    }
  }
};
</script>
<style>
.add__container {
  padding: 5px;
  margin: 0 auto;
  width: 80%;
  display: flex;
  justify-content: space-around;
  line-height: 100%;
}
</style>