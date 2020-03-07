$(function() {
    $("#stu, #doc", "#part1", "#part2", "#line", "#owner", "#com", "#ws", "#du").hide();
    console.log($("#actor").val());
    $("#actor").change(function () {
      var value = $("#actor").val();
      if(value == "stu"){
        $("#stu").show();
        $("#part1").show();
        $("#part2").hide();
        $("#line").hide();
        $("#owner").hide();
        $("#doc").hide();
        $("#com").hide();
        $("#ws").hide();
        $("#du").hide();
      } else if (value == "doc"){
        $("#doc").show();
        $("#part1").show();
        $("#part2").hide();
        $("#line").hide();
        $("#owner").hide();
        $("#stu").hide();
        $("#com").hide();
        $("#ws").hide();
        $("#du").hide();
      }else if (value == "TA"){
        $("#doc").show();
        $("#part1").show();
        $("#part2").hide();
        $("#line").hide();
        $("#owner").hide();
        $("#stu").hide();
        $("#com").hide();
        $("#ws").hide();
        $("#du").hide(); 
      }else if (value == "com"){
        $("#com").show();
        $("#part2").show();
        $("#part1").hide();
        $("#line").hide();
        $("#owner").hide();
        $("#stu").hide();
        $("#doc").hide();
        $("#ws").hide();
        $("#du").hide();
      } else if (value == "ws"){
        $("#ws").show();
        $("#part2").show();
        $("#part1").hide();
        $("#line").show();
        $("#owner").show();
        $("#stu").hide();
        $("#doc").hide();
        $("#com").hide();
        $("#du").hide();
      } else if (value == "du"){
        $("#du").show();
        $("#part1").show();
        $("#part2").hide();
        $("#line").hide();
        $("#owner").hide();
        $("#stu").hide();
        $("#doc").hide();
        $("#com").hide();
        $("#ws").hide();
      }
    });
});
