function calc() {
    //showhide
    document.getElementById('loanForm').style.display = "none";
    document.getElementById('table').style.display = "block";

    var la = parseFloat(document.getElementById('loanAmount').value);
    var ir = parseFloat(document.getElementById('interestRate').value) / 100 / 12; // Monthly interest rate
    var lt = parseFloat(document.getElementById('loanTerm').value) * 12;
    var sy = parseInt(document.getElementById('startYear').value);
    var monthlyPayment = (la * ir * Math.pow(1 + ir, lt)) /
                        (Math.pow(1 + ir, lt) - 1);

    //start of loop
    var tablestuff = '<h2>Loan Table</h2><table style="width: 25rem">';
    tablestuff += '<tr><th>Year</th><th>Interest</th><th>Principal</th><th>Balance</th></tr>';

    for (var year = sy; year < sy + lt / 12; year++) {
        var yearlyInterest = 0;
        var yearlyPrincipal = 0;
        for (var month = 1; month <= 12; month++) {
            // interest and principal
            var interestPaid = la * ir;
            var principalPaid = monthlyPayment - interestPaid;
            var balance = la - principalPaid;
            la = balance;
            yearlyInterest += interestPaid;
            yearlyPrincipal += principalPaid;
        }//end of first loop
        //generate rows with specific data as td
        tablestuff += '<tr>';
        tablestuff += '<td>' + year + '</td>';
        tablestuff += '<td><b>' + yearlyInterest.toFixed(2) + '</b></td>';
        tablestuff += '<td><b>' + yearlyPrincipal.toFixed(2) + '</b></td>';
        tablestuff += '<td>' + balance.toFixed(2) + '</td>';
        tablestuff += '</tr>';
    }//end of second loop
    tablestuff += '</table>';
    document.getElementById('table').innerHTML = tablestuff;
}