"use strict";
let StudentInfoArray = [];
let studdentFullInfo = document.getElementById('studentData');
let studentCount = [];

let sagirdsayi = document.getElementById('sCount');
function studentInfo() {
    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let mail = document.getElementById('mail').value;
    let street = document.getElementById('street').value;
    let city = document.getElementById('city').value;
    let country = document.getElementById('country').value;


    studentCount.push(name);

    sagirdsayi.innerHTML = studentCount.length;

    let newAdress = new Adress(street, city, country);

    let newStudentInfo = new Student(name, surname, mail, newAdress);

    StudentInfoArray.push(newStudentInfo);

    let getInfo = " ";

    for (let i = 0; i < StudentInfoArray.length; i++) {
        getInfo += "<li class=' list-group-item'>" +
            StudentInfoArray[i].name +
            " " + StudentInfoArray[i].surname +
            " - " + StudentInfoArray[i].mail +
            "-( " + newAdress.street +
            " " + newAdress.city +
            " " + newAdress.country + ")"

        "</li>";
    }
    studdentFullInfo.innerHTML = getInfo;
}

function Student(ad, soyad, email, adresO) {
    this.name = ad;
    this.surname = soyad;
    this.mail = email;
    this.adress = adresO;
}

function Adress(kuce, seher, olke) {
    this.street = kuce;
    this.city = seher;
    this.country = olke;
}

let RoomArray = [];
let RoomFullInfo = document.getElementById('roomList');
let RoomNamee = [];
let otaqsayi = document.getElementById('rCount');
let chooseInput = document.getElementById('choose');
function RoomData() {
    let rname = document.getElementById('ooo').value;
    let capasity = document.getElementById('bbb').value;

    RoomNamee.push(rname);



    let getchoose = " ";
    for (let i = 0; i < RoomNamee.length; i++) {
        getchoose += "<option id='click'>" +
            RoomNamee[i] +
            "</option>"

    }
   
    chooseInput.innerHTML = getchoose;

    otaqsayi.innerHTML = RoomNamee.length;

    let newRoom = new Room(rname, capasity);

    RoomArray.push(newRoom);

    let getRoomInfo = " ";

    for (let i = 0; i < RoomArray.length; i++) {
        getRoomInfo += "<li class=' text-center list-group-item'>" +
            RoomArray[i].rname +
            " - " + RoomArray[i].capasity +

            "</li>";

    }
    RoomFullInfo.innerHTML = getRoomInfo;

    function Room(otaqAdi, otaqTutumu) {
        this.rname = otaqAdi;
        this.capasity = otaqTutumu;
    }
}

let groupArray = [];
let qrupsayi = document.getElementById('gCount');
let groupFullInfo = document.getElementById('gropList');
let chooseInput2 = document.getElementById('choose2');
function groupData() {

    let gName = document.getElementById('GName').value;
  
    groupArray.push(gName);



    


qrupsayi.innerHTML=groupArray.length;
   function Group(qrupAd){
        this.gName=qrupAd;
    }

    let getGroupList = " ";

    for (let i = 0; i < groupArray.length; i++) {
        getGroupList += "<li class=' text-center list-group-item'>" +
            groupArray[i] +
            " " + document.getElementById('choose')[i].value +
            "</li>";
    }


    groupFullInfo.innerHTML=getGroupList;

    let choose2 = " ";
    for (let i = 0; i < groupArray.length; i++) {
        choose2 += "<option id='click2'>" +
        groupArray[i] +
            "</option>"

    }
    chooseInput2.innerHTML = choose2;

}

let TecherInfoArray = [];
let techerFullInfo= document.getElementById('teacherList');
function TECHERInfo() {
    let Tname = document.getElementById('tname').value;
    let Tsurname = document.getElementById('tsurname').value;
    let Tmail = document.getElementById('tmail').value;


    let newTecher = new Teacher(Tname, Tsurname, Tmail);

    TecherInfoArray.push(newTecher);
    

    function Teacher(Tad, Tsoyad, Temail){
        this.Tname=Tad;
        this.Tsurname=Tsoyad;
        this.Tmail=Temail;

    }

let TInfo = " ";

for (let i = 0; i < TecherInfoArray.length; i++) {
    TInfo += "<li class=' list-group-item'>" +
    TecherInfoArray[i].Tname +
        " " + TecherInfoArray[i].Tsurname +
        " - " + TecherInfoArray[i].Tmail +

    "</li>";
}
techerFullInfo.innerHTML = TInfo;
}