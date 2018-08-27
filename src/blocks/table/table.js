// ./blocks/table/table.js


(function(){
	let xhr = new XMLHttpRequest();
	let htmlTable = document.getElementById('table');
	let table = '';
	let error = '<p class="table__error-load">Ошибка соеденения...</p>';
	xhr.open('GET', 'https://api.jsonbin.io/b/5b683d097b212953678c03dd', false);
	xhr.send();
	if (xhr.status != 200) {
		htmlTable.innerHTML = error;
	} else {
		let configurations = xhr.responseText;
		configurations = JSON.parse(configurations);
		table += '<div class="table__row table__row--head"><div class="row"><div class="col-sm-3"><div class="table__cell table__cell--first"><span>Процессор</span></div></div><div class="col-sm-2"><div class="table__cell"><span>Жесткий диск</span></div></div><div class="col-sm-2"><div class="table__cell"><span>Память</span></div></div><div class="col-sm-5"><div class="table__cell"><span>Цена</span></div></div></div></div>';
		configurations.forEach(function(element) {
			table += '<div class="table__row table__row"><div class="row">';
			table += '<div class="col-md-3"><div class="table__cell table__cell--first"><p class="table__cell-caption">Процессор</p><span>'+ element.cpu +'</span></div></div><div class="col-md-2"><div class="table__cell"><p class="table__cell-caption">Жесткий диск</p><span>'+ element.hdd +' ГБ</span></div></div><div class="col-md-2"><div class="table__cell"><p class="table__cell-caption">Память</p><span>'+ element.ram +' ГБ</span></div></div><div class="col-md-2"><div class="table__cell"><p class="table__cell-caption">Цена</p><span><span>'+ element.price +' ₽/мес</span></div></div><div class="col-md-3"><div class="table__cell table__cell--last"><a class="button" href="https://selectel.ru/" target="_blank">Заказать</a></div></div>';
			table += '</div></div>';
		});
		htmlTable.innerHTML = table;
	}


}());
