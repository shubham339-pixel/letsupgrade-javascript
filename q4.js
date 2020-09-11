let students =[
    {
        name:"dom",
        age: 15,
        country:'africa',
        hobbies:['crafting','dacing','singing','troubleshooting']
    
    },
    {
    name:  "nick",
    age: 16,
    country:  'china',
    hobbies: ['drawing','writing','singing','blogging']
    
    },
    {
        name:"patrick",
        age:20,
        country:'india',
        hobbies:['scribling','reading','video making','photography']
    
    },
    {
        name:"mehak",
        age:12,
        country:'india',
        hobbies:['online gaming','dacing','singing','explore']
    
    },
    ];
    
    
    function displayAge(students){
        
        console.log("people with the age less than 30");

        students.forEach(element => {
            if(element.age<30)
            {
                console.log(element);
            }
            
        });
    }
    function displayCountry(students)
    {
        console.log("people with country as india")
    
        students.forEach(element => {
        if(element.country=="india"){
            console.log(element);
        }
    });
    }
    displayAge(students);
    
displayCountry(students);