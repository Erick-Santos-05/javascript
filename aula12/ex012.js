var agora = new Date(); //adiciona uma biblioteca para capiturar data atual da maquina que esta rodando o script
var hora = agora.getHours; //adiciona a hora na variavel 'hora'
console.log(`Agora são exatamente ${hora} horas.`);
if (hora <6)
    {
        console.log('Boa madrugada.');
    }else if(hora < 12)
            {
                console.log('Bom dia.')
            }else if(hora < 18)
                    {
                        console.log('Boa tarde.')
                    }else
                        {
                            console.log('Boa noite.')
                        }