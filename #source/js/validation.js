/*форма отпраки*/
$(document).ready(function() {
    $('#popup-reserv__phone').mask('+32-9-999-99-99');

    var validName = 1;
    var validSurame = 1;
    var validPhone = 1;
    var validPersons = 1;

    /*ПРОВЕРКА НА ПРАВИЛЬНОСТЬ ЗАПОЛНЕНИЯ*/

    /*имя*/
    $('.popup-reserv__form').mouseover(function() {
        var nameReserv = $('#popup-reserv__name').val();
        var rv_name = /^[a-zA-Z]+$/; //для имени и фамилии
        var nameValid = rv_name.test(nameReserv);

        if (nameReserv.length < 2) {
            validName = 1;
            $('#fail-name').text('At least 2 characters').css({ color: 'red' });
        } else if (nameReserv == '') {
            validName = 1;
            $('#fail-name').text('The field is not filled').css({ color: 'red' });
        } else if (!nameValid) {
            validName = 1;
            $('#fail-name').text('Only latin letters').css({ color: 'red' });
        } else {
            $('#fail-name').html('Ok').css({ color: 'green' });
            return (validName = 0);
        }
    });
    /*----------фамилия----------*/
    $('.popup-reserv__form').mouseover(function() {
        var surnameReserv = $('#popup-reserv__surname').val();
        var rv_surname = /^[a-zA-Z]+$/; //для имени и фамилии
        var surnameValid = rv_surname.test(surnameReserv);

        if (surnameReserv.length < 2) {
            validSurame = 1;
            $('#fail-surname').text('At least 2 characters').css({ color: 'red' });
        } else if (surnameReserv == '') {
            validSurame = 1;
            $('#fail-surname').text('The field is not filled').css({ color: 'red' });
        } else if (!surnameValid) {
            validSurame = 1;
            $('#fail-surname').text('Only latin letters').css({ color: 'red' });
        } else {
            $('#fail-surname').html('Ok').css({ color: 'green' });
            return (validSurame = 0);
        }
    });

    /*----------телефон----------*/
    $('.popup-reserv__form').mouseover(function() {
        var phoneReserv = $('#popup-reserv__phone').val();
        //+32-9-999-99-99
        var rv_phone = /^\+32\-\d{1}-\d{3}-\d{2}-\d{2}$/; //для телефона
        var phoneValid = rv_phone.test(phoneReserv);
        /**/

        if (phoneReserv == '') {
            validPhone = 1;
            $('#fail-phone').text('The field is not filled').css({ color: 'red' });
        } else if (!phoneValid) {
            validPhone = 1;
            $('#fail-phone').text('Incorrect phone').css({ color: 'red' });
        } else {
            $('#fail-phone').html('Ок').css({ color: 'green' });
            validPhone = 0;
        }
    });

    /*----------количество людей----------*/

    $('.popup-reserv__form').mouseover(function() {
        var personsReserv = +$('#popup-reserv__persons').val();
        var rv_persons = /^[0-9]+$/; //для имени и фамилии
        var personsValid = rv_persons.test(personsReserv);
        /**/
        if (!personsValid) {
            validPersons = 1;
            $('#fail-person').text('Incorrectly completed').css({ color: 'red' });
        } else if (personsReserv == '') {
            validPersons = 1;
            $('#fail-person').text('The field is not filled').css({ color: 'red' });
        } else {
            $('#fail-person').html('Ok').css({ color: 'green' });
            validPersons = 0;
        }
    });

    //ОТПРАВКА В  PHP
    $('#popup-reserv__btn').on('click', function() {
        var nameReserv = $('#popup-reserv__name').val();
        var surnameReserv = $('#popup-reserv__surname').val();

        var phoneReserv = $('#popup-reserv__phone').val();
        //
        var personsReserv = $('#popup-reserv__persons').val();

        var commentReserv = $('#popup-reserv__comments').val();
        //

        console.log(validName);
        console.log(validSurame);

        console.log(validPhone);
        console.log(validPersons);

        if (
            validName == 0 &&
            validSurame == 0 &&
            validPhone == 0 &&
            validPersons == 0
        ) {
            console.log('отправлено');

            $.ajax({
                url: 'php/ajax.php',
                type: 'POST',
                cache: false,
                data: {
                    nameReserv: nameReserv,
                    surnameReserv: surnameReserv,

                    phoneReserv: phoneReserv,
                    personsReserv: personsReserv,

                    commentReserv: commentReserv,
                },
                dataType: 'html',
                success: function(data) {
                    $('#fail-form').html('Sent').css({ color: 'green' });
                },
            });
            return false;
        } else {
            $('#fail-form').html('Not sent!').css({ color: 'red' });
            console.log('Not sent');
            return false;
        }
    });
});