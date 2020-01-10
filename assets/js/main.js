$(document).ready(function () {
    AOS.init();

    $(function () {
        $("#tabs").tabs();
    });

    const name = (x) => {
        return x.length < 17;
    };

    const pw = (x) => {
        return x.match('^\\d+$') && x.length > 5;
    };

    const checkValid = () => {
        let nm = document.getElementById("name").value;
        let nb = document.getElementById("number").value;
        if (name(nm) && pw(nb)) {
            alert("Wait for our call");
        } else {
            alert("please enter real data");
        }

    };
    document.getElementById("send").addEventListener("click", checkValid);
});