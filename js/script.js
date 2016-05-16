document.getElementById('cardReturn').onclick = function () {

    var name = document.getElementById('val1').value;
    var request = new XMLHttpRequest();

    request.open('GET', 'https://omgvamp-hearthstone-v1.p.mashape.com/cards/' + name, true);
    request.setRequestHeader("X-Mashape-Key", "1T4oVFrWf4mshDSH9v7n6mAi5fz2p1rEjVmjsnN5U8VwJBvZQd");

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            // Success!
            var data = JSON.parse(request.responseText);
            var hi = data[0].img;
            console.log(hi);

            var node = document.createElement("img");
            node.href = hi;
            node.alt = "ass";

            var img = document.createElement("img");
            img.src = hi;
            node.appendChild(img);

            document.body.appendChild(img);

            //document.getElementById("pic").innerHTML = "<img src=' " + hi + " ' />";

        } else {
            // We reached our target server, but it returned an error
        }
    };

    request.onerror = function () {
        // There was a connection error of some sort
    };

    request.send();

}

function myFunction() {
    var e = document.getElementById("dropVal");
    var value = e.options[e.selectedIndex].value;
    var text = e.options[e.selectedIndex].text;
    console.log(text);
}