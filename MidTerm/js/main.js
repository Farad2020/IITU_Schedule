function find_teacher_button_click() {
  let teacher_button = document.getElementById("find_teacher_button");
  let group_button = document.getElementById("find_group_button");
  teacher_button.setAttribute("class", "button active_button");
  group_button.setAttribute("class", "button");
}

function find_group_button_click() {
  let teacher_button = document.getElementById("find_teacher_button");
  let group_button = document.getElementById("find_group_button");
  teacher_button.setAttribute("class", "button");
  group_button.setAttribute("class", "button active_button");
}

function createGrid() {
  let grid = document.getElementById("schedule_grid_row");
  let content = '<div class="col- grid_border mr-2 mb-2 no_border d-flex flex-column justify-content-center"><p>08:00 <br>08:50</p></div><div class="col grid_border mr-2 mb-2 d-flex flex-column filled"><div class="grid_item_header">Web-technologies</div><div class="ml-1 grid_item_content d-flex align-items-start"><p class="grid_item_content_p">practice: CSSE-1801K</p></div><div class="ml-1 grid_item_content d-flex align-items-start"><img src="images/person-black-18dp.svg"><p class="grid_item_content_p">Mukazhanov N.K. (assistant Professor, PhD)</p></div><div class="ml-1 grid_item_content d-flex align-items-start"><img src="images/place-black-18dp.svg"><p class="grid_item_content_p">401</p></div></div><div class="col grid_border mr-2 mb-2"><p></p></div><div class="col grid_border mr-2 mb-2"><p></p></div><div class="col grid_border mr-2 mb-2"><p></p></div><div class="col grid_border mr-2 mb-2"><p></p></div><div class="col grid_border mr-2 mb-2"><p></p></div><div class="col grid_border mr-2 mb-2"><p></p></div><div class="w-100"></div>'
  for (let i = 0; i < 7; ++i) {
    grid.innerHTML += content;
  }
  checkForTextLegnth();
}

function checkForTextLegnth() {
  let elements = document.getElementsByClassName("grid_item_content_p");
  for (let i = 0; i < elements.length; ++i) {
    if (elements[i].innerHTML.length > 30) {
      elements[i].innerHTML = elements[i].innerHTML.substring(0, 27) + "...";
    }
  }
}