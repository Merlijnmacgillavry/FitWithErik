const customPlans = {
    title: "Custom Plans",
    info: "",
    select: "SELECT",
    types: [
        {
            name: "Basic",
            items: [
                {
                    name: 'Regular plan',
                    active: true
                },
                {
                    name: 'Intake call',
                    active: false
                },
                {
                    name: 'Access to the FITWITHERIK Coaching App',
                    active: false
                },
                {
                    name: '24/7 Support via chat',
                    active: false
                },
                {
                    name: 'Weekly check-ins',
                    active: false
                },
            ],
        },
        {
            name: "STANDARD",
            items: [
                {
                    name: 'Personalized plan',
                    active: true
                },
                {
                    name: 'Intake call',
                    active: true
                },
                {
                    name: 'Access to the FITWITHERIK Coaching App',
                    active: false
                },
                {
                    name: '24/7 Support via chat',
                    active: false
                },
                {
                    name: 'Weekly check-ins',
                    active: false
                },
            ],
        },
        {
            name: "PREMIUM",
            items: [
                {
                    name: 'Personalized plan',
                    active: true
                },
                {
                    name: 'Intake call',
                    active: true
                },
                {
                    name: 'Access to the FITWITHERIK Coaching App',
                    active: true
                },
                {
                    name: '24/7 Support via chat',
                    active: false
                },
                {
                    name: 'Weekly check-ins',
                    active: false
                },
            ],
        },

    ],
    plans: [
        {
            name: "FAT LOSS FATALITY DIET PLAN",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla at eveniet, esse sequi corporis minus voluptatum ipsam commodi, magnam quaerat tenetur laudantium reiciendis, nisi voluptate?"
        },
        {
            name: "MUSCLE MAXIMIZATION WORKOUT PLAN",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla at eveniet, esse sequi corporis minus voluptatum ipsam commodi, magnam quaerat tenetur laudantium reiciendis, nisi voluptate?"

        },
    ]
}
export default customPlans;