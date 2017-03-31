$(".btn1").click(function(){
   $("#add_task").slideToggle(1000); 
});
$("#btn_cancel").click(function(){
   $("#add_task").slideToggle(1000);
});
$("#task").click(function(){
    
    var lab=$("#task").html();
    if(lab=="Edit task"){
        $(this).parent().slideToggle(500);
        var lab1=$("#write_task").val();
        $("#sp1").prev().prev().html(lab1);
        $("#task").html("Add Task");
        
    }else if(lab=="Add Task"){
   var tsk=$("#write_task").val();
//    $("#write_task").val("");
   var resultDiv = $("<div/>").addClass("result");
    var checkDiv = $("<div/>").addClass("chck");
    var input = $("<input/>").attr("type","checkbox").addClass("chck_bx");
    checkDiv.append(input);
    var taskDiv = $("<div/>").addClass("tsk_nxt").text(tsk).click(function(){
        $(this).next().slideToggle();
    });
    
    var imgDiv = $("<div/>").addClass("sld_bar");
    var img1=$(" <img />").attr("src","../Images/first.png").addClass("sld_img btn_edit").click(function(){
        $(this).parent().slideToggle(500);
        var sp=$("<span/>").attr("id","sp1");
        resultDiv.append(sp);
        $("#task").html("Edit task");
        $("#add_task").slideToggle(1000); 
    var edt_txt=$(this).parent().prev().html();
        console.log(edt_txt);
    $("#write_task").val(edt_txt);
        });
    var img2=$("<img />").attr("src","../Images/delete.png").addClass("sld_img btn_delete");
    img2.click(function(){
        $(this).parent().parent().remove();
    });
    imgDiv.append(img1);
    imgDiv.append(img2);
      resultDiv.append(checkDiv);
    resultDiv.append(input);
    resultDiv.append(taskDiv);
    resultDiv.append(imgDiv);
    $("body").append(resultDiv);
    $(".result").show();
   
     $("#add_task").slideToggle(500); 
    }
});

$(".tsk_nxt").click(function(){
   $(".sld_bar").slideToggle(1000); 
});


