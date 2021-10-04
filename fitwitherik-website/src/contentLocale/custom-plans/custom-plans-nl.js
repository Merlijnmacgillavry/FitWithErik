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
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla at eveniet, esse sequi corporis minus voluptatum ipsam commodi, magnam quaerat tenetur laudantium reiciendis, nisi voluptate?"
        },
        {
            name: "MUSCLE MAXIMIZATION TRAININGSPLAN",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla at eveniet, esse sequi corporis minus voluptatum ipsam commodi, magnam quaerat tenetur laudantium reiciendis, nisi voluptate?"

        },
    ]
}
export default customPlans;