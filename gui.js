<script type="text/javascript">
function show_login_status(network, status){

    if(status == false){
        alert('NOT LOGGED IN');
    }
    if(status == true){
        alert('Logged In');
    }


}


</script>

<img style="display:none;"
onload="show_login_status('Google', true)"
onerror="show_login_status('Google', false)"
src="https://accounts.google.com/CheckCookie?continue=https%3A%2F%2Fwww.google.com%2Fintl%2Fen%2Fimages%2Flogos%2Faccounts_logo.png&followup=https%3A%2F%2Fwww.google.com%2Fintl%2Fen%2Fimages%2Flogos%2Faccounts_logo.png&chtml=LoginDoneHtml&checkedDomains=youtube&checkConnection=youtube%3A291%3A1"
/>
