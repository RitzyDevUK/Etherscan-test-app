


const API_KEY = '';




function GetTransactions(address, startBlock = 0, endBlock = 99999999, pageNumber = 1, pageSize = 10) {
    var request = new XMLHttpRequest(); // Create a request variable and assign a new XMLHttpRequest object to it.

    request.open('GET', `https://api.etherscan.io/api
    ?module=account
    &action=txlist
    &address=${address}
    &startblock=${startBlock}
    &endblock=${endBlock}
    &page=${pageNumber}
    &offset=${pageSize}
    &sort=asc
    &apikey=${API_KEY}`); // Open a new connection, using the GET request on the URL endpoint
    request.send();
    
    request.onload = async function () {
        var data = JSON.parse(this.response);
        console.log(data);
    }
}