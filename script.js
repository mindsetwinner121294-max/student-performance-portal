let students = [];

// Read students.csv using Papa Parse
Papa.parse("students.csv", {
    download: true,
    header: true,
    skipEmptyLines: true,

    complete: function(results) {

    students = results.data;

    console.log("CSV Loaded");
    console.log(students);

    loadLessons(results.meta.fields);

}

});

function searchStudent(){

    const studentNumber =
        document.getElementById("studentNumber").value.trim();

    

    const lesson =
    document.getElementById("lesson").value;

const scoreColumn =
    lesson + " Score";

const feedbackColumn =
    lesson + " Feedback";

    const result =
        document.getElementById("result");

    const student = students.find(function(s){

    return s["Student Number"] === studentNumber;

});

    if(student){

        result.style.display="block";

        result.innerHTML=`

            <h2>${student["First Name"]}</h2>

            <br>

            <div class="score">

                ${student[scoreColumn]}

            </div>

            <br>

            <div class="feedback">

                <b>Teacher Feedback</b>

                <br><br>

                ${student[feedbackColumn]}

            </div>

        `;

    }

    else{

        result.style.display="block";

        result.innerHTML=`

            <h3>

                Student record not found.

            </h3>

        `;

    }

}
function loadLessons(headers){

    const lessonDropdown =
        document.getElementById("lesson");

    lessonDropdown.innerHTML = "";

    headers.forEach(function(header){

        if(header.endsWith(" Score")){

            const lessonName =
                header.replace(" Score","");

            const option =
                document.createElement("option");

            option.value = lessonName;

            option.textContent = lessonName;

            lessonDropdown.appendChild(option);

        }

    });

}