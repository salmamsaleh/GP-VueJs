/*$(function() {
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
});*/
(function () {
  var stu = document.getElementById("stu").hidden = true;
  stu;
  var doc = document.getElementById("doc").hidden = true;
  doc;
  var part1 = document.getElementById("part1").hidden = true;
  part1;
  var part2 = document.getElementById("part2").hidden = true;
  part2;
  var line = document.getElementById("line").hidden = true;
  line;
  var owner = document.getElementById("owner").hidden = true;
  owner;
  var com = document.getElementById("com").hidden = true;
  com;
  var ws = document.getElementById("ws").hidden = true;
  ws;
  var du = document.getElementById("du").hidden = true;
  du;
  var actor = document.getElementById("actor");
  console.log(actor.value);
  actor.onchange(()=>{
    var val = actor.value;
    if(val == "stu") {
        document.getElementById("stu").hidden = false;
        document.getElementById("part1").hidden = false;
        document.getElementById("part2").hidden = true;
        document.getElementById("line").hidden = true;
        document.getElementById("doc").hidden = true;
        document.getElementById("com").hidden = true;
        document.getElementById("ws").hidden = true;
        document.getElementById("du").hidden = true;
        document.getElementById("owner").hidden = true; 
    } else if (val == "doc") {
        document.getElementById("doc").hidden = false;
        document.getElementById("part1").hidden = false;
        document.getElementById("part2").hidden = true;
        document.getElementById("line").hidden = true;
        document.getElementById("stu").hidden = true;
        document.getElementById("com").hidden = true;
        document.getElementById("ws").hidden = true;
        document.getElementById("du").hidden = true;
        document.getElementById("owner").hidden = true;
    } else if (val == "TA") {
      document.getElementById("doc").hidden = false;
      document.getElementById("part1").hidden = false;
      document.getElementById("part2").hidden = true;
      document.getElementById("line").hidden = true;
      document.getElementById("stu").hidden = true;
      document.getElementById("com").hidden = true;
      document.getElementById("ws").hidden = true;
      document.getElementById("du").hidden = true;
      document.getElementById("owner").hidden = true;
    } else if (val == "com"){
      document.getElementById("com").hidden = false;
      document.getElementById("part2").hidden = false;
      document.getElementById("part1").hidden = true;
      document.getElementById("line").hidden = true;
      document.getElementById("stu").hidden = true;
      document.getElementById("doc").hidden = true;
      document.getElementById("ws").hidden = true;
      document.getElementById("du").hidden = true;
      document.getElementById("owner").hidden = true;
    } else if (val == "ws") {
      document.getElementById("ws").hidden = false;
      document.getElementById("part2").hidden = false;
      document.getElementById("part1").hidden = true;
      document.getElementById("line").hidden = false;
      document.getElementById("stu").hidden = true;
      document.getElementById("doc").hidden = true;
      document.getElementById("com").hidden = true;
      document.getElementById("du").hidden = true;
      document.getElementById("owner").hidden = false;
    } else if (val == "du"){
      document.getElementById("du").hidden = false;
      document.getElementById("part1").hidden = false;
      document.getElementById("part2").hidden = true;
      document.getElementById("line").hidden = true;
      document.getElementById("stu").hidden = true;
      document.getElementById("doc").hidden = true;
      document.getElementById("ws").hidden = true;
      document.getElementById("com").hidden = true;
      document.getElementById("owner").hidden = true;
    }
  }) 
});

