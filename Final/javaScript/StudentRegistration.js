document.addEventListener('DOMContentLoaded', () => {
    const identificationNumberInput = document.getElementById('identification-number');
    const firstNameInput = document.getElementById('first-name');
    const form = document.getElementById('registration-form');

    // Generate identification number
    const identificationNumber = '2024' + Math.floor(10000 + Math.random() * 90000);
    identificationNumberInput.value = identificationNumber;

    // Generate student email
    const generateStudentEmail = (firstName) => {
        return `${firstName.toLowerCase()}@ucc.com`;
    };

    // Handle form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);

        const studentData = {
            identification_number: identificationNumberInput.value,
            first_name: firstNameInput.value,
            middle_name: formData.get('middle_name'),
            last_name: formData.get('last_name'),
            email: formData.get('email'),
            mobile_number: formData.get('mobile_number'),
            home_number: formData.get('home_number'),
            work_number: formData.get('work_number'),
            address: formData.get('address'),
            next_of_kin: formData.get('next_of_kin'),
            kin_contact: formData.get('kin_contact'),
            program: formData.get('program'),
            student_email: generateStudentEmail(firstNameInput.value),
        };

    // Send studentData to the backend for further processing
    console.log('Student data:', studentData);

    // Reset the form
    form.reset();
    
    identificationNumberInput.value = '2024' + Math.floor(10000 + Math.random() * 90000);
    return identificationNumberInput;
    });
});