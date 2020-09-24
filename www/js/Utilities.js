//add npc page validation
function ExpenseValidation() {
    $('#AddForm').validate({
        rules:{
            expense:{
                required: true,
               minlength: 2,
                maxlength: 50
            },
            cost:{
                required: true,
                range:[1,9999999999999999]
            },
            category:{
              required: true
            },
        },
        messages:{
            expense:{
                required: 'Must specify expense name.',
                minlength: 'Expense name must be longer than 1 character.',
                maxlength: 'Expense name cannot exceed 50 characters (includes spaces)'
            },
            cost:{
                required: 'Must specify cost.',
                range: 'Cost cannot be less than 1'
            },
            category:{
                required: 'Must specify category.'
            },          
        }
    });
    return $('#AddForm').valid();

}

