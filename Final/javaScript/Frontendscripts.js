// Add click event listeners to navigation links
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.getElementById('nav-links');
    const links = [
        { text: 'Admin', href: '#', action: promptAdmin },
        { text: 'Student', href: '#', action: promptStudent },
        { text: 'Available Courses', action: showAvailable },
        { text: 'Register', href: '#', action: showRegistrationForm },
    ];
    
    links.forEach(({ text, href, action }) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = text;
        a.href = href;
        li.appendChild(a);
        navLinks.appendChild(li);

        // Attach click event listener
        a.addEventListener('click', (e) => {
        e.preventDefault();
        action(e.target);
        });
    });
});

    // Function to handle admin prompt
    function promptAdmin(target) {
    if (confirm('Are you an admin?')) {
    window.location.href = 'admin.html';
    } else {
    target.blur();
    }
    }

    // Function to handle student prompt
    function promptStudent(target) {
    if (confirm('Are you a student?')) {
        window.location.href = 'student.html';
    } else {
        target.blur();
    }
    }

    function showAvailable(){
        href: 'Courses.html' ;
    }
    // Function to show registration form
    function showRegistrationForm(target) {
        // Create and append form elements
        const form = document.createElement('form');
        form.id = 'registration-form';
        form.method = 'post';
        form.action = 'mailto:registrar@ucc.com';

    const fields = [
        { type: 'text', name: 'first_name' },
        { type: 'text', name: 'middle_name' },
        { type: 'text', name: 'last_name' },
        { type: 'email', name: 'email' },
        { type: 'tel', name: 'mobile_number' },
        { type: 'tel', name: 'home_number', optional: true },
        { type: 'tel', name: 'work_number', optional: true },
        { type: 'text', name: 'address' },
        { type: 'text', name: 'next_of_kin' },
        { type: 'tel', name: 'kin_contact' },
        { type: 'select', name: 'program', options: ['Business', 'Information Technology', 'Science'] },
    ];
    
    fields.forEach(({ type, name, optional, options }) => {
        const field = document.createElement('input');
        field.type = type;
        field.name = name;
        
        if (optional) field.required = false;
        
        if (type === 'select') {
            const select = document.createElement('select');
            options.forEach((option) => {
                const selectOption = document.createElement('option');
                selectOption.value = option;
                selectOption.textContent = option;
                select.appendChild(selectOption);
            });
            field.replaceWith(select);
            select.appendChild(field);
        }
        form.appendChild(field);
    });

    const submit = document.createElement('button');
    submit.type = 'submit';
    submit.textContent = 'Submit';
    form.appendChild(submit);

    // Append form to the body
    document.body.appendChild(form);

    // Focus on the first input field
    form.firstElementChild.focus();

    // Submit the form
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = `mailto:${document.querySelector('#registration-form [name="first_name"]').value}@ucc.com`;
        window.location.href = email;
    });
}