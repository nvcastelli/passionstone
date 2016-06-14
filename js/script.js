var deck = new Array();
var hero = null;

document.getElementById('cardReturn').onclick = function () {

    var name = document.getElementById('val1').value;
    var request = new XMLHttpRequest();

    request.open('GET', 'https://omgvamp-hearthstone-v1.p.mashape.com/cards/' + name, true);
    request.setRequestHeader("X-Mashape-Key", "1T4oVFrWf4mshDSH9v7n6mAi5fz2p1rEjVmjsnN5U8VwJBvZQd");

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            // Success!
            var data = JSON.parse(request.responseText);

            deck.sort();

            for (var i = 0; i < 30; i++) {
                if (deck[i + 2] == deck[i]) {
                    deck.push(data[0].name);
                }
            }

            console.log(deck);

            //working on adding img to page
            var hi = data[0].img;
            console.log(hi);

            var node = document.createElement("img");
            node.href = hi;
            node.alt = "ass";

            var img = document.createElement("img");
            img.src = hi;
            node.appendChild(img);

            document.body.appendChild(img);
            //done adding img to page


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

$("#druid").click(function(){
    $("#findCard").show(); // or .fadeIn(), etc.
    $("#dropVal").hide();
    $("#classChoice").hide();
    hero = "Druid";
    console.log(hero);
});

$("#hunter").click(function(){
    $("#findCard").show(); // or .fadeIn(), etc.
    $("#dropVal").hide();
    $("#classChoice").hide();
    hero = "Hunter";
    console.log(hero);
});

$("#mage").click(function(){
    $("#findCard").show(); // or .fadeIn(), etc.
    $("#dropVal").hide();
    $("#classChoice").hide();
    hero = "Mage";
    console.log(hero);
});

$("#paladin").click(function(){
    $("#findCard").show(); // or .fadeIn(), etc.
    $("#dropVal").hide();
    $("#classChoice").hide();
    hero = "Paladin";
    console.log(hero);
});

$("#priest").click(function(){
    $("#findCard").show(); // or .fadeIn(), etc.
    $("#dropVal").hide();
    $("#classChoice").hide();
    hero = "Priest";
    console.log(hero);
});

$("#rogue").click(function(){
    $("#findCard").show(); // or .fadeIn(), etc.
    $("#dropVal").hide();
    $("#classChoice").hide();
    hero = "Rogue";
    console.log(hero);
});

$("#shaman").click(function(){
    $("#findCard").show(); // or .fadeIn(), etc.
    $("#dropVal").hide();
    $("#classChoice").hide();
    hero = "Shaman";
    console.log(hero);
});

$("#warlock").click(function(){
    $("#findCard").show(); // or .fadeIn(), etc.
    $("#dropVal").hide();
    $("#classChoice").hide();
    hero = "Warlock";
    console.log(hero);
});

$("#warrior").click(function(){
    $("#findCard").show(); // or .fadeIn(), etc.
    $("#dropVal").hide();
    $("#classChoice").hide();
    hero = "Warrior";
    console.log(hero);
});

document.getElementById('classChoice').onclick = function () {

    //var name = document.getElementById('val1').value;
    var request = new XMLHttpRequest();

    request.open('GET', 'https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/' + hero, true);
    request.setRequestHeader("X-Mashape-Key", "1T4oVFrWf4mshDSH9v7n6mAi5fz2p1rEjVmjsnN5U8VwJBvZQd");

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            // Success!
            var data = JSON.parse(request.responseText);

            for (i = 0; i < data.length; i++) {
                //working on adding img to page
                var hi = data[i].img;
                console.log(hi);

                var node = document.createElement("img");
                node.href = hi;
                node.alt = "ass";

                var img = document.createElement("img");
                img.src = hi;
                node.appendChild(img);

                document.body.appendChild(img);
                //done adding img to page
            }


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
