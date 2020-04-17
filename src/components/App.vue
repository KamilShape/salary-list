<template>
  <div>
    <h1 class="main_title">Lista płac pracowników</h1>
    <h3 class="second_title">Szukaj pracownika</h3>
    <div class="search__container">
      <label>
        Imię:
        <input type="text" v-model="Name" />
      </label>
      <label>
        Nazwisko:
        <input type="text" v-model="Surname" />
      </label>
      <label>
        Dział:
        <select v-model="Departament">
          <option value></option>
          <option value="IT">IT</option>
          <option value="Handlowiec">Handlowiec</option>
          <option value="Administracja">Administracja</option>
        </select>
      </label>
      <label>
        Wynagrodzenie(PLN):
        <select v-model="Salary">
          <option value></option>
          <option value="0">Poniżej 2500</option>
          <option value="1">2500 - 3200</option>
          <option value="2">3200 - 4000</option>
          <option value="3">Powyżej 4000</option>
        </select>
      </label>
    </div>
    <div class="table_container">
      <table>
        <tr class="first_row">
          <td>Imię</td>
          <td>Nazwisko</td>
          <td>Dział</td>
          <td>Wynagrodzenie</td>
          <td>Waluta</td>
        </tr>
        <TableRow v-for="worker in filteredWorkers" :key="worker.surname" v-bind:worker="worker" />
      </table>
    </div>
    <h3 class="second_title">Dodaj pracownika</h3>
    <Add
      :workers="workers"
      :AllSum="AllSum"
      :ITSum="ITSum"
      :HSum="HSum"
      :AdSum="AdSum"
      :calculateAll="calculateAll"
      :calculateIT="calculateIT"
      :calculateAd="calculateAd"
      :calculateH="calculateH"
    />
    <button class="show" @click="changeClass">{{show ? 'Ukryj' :'Pokaż wszystkich'}}</button>
    <table class="all_table" :class="{visible: show}">
      <tr class="first_row">
        <td>Imię</td>
        <td>Nazwisko</td>
        <td>Dział</td>
        <td>Wynagrodzenie</td>
        <td>Waluta</td>
      </tr>
      <TableRow v-for="worker in workers" :key="worker.surname" v-bind:worker="worker" />
      <tr>
        <td colspan="3">Suma(Dział: IT)</td>
        <td colspan="1">{{ITSum}}</td>
        <td>PLN</td>
      </tr>
      <tr>
        <td colspan="3">Suma(Dział: Administracja)</td>
        <td colspan="1">{{AdSum}}</td>
        <td>PLN</td>
      </tr>
      <tr>
        <td colspan="3">Suma(Dział: Handlowiec)</td>
        <td colspan="1">{{HSum}}</td>
        <td>PLN</td>
      </tr>
      <tr>
        <td colspan="3">Suma</td>
        <td colspan="1">{{AllSum}}</td>
        <td>PLN</td>
      </tr>
    </table>
  </div>
</template>

