const customPlans = {
    title: "Custom Plans",
    info: "",
    select: "SELECT",
    types: [
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
            info: "A varying nutrition plan which can guide you towards a beach ready body without the diet feeling! 4-day option nutrition plan including foods you like and adapted to your body’s needs."
        },
        {
            name: "MUSCLE MAXIMIZATION WORKOUT PLAN",
            info: "A training program to maximize the potential to gain strength and muscle! 4 week hypertrophy based workout plan to get you stronger and bigger with selected exercises optimal to get you results."

        },
    ]
}
export default customPlans;