// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(document).ready(function () {

    let counter = 2;
    let divNum = 'input' + counter;
    let lastDiv = '.input' + (counter - 1);
    let names = nameList;

    $('body').on('change', '.selection', event => {
        if ($(event.currentTarget).val() == 'New Player') {
            $(event.currentTarget).find('.chooseMe').remove();
            $('#textInputGroup').show()
        }
        else {
            $('#textInputGroup').hide().find('#textInput').val('');
            $(event.currentTarget).find('.chooseMe').remove();
            $(event.currentTarget).find('.chooseNew').remove();
            $(event.currentTarget).parent()
                .append($('<div>')
                    .addClass('input-group-append')
                    .append($('<button>')
                        .addClass('btn btn-outline-danger mb-2 deleteDiv')
                        .text('Delete')));
            $(event.currentTarget).removeClass('selection');

            divNum = 'input' + counter;
            $('<div>')
                .addClass('input-group')
                .addClass(divNum)
                .append($('<select>')
                    .addClass('form-control mb-2 selection')
                    .append($('<option>').text('Choose...').val('none').addClass('chooseMe'))
                    .append($('<option>').text('New Player').val('New Player').addClass('chooseNew'))
                    .appendNames(names)
                    .val('none'))

                .appendTo('#maindiv')

            counter++;
            lastDiv = '.input' + (counter - 1);

            //appendNames(names, lastDiv);
        }
        
    })
    $('body').on('click', '.deleteDiv', event => {
        $(event.currentTarget).parent().parent().remove()
    })
    $('.addPlayer').on('click', event => {
        let newName = $(event.currentTarget).parent().siblings().val();
        $('select').append($('<option>').text(newName).val(newName))

        var names2 = names.concat(newName);
        names = names2;
        console.log(names);

        $(lastDiv).find('.selection').val(newName).find('.chooseNew').remove();
        $(lastDiv)
                .append($('<div>')
                .addClass('input-group-append')
                .append($('<button>')
                    .addClass('btn btn-outline-danger mb-2 deleteDiv')
                    .text('Delete')));

        $('#textInputGroup').hide().find('#textInput').val('');

        divNum = 'input' + counter;
        $('<div>')
            .addClass('input-group')
            .addClass(divNum)
            .append($('<select>')
                .addClass('form-control mb-2 selection')
                .append($('<option>').text('Choose...').val('none').addClass('chooseMe'))
                .append($('<option>').text('New Player').val('New Player').addClass('chooseNew'))
                .appendNames(names)
                .val('none'))
            .appendTo('#maindiv')

        counter++;
        lastDiv = '.input' + (counter - 1);

        //appendNames(names, lastDiv)

    })

    
    
});

jQuery.fn.extend({
    appendNames: function (names) {
        for (let i = 0; i < names.length; i++) {
            this.append($('<option>').text(names[i]).val(names[i]));
        }
        return this;
    }
})

//function appendNames(names) {

//    for (let i = 0; i < names.length; i++) {
//        this.append($('<option>').text(names[i]).val(names[i]));
//    }

//}

//function appendnames(names, lastdiv) {

//    let $select = $(lastdiv).find('.selection');
//    for (let i = 0; i < names.length; i++) {
//        $select.append($('<option>').text(names[i]).val(names[i]));
//    }

//}

//function logNames(names) {
//    for (let i = 0; i < names.length; i++) {
//        console.log(names[i])
//    };
//}






//$(document).ready(() => {
//    $('.toggle_on').on('click', () => {
//        showMyInput();
//    })
//    $('#toggle_off').on('click', () => {
//        $('#textInput').hide()
//    })
//    $('#div45').on('click', '.toggle_mydiv', () => {
//        $('#textInput').toggle()
//    })
//    $('.poof').on('click', event => {
//        $(event.currentTarget).remove();
//    })

//})

//function showMyInput() {
//    $('#textInput').show()
//}

//$(document).ready(function () {
//    $('.toggleThis').on('click', event => {
//        if ($(event.currentTarget).html() == 'Go back') {
//            $(event.currentTarget).html('Upgrade')
//        }
//        else {
//            $(event.currentTarget).html('Go back')
//        }
//    })
//})







//$('<div>')
//    .addClass('input-group')
//    .addClass(divNum)
//    .append($('<input>')
//        .addClass('form-control mb-2 text-input')
//        .attr('placeholder', 'Enter Player Name'))
//    .append($('<div>')
//        .addClass('input-group-append')
//        .append($('<button>')
//            .addClass('btn btn-outline-primary mb-2 newPlayer')
//            .text('Add')))
//    .appendTo('#maindiv')
//counter++;
//$('input').on('focus', event => {
//    $(event.currentTarget).focusout(() => {
//        if ($(event.currentTarget).val() != '') {
//            let divNum = 'input' + counter;
//            $('<div>')
//                .addClass('input-group')
//                .addClass(divNum)
//                .append($('<select>')
//                    .addClass('form-control mb-2 selection')
//                    .append($('<option>').text('Choose...').val('none'))
//                    .append($('<option>').text('New Player').val('New Player'))
//                    .append($('<option>').text('Chad').val('Chad'))
//                    .append($('<option>').text('Shane').val('Shane'))
//                    .append($('<option>').text('Jonathan').val('Jonathan'))
//                    .val('none'))
//                .append($('<div>')
//                    .addClass('input-group-append')
//                    .append($('<button>')
//                        .addClass('btn btn-outline-danger mb-2 deleteDiv')
//                        .text('Delete')))
//                .appendTo('#maindiv')
//            counter++;
//        }
//    })
//})