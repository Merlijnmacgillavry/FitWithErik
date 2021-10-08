const applyCustomPlan = {
    title: 'Apply for a Custom Plan',
    submit: "SUBMIT",
    form: {
        name: {
            fieldName: "Name",
            placeholder: "Name...",
            data: "",
            error: false,
            feedback: "Please provide a Name",
            types: ["text"],
        },
        email: {
            fieldName: "Email",
            placeholder: "example@gmail.com",
            data: "",
            error: false,
            feedback: "Please provide a valid email",
            types: ["text"],
        },
        phoneNumber: {
            fieldName: "Phone Number",
            placeholder: "Phone Number...",
            data: "",
            error: false,
            feedback: "Please provide a phone number",
            types: ["text"],
        },
        plan: {
            fieldName: "What plan do you want to apply for?",
            placeholder: "Plan...",
            data: "",
            error: false,
            feedback: "Please choose a plan",
            types: ["button"],
            options: [
                { data: "Muscle Maximization", active: false },
                { data: "Fatloss Fatality", active: false },
            ],
        },
        type: {
            fieldName: "What type of plan do you want to apply for?",
            placeholder: "Type...",
            data: "",
            error: false,
            feedback: "Please choose a type",
            types: ["button"],
            options: [
                { data: "Standard", active: false },
                { data: "Premium", active: false },
            ],
        },
    },
}
export default applyCustomPlan;