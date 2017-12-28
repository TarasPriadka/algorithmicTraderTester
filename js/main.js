var _wallet = {
	_usd: 1000,
	_stock: 0
}
var _today = {
	_time: 0,
	_price: 0
}

function getNet() {
	return _wallet._usd + (_wallet._stock * _today._price)
}

function buy(amount) {
	if (isNaN(amount)) return
	if (amount > _wallet._usd / _today._price) amount = _wallet._usd / _today._price
	_wallet._stock += amount
	_wallet._usd -= amount * _today._price
}

function sell(amount) {
	if (isNaN(amount)) return
	if (amount > _wallet._stock) amount = _wallet._stock
	_wallet._stock -= amount
	_wallet._usd += amount * _today._price
}

function getLast(times) {
	// return prices for the last times
}
// vars to be accessed by the user:
var time = 0
var price = 0
var usd = 0
var stock = 0
var memory = {}
// wallet history
var _walletHistory = []

function _saveWallet() {
	_walletHistory.push(JSON.parse(JSON.stringify(_wallet)))
}

function _updateToday() {
	_today._time += 1
	_today._price += 100
	time = _today._time
	price = _today._price
	usd = _wallet._usd
	stock = _wallet._stock
}

function _runUserCode() {
	eval(document.getElementById('userCode').value)
}

function _reset() {
	document.getElementById('output').value = ""
	_today._time = 0
	_today._price = 0
	_wallet._usd = 1000
	_wallet._stock = 0
	_walletHistory = []
}

function _execute() {
	_reset()
	for (var _i = 0; _i < 10; _i++) {
		_saveWallet()
		_updateToday()
		_runUserCode()
		var _temp = "TIME: " + _today._time
		_temp += "\t PRICE: " + _today._price
		_temp += "\t USD: " + _wallet._usd
		_temp += "\t STOCK:" + _wallet._stock
		_temp += "\tNET: " + getNet()
		_temp += "\n"
		document.getElementById('output').value += _temp
	}
	console.log(_walletHistory)
}