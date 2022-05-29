var Pipeline_Name = "";
var Project_Name = "";
var Bucket_Name = "";
var Input_Storage_Files = "";
var GCS_Credentials = "";
var flag=0;
function validate() {
  Pipeline_Name = document.getElementById("pipeline").value;
  Project_Name = document.getElementById("project").value;
  Bucket_Name = document.getElementById("bucket").value;
  Input_Storage_Files = document.getElementById("storage").value;
  GCS_Credentials = document.getElementById("credentials").value;

  console.log(
    Pipeline_Name +
      " " +
      Project_Name +
      " " +
      Bucket_Name +
      " " +
      Input_Storage_Files +
      " " +
      GCS_Credentials
  );
 length_check()
 if(flag==0)
 {
     start_check();
     if(flag==0)
     {
        special_character_check();
     }
 }

}

function length_check() {
  var ele = document.getElementById("check");
  if (Pipeline_Name.length < 5) {
    ele.setAttribute(
      "class",
      "alert alert-danger alert-dismissible fade show container"
    );
    ele.innerHTML = "Length of pipeline name should be minimum 5 ";
    flag=1;
  } 
  else if (Project_Name.length < 5) {
    ele.setAttribute(
      "class",
      "alert alert-danger alert-dismissible fade show container"
    );
    ele.innerHTML = "Length of project name should be minimum 5 ";
    flag = 1;
  } 
  else if (Bucket_Name.length < 5) {
    ele.setAttribute(
      "class",
      "alert alert-danger alert-dismissible fade show container"
    );
    ele.innerHTML = "Length of bucket name should be minimum 5 ";
    flag = 1;
  } 
  else if (Input_Storage_Files.length < 5) {
    ele.setAttribute(
      "class",
      "alert alert-danger alert-dismissible fade show container"
    );
    ele.innerHTML = "Length of Input Storage Files should be minimum 5 ";
    flag = 1;
  } 
  else if (GCS_Credentials.length < 5) {
    ele.setAttribute(
      "class",
      "alert alert-danger alert-dismissible fade show container"
    );
    ele.innerHTML = "Length of GCS Credentials should be minimum 5 ";
    flag = 1;
  }
}

function start_check() {
  var ele = document.getElementById("check");
  if (
    Pipeline_Name.charAt(0) == '+' ||
    Pipeline_Name.charAt(0) == '-' ||
    Pipeline_Name.charAt(0) == '_'
  ) {
    ele.setAttribute(
      "class",
      "alert alert-danger alert-dismissible fade show container"
    );
    
    ele.innerHTML = "Pipeline Name should not start with +,- or _";
    flag = 1;
  } else if (
    Project_Name.charAt(0) == '+' ||
    Project_Name.charAt(0) == '-' ||
    Project_Name.charAt(0) == '_'
  ) {
    ele.setAttribute(
      "class",
      "alert alert-danger alert-dismissible fade show container"
    );
    ele.innerHTML = " Project Name should not start with +,- or _ ";
    flag = 1;
  } else if (
    Bucket_Name.charAt(0) == '+' ||
    Bucket_Name.charAt(0) == '-' ||
    Bucket_Name.charAt(0) == '_'
  ) {
    ele.setAttribute(
      "class",
      "alert alert-danger alert-dismissible fade show container"
    );
    ele.innerHTML = " Bucket Name should not start with +,- or _ ";
    flag = 1;
  } else if (
    Input_Storage_Files.charAt(0) == '+'||
    Input_Storage_Files.charAt(0) == '-' ||
    Input_Storage_Files.charAt(0) == '_'
  ) {
    ele.setAttribute(
      "class",
      "alert alert-danger alert-dismissible fade show container"
    );
    ele.innerHTML =
      " Input Storage Files Name should not start with +,- or _  ";
      flag = 1;
  } else if (
    GCS_Credentials.charAt(0) == '+' ||
    GCS_Credentials.charAt(0) == '-' ||
    GCS_Credentials.charAt(0) == '_'
  ) {
    ele.setAttribute(
      "class",
      "alert alert-danger alert-dismissible fade show container"
    );
    ele.innerHTML = " GCS Credentials hould not start with +,- or _ ";
    flag = 1;
  }
}

function special_character_check() 
{

     var ele = document.getElementById("check");
  if (/[^a-zA-Z0-9\-\/]/.test(Pipeline_Name)) {
    ele.setAttribute(
      "class",
      "alert alert-danger alert-dismissible fade show container"
    );
    ele.innerHTML = " Special Character are not allowed in Pipeline!";
    flag = 1;
  } else if (/[^a-zA-Z0-9\-\/]/.test(Project_Name)) {
    ele.setAttribute(
      "class",
      "alert alert-danger alert-dismissible fade show container"
    );
    ele.innerHTML = "Special Character are not allowed in Project Name! ";
    flag = 1;
  } else if (/[^a-zA-Z0-9\-\/]/.test(Bucket_Name)) {
    ele.setAttribute(
      "class",
      "alert alert-danger alert-dismissible fade show container"
    );
    ele.innerHTML = " Special Character are not allowed in Bucket Name! ";
    flag = 1;
  } else if (/[^a-zA-Z0-9\-\/]/.test(Input_Storage_Files)) {
    ele.setAttribute(
      "class",
      "alert alert-danger alert-dismissible fade show container"
    );
    ele.innerHTML =
      "Special Character are not allowed in Input storage Files Name!";
      flag = 1;
  } else if (/[^a-zA-Z0-9\-\/]/.test(GCS_Credentials)) {
    ele.setAttribute(
      "class",
      "alert alert-danger alert-dismissible fade show container"
    );
    ele.innerHTML = " Special Character are not allowed in GCS Credentials!";
    flag = 1;
  }
}
