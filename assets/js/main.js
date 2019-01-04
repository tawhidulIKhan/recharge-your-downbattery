let allQuestions = [
  {
    id: 1,
    q:
      "তুই ডেইলি কয় ঘন্টা ফেসবুক ইউটিউবে গেমস ইন্টারনেট আলতু ফালতু কাজে নষ্ট করস ?",
    score: null,
    marked: 0,
    options: [
      {
        name: "এক ঘন্টার কম",
        value: 10
      },
      {
        name: "এক থেকে তিন ঘন্টার কম ",
        value: 5
      },
      {
        name: "তিন ঘন্টার বেশি ",
        value: 0
      }
    ]
  },
  {
    id: 2,
    q:
      "গত এক বছরে তুই কি কি নতুন স্কিল ডেভেলপ করার চেষ্টা করসস ? যেমন এক্সেল , ফটোশপ , ভিডিও এডিটিং ,ফটোগ্রাফি , প্রোগ্রামিং,ওয়েব ডেভেলপ, ইংরেজি শেখ,প্রেজেন্টেশন , পাবলিক স্পিকিং ,লিডারশিপ বা অন্য কিছু ।  ",
    score: null,
    marked: 0,
    options: [
      {
        name: "এই রকম তিনটার বেশি ",
        value: 10
      },
      {
        name: "এই রকম দুইটা বা তিনটা ",
        value: 5
      },
      {
        name: "এই রকম একটা বা শূন্য  ",
        value: 0
      }
    ]
  },
  {
    id: 3,
    q: "গত এক বছরে কয়টা সেমিনার,ওয়ার্কশপে গেছস বা অনলাইন ভিডিও কোর্স করসস ?",
    score: null,
    marked: 0,
    options: [
      {
        name: "চারটার বেশি ",
        value: 10
      },
      {
        name: "দুই থেকে চার্ এর মধ্যে ",
        value: 5
      },
      {
        name: "এক বা তার কম ",
        value: 0
      }
    ]
  },
  {
    id: 4,
    q:
      "তোর যে শখ , স্বপ্ন আছে  বা তুই  যা হতে চাস , সেটার জন্য গত পাঁচ দিনে কত ঘন্টা সময় দিছোস ?",
    score: null,
    marked: 0,
    options: [
      {
        name: "দশ ঘন্টার বেশি",
        value: 10
      },
      {
        name: "তিন থেকে দশ ঘন্টা",
        value: 5
      },
      {
        name: "তিন ঘন্টার কম ",
        value: 0
      }
    ]
  },
  {
    id: 5,
    q: "তোর চিন্তাভাবনা , কাজকর্ম কে কন্ট্রোল করে ?",
    score: null,
    marked: 0,
    options: [
      {
        name: "ফিউচারের জন্য সিন্সিয়ারলি কাজ করি",
        value: 10
      },
      {
        name: "কিছুটা সিরিয়াস কিছুটা মাস্তি করে কাটাই ",
        value: 5
      },
      {
        name: "অতীতের হতাশা , মন খারাপ নিয়ে পরে থাকি ",
        value: 0
      }
    ]
  },
  {
    id: 6,
    q: "তুই কয়জনকে আইডল হিসেবে ফলো করস?",
    score: null,
    marked: 0,
    options: [
      {
        name: "তিন জনের বেশি",
        value: 10
      },
      {
        name: "দুই বা তিনজন",
        value: 5
      },
      {
        name: "একজন বা কেউ না ",
        value: 0
      }
    ]
  },
  {
    id: 7,
    q: "তোর লেখাপড়া / কাজকর্মের কন্ডিশন কেমন ? রেজাল্ট / আউটপুট কেমন ",
    score: null,
    marked: 0,
    options: [
      {
        name: "খুব ভালো",
        value: 10
      },
      {
        name: "মোটামুটি ",
        value: 5
      },
      {
        name: "তালো না ",
        value: 0
      }
    ]
  },
  {
    id: 8,
    q: "কোনো একটা কাজ শুরু করা লাগলে",
    score: null,
    marked: 0,
    options: [
      {
        name: "আগে থেকেই প্ল্যান করে , খোঁজ খবর নিয়ে অনটাইমে শুরু করি",
        value: 10
      },
      {
        name: "অল্প কিছু দিনের মধ্যে শুরু করি ",
        value: 5
      },
      {
        name: "ঢিলেমি করে লাস্ট মোমেন্টের জন্য রেখে দেই ",
        value: 0
      }
    ]
  },
  {
    id: 9,
    q:
      "কোনো জিনিসে আটকে গেলে , মন খারাপ বা হতাশ লাগলে সেটা কত দিন পর্যন্ত থাকে ?",
    score: null,
    marked: 0,
    options: [
      {
        name: "কয়েক ঘন্টা বা একদিনের মধ্যে শেষ হয়ে যায়",
        value: 10
      },
      {
        name: "দুই একদিনের মধ্যে শেষ হয়ে যায় ",
        value: 5
      },
      {
        name: "দুই একদিনের বেশি থাকে",
        value: 0
      }
    ]
  },
  {
    id: 10,
    q:
      "তুই ওভারঅল কতটা হ্যাপি , তোর খাওয়া দাওয়া , শরীর স্বাস্থ্য , ফ্যামিলি এবং ফ্রেন্ডদের সাথে তোর রিলেশন কেমন ?",
    score: null,
    marked: 0,
    options: [
      {
        name: "খুব ভালো",
        value: 10
      },
      {
        name: "মোটামুটি ",
        value: 5
      },
      {
        name: "হালুয়া টাইট টাইপের খারাপ অবস্থা ",
        value: 0
      }
    ]
  }
];
let content = document.querySelector("#content");
let field = "rydb-data";

