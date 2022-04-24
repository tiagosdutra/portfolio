document.querySelector('.btn').addEventListener('click', todos)
document.querySelector('ul').addEventListener('click', function(e){ 
    e.target.classList.toggle('strikeThrough')
    let number = document.querySelectorAll('li').length
    let num2 = document.querySelectorAll('.strikeThrough').length
    document.querySelector('.todos').innerText = number - num2
})
document.querySelector('.clearList').addEventListener('click', clearTheList) 
document.querySelector('.clearComplete').addEventListener('click', clearComplete) 


function todos(){
    let input = document.querySelector('.input').value
    document.querySelector('.input').value = ' '
    const node = document.createElement('li');
    const textnode = document.createTextNode(input);
    node.appendChild(textnode);
    document.getElementById('myList').appendChild(node);
    let number = document.querySelectorAll('li').length
    document.querySelector('.todos').innerText = number
}

function clearTheList() {

    document.querySelectorAll('li').forEach(li => {
        li.remove()
    })
    document.querySelector('.todos').innerText = 0

}


function clearComplete(){
    document.querySelectorAll('.strikeThrough').forEach(li => {
        li.remove()
    })
}