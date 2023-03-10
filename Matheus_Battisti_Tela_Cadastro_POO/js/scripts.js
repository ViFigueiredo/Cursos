class Validator {
  constructor() {
    this.validations = [
      "data-required",
      "data-min-length",
      "data-max-length",
      "data-email-validate",
      "data-only-letters",
      "data-equal",
      "data-password-validate",
    ];
  }

  /* iniciar a validação de todos os campos */
  validate(form) {
    /* resgata todas as validações */
    let currentValidations = document.querySelectorAll(
      "form .error-validation"
    );

    if (currentValidations.length > 0) {
      this.cleanValidations(currentValidations);
    }

    /* pegar todos os inputs */
    let inputs = form.getElementsByTagName("input");
    // console.log(inputs);

    /* transformo HTML Collection -> Array */
    let inputsArray = [...inputs];
    // console.log(inputsArray);

    /* loop nos inputs e validação mediante ao que for encontrado */
    inputsArray.forEach((input) => {
      // console.log(input);

      /* loop em todas as validações existentes */
      for (let i = 0; this.validations.length > i; i++) {
        /* verifica se avalidação atual existe no input */
        if (input.getAttribute(this.validations[i]) != null) {
          // console.log(input.getAttribute(this.validations[i]));
          // console.log("achou validação");

          /* data-min-length -> minlength */
          /* limpando a string para virar um método */
          let method = this.validations[i]
            .replace("data-", "")
            .replace("-", "");

          /* valor do input */
          let value = input.getAttribute(this.validations[i]);

          /* invocar o método */
          this[method](input, value);
        }
      }
    }, this);
  }

  /* verifica se um input tem um número mínimo de caracteres*/
  minlength(input, minValue) {
    // console.log(input);
    // console.log(minValue);

    let inputLength = input.value.length;
    let errorMessage = `O campo precisa ter pelo menos ${minValue} caracteres.`;

    if (inputLength < minValue) {
      // console.log(errorMessage);
      this.printMessage(input, errorMessage);
    }
  }

  /* verifica se um input passou do limite de caracteres */
  maxlength(input, maxValue) {
    // console.log(input);
    // console.log(minValue);

    let inputLength = input.value.length;
    let errorMessage = `O campo precisa ter no máximo ${maxValue} caracteres.`;

    if (inputLength > maxValue) {
      // console.log(errorMessage);
      this.printMessage(input, errorMessage);
    }
  }

  onlyletters(input) {
    /* apenas letras maiusculas e minusculas */
    let re = /^[A-Za-z]+$/;
    let inputValue = input.value;
    let errorMessage = "Somente letras maiúsculas e/ou minúsculas";
    if (!re.test(inputValue)) this.printMessage(input, errorMessage);
  }

  /* verifica se o input é requerido */
  required(input) {
    let inputValue = input.value;
    if (inputValue === "") {
      let errorMessage = "Este campo é obrigatório!";
      this.printMessage(input, errorMessage);
    }
  }

  /* verifica se dois campos são iguais */
  equal(input, inputName) {
    let inputToCompare = document.getElementsByName(inputName)[0];
    let errorMessage = `Este campo precisa ser igual ao campo de senha.`;
    if (input.value != inputToCompare.value)
      this.printMessage(input, errorMessage);
  }

  /* valida senha */
  passwordvalidate(input) {
    /* explodir string em um array */
    let charArr = input.value.split("");
    let uppercases = 0;
    let numbers = 0;

    for (let i = 0; i < charArr.length; i++) {
      if (
        charArr[i] === charArr[i].toUpperCase() &&
        isNaN(parseInt(charArr[i]))
      ) {
        uppercases++;
      } else if (!isNaN(parseInt(charArr[i]))) {
        numbers++;
      }
    }

    if (uppercases === 0 || numbers === 0) {
      let errorMessage =
        "A senha precisa conter pelo menos um número e uma letra maiúscula.";
      this.printMessage(input, errorMessage);
    }
  }

  /* imprime mensagens de erro na tela */
  printMessage(input, msg) {
    /* quantidade de erros */
    let errorsQty = input.parentNode.querySelector(".error-validation");

    /* verifica se já possui alguma validação */
    if (errorsQty === null) {
      let template = document
        .querySelector(".error-validation")
        .cloneNode(true);
      template.textContent = msg;
      let inputParent = input.parentNode;
      template.classList.remove("template");
      inputParent.appendChild(template);
    }
  }

  /* limpa as validações da tela */
  cleanValidations(validations) {
    validations.forEach((el) => el.remove());
  }

  /* valida e-mails */
  emailvalidate(input) {
    /* email@email.com -> email@mail.com.br */
    /* string@string.com.br.net.org... */
    let re = /\S+@\S+\.\S+/;
    let email = input.value;
    let errorMessage = "Insira um e-mail no padrão email@email.com";
    /* .test() -> regex === string? */
    if (!re.test(email)) this.printMessage(input, errorMessage);
  }
}

let form = document.getElementById("register-form");
let submit = document.getElementById("btn-submit");

let validator = new Validator();

/* evento que dispara as validações */
submit.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log('funcionou');

  validator.validate(form);
});
