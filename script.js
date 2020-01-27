$(function () {

    let temData;

    $.getJSON("sample-data.json",function (data) {
        temData=data;
        console.log(temData[0].comments[0].commentedOn);
        for(let i=0; i<temData.length;i++){
            if(temData[i].rating===4){
                $("#dt").append("<div class=' c col-sm-4' id='"+temData[i].id+"'><a href='#' target=''><img src='images/"+temData[i].imgPath+".jpeg' width='300px' height='300px' id='"+temData[i].id+"'></a></div>");
                $("#"+temData[i].id+"").append("<p>"+temData[i].name+"<br><button class='btn btn-success' style='border-radius: 35%'>"+temData[i].rating+" <i class='fa fa-star-o'></i>","</button>","</p>");
            }

        }
    });

    $(".mob").click(function () {
        $("#dt").empty();
        let checkTye="ELEC";
        for(let i=0; i<temData.length;i++){
            if(checkTye===temData[i].id.substr(0,4)){
                $("#dt").append("<div class=' c col-sm-4' id='"+temData[i].id+"'><a href='#' target=''><img src='images/"+temData[i].imgPath+".jpeg' width='300px' height='300px' id='"+temData[i].id+"'></a></div>");
                $("#"+temData[i].id+"").append("<p>"+temData[i].name+"<br><button class='btn btn-success' style='border-radius: 35%'>"+temData[i].rating+" <i class='fa fa-star-o'></i>","</button>","</p>");
            }

        }
    });

    $(".book").click(function () {
        $("#dt").empty();
        let checkTye="BOOK";
        for(let i=0; i<temData.length;i++){
            if(checkTye===temData[i].id.substr(0,4)){
                $("#dt").append("<div class=' c col-sm-4' id='"+temData[i].id+"'><a href='#' target=''><img src='images/"+temData[i].imgPath+".jpeg' width='300px' height='300px' id='"+temData[i].id+"'></a></div>");
                $("#"+temData[i].id+"").append("<p>"+temData[i].name+"<br><button class='btn btn-success' style='border-radius: 35%'>"+temData[i].rating+" <i class='fa fa-star-o'></i>","</button>","</p>");
            }
        }
    });

    $("#dt").on('click','img',function () {
        $("#dt").empty();
        let b=$(this).attr("id");
        console.log(b);
        if(b.substr(0,4)==='ELEC'){
            $("#dt").append("<div style='margin-left: 20px'><img src='images/"+b+".jpeg' width='300px' height='300px'>" +
                "<br><button type='button' class='pmbt btn btn-warning'>ADD TO CART</button><button type='button' class='pmbt btn btn-warning' style='margin-left: 20px'>Buy Now</button></div>");

        }
        else if(b.substr(0,4)==='BOOK'){
            $("#dt").append("<div style='margin-left: 20px'><img src='images/"+b+".jpeg' width='300px' height='300px'>" +
                "<br><button type='button' class='pmbt btn btn-warning'>ADD TO CART</button><button type='button' class='pmbt btn btn-warning' style='margin-left: 20px'>Buy Now</button></div>");

        }
         for(let i=0; i<temData.length;i++){
             let disc;
            if(b===temData[i].id&&b.substr(0,4)==='ELEC'){
                if(temData[i].offers[0].percentage!=null){
                    disc=temData[i].offers[0].percentage;
                }else{
                    disc=" <i class='fa fa-rupee'></i> "+temData[i].offers[0].amount;
                }
                $("#dt").append("<div style='text-align: left'; class='data'>" +
                    "<p style='font-size: 2.5em'>"+temData[i].name+"("+temData[i].color+", "+temData[i].RAM+" RAM)</p>" +
                    "<p><button class='btn btn-success' style='border-radius: 35%'>"+temData[i].rating+" <i class='fa fa-star-o'></i></button></p>" +
                    "<p style='font-size: 1.9em'><i class='fa fa-rupee'></i> "+temData[i].price+"</p>" +
                    "<p> <b>Available offers</b> "+disc+"</p>" +
                    "<p> Highlights<br><ul><li>"+temData[i].RAM+" | "+temData[i].battery+"</li>"+temData[i].camera.front+" | "+temData[i].camera.front+"</ul> </p>" +
                    "</div>");
                $("#dt").append("<div class='rev'><p>"+temData[i].description+"</p><b>Reviews</b><br><p><button class='btn btn-success' style='border-radius: 35%'>"+temData[i].comments[0].rating+" <i class='fa fa-star-o'></i></button> <b>"+temData[0].comments[0].username+"</b> <br>" +
                    ""+temData[i].comments[0].text+"   "+temData[i].comments[0].commentedOn+"</p></div>");
            }
            else if(b===temData[i].id&&b.substr(0,4)==='BOOK'){
                let disc;
                if(temData[i].offers[0].percentage!=null){
                    disc=temData[i].offers[0].percentage;
                }else{
                    disc=" <i class='fa fa-rupee'></i> "+temData[i].offers[0].amount;
                }
                $("#dt").append("<div style='text-align: left'; class='data'>" +
                    "<p style='font-size: 2.5em'>"+temData[i].name+"</p>" +
                    "<p><button class='btn btn-success' style='border-radius: 35%'>"+temData[i].rating+" <i class='fa fa-star-o'></i></button></p>" +
                    "<p style='font-size: 1.9em'><i class='fa fa-rupee'></i> "+temData[i].price+"</p>" +
                    "<p> <b>Available offers</b> "+disc+"</p>" +
                    "<p> Highlights<br><ul><li>"+temData[i].subType+" | "+temData[i].by+"</li></ul> </p>" +
                    "</div>");
                $("#dt").append("<div class='rev'><p>"+temData[i].description+"</p><b>Reviews</b><br><p><button class='btn btn-success' style='border-radius: 35%'>"+temData[i].comments[0].rating+" <i class='fa fa-star-o'></i></button> <b>"+temData[0].comments[1].username+"</b> <br>" +
                    ""+temData[i].comments[0].text+"   "+temData[i].comments[0].commentedOn+"</p></div>");
            }
            console.log(temData[i].comments.length);
        }
    });
});