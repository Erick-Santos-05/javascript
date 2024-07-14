function calcular(){ 
    var num=document.getElementById('num');
    var sel=document.getElementById('sel');

    if(num.value.length=='')
        {
            alert('Digite um valor!');
        }else
            {
            sel.innerHTML=''
            var numero=parseInt(num.value);

            for(let i=1;i<=10;i++)
                {
                    var text=document.createElement('option');
                    text.value=`num${i}`;
                    text.text=`${numero} x ${i} = ${numero*i}`;
                    sel.appendChild(text);
                }
            }
}