/* Intro Template */

function introTemplate() {
  return `
  <div class="row align-items-center ">
  <div class="col-md-4 col-lg-4 col-sm-12 col-12 
  mb-lg-0 mb-md-0 mb-5
  ">
  <img src="assets/img/rydb.jpg" class="img-fluid">
</div>
<div class="col-md-8 col-lg-8 col-sm-12 col-12">

  <div class="content p-5 text-center">
  <h1 class="title mb-5">
  তুই কি তোর ব্যাটারির চার্জ মাপতে চাস?
        </h1>
    <div class="d-lg-flex justify-content-center">
    <button class="btn mr-4 my-lg-0 my-md-3 align-items-center btn-intro" id="yes">
    হ্যা মাপতে চাই 
</button>
<button class="btn align-items-center btn-intro" id="whatisthis">
  এইডা আবার কি ?
</button>

    </div>
    
    </div>
   </div>`;
}

// So Bad Codtion

function soBadCondition() {
  let html = "";
  html += `<div class="row align-items-center">
  <div class="col-md-4 col-lg-4 col-sm-12 col-12 mb-lg-0 mb-md-0 mb-5">

  <img src="assets/img/shes.jpeg">
</div>

<div class="col-md-8 col-lg-8 col-sm-12 col-12">

  <div class="content pl-0 pl-md-5 pl-lg-5">
  <h3 class="title mb-5 bg-danger text-white p-2">তোর অবস্থা পুরাই কেরোসিন  </h3>
 
 <h5> জরুরি ভিত্তিতে একজন ভালো ফ্রেন্ড ,সিনিয়র ভাই , স্যার,কোন ক্লোজ রিলেটিভের সাথে তোর অবস্থা শেয়ার কর ।  কি করা উচিত সে পরামর্শ নে ।  কাউকে খুঁজে না পেলে একজন লাইফ কোচের সাথে কথা বল ।  দরকার হলে মনোরোগ বিশেষজ্ঞের সাথেও কথা বলতে পারস ।  তবে খুব দ্রুত কথা বলার ব্যবস্থা কর দেরি করবি না ।  এখনো অনেক কিছু করা সম্ভব । </h5>
 </div>
 </div>

 `;
  return html;
}

// Average Condition

