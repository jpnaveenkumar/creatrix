<!DOCTYPE html>
  <html>
    <head>
	<style>
        [type="radio"].with-gap:checked+label:after {
          background-color: #2196f3 !important;
        }
        
        [type="radio"].with-gap:checked+label:before,
        [type="radio"].with-gap:checked+label:after {
          border: 2px solid #2196f3 !important;
        }
      [data-entrance] { visibility: hidden; }
	   .js [data-entrance] { visibility: hidden; }
	   .x-breadcrumbs > .delimiter {
    color: #336699;
    }
    ::-webkit-scrollbar {
    width: 10px;
}
ul.dropdown-content.select-dropdown li span {
    color:#2196f3; /* no need for !important :) */
}
/* Track */
::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey; 
    border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
    background:#1565c0; 
    border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #b30000; 
}
</style>
      <!--Import Google Icon Font-->
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <!--Import materialize.css-->
       <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">

  <!-- Compiled and minified JavaScript -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>

      <!--Let browser know website is optimized for mobile-->
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </head>
<body>
	
	<!--modal start-->
		<div id="modal1" class="modal" style="background-color:#2196f3;position:fixed">
			<div class="modal-header" style="color:white;position:sticky;z-index:99;top:0px;background-color:#2196f3;padding:5px 0px 5px 0px;">
				<center><h5 style=''>Team Details</h5></center>
			</div>
		  <div class="modal-content" style="background-color:white;">
		    <div class="container">
		        <div class="row">
		            <div class="col l6 m6 s12">
		                <center>
							<input class="with-gap" name="year" type="radio" id="first" value="first" />
							<label for="first" style="font-size:12px;">First year</label>
						</center>
		            </div>
		            <div class="col l6 m6 s12">
		                <center>
							<input class="with-gap" name="year" type="radio" id="other" value="other" checked/>
							<label for="other" style="font-size:12px;">Second (or) Third year</label>
						</center>
		            </div>
		        </div>
		    </div>
			<div class="container">
				<div class="col s12 l12 m12">
				  <input placeholder="ProblemTag" id="pbid" type="text"  readonly>
				</div>
				<div class="col s12 l12 m12">
				  <input placeholder="TeamName" id="tname" type="text" class="validate" required>
				</div>
				<div class="col s12 l12 m12">
				  <input placeholder="Leader name" id="lname" type="text" class="validate"  required>
				</div>
				<div class="col s12 l12 m12">
				  <input placeholder="Leader roll no (15IT061)" id="lregno" type="text" class="validate"  required>
				</div>
				<div class="col s12 l12 m12">
				  <input placeholder="Email id" id="lmail" type="text" class="validate"  required>
				</div>
				<div class="col s12 l12 m12">
				  <input placeholder="Mobile no" id="lphno" type="text" class="validate"  required>
				</div>
				<div class="col s12 l12 m12">
				  <input placeholder="Member1_name-(15IT061)" id="mem1" type="text" class="validate"  required>
				</div>
				<div class="col s12 l12 m12">
				  <input placeholder="Member2_name-(15IT008)" id="mem2" type="text" class="validate"  required>
				</div>
				<div class="input-field col s12">
                  <textarea id="abstract" class="materialize-textarea"  required></textarea>
                  <label for="textarea1">Abstract (150 words)</label>
                </div>
                <div class="input-field col s12">
                  <textarea id="technology" class="materialize-textarea"  required></textarea>
                  <label for="textarea2">Technology Stack(',' seperated)</label>
                </div>
			</div>
		  </div>
		  <div class="modal-footer">
			<center><a id="save" href="#!"  style="background-color:#1976d2;color:white;" class=" waves-effect waves-green btn-flat">Save</a></center>
		  </div>
		</div>
		<!--modal end-->
	
	<div id="modall" class="modal" style="background-color:#2196f3;border:3px solid black;">
		  <div class="modal-content" style="background-image:linear-gradient(#0072ff,#00c6ff);color:white">
		    <center><h5 id='mhead'></h5></center>
		    <hr style='color:white;'>
			<p><b><u>Description :</u></b></p>
			<center><p id='cont' style='color:#e3f2fd'></p></center>
			<center><a href="#!" style="background-color:#1976d2;color:#e3f2fd;" class=" modal-action modal-close waves-effect waves-green btn-flat">close</a></center>
		  </div>
	</div>
	
	<div class='z-depth-5' style='width:100%;position:fixed;z-index:999;background-color:#1e88e5;color:white;top:0px;'>
	    <center><h4 style='padding:0px 0px 0px 0px;'>Creatrix 2018</h4></center>
	</div>
            
    <center style='margin-top:105px;'>
        <div class='row container'>
            <div style='color:#2196f3' class="input-field col l4 s12 m12 push-l3 push-m3">
                <select id='domm'>
                </select>
            </div>
            <div class='col l8 s12 m12'>
                <a id='search' style='background-color:#2196f3;margin-top:23px;'class="waves-effect waves-light btn">Search</a>
            </div>
        </div>
    </center>
            
	<div  class="container">
	    <center><b style='color:#2196f3;font-size:1.5em;'>Problem Statements</b></center>
		<div style='padding-top:35px' id="statements" class="row">
		</div>
	</div>
<script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
<script src="js/pagebuilder.js"></script>
<script src="scroll-entrance.js"></script>
<script>
</script>
</body>
</html>
