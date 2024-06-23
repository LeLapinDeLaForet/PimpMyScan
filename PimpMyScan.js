
// Add a zero to a number when betwwen 0 and 9
function ZeroPadding(num)
{
	if (num >= 0 && num < 10)
	{
		num = "0" + num;
	}
	return num;
}

// Return current date
function GetDate(format = "dd/mm/yyyy")
{
	const today = new Date();
	return dateFormat(today, format);
}

// Return current time
function GetTime(format = "HH:MM:ss")
{
	const today = new Date();
	return dateFormat(today, format);
}

// Show current date & time in specified element
function Timer(elem)
{
	const item = document.getElementById(elem);
	if (item)
	{
		item.innerHTML = GetDate() + " " + GetTime();
		// Refresh every second
		setTimeout(function() { Timer(elem); }, 1000);
	}
}

function GenRandom(length, number = true, extrachar = false)
{
	let result = "";
	const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" + (number ? "0123456789" : "") + (extrachar ? "-_,;:.!?/&~#{]()|" : "");
	const charLength = characters.length;
	let counter = 0;
	while (counter < length)
	{
		result += characters.charAt(Math.floor(Math.random() * charLength));
		counter += 1;
	}
	return result;
}

// Insert data in specified table
function Insert(table)
{
	var item = document.getElementById(table);
	if (item)
	{
		var row = item.insertRow(-1);
		var date = row.insertCell(-1);
		var time = row.insertCell(-1);
		var sender = row.insertCell(-1);
		var tracking = row.insertCell(-1);
		date.setAttribute("data-t", "s");
		date.innerHTML = GetDate();
		time.setAttribute("data-t", "s");
		time.innerHTML = GetTime();
		sender.setAttribute("data-t", "s");
		sender.innerHTML = GenRandom(30, true, true);
		tracking.setAttribute("data-t", "s");
		tracking.innerHTML = GenRandom(30, true, true);
	}
}

// Save the content of specified table
function Save(table)
{
	var item = document.getElementById(table);
	if (item)
	{
		var opts = { sheet: "PimpMyScan", cellDates: true, };
		var wb = XLSX.utils.table_to_book(item, opts);
		var filename = "PimpMyScan_" + GetDate("yyyymmdd") + "_" + GetDate("HHMMss") + ".xlsx";
		XLSX.writeFile(wb, filename);
	}
}

// Call when page is loaded
onload = function()
{
	
	Timer("Timer");
};