$(document).ready(function() {
    $("#createWalletButton").click(function() {

        // Alert if the password is empty
        var password = $("#password").val();
        if (password === "") {
            alert("Please enter a password for the Key Store");
            return;
        }

        // Create a new Web3 instance
        var web3 = new Web3();

        // Create a new wallet
        var wallet = web3.eth.accounts.create();

        // Insert the wallet address into the text area
        $("#walletAddress").val(wallet.address);

        // Display the private key
        $("#privateKey").val(wallet.privateKey);

        // Display the keystore file
        var keystore = web3.eth.accounts.encrypt(wallet.privateKey, password);
        $("#keystore").val(JSON.stringify(keystore));
    });
});
