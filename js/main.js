function consultaCep(){
    var cep = document.getElementById('cep').value;
    var url = 'https://viacep.com.br/ws/' + cep + '/json/';

    console.log(url);


    $.ajax({
        url: url, // ou 'https://viacep.com.br/ws/40130030/json/',
        type:'GET',
        success: function(response){
            console.log(response);
          /*document.getElementById('logradouro').innerHTML = response.logradouro;
            document.getElementById('bairro').innerHTML = response.bairro;
            document.getElementById('localidade').innerHTML = response.localidade;
            document.getElementById('uf').innerHTML = response.uf; */

            //shortest path
            $('#logradouro').html(response.logradouro);
            $('#bairro').html(response.bairro);
            $('#localidade').html(response.localidade);
            $('#uf').html(response.uf);
        }
    })
}
