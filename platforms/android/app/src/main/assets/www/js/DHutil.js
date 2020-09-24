//add npc page validation
function NpcValidation() {
    $('#DHAddForm').validate({
        rules:{
            AddFullName:{
                required: true,
               minlength: 2,
                maxlength: 30
            },
            AddClass:{
                required: true,
                minlength: 3,
                maxlength: 30
            },
            hitPoints:{
              required: false,
                range:[1, 700]
            },
            str:{
                required: false,
                range:[1,30]
            },
            dex:{
                required: false,
                range:[1,30]
            },
            con:{
                required: false,
                range:[1,30]
            },
            int:{
                required: false,
                range:[1,30]
            },
            wis:{
                required: false,
                range:[1,30]
            },
            cha:{
                required: false,
                range:[1,30]
            },
            description:{
                required: true,
                minlength: 3
            },

        },
        messages:{
            AddFullName:{
                required: 'Name cannot be blank!',
                minlength: 'name must be longer than 1 letter',
                maxlength: 'Name cannot exceed 30 characters (includes spaces)'
            },
            AddClass:{
                required: 'Class must be filled out',
                minlength: 'Class must be 3 or more characters long',
                maxlength: 'Class cannot exceed 30 characters(includes spaces)'
            },
            hitPoints:{

                range:'Hit points can only be a minimum of 1 to a max of 700'
            },
            str:{

                range:'strength can only be a minimum of 1 to a max of 30'
            },
            dex:{

                range:'dexterity can only be a minimum of 1 to a max of 30'
            },
            con:{

                range:'constitution can only be a minimum of 1 to a max of 30'
            },
            int:{

                range:'intelligence can only be a minimum of 1 to a max of 30'
            },
            wis:{

                range:'wisdom can only be a minimum of 1 to a max of 30'
            },
            cha:{

                range:'charisma can only be a minimum of 1 to a max of 30'
            },
            description:{
                required: 'You must describe your character',
                minlength: 'Your description must be longer than 3 characters'
            },
        }
    });
    return $('#DHAddForm').valid();

}

//edit NPC info
function EditNpcValidation() {
    $('#EditNpcPage').validate({
        rules:{
            EFullName:{
                required: true,
                minlength: 2,
                maxlength: 30
            },
            EClass:{
                required: true,
                minlength: 3,
                maxlength: 30
            },
            EhitPoints:{
                required: false,
                range:[1, 700]
            },
            Estr:{
                required: false,
                range:[1,30]
            },
            Edex:{
                required: false,
                range:[1,30]
            },
            Econ:{
                required: false,
                range:[1,30]
            },
            Eint:{
                required: false,
                range:[1,30]
            },
            Ewis:{
                required: false,
                range:[1,30]
            },
            Echa:{
                required: false,
                range:[1,30]
            },
            Edescription:{
                required: true,
                minlength: 3
            },

        },
        messages:{
            EFullName:{
                required: 'Name cannot be blank!',
                minlength: 'name must be longer than 1 letter',
                maxlength: 'Name cannot exceed 30 characters (includes spaces)'
            },
            EClass:{
                required: 'Class must be filled out',
                minlength: 'Class must be 3 or more characters long',
                maxlength: 'Class cannot exceed 30 characters(includes spaces)'
            },
            EhitPoints:{

                range:'Hit points can only be a minimum of 1 to a max of 700'
            },
            Estr:{

                range:'strength can only be a minimum of 1 to a max of 30'
            },
            Edex:{

                range:'dexterity can only be a minimum of 1 to a max of 30'
            },
            Econ:{

                range:'constitution can only be a minimum of 1 to a max of 30'
            },
            Eint:{

                range:'intelligence can only be a minimum of 1 to a max of 30'
            },
            Ewis:{

                range:'wisdom can only be a minimum of 1 to a max of 30'
            },
            Echa:{

                range:'charisma can only be a minimum of 1 to a max of 30'
            },
            Edescription:{
                required: 'You must describe your character',
                minlength: 'Your description must be longer than 3 characters'
            },
        }
    });
    return $('#EditNpcPage').valid();

}

