const users = [
    {
        id:1,
        name:'a',
        part:'b',
        phone:'c'
    }
]

//1.인풋
const putUser = document.querySelector('#putNumber')
const putName = document.querySelector('#putName')
const putPart = document.querySelector('#putPart')
const putPhone = document.querySelector('#putPhone')
//2.버튼
const addBtn = document.querySelector('#addBtn')
//.3테이블의 추가될 부분
const tableBody = document.querySelector('#tableBody')

printList()

addBtn.addEventListener('click',function() {
    users.push({
        id: users[0] ? users[users.length - 1].id : 1,
        name : putName.value ,
        part: putPart.value ,
        phone: putPhone.value
    })
    putUser.value=""
    putName.value=""
    putPart.value=""
    putPhone.value=""
    printList();
});

function printList(){
    tableBody.innerHTML = users
    .map(
        (info) => `
        <tr users-id="${info.id}">
            <td>${info.id}</td>
            <td>${info.name}</td>
            <td>${info.part}</td>
            <td>${info.phone}</td>
            <td><button class="deleteBtn">삭제</button></td>
        </tr>
        `
    ).join("");

    const deleteBtn = document.querySelectorAll(".deleteBtn");
    deleteBtn.forEach((x) => x.addEventListener("click", remove));
}

function remove(e) {
    console.log(e.target.parentNode.dataset.id);
    const id = e.target.parentNode.dataset.id;
    const index = users.findIndex((x) => x.id == e.target.parentNode.dataset.id);
    if (users[index].id == id) {
        users.splice(index, 1); 
        printList();
    }
}

