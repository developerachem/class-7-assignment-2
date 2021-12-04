student.map((data) => {


    let bn = data.bangla;
    let ag = data.agreecuncer;
    let en = data.english;
    let math = data.math;
    let ss = data.socialS;
    let s = data.sicence;
    let rel = data.religons;
    let cmrc = data.commerce;


    let achem = new Achem;
    function Achem (){

        // achem Is Gread Calculetor
        this.gread = function (mark){

            if( mark >= 0 && mark < 33 ){
                return 'F'
            }else if( mark >= 33 && mark < 40 ){
                return 'D'
            }else if( mark >= 40 && mark < 50 ){
                return 'C'
            }else if( mark >= 50 && mark < 60 ){
                return 'B'
            }else if( mark >= 60 && mark < 70 ){
                return 'A'
            }else if ( mark >= 70 && mark < 80 ){
                return 'A-'
            }else if( mark >= 80 && mark <= 100 ){
                return 'A+'
            }

        }

        // This Is GPA Calculetor
        this.gpa = function(mark){

            if( mark >= 0 && mark < 33 ){
                return gpa = 0;

            }else if( mark >= 33 && mark < 40 ){
                return gpa = 1;

            }else if( mark >= 40 && mark < 50 ){
                return gpa = 2;

            }else if( mark >= 50 && mark < 60 ){
                return gpa = 3;

            }else if( mark >= 60 && mark < 70 ){
                return gpa = 3.5;

            }else if ( mark >= 70 && mark < 80 ){
                return gpa = 4;

            }else if( mark >= 80 && mark <= 100 ){
                return gpa = 5;

            }

        } 

        // This Is Total Gread Calculetor

       

        this.totalGpa = function(bn, en, ag, math, ss, s, rel, cmrc){
            let totalMark = ( bn + en + ag + math + ss + s + rel + cmrc )
            let greadCal = totalMark / 8;

            if( bn === 0 , en === 0 , ag === 0 , math === 0 , ss === 0 , s === 0 , rel === 0 , cmrc === 0 ){

                return ` Your Are Failed 😥 `

            }else {

                return ` Your Total CGPA = ${greadCal.toFixed(2)} `

            }

        }

        // This Is Total Gread Calculetor
        this.totalGread = function( gpa ){
        
            if( gpa >= 0 && gpa < 1 ){
                return 'F'
            }else if( gpa >= 1 && gpa < 2 ){
                return 'D'
            }else if( gpa >= 2 && gpa < 3 ){
                return 'C'
            }else if ( gpa >= 3 && gpa < 3.5 ){
                return 'B'
            }else if ( gpa >= 3.5 && gpa < 4  ){
                return 'A'
            }else if( gpa >= 4 && gpa < 5 ){
                return 'A-'
            }else if ( gpa === 5 ){
                return 'A+'
            }

        }

    }

 

    console.log(`
    
    Name        : ${data.name}
    Class       : ${data.class}    
    Rool        : ${data.rool}
    Reg         : ${data.reg}
    Address     : ${data.loocation}
----------------------------------------------------------    
    No  Subject         Mark     GPA      Gread

    01  Bangla          ${bn}       ${achem.gpa(bn)}        ${achem.gread(bn)}
    02  English         ${en}       ${achem.gpa(en)}        ${achem.gread(en)}
    03  Agreeculcer     ${ag}       ${achem.gpa(ag)}        ${achem.gread(ag)}
    04  Math            ${math}       ${achem.gpa(math)}      ${achem.gread(math)}
    05  Social Science  ${ss}       ${achem.gpa(ss)}        ${achem.gread(ss)}
    06  Science         ${s}       ${achem.gpa(s)}        ${achem.gread(s)}
    07  Religion        ${rel}       ${achem.gpa(rel)}      ${achem.gread(rel)}
    08  Commarce        ${cmrc}       ${achem.gpa(cmrc)}        ${achem.gread(cmrc)}
----------------------------------------------------------
    ${ achem.totalGpa( achem.gpa(bn), achem.gpa(en), achem.gpa(ag), achem.gpa(math), achem.gpa(ss), achem.gpa(s), achem.gpa(rel), achem.gpa(cmrc) ) } And Your Total Gread = ${ achem.totalGread(gpa) }
    
    
    `);

})
