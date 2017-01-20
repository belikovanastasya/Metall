

var tab;
var tabcontent;
 var newInput;
  var btn;
window.onload = function(){
	newInput = document.getElementsByClassName('position');
	tabcontent = document.getElementsByClassName('new-invoice');
	tab = document.getElementsByClassName('tab');
	hideTabsContent(1);
}
function hideTabsContent(a){	
	for (var i = a; i<tabcontent.length; i++){
		tabcontent[i].classList.remove('active');
		tabcontent[i].classList.add('hide');
		tab[i].classList.remove('checked');
	}
}
document.getElementById("type").onclick = function checked(event){
	var target = event.target;
	
	if(target.className == "tab" ){
		for (var i = 0; i < tab.length; i++) {
			if(target == tab[i]){
				showTabsContent(i);
				//breack;
			}
		}
	}
}

function showTabsContent(b){
	if(tabcontent[b].classList.contains('hide')){
		hideTabsContent(0);
		tab[b].classList.add('checked');
		tabcontent[b].classList.remove('hide');
		tabcontent[b].classList.add('active');
	}
}	


/*add new position*/


document.getElementById('btn-add').onclick = function add (){
	for (var i = 0; i < newInput.length; i++) {
		var newItem = document.createElement('input');

  newInput[i].appendChild(newItem);
	}
}
/*onclick event for add/remove elements*/


document.getElementById('btn-remove').onclick = function remove (){
	
		var newItem = document.getElementsByClassName('position');
for (var i = 0; i < newItem.length; i++) {
var removeElem = newItem[i].lastElementChild;
newItem[i].removeChild(removeElem);
	}

}