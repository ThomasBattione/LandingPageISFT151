document.addEventListener("DOMContentLoaded", function () {
    const courses = [
        {
            name: "Tecnicatura Superior en Análisis de Sistemas",
            link: "formulario_analisis_sistemas.html",
        },
        {
            name: "Tecnicatura Superior en Gestión Ambiental",
            link: "formulario_gestion_ambiental.html",
        },
        {
            name: "Tecnicatura Superior en Emergencias de Salud",
            link: "formulario_emergencias_salud.html",
        },
        {
            name: "Tecnicatura Superior en Logística",
            link: "formulario_logistica.html",
        },
        {
            name: "Tecnicatura Superior en Turismo",
            link: "formulario_turismo.html",
        },
    ];

    const courseList = document.getElementById("course-list");

    courses.forEach((course) => {
        const courseDiv = document.createElement("div");
        courseDiv.classList.add("course");
        const courseLink = document.createElement("a");
        courseLink.href = course.link;
        courseLink.textContent = course.name;
        courseDiv.appendChild(courseLink);
        courseList.appendChild(courseDiv);
    });
});