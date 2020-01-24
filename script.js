$(function () {

    let temData;

    $.getJSON("sample-data.json",function (data) {
        temData=data;
        console.log(temData);
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
        $("#dt").append("<div style='margin-left: 50px'><img src='images/"+b+".jpeg' width='300px' height='300px'></div>");
        for(let i=0; i<temData.length;i++){
            if(b===temData[i].id){
                $("#dt").append("<div style='text-align: left; class='data'>" +
                    "<p style='font-size: 2.5em'>"+temData[i].name+"("+temData[i].color+", "+temData[i].RAM+" RAM)</p>" +
                    "<p><button class='btn btn-success' style='border-radius: 35%'>"+temData[i].rating+" <i class='fa fa-star-o'></i></button></p>" +
                    "<p style='font-size: 1.9em'><i class='fa fa-rupee'></i> "+temData[i].price+"</p>" +
                    "<p>"+temData[i].brand+"</p>" +
                    "<p>"+temData[i].rating+"</p>" +
                    "<p>"+temData[i].battery+"</p>" +
                    "</div>");
            }
        }
    });
});
//<button class='btn btn-success' style='border-radius: 35%'>"+temData[i].rating+" <i class='fa fa-star-o'></i>","</button>"