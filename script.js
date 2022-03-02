function Calculator() {
    var nb_crafts = document.getElementById("NBrecettes").value;
    var remaining_time = 1*nb_crafts;
    var h = Math.floor(remaining_time / 3600);
    var m = Math.floor((remaining_time % 3600) / 60);
    var s = Math.floor((remaining_time % 3600) % 60);
    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    document.getElementById("result").innerHTML = hDisplay + mDisplay + sDisplay;
  }