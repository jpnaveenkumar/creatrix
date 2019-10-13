var x=10;
var prev="";
var glob_json=null;
$("input[type='radio']").click(function(){
    var ind=this.id;
    if(ind=='first'){
        $('#mem1').hide();
        $('#mem2').hide();
        $('#lname').attr("placeholder","Name");
        $('#lregno').attr("placeholder","Roll no (15IT061)");
        //$("input[placeholder='Leader name]")
    }
    else{
        $('#lname').attr("placeholder","Leader name");
        $('#lregno').attr("placeholder","Leader roll no (15IT061)");
        $('#mem1').show();
        $('#mem2').show();
    }
});
function chphno(phno)
{
    if(phno.length!=10)
        return 1;
    for(var i=0;i<phno.length;i++)
    {
        var t=phno.charCodeAt(i);
        if(!(t>=48 && t<=56))
        return 1;
    }
    return 0;
}
function chmail(lmail)
{
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(lmail);
}
$('#save').click(function(){
    var year=$("input[name='year']:checked").val();
    //alert('came');
    var pid=$('#pbid').val();
    var tname=$('#tname').val();
    var lname=$('#lname').val();
    var lregno=$('#lregno').val();
    var lmail=$('#lmail').val();
    var lphno=$('#lphno').val();
    if(year=="other"){
    var mem1=$('#mem1').val();
    var mem2=$('#mem2').val();
        if(mem1==''||mem2=='')
        {
            Materialize.toast('No Empty Fields!!', 4000);
            return ;
        }
    }
    var abstract=$('#abstract').val();
    var technology=$('#technology').val();
    if(pid==''||tname==''||lname==''||lregno==''||lmail==''||lphno==''||abstract==''||technology=='')
        {
            Materialize.toast('No Empty Fields!!', 4000);
            return ;
        }
        if(chphno(lphno))
        {
             Materialize.toast('Invalid Phone number!!', 4000);
             return ;
        }
        if(!chmail(lmail))
        {
            Materialize.toast('Invalid Mail ID format!!', 4000);
            return ;
        }
    //alert(pid+' '+tname+' '+mem2);
    if(year=="other"){
$.ajax({
			type:'POST',
			url:'../creatrix/insert.php',
			data:{'pid':pid,'tname':tname,'lname':lname,'lregno':lregno,'lmail':lmail,'lphno':lphno,'mem1':mem1,'mem2':mem2,'abstract':abstract,'technology':technology},
			cache:false,
			success:function(html){
				var res=html;
				$('#modal1').modal('close');
				Materialize.toast('Proposal Saved!!', 4000);
				//alert(html);
				//$('#likes').text(res);
			}
		});
    }
    else{
        $.ajax({
			type:'POST',
			url:'../creatrix/insert1.php',
			data:{'pid':pid,'tname':tname,'lname':lname,'lregno':lregno,'lmail':lmail,'lphno':lphno,'abstract':abstract,'technology':technology},
			cache:false,
			success:function(html){
				var res=html;
				$('#modal1').modal('close');
				Materialize.toast('Proposal Saved!!', 4000);
				//alert(html);
				//$('#likes').text(res);
			}
		});
    }
});
function fill_data()
{
    //alert('camee');
    var co="<option value='' disabled selected>Choose your Domain</option>";
    for(var i=0;i<glob_json['domains'].length;i++){
        co+="<option value='"+i+"'>"+glob_json['domains'][i]['name']+"</option>";
    }
    //alert(co);
    $('#domm').append(co);
    $('select').material_select();
}
$('#search').click(function(){
    var ind=$('#domm').val();
    $('.eve').remove();
    var con="";
		for(var i=0;i<glob_json['problem'].length;i++){
		 //alert(glob_json['domains'][ind]['name']+' '+glob_json['problem'][i]['tag']);
		if((glob_json['problem'][i]['tag'].toLowerCase()).includes((glob_json['domains'][ind]['name']).toLowerCase()) || glob_json['domains'][ind]['name']=='ALL'){
		   // alert('came');
con+=" <div  style='color:white' class='col l6 m12 s12 eve'>";
con+="           	<div  id='all' value='"+i+"' style='border:3px solid #448aff;height:auto;border-radius:5%;background-image: linear-gradient(#4facfe,#00f2fe);margin:20px 20px 20px 20px;' class='card z-depth-5' >";
con+="            		<div style='' class='card-content'>";
con+="            		<div style='margin-bottom:-20px' class='row'>";
con+="            				<div class='col l4 m12 s12'>";
con+="            					<center><img style='margin-top:30px;' src='"+getimg()+"' height='130' width='100'/></center>";
con+="								<center><h5 style='font-size:1.5em;'><b>"+glob_json['problem'][i]['name']+"<b></h5></center>";
con+="							</div>";
con+="							<div  style='margin-top:-20px;' class='col l8 m12 s12'>";
con+="								<span class='card-content' ><center><b style='font-size:1.5em;text-decoration:underline'>Description</b><p style='padding-top:10px;word-break: break-all;height:100px;overflow:hidden;color:#e3f2fd'>"+glob_json['problem'][i]['desc']+"</p></center>";
con+="									<b><center style='font-size:1.5em;text-decoration:underline;padding-top:10px;'>Topic Tags</center></b><p style='color:#e3f2fd;padding-bottom:10px;text-align:center;height:55px;'>"+glob_json['problem'][i]['tag']+"</p>";
con+="									<div class='row'>";
con+="										<div class='col l6 m6 s6 push-l3 push-m3 push-s3'>";
con+="											<a id='ins' value='"+i+"' class='pulse z-depth-2 btn-floating red'><i class='material-icons'>attach_file</i></a>";
con+="										</div>";
con+="										<div class='col l6 m6 s6'>";
con+="											<a id='descp' value='"+i+"' class='pulse z-depth-2 btn-floating blue'><i class='material-icons'>description</i></a>";
con+="										</div>";
con+="									</div>";
con+="								</span>";
con+="           				</div>";
con+="           			</div>";
con+="            		</div>";
con+="            </div>";
con+="    </div>";
		}
		}
		$('#statements').append(con);
    
    
    //alert($('#domm').val());
});
function getimg()
{
	var col=["../creatrix/img/h1.png","../creatrix/img/h2.png","../creatrix/img/h3.png","../creatrix/img/h4.png","../creatrix/img/h5.png","../creatrix/img/h6.png","../creatrix/img/h7.png","../creatrix/img/h8.png","../creatrix/img/h9.png","../creatrix/img/h10.png"];
	var randomNumber = (Math.floor(Math.random() * 6) + 5)%col.length;
	if(prev!=col[randomNumber]){
	prev=col[randomNumber];
	return prev;
	}
	else{
		return getimg();
	}
}
$(document).ready(function(){
    //$( "div:nth-last-child(2)" ).remove();
    //$( "div:nth-last-child(2)" ).remove();
    $('.tooltipped').tooltip();
    //$(".dropdown-content>li>a").css("color",'blue');
     //$('select').formSelect();
	//alert('came');
	/*$.ajax({
  dataType: "json",
  url: "../js/data.json",
  data: {'abc':'df'},
  success: function(data) {
    alert("hello");
  },
  error:function(dfg){
	  alert('erorr '+dfg.responseText);
  }
});*/
    $('#statements').on('click','#descp',function(){
        var ind=$(this).attr('value');
        //alert(ind);
        //alert(glob_json['problem'][ind]['longd']);
        $('#mhead').text(glob_json['problem'][ind]['name']);
		$('#cont').text(glob_json['problem'][ind]['longd']);
		$('#modall').modal();
		$('#modall').modal('open');
    });
    $('#statements').on('click','#ins',function(){
        var ind=$(this).attr('value');
        //alert(glob_json['problem'][ind]['name']);
        $('#pbid').val(glob_json['problem'][ind]['name']);
        $('#modal1').modal();
        $('#modal1').css('background-color','#2196f3');
		$('#modal1').modal('open');
    });
    
	$.ajaxSetup({ cache: false });
	$('#statements').on('mouseenter','.card',function(){
		$(this).animate({width:'+=10px'});
	}).on('mouseleave','.card',function(){
		$(this).animate({width:'-=10px'});
	});
	
	$('#statements').on('mouseenter','#descp',function(){
	     Materialize.toast('Click for More Description',1000);
	});
	$('#statements').on('mouseenter','#ins',function(){
	     Materialize.toast('Click to Submit proposal',1000);
	});
	
	$.getJSON("../creatrix/js/data.json",function(json){
		//feeding data to cards
		//alert('came');
		glob_json=json;
		fill_data();
		var con="";
		for(var i=0;i<json['problem'].length;i++){
con+=" <div  style='color:white' class='col l6 m12 s12 eve'>";
con+="           	<div  id='all' value='"+i+"' style='border:3px solid #448aff;height:auto;border-radius:5%;background-image: linear-gradient(#4facfe,#00f2fe);margin:20px 20px 20px 20px;' class='card z-depth-5' >";
con+="            		<div style='' class='card-content'>";
con+="            		<div style='margin-bottom:-20px' class='row'>";
con+="            				<div class='col l4 m12 s12'>";
con+="            					<center><img style='margin-top:30px;' src='"+getimg()+"' height='130' width='100'/></center>";
con+="								<center><h5 style='font-size:1.5em;'><b>"+json['problem'][i]['name']+"<b></h5></center>";
con+="							</div>";
con+="							<div  style='margin-top:-20px;' class='col l8 m12 s12'>";
con+="								<span class='card-content' ><center><b style='font-size:1.5em;text-decoration:underline'>Description</b><p style='padding-top:10px;word-break: break-all;height:100px;overflow:hidden;color:#e3f2fd'>"+json['problem'][i]['desc']+"</p></center>";
con+="									<b><center style='font-size:1.5em;text-decoration:underline;padding-top:10px;'>Topic Tags</center></b><p style='color:#e3f2fd;padding-bottom:10px;text-align:center;height:55px;'>"+glob_json['problem'][i]['tag']+"</p>";
con+="									<div class='row'>";
con+="										<div class='col l6 m6 s6 push-l3 push-m3 push-s3'>";
con+="											<a id='ins' value='"+i+"' class='pulse z-depth-2 btn-floating red'><i class='material-icons'>attach_file</i></a>";
con+="										</div>";
con+="										<div class='col l6 m6 s6'>";
con+="											<a id='descp' value='"+i+"' class='pulse z-depth-2 btn-floating blue'><i class='material-icons'>description</i></a>";
con+="										</div>";
con+="									</div>";
con+="								</span>";
con+="           				</div>";
con+="           			</div>";
con+="            		</div>";
con+="            </div>";
con+="    </div>";
		}
		$('#statements').append(con);
		$('a[href="https://www.000webhost.com/?utm_source=000webhostapp&utm_campaign=000_logo&utm_medium=website_naveenkumarjp&utm_content=footer_img"]').remove();
		//$( "div a" ).remove();
		//setTimeout(function def(){
     //   $( "div:nth-last-child()" ).remove();
   // },3000);
		//$("#.card").animate({direction: "left"},350);	
	});
});