
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function hasDuplicates(array) {
    return (new Set(array)).size !== array.length;
}

function sortfunction(a, b){
    return (a - b)
  }

var nums = [20,10,11,13,25,14,24,05,03,19,04,22,01,09,12,18,02,17,23,15,21,06,07,16,08];

var combinacoes = nums.length*15;

var resultados = [];

var jogos = [];

combinacoes = 10;

for(i=0; i<combinacoes; i++){

    for(j=0; j<=15; j++){

        numero = getRandomIntInclusive(0,(nums.length-1));

        if(resultados.length<15){

            resultados.push(nums[numero]);

            if(hasDuplicates(resultados)){

                resultados.pop();

                j=j-1;

            }

        }else{

            console.log(resultados.sort(sortfunction));

            resultados=[];

        }

    }
}
