let getId = id => document.getElementById(id);
let getSel = sel => document.getSelection(sel);


getId('edit').onclick = function(){
    getId('show').style.display = 'block';
   
    getId('style_box').style.display = 'none'
}

getId('save').onclick = function(){
    let value = getId('area').value
    getId('lorem').innerHTML = value;
}

getId('style').onclick =function(){
    getId('show').style.display = 'none';
    getId('style_box').style.display = 'block'
}

let f1 = document.forms['f1'];

for (let i=0; i<f1.length; i++){
    f1.elements[i].addEventListener('click', function(){
        
        getId('text').style.fontSize = this.value + 'px';
    })
}

let f2 = document.forms['f2'];

f2.fontFamile.onchange = function(){
    for(let i=0; i<f2.fontFamile.options.length; i++){
        if(f2.fontFamile.options[i].selected){
            getId('text').style.fontFamily = this.value
        }

    }
}
let count=0;
getId('colorOfText').onclick = function(){
    count++;
    if(count%2!==0){
        getId('color_box').style.display = 'flex';
    }
    else{getId('color_box').style.display = 'none';}

    getId('btn_color_red').onclick = function(){
        getId('text').style.color = 'red';
        getId('color_box').style.display = 'none';
    }
    getId('btn_color_blue').onclick = function(){
        getId('text').style.color = 'blue';
        getId('color_box').style.display = 'none';
    }
    getId('btn_color_green').onclick = function(){
        getId('text').style.color = 'green';
        getId('color_box').style.display = 'none';
    }
    getId('btn_color_black').onclick = function(){
        getId('text').style.color = 'black';
        getId('color_box').style.display = 'none';
    }
    getId('btn_color_yellow').onclick = function(){
        getId('text').style.color = 'yellow';
        getId('color_box').style.display = 'none';
    }
    getId('btn_color_hotpink').onclick = function(){
        getId('text').style.color = 'hotpink';
        getId('color_box').style.display = 'none';
    }
    getId('btn_color_white').onclick = function(){
        getId('text').style.color = 'white';
        getId('color_box').style.display = 'none';
    }
    getId('btn_color_blueviolet').onclick = function(){
        getId('text').style.color = 'blueviolet';
        getId('color_box').style.display = 'none';
    }
    getId('btn_color_dodgerblue').onclick = function(){
        getId('text').style.color = 'dodgerblue';
        getId('color_box').style.display = 'none';
    }
      
}

let countBackground=0;
getId('backgroundColor').onclick = function(){
    countBackground++;
    if(countBackground%2!==0){
        getId('color_box').style.display = 'flex';
    }
    else{getId('color_box').style.display = 'none';}
    getId('btn_color_red').onclick = function(){
        getId('text').style.backgroundColor = 'red';
        getId('color_box').style.display = 'none';
    }
    getId('btn_color_blue').onclick = function(){
        getId('text').style.backgroundColor = 'blue';
        getId('color_box').style.display = 'none';
    }
    getId('btn_color_green').onclick = function(){
        getId('text').style.backgroundColor = 'green';
        getId('color_box').style.display = 'none';
    }
    getId('btn_color_black').onclick = function(){
        getId('text').style.backgroundColor = 'black';
        getId('color_box').style.display = 'none';
    }
    getId('btn_color_yellow').onclick = function(){
        getId('text').style.backgroundColor = 'yellow';
        getId('color_box').style.display = 'none';
    }
    getId('btn_color_hotpink').onclick = function(){
        getId('text').style.backgroundColor = 'hotpink';
        getId('color_box').style.display = 'none';
    }
    getId('btn_color_white').onclick = function(){
        getId('text').style.backgroundColor = 'white';
        getId('color_box').style.display = 'none';
    }
    getId('btn_color_blueviolet').onclick = function(){
        getId('text').style.backgroundColor = 'blueviolet';
        getId('color_box').style.display = 'none';
    }
    getId('btn_color_dodgerblue').onclick = function(){
        getId('text').style.backgroundColor = 'dodgerblue';
        getId('color_box').style.display = 'none';
    }
}

let f3 = document.forms['f3'];

f3.bold.onclick = function(){
    if(this.checked){
        getId('text').style.fontWeight = 'bold'
    }
    else{
        getId('text').style.fontWeight = 'normal'
    }
}
f3.cursive.onclick = function(){
    if(this.checked){
        getId('text').style.fontStyle = 'italic'
    }
    else{
        getId('text').style.fontStyle = 'normal'
    }
}

getId('add').onclick = function(){
    getId('lorem').style.display = 'none';
    getId('text_area').style.display = 'none';
    getId('edit').style.display = 'none';
    getId('style').style.display = 'none';
    getId('add_table_list').style.display = 'block';
}

let f4 = document.forms['f4'];
console.log(f4)
for (let i=0; i<f4.length; i++){
    f4.elements[0].addEventListener('click', function(){  
    getId('style_table').style.display = this.value  
    getId('style_list').style.display = 'none'     })
    f4.elements[1].addEventListener('click', function(){  
        getId('style_list').style.display = this.value   
        getId('style_table').style.display = 'none'
    })
}
let f5 = document.forms['f5'];

//список
getId('createList').onclick = function(){
    getId('edit').style.display = 'inline-block';
    getId('style').style.display = 'inline-block';
let countLi = getId('li').value
let ul = document.createElement('ul') //створюю список
for(let i=1; i<=countLi; i++){
    let li = document.createElement('li');
    li.innerText = `item ${i}`;
    ul.appendChild(li);
}
ul.setAttribute("type", f5.typeOfMarks.value); //тип для списків
    let n = getId('area').appendChild(ul)
    getId('area').value += n.outerHTML;    
    getId('text_area').style.display = 'block';
    getId('lorem').style.display = 'block'
    getId('add_table_list').style.display = 'none'
}


let table_1 = document.forms['table_1'];
let table_2 = document.forms['table_2'];
//таблиця
getId('createTable').onclick = function(){
    getId('edit').style.display = 'inline-block';
    getId('style').style.display = 'inline-block';
    let countTr = getId('tr').value;
    let countTd = getId('td').value;
    let widthOfBorder = getId('wbrd').value;
    let table = document.createElement('table');
    for(let r=0; r<countTr; r++){
    let tr = document.createElement('tr');
    table.appendChild(tr);
                for(let d=0; d<countTd; d++){
                    let td = document.createElement('td');
                    td.innerText = 'TD'
                    tr.appendChild(td);
                    //стилі для td 
                    let widthOfTD = getId('wtd').value;
                    let heightOfTD = getId('htd').value;
                    td.style.width = widthOfTD + 'px';
                    td.style.height = heightOfTD + 'px';
                    td.style.borderCollapse = 'collapse';
                    td.style.borderWidth = widthOfBorder + 'px';
                    td.style.borderStyle =table_2.typeOfBorder.value;
                    td.style.borderColor = table_2.colorOfBorder.value;
                }
    }
    let n = getId('area').appendChild(table)
    getId('area').value += n.outerHTML;
    getId('text_area').style.display = 'block';
    getId('lorem').style.display = 'block'
    getId('add_table_list').style.display = 'none'

}

