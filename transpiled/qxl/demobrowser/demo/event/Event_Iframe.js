(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.bom.Element": {
        "require": true
      },
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.application.Native": {
        "require": true
      },
      "qx.bom.Iframe": {},
      "qx.event.Registration": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);

  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2008 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Sebastian Werner (wpbasti)
       * Fabian Jakobs (fjakobs)
  
  ************************************************************************ */

  /* ************************************************************************
  
  
  ************************************************************************ */

  /**
   * @tag noPlayground
   *
   * @require(qx.bom.Element)
   */
  qx.Class.define("qxl.demobrowser.demo.event.Event_Iframe", {
    extend: qx.application.Native,
    members: {
      main: function main() {
        qxl.demobrowser.demo.event.Event_Iframe.prototype.main.base.call(this);
        var iframe = qx.bom.Iframe.create({
          name: "iframe",
          src: "data/Event_2_frame.html"
        });
        iframe.id = "iframe";
        document.body.appendChild(iframe);
        qx.event.Registration.addListener(iframe, "load", this.bindIFrameEvents, this);
      },
      bindIFrameEvents: function bindIFrameEvents() {
        var iframe = window.document.getElementById("iframe");
        var iframeDocument = qx.bom.Iframe.getDocument(iframe);
        this._juhu = iframeDocument.getElementById("juhu");
        this._inner = iframeDocument.getElementById("inner");
        qx.event.Registration.addListener(this._juhu, "contextmenu", this._preventDefault, this);
        qx.event.Registration.addListener(this._inner, "tap", this._stopPropagation, this);
        qx.event.Registration.addListener(this._juhu, "tap", this._onTap1, this);
        qx.event.Registration.addListener(this._juhu, "tap", this._onTap2, this);
        qx.event.Registration.addListener(iframeDocument.getElementById("input"), "keydown", this._onkeydown, this);

        for (var i = 1; i < 10; i++) {
          var div = iframeDocument.getElementById("div" + i);
          qx.event.Registration.addListener(div, "tap", this._cascadeCapture, this, true);
          qx.event.Registration.addListener(div, "tap", this._cascadeBubble, this, false);
        }

        qx.event.Registration.addListener(iframeDocument.getElementById("scroll"), "scroll", this._scroll, this);
      },
      _onkeydown: function _onkeydown(e) {
        this.debug("keydown: " + e.getKeyIdentifier());
      },
      _scroll: function _scroll(e) {
        this.debug("scroll");
      },
      _cascadeCapture: function _cascadeCapture(e) {
        var elem = e.getCurrentTarget();
        this.debug("capture: " + elem.id + " " + e.getEventPhase());
      },
      _cascadeBubble: function _cascadeBubble(e) {
        var elem = e.getCurrentTarget();
        this.debug("bubble: " + elem.id + " " + e.getEventPhase());
      },
      _preventDefault: function _preventDefault(e) {
        this.debug(e.getType() + ": " + e);
        e.preventDefault();
      },
      _stopPropagation: function _stopPropagation(e) {
        this.debug(e.getType() + " (inner): " + e);
        e.stopPropagation();
      },
      _onTap1: function _onTap1(e) {
        this.debug(e.getType() + " 1: " + e);
        qx.event.Registration.removeListener(this._juhu, "tap", this._onTap1);
      },
      _onTap2: function _onTap2(e) {
        this.debug(e.getType() + " 2: " + e);
      }
    },

    /*
     *****************************************************************************
        DESTRUCT
     *****************************************************************************
     */
    destruct: function destruct() {
      this._juhu = this._inner = null;
    }
  });
  qxl.demobrowser.demo.event.Event_Iframe.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Event_Iframe.js.map?dt=1586350624921