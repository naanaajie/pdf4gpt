/* Shared site nav — edit this file once, every page picks it up.
   Loaded via <script src="nav.js"> (or "../nav.js" from /blog) into
   <div id="sitenav-root"></div>, which must sit first in <body>. */
(function () {
  var NAV = {
    brand: { href: "/", label: "mysolotools" },
    tools: [
      { href: "/pdf-watermark", label: "Watermark" },
      { href: "/", label: "Extract Pages" },
      { href: "/pdf-note-margins", label: "Note Margins" },
      { href: "/pdf-unroll", label: "Unroll" }
    ],
    content: [
      { href: "/blog", label: "Blog", matchPrefix: "/blog" },
      { href: "/about", label: "About" }
    ]
  };

  function isCurrent(item, path) {
    if (path === item.href) return true;
    if (item.matchPrefix) return path === item.matchPrefix || path.indexOf(item.matchPrefix + "/") === 0;
    return false;
  }

  function renderGroup(items, path, className) {
    var html = '<ul class="' + className + '">';
    items.forEach(function (item) {
      var current = isCurrent(item, path) ? ' aria-current="page"' : "";
      html += '<li class="sitenav-item"><a href="' + item.href + '"' + current + '>' + item.label + "</a></li>";
    });
    return html + "</ul>";
  }

  function render() {
    var root = document.getElementById("sitenav-root");
    if (!root) return;
    var path = location.pathname.replace(/\/$/, "") || "/";
    var html =
      '<nav class="sitenav" aria-label="Main">' +
        '<div class="sitenav-inner">' +
          '<a class="sitenav-brand" href="' + NAV.brand.href + '">' + NAV.brand.label + "</a>" +
          '<span class="sitenav-divider" aria-hidden="true"></span>' +
          renderGroup(NAV.tools, path, "sitenav-group-tools") +
          renderGroup(NAV.content, path, "sitenav-group-content") +
        "</div>" +
      "</nav>";
    root.innerHTML = html;
  }

  render();
})();
