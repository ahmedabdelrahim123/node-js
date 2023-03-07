var mymod=require("./module");
console.log(mymod);
mymod.add_flight(15,3,"borg el arab airport","dubai airport","15-3-2023");
mymod.add_flight(19,4,"cairo airport","kewait airport","17-3-2023");

mymod.update_flight(15,3,"sharm el sheikh airport","dubai airport","15-3-2023");
mymod.display_flight();
mymod.get_flight(19);

