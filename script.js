"use strict"

let input_data_female=[{LastName:"akram" , FirstName:"subhan" ,MiddleInitial:"subhan",Gender:"male", FavoriteColor:"green" ,
DateOfBirth:"22/08/2020"},


{LastName:"rajpal" , FirstName:"singh" ,MiddleInitial:"raj",Gender:"male", FavoriteColor:"blue" ,
DateOfBirth:"13/04/1921"},

{LastName:"neha" , FirstName:"agarwal" ,MiddleInitial:"agar",Gender:"female", FavoriteColor:"red" ,
DateOfBirth:"26/02/2010"},





]
// this data is for female , you can add or manipulate data to test

let input_data_date=[{LastName:"akram" , FirstName:"subhan" ,MiddleInitial:"subhan",Gender:"male", FavoriteColor:"green" ,
DateOfBirth:"22/08/2020"},


{LastName:"rajpal" , FirstName:"singh" ,MiddleInitial:"raj",Gender:"male", FavoriteColor:"blue" ,
DateOfBirth:"13/04/1921"},

{LastName:"neha" , FirstName:"agarwal" ,MiddleInitial:"agar",Gender:"female", FavoriteColor:"red" ,
DateOfBirth:"26/02/2010"},

{LastName:"hassan" , FirstName:"agarwal" ,MiddleInitial:"agar",Gender:"female", FavoriteColor:"red" ,
DateOfBirth:"26/02/1998"},

{LastName:"lasman" , FirstName:"swal" ,MiddleInitial:"agar",Gender:"female", FavoriteColor:"red" ,
DateOfBirth:"26/02/2017"},





]
// this data is for date wise  , you can add or manipulate data to test

let initialDesiredsortedArray=[]
// I  have first make initiall desired array to put all female data here 

let initialSortedArray=[]
// this will be reamining data , here it is of male 

const sortedFunction=()=>{
    for (let i=0;i<=input_data_female.length-1;i++){
        
        if( input_data_female[i].Gender=="female"){
            initialDesiredsortedArray.push(input_data_female[i])
            // this will check , if female then push it to that array 


        }
        else{

            initialSortedArray.push(input_data_female[i])
        
        }
    }

   const sortedArray= initialDesiredsortedArray.concat(initialSortedArray)
//    here i concat both array

   var ul = document.getElementById("list");
   var li = document.createElement("li");

  
   for(let b=0;b<=sortedArray.length-1;b++){
   
       li.appendChild(document.createTextNode(JSON.stringify(sortedArray[b])));
       ul.appendChild(li);
    //    here this loop is to create list to display in html file 
   }



    
}



document.querySelector(".sorted_array_btn").addEventListener("click",sortedFunction)













let initialDesiredsortedArray_dateWise=[]
// this will be the sorted list according to dates 


const sortedFunction_DateWise=()=>{
   
   let looping_to_arrange=()=>{
        for (let i=0;i<=input_data_date.length-1;i++){
           
           let max=0;
            for(let b=0;b<=input_data_date.length-1;b++){
                if( Number(input_data_date[i].DateOfBirth.substring(6))>=Number(input_data_date[b].DateOfBirth.substring(6))){
                    max=input_data_date[i]
                    input_data_date[i]=input_data_date[b]
                    input_data_date[b]=max

                    // as i have run nested loop so first index value (whixh is date respect to year)  will compare to all other index value  
                    // so I will get the least year date so that i will push to another array , after that again loop will run and same 
                    // process repeat 
    
                  
        
                }
              
              
            }
         
            initialDesiredsortedArray_dateWise.push(input_data_date[i])
            input_data_date.splice(i,1)
       
          
        }
    
    }

    
     

  for(let i=0;i<=3;i++){
      looping_to_arrange()
    //   I ned to run this function, three times because , when i push the length of array minimize 
    // so it run less number of time so to handle that , I have to run it 3 times , so It will compare all 
  }

 
    


  console.log(initialDesiredsortedArray_dateWise)
  var ul = document.getElementById("listDateWise");
  var li = document.createElement("liDateWise");

 
  for(let b=0;b<=initialDesiredsortedArray_dateWise.length-1;b++){
  
   // document.querySelector(".list_of_aray").innerHTML=JSON.stringify(sortedArray[b])
   li.appendChild(document.createTextNode(JSON.stringify(initialDesiredsortedArray_dateWise[b])));
    
   ul.appendChild(li);
   
   

  }
 
   
 

    
}



document.querySelector(".sorted_array_dateWise_btn").addEventListener("click",sortedFunction_DateWise)