function averageCondition() {
  let html = "";
  html += `<div class="row align-items-center shadow p-5">
  <div class="col-md-4 col-lg-4 col-sm-12 col-12 mb-lg-0 mb-md-0 mb-5">

  <img src="assets/img/average.jpg" width="200" height="200">
</div>

<div class="col-md-8 col-lg-8 col-sm-12 col-12">
<div class="content pl-0 pl-md-5 pl-lg-5">
  <h3 class="title mb-5 bg-warning text-white p-2">তোর অবস্থা সাধারণ মানুষের মতো </h3>
 <h5> তুই তাদের মতো খেয়ে দিয়ে , কোনো রকমে কিছু একটা করে লাইফ পার করে দিতে পারবি ।  তুই    যদি এই অবস্থা থেকে আরো ভালো করতে চাষ , তাহলে তোকে কিছু জিনিস চেঞ্জ করতে হবে ।  দশটা যে যে পয়েন্ট এ ঘাটতি আছে , সেগুলো ধরে ধরে ভালো করার চেষ্টা করতে হবে । </h5>
 </div>
 </div>

 `;
  return html;
}

// Good Condition

function goodCondition() {
  let html = "";

  html += `<div class="row align-items-center shadow p-5">
  <div class="col-md-4 col-lg-4 col-sm-12 col-12 mb-lg-0 mb-md-0 mb-5">
    <img src="assets/img/average.jpg" width="200" height="200">
  </div>

  <div class="col-md-8 col-lg-8 col-sm-12 col-12">
    <div class="content pl-0 pl-md-5 pl-lg-5">
      <h3 class="title mb-5 bg-info p-2">তুই ভালো লেভেলে আছোস </h3>
      <h5>  যেকোনো একটা জিনিসে তুই ভালো করার চেষ্টা করতেছস ।  সেটা ভালোভাবে চালিয়ে জিতে থাকে ।  তোর অনেক পোটেনশিয়ালিটি  আছে ।  সেগুলো কাজে লাগা , আরো অনেক ভালো করতে পারবি । </h5>
  </div>
 </div>
 `;

  return html;
}

// Best Condition

function bestCondition() {
  let html = "";

  html += `<div class="row align-items-center shadow p-5">
  
  <div class="col-md-4 col-lg-4 col-sm-12 col-12
  mb-lg-0 mb-md-0 mb-5 ">
    <img src="assets/img/top.jpg" width="230" height="200">
  </div>
  
  <div class="col-md-8 col-lg-8 col-sm-12 col-12">
    <div class="content pl-0 pl-md-5 pl-lg-5">
    <h3 class="title mb-5 bg-success p-2 text-white">তুই টপ পারফর্মার</h3>
    <h5> তুই হার্ডওয়ার্কিং এবং ডেডিকেটেড । তুই লাইফ এ অনেক কিছু করতে পারবি । তাই তোর এই হার্ড ওয়ার্ক ধরে রাখতে হবে । তোর কাজ , তোর মিশন এর পিছনে নিত্য নতুন স্টাইল এ লেগে থাকতে হবে । কিপ ইট আপ ব্রো । </h5>
  </div>
 </div>
 `;

  return html;
}

/* Result*/

function result(battery) {
  let html = "";

  if (battery >= 0 && battery <= 25) {
    html += soBadCondition();
  } else if (battery >= 25 && battery <= 50) {
    html += averageCondition();
  } else if (battery >= 50 && battery <= 75) {
    html += goodCondition();
  } else if (battery >= 75 && battery <= 100) {
    html += bestCondition();
  }

  return html;
}

// Display Data
function a(unit) {
  document.getElementById("unitResult").value = unit;
  let val = document.getElementById("unitResult").value;
  let submit = document.querySelector("#submit");

  if (val) {
    submit.removeAttribute("disabled");
  }
}

// Show Questions

