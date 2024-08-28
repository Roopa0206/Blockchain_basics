$(document).ready(function() {
    $("#Checkbalance").click(function() {

        var walletAddress = $("#walletAddress").val();
        if (walletAddress === "") {
            alert("Please enter a Wallet Address");
            return;
        }

        // Create a new Web3 instance connected to sepolia
        var web3 = new Web3("https://rpc2.sepolia.org");

        // Check the balance of the wallet address
        web3.eth.getBalance(walletAddress).then(function(Balance) {
            // Convert balance from Wei to Ether and alert it
            var BalanceInEther = web3.utils.fromWei(Balance, "ether");
            alert("Balance: " + BalanceInEther + " ETH");
        }).catch(function(error) {
            console.log(error);
            alert("Error fetching balance");
        });
    });
});
