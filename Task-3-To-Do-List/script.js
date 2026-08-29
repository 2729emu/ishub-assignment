const tasks = document.querySelectorAll("li");

tasks.forEach(function(task) {
    task.addEventListener("click", function() {
        task.classList.toggle("done");
    });
});
