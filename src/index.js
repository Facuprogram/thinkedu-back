import app from "../app.js";
import Administrative from "./models/administrative.js";

app.listen(4000)
console.log('server on port', 4000);


const teacher = await Administrative.create({
    name: 'Facundo',
    lastName: 'Chavez',
    currentDay: Date.now(),
    contact: ['381516849 - ', 'facumaster@gmail.com'],
    id: '45678',
    nameInstitution: 'Colegio EduThink',
    address: 'Colombia 4124'
});
console.log(teacher);