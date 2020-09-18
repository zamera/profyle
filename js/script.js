// let numero1 = Number(prompt("insira o primeiro valor"));
// let numero2 = Number(prompt("insira o segundo valor"));
// let soma = numero1 + numero2;
// alert("A soma dos dois números é: " + soma);

// ----------- jQuery ----------------
$(document).ready(function(){
  $("#subscrever").click(function() {
    // let email = document.getElementById("#email");
    let email = $("#email").val();

    if(email){
      alert("O email " + email + " subscrito com sucesso!");
      $("#email").val("");
    } else {
      alert("Insira algum endereço de email");
    }
  })
});

