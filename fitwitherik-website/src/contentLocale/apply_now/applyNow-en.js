const applyNow = {
    title: 'Application form online coaching',
    tagLine_1: "These questions give me an overview of you to se if you're a good fit for my coaching program!",
    tagLine_2: "The next questions are about what you know, what you want to achieve this year and what is stopping you from achieving this.",
    next: 'NEXT',
    back: "BACK",
    submit: "SUBMIT",
    step_1: {
        name: {
            fieldName: "Name",
            placeholder: "Name...",
            data: "",
            error: false,
            feedback: "Please provide a Name",
        },
        email: {
            fieldName: "Email",
            placeholder: "example@gmail.com",
            data: "",
            error: false,
            feedback: "Please provide a valid email",
        },
        phoneNumber: {
            fieldName: "Phone Number",
            placeholder: "Phone Number...",
            data: "",
            error: false,
            feedback: "Please provide a phone number",
        },
        age: {
            fieldName: "What is your age?",
            data: "",
            placeholder: "Age...",
            error: false,
            feedback: "Please provide your age (between 15 and 100)",
        },
        height: {
            fieldName: "What is your height? (cm)",
            data: "",
            placeholder: "Height...",
            error: false,
            feedback: "Please provide your height (between 20 and 220)",
        },
        weight: {
            fieldName: "What is your weight? (kg)",
            data: "",
            placeholder: "Weight...",
            error: false,
            feedback: "Please provide your weight (between 40 and 300)",
        },
    },
    step_2: {
        plan: {
            fieldName: "What type of plan do you want to apply for?",
            placeholder: "Plan...",
            data: "",
            error: false,
            feedback: "Please choose a plan",
            types: ["button"],
            options: [
                { data: "4 week plan", active: false },
                { data: "6 months plan", active: false },
                { data: "12 months plan", active: false },
            ],
        },
        current_routine: {
            fieldName:
                "What does your current fitness routine look like? (#days a week training, which exercises)",
            placeholder: "My current Fitness Routine is...",
            data: "",
            error: false,
            feedback:
                "Please provide your routine (if you don't have one type 'none')",
            types: ["text"],
        },
        current_diet: {
            fieldName:
                "What does your current diet/ average day of eating look like? (how much calories, number of meals a day, what kind of foods)",
            placeholder: "My current diet is...",
            data: "",
            error: false,
            feedback: "Please provide your diet",
            types: ["text"],
        },
        goal: {
            fieldName:
                "In a year from now, what would your dream body look like? (be specific; weight, bodyfat %, etc)",
            placeholder: "My dream body would be...",
            data: "",
            error: false,
            feedback: "Please provide your dream body",
            types: ["text"],
        },
        hurdles: {
            fieldName: "What stops you from achieving this dream body?",
            placeholder: "Other namely, ...",
            data: "",
            error: false,
            feedback: "Please choose an option",
            types: ["button", "other", "multiple"],
            options: [
                { data: "Accountability", active: false },
                { data: "Not enough food knowledge", active: false },
                { data: "Not enough training knowledge", active: false },
                { data: "Dont know where to start", active: false },
                { data: "Other", active: false },
            ],
        },
        current_progress: {
            fieldName: "What does your current fitness progress look like?",
            data: "",
            error: false,
            feedback: "Please choose an option",
            types: ["button"],
            options: [
                { data: "Bad(Almost no progress or none)", active: false },
                {
                    data: "Struggling (little progress but not as fast as you'd like)",
                    active: false,
                },
                {
                    data: "Successful (good progress, just looking to sustain it)",
                    active: false,
                },
            ],
        },
        interested: {
            fieldName:
                "If you could make fast progress towards your fitness goals, would you be interested?",
            data: "",
            error: false,
            feedback: "Please choose an option",
            types: ["button"],
            options: [
                { data: "No", active: false },
                { data: "Maybe", active: false },
                { data: "Yes, Definitely!", active: false },
            ],
        },
    },
}
export default applyNow;