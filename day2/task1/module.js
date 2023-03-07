let reservation_flights=[];
 function add_flight(seat_num,flight_num,departue_airport,arrival_airport,travel_date){
   let flight={seat_num,flight_num,departue_airport,arrival_airport,travel_date};
   reservation_flights.push(flight);
 }
 function display_flight(){
  for ( let i=0;i<reservation_flights.length;i++){
    // document.write(reservation_flights[i]);
    console.log(reservation_flights[i]);
  }
 }
 function update_flight(seat_num,flight_num,departue_airport,arrival_airport,travel_date){
    // console.log( reservation_flights[0][1] )

    for ( let i=0;i<reservation_flights.length;i++){
         if(reservation_flights[i].seat_num==seat_num){

            reservation_flights[i].flight_num=flight_num;
            reservation_flights[i].departue_airport=departue_airport;
            reservation_flights[i].arrival_airport=arrival_airport;
            reservation_flights[i].travel_date=travel_date;
         }
      }
   
 }

 function get_flight(seat_num){
    for ( let i=0;i<reservation_flights.length;i++){
        if(reservation_flights[i].seat_num==seat_num){

           console.log(reservation_flights[i].flight_num);
           console.log(reservation_flights[i].departue_airport);
           console.log(reservation_flights[i].arrival_airport);
           console.log(reservation_flights[i].travel_date);
        }
     }
 }

 module.exports={
    add_flight,
    display_flight,
    update_flight,
    get_flight
 }