<script>
import Add from "./Add";
import TableRow from "./TableRow";
export default {
  data() {
    return {
      show: false,
      workers: [
        {
          imie: "Jan",
          nazwisko: "Kowalski",
          dzial: "IT",
          wynagrodzenieKwota: 3000,
          wynagrodzenieWaluta: "PLN"
        },
        {
          imie: "Anna",
          nazwisko: "Bąk",
          dzial: "Administracja",
          wynagrodzenieKwota: 2400.5,
          wynagrodzenieWaluta: "PLN"
        },
        {
          imie: "Paweł",
          nazwisko: "Zabłocki",
          dzial: "IT",
          wynagrodzenieKwota: 3300,
          wynagrodzenieWaluta: "PLN"
        },
        {
          imie: "Tomasz",
          nazwisko: "Osiecki",
          dzial: "Administracja",
          wynagrodzenieKwota: 2100,
          wynagrodzenieWaluta: "PLN"
        },
        {
          imie: "Iwona",
          nazwisko: "Leihs-Gutowska",
          dzial: "Handlowiec",
          wynagrodzenieKwota: 3100,
          wynagrodzenieWaluta: "PLN"
        }
      ],
      ITSum: "",
      AdSum: "",
      HSum: "",
      AllSum: "",
      Name: "",
      Surname: "",
      Departament: "",
      Salary: ""
    };
  },
  computed: {
    filteredWorkers() {
      return this.workers.filter(worker => {
        if (this.Name !== "") return worker.imie.match(this.Name);
        if (this.Surname !== "") return worker.nazwisko.match(this.Surname);
        if (this.Departament !== "")
          return worker.dzial.match(this.Departament);
        if (this.Salary !== "") {
          if (this.Salary === "0") {
            return worker.wynagrodzenieKwota < 2500;
          } else if (this.Salary === "1") {
            return (
              worker.wynagrodzenieKwota > 2500 &&
              worker.wynagrodzenieKwota <= 3200
            );
          } else if (this.Salary === "2") {
            return (
              worker.wynagrodzenieKwota > 3200 &&
              worker.wynagrodzenieKwota <= 4000
            );
          } else {
            return worker.wynagrodzenieKwota > 4000;
          }
        }
      });
    }
  },

  components: {
    Add,
    TableRow
  },
  methods: {
    changeClass() {
      this.show = !this.show;
      console.log(this.show);
    },
    calculateIT() {
      const ITSalary = [];
      this.workers.filter(worker => {
        if (worker.dzial === "IT") {
          ITSalary.push(worker.wynagrodzenieKwota);
          this.ITSum = ITSalary.reduce(function(a, b) {
            return a + b;
          });
        }
      });
    },
    calculateAd() {
      const AdSalary = [];
      this.workers.filter(worker => {
        if (worker.dzial === "Administracja") {
          AdSalary.push(worker.wynagrodzenieKwota);
          this.AdSum = AdSalary.reduce(function(a, b) {
            return a + b;
          });
        }
      });
    },
    calculateH() {
      const HSalary = [];
      this.workers.filter(worker => {
        if (worker.dzial === "Handlowiec") {
          HSalary.push(worker.wynagrodzenieKwota);
          this.HSum = HSalary.reduce(function(a, b) {
            return a + b;
          });
        }
      });
    },
    calculateAll() {
      const AllSalary = [];
      this.workers.filter(worker => {
        AllSalary.push(worker.wynagrodzenieKwota);
        this.AllSum = AllSalary.reduce(function(a, b) {
          return a + b;
        });
      });
    }
  },

  mounted: function() {
    this.$nextTick(this.calculateIT);
    this.$nextTick(this.calculateAd);
    this.$nextTick(this.calculateH);
    this.$nextTick(this.calculateAll);
  }
};
</script>

<style>
body {
  font-family: "Roboto", sans-serif;
  background-image: url(../images/background.jpg);
  background-size: cover;
  background-position: center;
  text-shadow: 1px 1px 2px white;
  overflow-x: hidden;
}
.main_title {
  width: 100%;
  text-align: center;
}
.second_title {
  margin: 0 auto;
  text-align: center;
  padding: 5px;
  width: 80%;
  /* background-color: violet; */
}
.search__container {
  margin: 0 auto;
  width: 80%;
  padding: 5px;
  display: flex;
  justify-content: space-around;
}
.table_container {
  width: 100%;
  padding: 10px;
}
table {
  font-size: 18px;
  border-spacing: 0;
  margin: 0px auto;
  background-color: rgba(255, 255, 255, 0.7);
}
.all_table {
  opacity: 0;
}
.visible {
  opacity: 1;
}
table tr:nth-of-type(odd) {
  background-color: rgba(151, 151, 151, 0.5);
}
table td {
  padding: 8px;
  text-align: center;
  text-shadow: none;
}
.first_row td {
  font-weight: bold;
  background-color: #4caf50;
}
label {
  text-align: center;
}
input,
select {
  margin: 10px;
  outline: none;
  padding: 3px;
  font-size: 12px;
}
button {
  color: white;
  transform: translateY(12.5%);
  background-color: rgba(0, 0, 0, 0.7);
  display: block;
  padding: 10px;
  font-weight: bold;
  height: 100%;
  outline: none;
  border-radius: 20px;
}
.show {
  margin: 0px auto 20px auto;
  font-size: 16px;
}
button:hover {
  cursor: pointer;
  background-color: rgb(151, 151, 151);
}
</style>
