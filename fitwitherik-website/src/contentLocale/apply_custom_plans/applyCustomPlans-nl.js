const applyCustomPlan = {
    title: 'Aanmeldformulier persoonlijke plannen',
    submit: "Aanmelden",
    form: {
        name: {
            fieldName: "Naam",
            data: "",
            error: false,
            feedback: "Vul alstublieft een naam in",
            types: ["text"]

        },
        email: {
            fieldName: "Email",
            data: "",
            error: false,
            feedback: "Vul alstublieft een emailadres in",
            types: ["text"]

        },
        phoneNumber: {
            fieldName: "Telefoonnummer",
            data: "",
            error: false,
            feedback: "Vul alstublieft een telefoonnummer in",
            types: ["text"]
        },
        plan: {
            fieldName: "Voor wat voor plan wil je je aanmelden?",
            placeholder: "Plan...",
            data: "",
            error: false,
            feedback: "Kies alstublieft een plan",
            types: ["button"],
            options: [
                { data: "Muscle Maximization", active: false },
                { data: "Fatloss Fatality", active: false },
            ],
        },
        type: {
            fieldName: "Voor wat voor type plan wil je je aanmelden?",
            placeholder: "Type...",
            data: "",
            error: false,
            feedback: "Kies alstublieft een type",
            types: ["button"],
            options: [
                { data: "Standard", active: false },
                { data: "Premium", active: false },
            ],
        },
    },
}
export default applyCustomPlan;