var contacts = {
  Lviv: {
    city: "Львів",
    name: "Дацків Оксана",
    fb: "https://www.facebook.com/datskiv.oksana",
    phone: "+38 093 768 2162",
    email: "mnklviv2016@gmail.com"
  },
  Ternopil: {
    city: "Тернопіль",
    name: "Мисак Микола",
    fb: "https://www.facebook.com/mysak.mykola5",
    phone: "+38 096 805 1324",
    email: "mnkternopil@gmail.com"
  },
  Kyiv: {
    city: "Київ",
    name: "Репік Сергій",
    fb: "https://www.facebook.com/serj.guepard",
    phone: "+38 063 403 7654",
    email: "kyiv@mnk.org.ua"
  },
  Sumy: {
    city: "Суми",
    name: "П\'ятаченко Валерій",
    fb: "https://www.facebook.com/0609valera",
    phone: "+38 066 248 2149",
    email: "mnksumy.ua@gmail.com"
  },
  Kharkiv: {
    city: "Харків",
    name: "Беднін Дмитро",
    fb: "https://www.facebook.com/profile.php?id=100001562935460",
    phone: "+38 097 249 0002, +38 093 784 1473",
    email: "mnk.kharkiv@gmail.com"
  },
  Poltava: {
    city: "Полтава",
    name: "Омельченко Олександр",
    fb: "https://www.facebook.com/oleksandr.omelchenko",
    phone: "+38 066 340 2692",
    email: ""
  },
  Dnipro: {
    city: "Дніпро",
    name: "Стрижко Гліб",
    fb: "https://www.facebook.com/glib.stryzhko",
    phone: "+38 066 855 1139, +38 096 753 1975",
    email: ""
  }
}


$(document).ready(function() {
  for (var key in contacts) {
    console.log(contacts[key].city);
    var tr1 = $("<tr></tr>");
    var tr2 = $("<tr></tr>");
    var tr3 = $("<tr></tr>");

    var td_city = $("<td></td>").text(contacts[key].city);
    var td_city_2 = $("<td></td>").text(contacts[key].city);
    var td_name = $("<td></td>").text(contacts[key].name);
    var td_phone = $("<td></td>").text(contacts[key].phone);
    var td_phone_2 = $("<td></td>").text(contacts[key].phone);
    var td_email = $("<td></td>").text(contacts[key].email);
    var td_email_2 = $("<td></td>").text(contacts[key].email);

    tr1.append(td_city);
    $("#test-table>tbody").append(tr1);
  }
});
