// Iteration 1: Names and Input
let hacker1 = 'David Bueno';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Pietro Ballarin';
console.log(`The navigator's name is ${hacker2}`);


if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length) {
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}


// Iteration 2: Conditionals

for (let i = 0; i < 5; i++) {
    console.log(hacker1[i].toUpperCase());
}

for (let i = 6; i >= 0; i--) {
    console.log(hacker2[i])
}


// Iteration 3: Loops

if (hacker1.localeCompare(hacker2) < 0) {
    console.log(`The driver's name goes first.`);
} else if (hacker1.localeCompare(hacker2) > 0) {
    console.log(`Yo, the navigator goes first definitely.`)
} else {
    console.log(`What?! You both have the same name?`)
};

//Bonus

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel mauris blandit, convallis dolor ac, luctus mauris. Etiam blandit, risus sed rutrum posuere, ipsum quam dapibus massa, non porttitor mauris nisi quis velit. Quisque nulla erat, mattis vel ipsum vel, ultricies viverra lorem. Aliquam viverra euismod eleifend. Donec justo sem, faucibus eu mauris non, efficitur suscipit erat. Sed maximus dictum arcu, id iaculis ex aliquet ac. Quisque feugiat sodales lectus, placerat scelerisque dolor lacinia ut. Vivamus scelerisque sem metus, eget suscipit velit hendrerit ut. \n Cras malesuada massa elit, sit amet tristique est ornare sed. Sed a turpis non lorem hendrerit placerat. Vivamus id ligula et metus tincidunt tristique. Curabitur pretium fringilla nisi, ut bibendum enim aliquam ac. Donec suscipit volutpat risus. Sed sollicitudin pellentesque massa a pretium. Nulla vulputate mollis eleifend. Praesent fermentum, nisi non auctor dapibus, diam erat maximus risus, varius egestas erat eros sit amet urna. Vestibulum sit amet tempus neque. Pellentesque nec accumsan arcu. Morbi in elit vel ipsum blandit vestibulum. Phasellus tincidunt dui eu mi tincidunt, vel vestibulum ante ultricies. Etiam efficitur pellentesque magna ac vestibulum. \n In porttitor dignissim massa non vehicula. Vivamus hendrerit felis purus, vel tempor dui volutpat lobortis. Vivamus lectus lectus, iaculis id sem sit amet, pellentesque rutrum orci. Suspendisse eu ornare augue. Donec semper hendrerit leo id egestas. Ut ut odio sed justo fermentum pulvinar quis sit amet mi. Phasellus sagittis urna risus, id ultricies lorem lacinia a. Vestibulum varius diam vel leo congue gravida. Suspendisse potenti. Fusce iaculis posuere risus ac fermentum. Aenean a egestas mauris, nec tincidunt erat.'

let total = 0

for (let i = 0; i < lorem.length; i++) {
    if (lorem[i] === ' ') {
        total += 1
    }
}

console.log(total)




let count = (lorem.match(/et/g) || []).length


console.log(count)





