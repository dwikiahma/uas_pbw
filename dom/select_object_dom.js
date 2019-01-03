function infoSelect() {

   var objPilihan = document.getElementById("spec1");
   var objInfo = document.getElementById("spec2");

   //var str = "Keterangan : \n";
   var str = "";

   for (var i = 0;
        i < objPilihan.options.length;
        i++)
	 if (objPilihan.options[i].selected)
	 str = str +
      objPilihan.options[i].value + "\n";
		  objInfo.value = str;

   //console.trace();

}
