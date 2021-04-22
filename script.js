var index = 0
var sumDesp = 0
var sumRec = 0
var sumSaldo = 0

function adicionar(){
    var despesa = document.getElementById('despesa')
    var valor = document.getElementById('valor')
    var transacoes = document.getElementsByClassName('transacoes')
    var design = document.getElementsByClassName('design')
    var saldo = document.getElementById('saldo')
    
    var receitas = document.getElementById('receitas')
    var despesas = document.getElementById('despesas')

    if(despesa.value.length == 0){
        alert('preencher campo despesa')
    }else if(valor.value.length == 0){
        alert('preencher campo valor')
    }else if(valor.value == 0){
        alert('valor inválido')
    }else{

        if(valor.value > 0){
            transacoes[0].innerHTML += `
            
            <div class="item">
                <p>${despesa.value.toUpperCase()} R$${valor.value} reais</p>
                <div class="design"></div>
            </div>

            `
            design[index].style.backgroundColor = "green";

            sumRec += Number(valor.value)
            receitas.innerText = `R$${sumRec}`
            sumSaldo += Number(valor.value)
            saldo.innerText = `R$${sumSaldo}`

        }else{

            transacoes[0].innerHTML += `
            
            <div class="item">
                <p>${despesa.value.toUpperCase()} R$${valor.value} reais</p>
                <div class="design"></div>
            </div>

            `
            design[index].style.backgroundColor = "red";
            
            sumDesp += Number(valor.value)
            despesas.innerText = `R$${sumDesp}`
            sumSaldo += Number(valor.value)
            saldo.innerText = `R$${sumSaldo}`

        }

        index+=1
        despesa.value = ""
        valor.value = ""


    }
}