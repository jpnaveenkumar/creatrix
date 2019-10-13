<?php
$svr="localhost";
$usr="id7070851_naveenkumarjp";
$pwd="jakuva70";
$db="id7070851_info_base";
$con=mysqli_connect($svr,$usr,$pwd,$db);

$pid=$_POST['pid'];
$tname=$_POST['tname'];
$lname=$_POST['lname'];
$lregno=$_POST['lregno'];
$lmail=$_POST['lmail'];
$lphno=$_POST['lphno'];
$mem1=$_POST['mem1'];
$mem2=$_POST['mem2'];
$abstract=$_POST['abstract'];
$technology=$_POST['technology'];

/*$pid='fsadfs';
$tname='fsadfs';
$lname='fsadfs';
$lregno='fsadfs';
$lmail='fsadfs';
$lphno='fsadfs';
$mem1='fsadfs';
$mem2='fsadfs';
$abstract='fsadfs';
$technology='fsadfs';*/

$sql="insert into team_det(pid,tname,lname,lregno,lmail,lphno,mem1,mem2,abstract,technology) values('$pid','$tname','$lname','$lregno','$lmail','$lphno','$mem1','$mem2','$abstract','$technology')";
mysqli_query($con,$sql);
mysqli_close($con);
echo '1';
?>