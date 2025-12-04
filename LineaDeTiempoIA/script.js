document.addEventListener('DOMContentLoaded', function() {
    const timelineData = [
        {
            year: "1950",
            title: "Test de Turing",
            description: "Alan Turing publica 'Computing Machinery and Intelligence', introduciendo el famoso Test de Turing. Este propone un criterio para determinar si una máquina es capaz de exhibir un comportamiento inteligente indistinguible del de un humano."
        },
        {
            year: "1956",
            title: "Conferencia de Dartmouth",
            description: "El nacimiento formal de la Inteligencia Artificial (IA) como campo de estudio. Organizada por John McCarthy, Marvin Minsky, Nathaniel Rochester y Claude Shannon. Se acuña oficialmente el término 'Inteligencia Artificial'."
        },
        {
            year: "1974 - 1993",
            title: "Invierno de la IA",
            description: "Período marcado por la desilusión, la escasez de fondos y la crítica a las expectativas poco realistas. Los sistemas de IA simbólica (expertos) alcanzaron sus límites de procesamiento y las promesas iniciales no se cumplieron. El financiamiento gubernamental se redujo drásticamente."
        },
        {
            year: "2010s - Hoy",
            title: "Aprendizaje Profundo (Deep Learning)",
            description: "El resurgimiento de la IA, impulsado por el poder de procesamiento (GPUs), grandes cantidades de datos (Big Data) y avances en algoritmos de redes neuronales (Deep Learning). Esto condujo a logros masivos en visión por computadora, reconocimiento de voz y modelos de lenguaje (como ChatGPT o Gemini)."
        }
    ];

    const timeline = document.getElementById('timeline');

    timelineData.forEach((item, index) => {
        const eventDiv = document.createElement('div');
        eventDiv.classList.add('event');

        // Alternar la clase para el posicionamiento (odd/even)
        if (index % 2 === 0) {
            eventDiv.classList.add('left');
        } else {
            eventDiv.classList.add('right');
        }

        const contentDiv = document.createElement('div');
        contentDiv.classList.add('content');

        contentDiv.innerHTML = `
            <h3>${item.year}: ${item.title}</h3>
            <p>${item.description}</p>
        `;

        eventDiv.appendChild(contentDiv);
        timeline.appendChild(eventDiv);
    });
});