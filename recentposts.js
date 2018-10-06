function rp(e) {
    document.write("<ul>");
    for (var t = 0; t < numposts; t++) {
        document.write("<li>");
        var r, n = e.feed.entry[t],
            i = n.title.$t;
        if (t == e.feed.entry.length) break;
        for (var s = 0; s < n.link.length; s++)
            if ("alternate" == n.link[s].rel) {
                r = n.link[s].href;
                break
            } i = i.link(r);
        var u = "(more)";
        u = u.link(r);
        var a = n.published.$t,
            l = (a.substring(0, 4), a.substring(5, 7)),
            o = a.substring(8, 10),
            m = new Array;
        if (m[1] = "Jan", m[2] = "Feb", m[3] = "Mar", m[4] = "Apr", m[5] = "May", m[6] = "Jun", m[7] = "Jul", m[8] = "Aug", m[9] = "Sep", m[10] = "Oct", m[11] = "Nov", m[12] = "Dec", "content" in n) var c = n.content.$t;
        else if ("summary" in n) c = n.summary.$t;
        else c = "";
        if (c = c.replace(/<\S[^>]*>/g, ""), document.write(i), 1 == showpostdate && document.write(" - " + m[parseInt(l, 10)] + " " + o), 1 == showpostsummary)
            if (c.length < numchars) document.write(c);
            else {
                var d = (c = c.substring(0, numchars)).lastIndexOf(" ");
                c = c.substring(0, d), document.write(c + "..." + u)
            } document.write("</li>")
    }
    document.write("</ul>")
}
