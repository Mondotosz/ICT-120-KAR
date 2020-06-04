txtCity47.value = 'aa'
txtTitle06.value = 'asdada'
txtTitle08.value = 'sadada'
txtActDate03.value = 'aa'
txtActTime01.value = 'aa'

    // Load image tags with the name in the input field
    document.querySelectorAll(".actimg").forEach(img => {
        img.src = document.getElementById('txt'+img.id.substring(3)).value
    });
    