function showQuestions(questions) {
  let counter = 0;
  let html = "";
  for (let i = 0; i <= questions.length; i++) {
    if (counter > 0) break;
    if (questions[i].marked == 0) {
      html += `<div class="question-box shadow">`;
      html += `<h2 class="title mb-5">${questions[i].q}</h2>`;

      // Radio options start  -----

      for (let j = 0; j < questions[i].options.length; j++) {
        let option = questions[i].options;
        html += `<div class="inputGroup"><input type="radio" data-id="${
          questions[i].id
        }" id="radio${j}" name="unit" value="${
          option[j].value
        }"  onclick="a(this.value)"><label for="radio${j}"">${
          option[j].name
        }</label></div>`;
      }
      // Radio options end  -----

      html += `<input type="hidden" data-id="${
        questions[i].id
      }" id="unitResult">`;
      html += `<div class="d-flex justify-content-between align-items-center"><button class="btn btn-submit" id="submit" disabled><img src="assets/img/tick.png"></button>`;
      html += `<span class="badge badge-primary px-3">${
        questions.length
      } / ${i + 1}</span></div>`;

      html += `</div>`;

      counter++;
    }
  }

  return html;
}

// Show Data Controller

function showDataController(data) {
  let questions = data.question;
  let answered = data.answered;
  let battery = data.battery;
  let html = "";

  if (answered > 9) {
    html += result(battery);
  } else if (questions) {
    html += showQuestions(questions);
  } else {
    html += introTemplate();
  }

  content.innerHTML = `<div class="intro" id="intro">
  ${html}

  </div>
</div>`;
}

/*
==============
  Data Show
==============
*/

function show() {
  let data = getAsArray(field);

  showDataController(data);

  updateData();

  updateBattery();
}

show();

/* 
=====================
Intro Initialization
=====================
*/
let yes = document.querySelector("#yes");

if (yes) yes.addEventListener("click", introInit);

function introInit(e) {
  let data = {
    question: allQuestions,
    battery: 0,
    answered: 0
  };

  data = JSON.stringify(data);
  let rydbData = localStorage.getItem(field);
  if (rydbData == null) {
    localStorage.setItem(field, data);
  }
  show();
}

function updateData() {
  // Answer submit
  let unit = document.querySelector("#unitResult");
  let submit = document.querySelector("#submit");
  if (submit) {
    submit.addEventListener("click", submitAnswer);
    function submitAnswer(e) {
      let answer = unit;
      let id = unit.dataset.id;
      updateById(answer, id);
      show();
    }
  }
}

// getById

function updateById(answer, id) {
  let data = JSON.parse(getAll(field));
  let questions = data.question;
  for (let i = 0; i < questions.length; i++) {
    if (questions[i].id == id) {
      questions[i].score = answer.value;
      questions[i].marked = 1;
    }
  }

  data = JSON.stringify(data);
  localStorage.setItem(field, data);

  updateBfield(answer.value);
}

function updateBfield(unit) {
  let data = getAsArray(field);
  let battery = data.battery;
  data.battery = battery + parseInt(unit);

  data = updateAnswered(data);

  update(data);
  updateBattery();
}

function updateBattery() {
  let battery = document.querySelector(".battery");
  let unit = battery.querySelector(".unit");
  let percent = unit.querySelector(".percent").querySelector("span");
  let data = getAsArray(field).battery;
  let percentData = data ? data : 0;
  percent.innerHTML = `${percentData}%`;
  unit.style.height = `${data}%`;
}

// Answered Update

function updateAnswered(data) {
  let ans = data.answered;
  data.answered = ans + 1;
  return data;
}

// What is this

let whatisthis = document.querySelector("#whatisthis");
let aboutEl = document.querySelector("#about");
let aboutCloseBtn = document.querySelector("#aboutClose");

// About Display

if (whatisthis) {
  whatisthis.addEventListener("click", about);
  function about() {
    aboutEl.style.top = 0;
  }
}

// About Close

if (aboutCloseBtn) {
  aboutCloseBtn.addEventListener("click", aboutClose);
  function aboutClose() {
    aboutEl.style.top = -200 + "%";
  }
}

let clear = document.querySelector("#clearAll");

clear.addEventListener("click", clearAll);
function clearAll(e) {
  localStorage.removeItem(field);
  location.reload();
}
