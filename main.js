//Select element function
const selectElement = function (element) {
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function () {
    body.classList.toggle('open');
});

{
    filterSelection("all")

    function filterSelection(c) {
        var x, i;
        x = document.getElementsByClassName("column");
        if (c == "all") c = "";
        for (i = 0; i < x.length; i++) {
            w3RemoveClass(x[i], "show");
            if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
        }
    }

    // Show filtered elements
    function w3AddClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            if (arr1.indexOf(arr2[i]) == -1) {
                element.className += " " + arr2[i];
            }
        }
    }

    // Hide elements that are not selected
    function w3RemoveClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            while (arr1.indexOf(arr2[i]) > -1) {
                arr1.splice(arr1.indexOf(arr2[i]), 1);
            }
        }
        element.className = arr1.join(" ");
    }


    // Add active class to the current button (highlight it)
    var btnContainer = document.getElementById("myBtnContainer");
    var btns = btnContainer.getElementsByClassName("box-btn");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }
};

{
    var mydate = new Date();
    var day = mydate.getDay();
    var month = mydate.getMonth();
    var year = mydate.getYear();
    var d = mydate.getDate();
    if (year < 1000)
        year += 1900;
    if (d < 10)
        d = "0" + d;
    var theDay = "";
    if (day == 1) {
        theDay = "Monday";
    } else if (day == 2) {
        theDay = "Tuesday";
    } else if (day == 3) {
        theDay = "Wednesday";
    } else if (day == 4) {
        theDay = "Thursday";
    } else if (day == 5) {
        theDay = "Friday";
    } else if (day == 6) {
        theDay = "Saturday";
    } else {
        theDay = "Sunday";
    }
    var theMonth = "";
    if (month == 0) {
        theMonth = "January";
    } else if (month == 1) {
        theMonth = "February";
    } else if (month == 2) {
        theMonth = "March";
    } else if (month == 3) {
        theMonth = "April";
    } else if (month == 4) {
        theMonth = "May";
    } else if (month == 5) {
        theMonth = "June";
    } else if (month == 6) {
        theMonth = "July";
    } else if (month == 7) {
        theMonth = "August";
    } else if (month == 8) {
        theMonth = "September";
    } else if (month == 9) {
        theMonth = "October";
    } else if (month == 10) {
        theMonth = "November";
    } else {
        theMonth = "December";
    }

    var mydate = theDay + " " + d + " " + theMonth + " " + year;
    document.getElementById('mydate').innerHTML = "Today's date: " + mydate;

};

var modalBtns = document.querySelectorAll('.modal-open');

modalBtns.forEach(function (btn) {
    btn.onclick = function () {
        var modal = btn.getAttribute('data-modal');

        document.getElementById(modal).style.display = 'block';
    };
});

var closeBtns = document.querySelectorAll('.modal-close');

closeBtns.forEach(function (btn) {
    btn.onclick = function () {
        var modal = (btn.closest('.modal').style.display = 'none');
    };
});

window.onclick = function (e) {
    if (e.target.className === 'modal') {
        e.target.style.display = 'none';
    }
};
