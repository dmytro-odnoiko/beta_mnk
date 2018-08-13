// Map data
var map = {
   UKR4827: {
      region: "Kherson",
      class: "no-center",
      hover: false,
      title: "Херсон",
      name: "",
      phone: "",
      email: ""
   },
   UKR330: {
      region: "Poltava",
      class: "little-center",
      hover: true,
      title: "Полтава",
      name: "Омельченко Олександр",
      phone: "+38 066 340 2692",
      email: ""
   },
   UKR328: {
      region: "Kharkiv",
      class: "big-center",
      hover: true,
      title: "Харків",
      name: "Беднін Дмитро",
      phone: "+38 093 784 1473",
      email: "mnk.kharkiv@gmail.com"
   },
   UKR325: {
      region: "Sumy",
      class: "big-center",
      hover: true,
      title: "Суми",
      name: "П\'ятаченко Валерій",
      phone: "+38 066 248 2149",
      email: "mnksumy.ua@gmail.com"
   },
   UKR324: {
      region: "Zhytomyr",
      class: "little-center",
      hover: true,
      title: "Житомир",
      name: "Олександр Бондарчук",
      phone: "+38 063 919 9354",
      email: ""
   },
   UKR323: {
      region: "Vinnytsya",
      class: "little-center",
      hover: true,
      title: "Вінниця",
      name: "Ігор Слободянюк",
      phone: "+38 067 132 8776",
      email: ""
   },
   UKR283: {
     region: "Crimea",
     class: "no-center",
     hover: false,
     title: "Крим",
     name: "",
     phone: "",
     email: ""
   },
   UKR284: {
     region: "Mykolayiv",
     class: "no-center",
     hover: false,
     title: "Миколаїв",
     name: "",
     phone: "",
     email: ""
   },
   UKR285: {
     region: "Chernihiv",
     class: "no-center",
     hover: false,
     title: "Чернігів",
     name: "",
     phone: "",
     email: ""
   },
   UKR286: {
     region: "Rivne",
     class: "no-center",
     hover: false,
     title: "Рівне",
     name: "",
     phone: "",
     email: ""
   },
   UKR288: {
     region: "Chernivtsi",
     class: "no-center",
     hover: false,
     title: "Чернівці",
     name: "",
     phone: "",
     email: ""
   },
   UKR289: {
     region: "Ivano-Frankivs'k",
     class: "little-center",
     hover: true,
     title: "Івано-Франківськ",
     name: "Софія Любінець",
     phone: "+38 066 483 9632",
     email: ""
   },
   UKR290: {
     region: "Khmel'nyts'kyy",
     class: "no-center",
     hover: false,
     title: "Хмельницький",
     name: "",
     phone: "",
     email: ""
   },
   UKR291: {
     region: "L'viv",
     class: "big-center",
     hover: true,
     title: "Львів",
     name: "Оксана Дацків",
     phone: "+38 093 768 2162",
     email: "mnklviv2016@gmail.com"
   },
   UKR292: {
     region: "Ternopil",
     class: "big-center",
     hover: true,
     title: "Тернопіль",
     name: "Микола Мисак",
     phone: "+38 096 805 1324",
     email: "mnkternopil@gmail.com"
   },
   UKR293: {
     region: "Transcarpathia",
     class: "little-center",
     hover: true,
     title: "Ужгород",
     name: "Томаш Лелекач",
     phone: "+38 066 016 0975",
     email: ""
   },
   UKR318: {
     region: "Volyn",
     class: "little-center",
     hover: true,
     title: "Луцьк",
     name: "Ірина Темчук",
     phone: "+38 098 469 5677",
     email: ""
   },
   UKR319: {
     region: "Cherkasy",
     class: "no-center",
     hover: false,
     title: "Черкаси",
     name: "",
     phone: "",
     email: ""
   },
   UKR320: {
     region: "Kirovohrad",
     class: "no-center",
     hover: false,
     title: "Кропивницький",
     name: "",
     phone: "",
     email: ""
   },
   UKR321: {
     region: "Kiev",
     class: "big-center",
     hover: true,
     title: "Київ",
     name: "Сергій Репік",
     phone: "+38 063 403 7654",
     email: "kyiv@mnk.org.ua"
   },
   UKR322: {
     region: "Odessa",
     class: "no-center",
     hover: false,
     title: "Одеса",
     name: "",
     phone: "",
     email: ""
   },
   UKR326: {
     region: "Dnipropetrovs'k",
     class: "little-center",
     hover: true,
     title: "Дніпро",
     name: "Гліб Стрижко",
     phone: "+38 096 753 1975",
     email: ""
   },
   UKR327: {
     region: "Donets'k",
     class: "no-center",
     hover: false,
     title: "Донецьк",
     name: "",
     phone: "",
     email: ""
   },
   UKR329: {
     region: "Luhans'k",
     class: "no-center",
     hover: false,
     title: "Луганськ",
     name: "",
     phone: "",
     email: ""
   },
   UKR331: {
     region: "Zaporizhzhya",
     class: "no-center",
     hover: false,
     title: "Запоріжжя",
     name: "",
     phone: "",
     email: ""
   }
}

// Map append classes
for (var key in map) {
   var element = document.getElementById(key);
   element.classList.add(map[key].class);
}

// Map hover
$(document).ready(function() {
   $('path').hover(function(event) {
      var hoverId;
      hoverId = this.id;

      if (map[hoverId].hover == false)
         return;

      var left = event.pageX;
      var top = event.pageY;

      var $this = $(this);
      var offset = $this.offset();
      var width = $this.width();
      var height = $this.height();

      // var centerX = offset.left + width / 2 - width - 30;
      var centerX = event.pageX - 200;
      // var centerY = offset.top + height / 2 - height - 30;
      var centerY = event.pageY - 200;
      if (centerX <= 0) centerX = 0;
      if (centerY <= 0) centerY = 0;

      $('.popover__content .p-title').append(map[hoverId].title);
      $('.popover__content .p-name').append(map[hoverId].name);

      if (map[hoverId].phone !== "") {
        $('.popover__content .p-phone').append(map[hoverId].phone);
      }
      else {
         $('.popover__content .pb-phone').css({display: 'none'});
      }

      if (map[hoverId].email !== "")
         $('.popover__content .p-email').append(map[hoverId].email);
      else {
         $('.popover__content .pb-email').css({display: 'none'});
      }

      $('.popover__content')
         .css({
            top: centerY,
            left: centerX
         })
         .toggleClass("hovered");
   });

   $('path').mouseout(function() {
      $('.popover__content').removeClass("hovered");
      $('.popover__content .p-title').empty();
      $('.popover__content .p-name').empty();
      $('.popover__content .p-phone').empty();
      $('.popover__content .p-email').empty();
      $('.popover__content .pb-phone').css({display: 'block'});
      $('.popover__content .pb-email').css({display: 'block'});
   });
});
