// function getInVoice() {

// }
// let course_details = document.getElementById('course-details');
var mobile_i = document.querySelector("#mobile_input");
var web_i = document.querySelector("#web_input");
var graphics_i = document.querySelector("#graphics_input");

// Courses initialization

let p_info_error = '<div class="alert alert-warning alert-dismissible fade show" role="alert" style="z-index: 99999999; position:absolute">\
                    <button type = "button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
                    <strong>Error: </strong> <span>Empty input fields, fields cannot be empty......</span>\
                    </div>';

const pck = [
  basic = {
      title: "Basic",
      amount:2000,
      description: "Proceed to make payment for registration, the tuition of ₦25,000 will be required after reciving an Admission letter from the College.",
      benefit1: "No Installment",
      benefit2: "5gb internet data",
      benefit3: "2 online courses",
  },
  
  intermediate = {
      title: "Intermediate",
      amount: 3000,
      benefit1: "No Installment",
      benefit2: "12gb Internet Data",
      benefit3: "5 online Courses",
      description : "Proceed to make payment for registration, the tuition of ₦50,000 will be required after reciving an Admission letter from the College."
  },

  advanced = {
      title: "Advanced", 
      amount: 5000,
      description : "Proceed to make payment for registration, the tuition of ₦120,000 will be required after reciving an Admission letter from the College.",
      benefit1: "2 times installment over 2 months",
      benefit2: "10 online courses",
      benefit3: "24gb internet data"
  }
]

// for packages

basic_btn.addEventListener('click', function(e) {
  e.preventDefault();
  pck_title.innerHTML = pck[0].title;
  pck_amount.innerHTML = pck[0].amount;

  bfit1.innerHTML = pck[0].benefit1;
  bfit2.innerHTML = pck[0].benefit2;
  bfit3.innerHTML = pck[0].benefit3;
  pck_dscptn.innerHTML = pck[0].description;
  pck_choice.value = 'basic';
  advanced_continue.style.display='block';
});
inter_btn.addEventListener('click', function(e) {
  e.preventDefault();
  pck_title.innerHTML = pck[1].title;
  pck_amount.innerHTML = pck[1].amount;
  bfit1.innerHTML = pck[1].benefit1;
  bfit2.innerHTML = pck[1].benefit2;
  bfit3.innerHTML = pck[1].benefit3;
  pck_dscptn.innerHTML = pck[1].description;
  pck_choice.value = 'intermediate';
  advanced_continue.style.display='block';
  

});
advanced_btn.addEventListener('click', function(e) {
  e.preventDefault();
  pck_title.innerHTML = pck[2].title;
  pck_amount.innerHTML = pck[2].amount;

  bfit1.innerHTML = pck[2].benefit1;
  bfit2.innerHTML = pck[2].benefit2;
  bfit3.innerHTML = pck[2].benefit3;
  pck_dscptn.innerHTML = pck[2].description;
  pck_choice.value = 'advanced';
  advanced_continue.style.display='block';


});

pckNo.addEventListener('click', function() {
  advanced_continue.style.display='none';
})
// ===================== Courses =============
mobile_i.addEventListener('click', showDetailsMobile);
web_i.addEventListener('click', showDetailsWeb);
graphics_i.addEventListener('click', showDetailsGraphics);


let mobile = {
      title:"Mobile Development",
      description: " Upon completion of this course student should be able to build an android and IOS app from scratch to production, Available for download on all app stores."
}

let web = {
      title:"Forex",
      description: "At Completion of this course (Basic-Advance) Student should be able to build a full stack webapp using a any language they have studied from scratch to production and hosting on a public domain."
}
let graphics = {
    title:"Graphics Design",
    description: "At completion of this course (Basic – Advance) students should be able to utilize all the design tools taught in the syllabus to create artistic imagery for advertisement, brochures and lots more."
}

course_details_dismiss.addEventListener('click', {
    handleEvent: function (event) {
      course_details.style.display="none";
      web_input.checked = false;
      mobile_input.checked = false;
      graphics_input.checked = false;
    }
});

function showDetailsMobile(){
    course_details.style.display="block";
    course_description.innerHTML = mobile.description;
    course_title.innerHTML = mobile.title;
    basic_btn.style.display="none";
    inter_btn.style.display="none";
 
    // update course title for mobile users
    // applicant[1].title = course_title = true;
}

function showDetailsWeb(){
    course_details.style.display="block";
    course_description.innerHTML = web.description;
    course_title.innerHTML = web.title;
    basic_btn.style.display="inline";
    inter_btn.style.display="inline";
}

function showDetailsGraphics(){
    course_details.style.display="block";
    course_description.innerHTML = graphics.description;
    course_title.innerHTML = graphics.title;
    basic_btn.style.display="inline";
    inter_btn.style.display="inline";
}
// pay_at_sch_input
// pay_online_input
// bank_dep_input
let paymentMethod = "";
let pay_at_sch_input = document.querySelector('#pay_at_sch_input');
let pay_online_input = document.querySelector('#pay_online_input');
let bank_dep_input = document.querySelector('#bank_dep_input');

if (pay_at_sch_input.checked == false || pay_online_input.checked == false || bank_dep_input.checked == false) {
  continue_payment.style.display="none";
}
pay_at_sch_input.addEventListener('change', function() {
  if (pay_at_sch_input.checked == true) {
    paymentMethodData = "school";
    continue_payment.style.display="block";
    console.log(paymentMethodData)
  }
})
pay_online_input.addEventListener('change', function() {
  if (pay_online_input.checked == true) {
    paymentMethodData = "online";
    continue_payment.style.display="block";
    console.log(paymentMethodData)
  }
})
bank_dep_input.addEventListener('change', function() {
  if (bank_dep_input.checked == true) {
    paymentMethodData = "bankdeposit";
    continue_payment.style.display="block";
    console.log(paymentMethodData)
  }
})

