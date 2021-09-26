const contactMe = {
    title: 'Contact me',
    form: {
        name: {
            fieldName: "Name",
            data: "",
            error: false,
            feedback: "Please provide a Name",
        },
        email: {
            fieldName: "Email",
            data: "",
            error: false,
            feedback: "Please provide a valid email",
        },
        phoneNumber: {
            fieldName: "Phone Number",
            data: "",
            error: false,
            feedback: "Please provide a phone number",
        },
        question: {
            fieldName: "Question",
            data: "",
            error: false,
            feedback: "Please provide a question",
        },
    },
    button: 'SUBMIT'
}

export default contactMe;