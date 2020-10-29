import {Taxi} from './Taxi';


let taxi_1 = new Taxi({x: 2, y: 5},'red'); // color constructorundan sonra buraya da color girmeliyiz aksi halde hata aliriz. ancak colorun contructor da yazarken ? isareti koyarsak girmesek te hata almayiz olsa da olue olmasa da olur  manaisina gelir.

taxi_1.travelTo({x:1 , y:2});

let currentLocation = taxi_1.location; // artik location property si olusturduk. ve burdan ulasabiliriz location a

taxi_1.location = {x:1 , y:9};


