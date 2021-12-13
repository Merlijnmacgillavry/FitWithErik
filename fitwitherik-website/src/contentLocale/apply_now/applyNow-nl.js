const applyNow = {
    title: 'Aanmeldformulier online coaching',
    tagLine_1: "Deze vragen geven mij een goed beeld van jou waarmee ik kan bepalen of jij geschikt bent voor mijn coaching programma!",
    tagLine_2: "De volgende vragen gaan over wat je weet, wat je wil bereiken in het komende jaar en wat je tegenhoudt.",
    next: 'VOLGENDE',
    back: "TERUG",
    submit: "VERZENDEN",
    step_1: {
        name: {
            fieldName: "Naam",
            placeholder: "Naam...",
            data: "",
            error: false,
            feedback: "Vul alstublieft een naam in",
        },
        email: {
            fieldName: "Email",
            placeholder: "example@gmail.com",
            data: "",
            error: false,
            feedback: "Vul alstublieft een emailadres in",
        },
        phoneNumber: {
            fieldName: "Telefoonnummer",
            placeholder: "Telefoonnummer...",
            data: "",
            error: false,
            feedback: "Vul alstublieft een telefoonnummer in",
        },
        age: {
            fieldName: "Wat is je leeftijd",
            data: "",
            placeholder: "Leeftijd...",
            error: false,
            feedback: "Vul alstublieft je leeftijd in (tussen 16 en 99)",
        },
        height: {
            fieldName: "Wat is je lengte? (cm)",
            data: "",
            placeholder: "Lengte...",
            error: false,
            feedback: "Vul alstublieft je lengte in (tussen 20 en 220)",
        },
        weight: {
            fieldName: "Wat is je huidige gewicht? (kg)",
            data: "",
            placeholder: "Gewicht...",
            error: false,
            feedback: "Vul alstublieft je huidige gewicht in (tussen 40 en 300)",
        },
    },
    step_2: {
        plan: {
            fieldName: "Voor wat voor plan wil je je aanmelden?",
            placeholder: "Plan...",
            data: "",
            error: false,
            feedback: "Kies alstublieft een plan",
            types: ["button"],
            options: [
                { data: "4 weken plan", active: false },
                { data: "6 maanden plan", active: false },
                { data: "12 maanden plan", active: false },
            ],
        },
        current_routine: {
            fieldName:
                "Hoe ziet je huidige fitness routine er uit? (# dagen per week sport, welke oefeningen)",
            placeholder: "Mijn huidige fitness routine...",
            data: "",
            error: false,
            feedback:
                "Vul alstublieft je huidige fitness routine in",
            types: ["text"],
        },
        current_diet: {
            fieldName:
                "Hoe ziet je huidige dieet/gemiddelde dag eten er uit? (hoeveelheid kcal, aantal maaltijden per dag, wat voor soort eten)",
            placeholder: "Mijn huidige dieet...",
            data: "",
            error: false,
            feedback: "Vul alstublieft je huidige dieet in",
            types: ["text"],
        },
        goal: {
            fieldName:
                "Hoe ziet jouw droomlichaam er over een jaar uit? (wees specifiek: gewicht, vet percentage, etc)",
            placeholder: "Mijn droomlichaam...",
            data: "",
            error: false,
            feedback: "Vul alstublieft uw droomlichaam in",
            types: ["text"],
        },
        hurdles: {
            fieldName: "Wat houdt je tegen om jouw droomlichaam te kunnen bereiken?",
            placeholder: "Anders namelijk, ...",
            data: "",
            error: false,
            feedback: "Kies alstublieft een reden",
            types: ["button", "other", "multiple"],
            options: [
                { data: "Verantwoordelijkheid", active: false },
                { data: "Niet genoeg kennis van training", active: false },
                { data: "Niet genoeg kennis van voeding", active: false },
                { data: "Ik weet niet waar ik moet beginnen", active: false },
                { data: "Anders", active: false },
            ],
        },
        current_progress: {
            fieldName: "Hoe is je huidige vooruitgang in fitness?",
            data: "",
            error: false,
            feedback: "Kies alstublieft een optie",
            types: ["button"],
            options: [
                { data: "Slecht (geen tot bijna geen vooruitgang)", active: false },
                {
                    data: "Met moeite (beetje vooruitgang maar niet zo snel als je zou willen)",
                    active: false,
                },
                {
                    data: "Succesvol (goede vooruitgang, opzoek om het te onderhouden)",
                    active: false,
                },
            ],
        },
        interested: {
            fieldName:
                "Als je snelle vooruitgang naar jouw fitness doelen kan behalen, zou je geïnteresseerd zijn?",
            data: "",
            error: false,
            feedback: "Kies alstublieft een optie",
            types: ["button"],
            options: [
                { data: "Nee", active: false },
                { data: "Misschien", active: false },
                { data: "Ja, zeker weten!", active: false },
            ],
        },
    },
}
export default applyNow;