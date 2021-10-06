const customPlans = {
    title: "Custom Plans",
    info: "",
    select: "SELECT",
    types: [
        {
            name: "Basic",
            items: [
                {
                    name: 'Regulier plan',
                    active: true
                },
                {
                    name: 'Intake gesprek',
                    active: false
                },
                {
                    name: 'Toegang tot de Fit with Erik Coaching App',
                    active: false
                },
                {
                    name: '24/7 Support via berichten',
                    active: false
                },
                {
                    name: 'Wekelijkse check-ins',
                    active: false
                },
            ],
        },
        {
            name: "STANDARD",
            items: [
                {
                    name: 'Gepersonaliseerd plan',
                    active: true
                },
                {
                    name: 'Intake gesprek',
                    active: true
                },
                {
                    name: 'Toegang tot de Fit with Erik Coaching App',
                    active: false
                },
                {
                    name: '24/7 Support via berichten',
                    active: false
                },
                {
                    name: 'Wekelijkse check-ins',
                    active: false
                },
            ],
        },
        {
            name: "PREMIUM (AANBEVOLEN)",
            items: [
                {
                    name: 'Gepersonaliseerd plan',
                    active: true
                },
                {
                    name: 'Intake gesprek',
                    active: true
                },
                {
                    name: 'Toegang tot de Fit with Erik Coaching App',
                    active: true
                },
                {
                    name: '24/7 Support via berichten',
                    active: false
                },
                {
                    name: 'Wekelijkse check-ins',
                    active: false
                },
            ],
        },

    ],
    plans: [
        {
            name: "FAT LOSS FATALITY VOEDINGSPLAN",
            info: "Een afwisselend voedingsschema dat jou kan begeleiden naar een strand ready lichaam zonder het gevoel van diëten! 4 dagen optie voedingsplan met voedsel dat jij lekker vind en aangepast op de behoeftes van jouw lichaam."
        },
        {
            name: "MUSCLE MAXIMIZATION TRAININGSPLAN",
            info: "Een trainingsschema waarmee je de potentie van het opbouwen van kracht en spiermassa maximaliseert! 4 weeks hypertrofie gebaseerd trainingsschema met optimaal geselecteerde oefeningen."

        },
    ]
}
export default customPlans;