// payment options handling
// bank_dep-input pay_online-input pay_at_sch-input

// bank_dep-input.addEventListener('click', {
//   handleEvent: function (event) {
//     course_details.style.display="none";
//     web_input.checked = false;
//     mobile_input.checked = false;
//     graphics_input.checked = false;
   
//   }
// });



// generate Ref
// const alph = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// const numb = [1,2,3,4,5,5,6,7,8,9,0];
// Get Applicant's details

// ======= Validation ======
let modal = document.querySelector(".modal");
let a_title = document.querySelector(".modal-title");

apply_btn.addEventListener('click', {
  handleEvent: function (event) {
    event.preventDefault();
    // exampleModalCenter.style.display = "block";
    // Email validation
    // function validateemail() {  
    var x=document.myform.email.value;  
    var atposition=x.indexOf("@");  
    var dotposition=x.lastIndexOf(".");  

    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
      alert("Please enter a valid e-mail address");  
      $('#exampleModalCenter').on('show.bs.modal', function (e) {
        if (!data) return e.preventDefault()
        })  
      window.location.reload(true);
      }  

    // if (a_email.value.length == 0) {
    //   alert("Please insert your Email address")
    //   $('#exampleModalCenter').on('show.bs.modal', function (e) {
    //     if (!data) return e.preventDefault()
    //   })  
    //   window.location.reload(true);

    // }else{
      
    //   $('#exampleModalCenter').modal('show')                
    // }
    if (a_phone.value.length == 0) {
      alert("Please insert your Phone number");
      $('#exampleModalCenter').on('show.bs.modal', function (e) {
        if (!data) return e.preventDefault()
      }) 
      window.location.reload(true);

    }else{
      
      $('#exampleModalCenter').modal('show')                
    }
    if (a_level_of_ed.value.length == 0) {
      alert("Please insert your level of Education");
      $('#exampleModalCenter').on('show.bs.modal', function (e) {
        if (!data) return e.preventDefault()
      }) 
      window.location.reload(true);


    }else{

      $('#exampleModalCenter').modal('show')                
    }
    if (a_address.value.length == 0 ) {
      alert("Please insert your Address");
      $('#exampleModalCenter').on('show.bs.modal', function (e) {
        if (!data) return e.preventDefault()
      }) 
      window.location.reload(true);


    }else{
      
      $('#exampleModalCenter').modal('show')                
    }
    
    if (a_name.value.length != 0 || a_level_of_ed.value.length != 0 || a_address.value.length != 0 || a_city.value.length != 0 || a_phone.value.length != 0 || a_email.value.length != 0) {
      course_content_modal.style.display = "block";
      return false;
    }else{
      alert(a_name.value);
      
    }
  }
})

// courses

// initializing the courses variables

// course choice handler
let choosenCourse = document.querySelector('#course');

continue_course.addEventListener('click', function() {
  // console.log(choosenCourse.value);
  if (mobile_i.checked == true) {
    choosenCourse.value = "Mobile";
  }else if (web_i.checked == true) {
    choosenCourse.value = "Web";
  }else if (graphics_i.checked == true) {
    choosenCourse.value = "Graphics";
    
  }
});



// let applicant1 = [
  
//   personal_info = {
//     a_name: a_name.value,
//     a_email: a_email.value,
//     phone: a_phone.value,
//     reg_at: new Date('2017-01-03'),
//     level: a_level_of_ed.value,
//     address:a_address.value,
//     city: a_city.value
//   },
//   course_info = {
//     title: choosenCourse.value,
//     package: pck_choice.value,
//   },
//   payment_info = {
//     payment_type:"",
//     amount:pck_amount.innerHTML
//   }
// ]
// let applicant = {
//     fullName : a_name.value,
//     "phone": a_phone.value,
//     "email": a_email.value,
//     "city": a_city.value,
//     "title": course.value,
//     "highestEducation": a_level_of_ed.value,
//     "paymentMethod":"online"
//     "applicationPrice": 
//   }
// let user = {
//   "fullName" : "Elijah ekong",
//   "email": "iamelijahsamz@gmail.com",
//   "city": "calabar",
//   "title": "web",
//   "phone":"09039393933",
//   "pack" : "basic",
//   "highestEduLevel": "college",
//   "paymentMethod":"online",
//   "applicationPrice": "3000"
// }

finish_submit.addEventListener('click', {
  handleEvent: function (event) {
    event.preventDefault();
    axios({
      method: 'POST',
      url: 'https://afx-college.herokuapp.com/apply',
      data: {
        "fullName" : a_name.value,
        "email": a_email.value,
        "city": a_city.value,
        "title": choosenCourse.value,
        "phone": a_phone.value,
        "pack" : pck_choice.value,
        "highestEduLevel": pck_choice.value,
        "paymentMethod":paymentMethodData,
        "applicationPrice": pck_amount.innerHTML
        
      }
    })
     .then(function (response) {
      console.log(response.status);
      if (response.status == 200) {
           
            let userId = response.data.id;
           
           
            queryString = "?userId=" + userId;
        window.location.replace("../apply/invoice/" + queryString);
    }
      
    }).catch(function (error) {
   
      alert(error.response.data.message);
     
    return Promise.reject(error.response);

    });

    // if (paymentMethodData == ) {
      
    // }
 
    
  }
});



// console.log(chooseCourse.value)


