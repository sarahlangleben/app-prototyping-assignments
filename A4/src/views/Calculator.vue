<template>
  <b-container>
    <b-row class="formula"> <h2>{{  formula || 0}}</h2></b-row>
    <b-row no-gutters>
      <b-col>
        <b-button class="numButton" @click="append(0)">0</b-button>
      </b-col>
      <b-col>
        <b-button class="numButton" @click="append(1)">1</b-button>
      </b-col>
      <b-col>
        <b-button class="numButton" @click="append(2)">2</b-button>
      </b-col>
      <b-col>
        <b-button class="mathButton" @click="append('+')">➕</b-button>
      </b-col>
    </b-row>

    <b-row no-gutters>
      <b-col>
        <b-button class ="numButton" @click="append(3)">3</b-button>
      </b-col>
      <b-col>
        <b-button class="numButton" @click="append(4)">4</b-button>
      </b-col>
      <b-col>
        <b-button class="numButton" @click="append(5)">5</b-button>
      </b-col>
      <b-col>
        <b-button class="mathButton" @click="append('/')">➗</b-button>
      </b-col>
    </b-row>

    <b-row no-gutters>
      <b-col>
        <b-button class="numButton" @click="append(6)">6</b-button>
      </b-col>
      <b-col>
        <b-button class="numButton" @click="append(7)">7</b-button>
      </b-col>
      <b-col>
        <b-button class="numButton" @click="append(8)">8</b-button>
      </b-col>
      <b-col>
        <b-button class="mathButton" @click ="append('-')">➖</b-button>
      </b-col>
    </b-row>
    <b-row no-gutters>
      <b-col>
        <b-button class="numButton" @click="append(9)">9</b-button>
      </b-col>
      <b-col>
        <b-button class="numButton" @click ="append('.')">.</b-button>
      </b-col>
      <b-col>
        <b-button class="equalsButton" @click="evaluate(formula)">🟰</b-button>
      </b-col>
      <b-col>
        <b-button class="mathButton" @click ="append('*')">✖️</b-button>
      </b-col>
    </b-row>
    <b-row no-gutters>
      <b-col>
        <b-button class="mathButton" @click="append('C')">C</b-button>
      </b-col>
      <b-col>
        <b-button class="mathButton" @click ="backspace()">🔙</b-button>
      </b-col>
    </b-row>
  </b-container>

</template>

<script>
export default {
  data() {
    return {
      formula: '',
      calculatorButton: ['(',')', 'C', '7', '8', '9', '/', '4', '5', '6', 'x', '1', '2', '3', '-', '0', '.', '=', '+', 'del'],
    }
  },
  methods: {
    /*
     * FUNCTION: evaluate()
     * PARAMETERS: none
     * FUNCTIONALITY: evaluate() was already written by instructors.
     */
    evaluate() {
      try {
        /* WARNING! Never use eval in production code. */
        // eslint-disable-next-line no-eval
        let result = eval(this.formula)
        this.formulaAlert = false
        this.formula = result
      } catch (exception) {
        this.formulaAlert = true
      }
    },

    /*
     * FUNCTION: append()
     * PARAMETERS: value: Value to be appended to end of string.
     * FUNCTIONALITY: append() first checks to see if this.formula has been set.
     * If not, then it just replaces the value. If it has been set, it adds the
     * user input string (the button pressed) to the end of this.formula.
     */
    append(value) {
      console.log(value);
      if(value!='C'){
        this.formula+=value+'';
      }
      if(value == 'C'){
        this.formula = '';
      }
      if(value == '='){
        this.formula = value.evaluate();
      }
    },

    /*
     * FUNCTION: backspace()
     * PARAMETERS: none
     * FUNCTIONALITY: backspace() uses slice() to cut the last character off from
     * the string. It uses toString() to ensure that this.formula is a string
     * (otherwise this function would not work when deleting the last character
     * from a result).
     */
    backspace() {
      var str = this.formula.toString()
      str = str.slice(0, -1)
      this.formula = str
    }
  }
}
</script>

<style>
.formula{
  background-color: whitesmoke;
  border-radius: 5px;
  padding: 10%;
  width: 100%;
  margin-left: 1px;
  color: #645897;
}

.numButton {
  /* width: 80%; */
  background-color: white;
  width: 100%;
  height: 100%;
  color: #645897;
  font-weight: bold;
  border-color: #645897;
}
.numButton:hover {
  background-color: #645897;
}
.mathButton {
  background-color: whitesmoke;
  width: 100%;
  height: 100%;
  color: #645897;
  font-weight: bold;
  border-color: #645897;
}
.mathButton:hover {
  background-color: gainsboro;
  color: #645897
}
.equalsButton {
  background-color: #F8F4E3;
  width: 100%;
  height: 100%;
  font-weight: bold;
  border-color: #645897;
}
.equalsButton:hover {
  background-color: #E7E4D7;
}
</style>
