let content = document.querySelector("#content");
let field = "rydb-data";
let allQuestions = [
  {
    id: 1,
    q:
      "তুই ডেইলি কয় ঘন্টা ফেসবুক ইউটিউবে গেম্স্ ইন্টারনেট আলতু ফালতু কাজে নষ্ট করস ?",
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
      "গত এক বছরে তুই কি কি নতুন স্কিল ডেভেলপ করার চেষ্টা করসস ? যেমন এক্সেল , ফটোশপ , ভিডিও এডিটিং ,ফটোগ্রাফি , প্রোগ্রামিং,ওয়েব ডেভেলপ, ইংরেজি শেখ,প্রেজেন্টেশন , পাবলিক স্পিকিং ,লিডারশিপ বা অন্য কিছু ? ",
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
    q: "demo question?",
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
    id: 5,
    q: "demo question?",
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
    id: 5,
    q: "demo question?",
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
    id: 6,
    q: "demo question?",
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
    id: 7,
    q: "demo question?",
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
    id: 8,
    q: "demo question?",
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
    id: 9,
    q: "demo question?",
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
    id: 10,
    q: "demo question?",
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
  }
];

// Display Data
function a(unit) {
  document.getElementById("unitResult").value = unit;
}
function show() {
  let data = getAsArray(field);
  let questions = data.question;
  let answered = data.answered;
  let battery = data.battery;
  let html = "";
  if (answered == 10) {
    html += `<h2 class="title mb-5">তোর ফলাফল :</h2>`;
    if (battery > 0 && battery <= 25) {
      html += `<h3 class="title mb-5">তোর অবস্থা পুরাই কেরোসিন </h3>`;
    } else if (battery > 25 && battery <= 50) {
      html += `<h3 class="title mb-5">তোর অবস্থা সাধারণ মানুষের মতো </h3>`;
    } else if (battery > 50 && battery <= 75) {
      html += `<h3 class="title mb-5">তুই ভালো লেভেলে আছোস </h3>`;
    } else if (battery > 75 && battery <= 100) {
      html += `<h3 class="title mb-5">তুই টপ পারফর্মার </h3>`;
    }
  } else if (questions) {
    let counter = 0;

    for (let i = 0; i < questions.length; i++) {
      if (counter > 0) break;
      if (questions[i].marked == 0) {
        //if ((counter = 0)) {
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
        html += `<button class="btn btn-submit" id="submit"><img src="assets/img/tick.png"></button>`;
        //  }
        counter++;
      }
    }
  } else {
    html += `<div class="intro" id="intro">
        <h2 class="title mb-5">
        কিরে তুই কি তোর ব্যাটারী চার্জ মাপতে চাস?
        </h2>
        <div class="mt-3 d-flex justify-content-center">
        <button class="btn mr-4 align-items-center" id="yes">
            <span class="mr-3"> হা মাপবো</span>
            <img src="assets/img/happy.png">
        </button>
        <button class="btn align-items-center" id="whatisthis">
            <span class="mr-3"> এইডা আবার কি ?</span>
             <img src="assets/img/question.jpeg"> 
        </button>
        </div>
    </div>`;
  }

  content.innerHTML = `<div class="intro" id="intro">
  ${html}

  </div>
</div>`;
  updateData();

  updateBattery();
}

show();

let yes = document.querySelector("#yes");
let whatisthis = document.querySelector("#whatisthis");
let data = {
  question: allQuestions,
  battery: 0,
  answered: 0
};

// data init

if (yes) {
  yes.addEventListener("click", introInit);
}
function introInit(e) {
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

let clear = document.querySelector("#clearAll");
clear.addEventListener("click", clearAll);
function clearAll(e) {
  let data = localStorage.getItem(field);
  if (data) {
    localStorage.removeItem(field);
  }
  console.log(data);
  show();
  updateBattery();
  location.reload();
}
