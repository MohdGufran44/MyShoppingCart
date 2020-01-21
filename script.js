$(function () {
    let temData;
    $.getJSON("sample-data.json",function (data) {
        temData=data;
        for(let i=0; i<temData.length;i++){
            if(temData[i].rating===4){
                $("#dt").append("<div class=' c col-sm-4'><img src='images/"+temData[i].imgPath+".jpeg' width='300px' height='300px'></div>");
                $(".c").append("<p>"+temData[i].name+"</p>");
            }
        }
    });

    $(".mob").click(function () {
        $("#dt").empty();
        console.log($(this).val());
        let checkTye="ELEC";
        for(let i=0; i<temData.length;i++){
            if(checkTye===temData[i].id.substr(0,4)){
                $("#dt").append("<div class=' c col-sm-4'><img src='images/"+temData[i].imgPath+".jpeg' width='300px' height='300px'></div>");
                $(".c").append("<p>"+temData[i].name+"</p>");
            }

        }
    });

    $(".book").click(function () {
        $("#dt").empty();
        let checkTye="BOOK";
        for(let i=0; i<temData.length;i++){
            if(checkTye===temData[i].id.substr(0,4)){
                $("#dt").append("<div class=' c col-sm-4'><img src='images/"+temData[i].imgPath+".jpeg' width='300px' height='300px'></div>");
                $(".c").append("<p>"+temData[i].name+"</p>");
            }

        }
    });
});
