(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.event.dispatch.DomBubbling": {},
      "qx.event.handler.Keyboard": {},
      "qx.event.handler.Pointer": {},
      "qx.event.handler.Element": {},
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qxl.demobrowser.demo.event.EventDemo": {
        "require": true
      },
      "qx.event.Registration": {},
      "qx.ui.command.Command": {}
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
   * @use(qx.event.dispatch.DomBubbling)
   * @use(qx.event.handler.Keyboard)
   * @use(qx.event.handler.Pointer)
   * @use(qx.event.handler.Element)
   */
  qx.Class.define("qxl.demobrowser.demo.event.Event", {
    extend: qxl.demobrowser.demo.event.EventDemo,
    members: {
      main: function main() {
        qxl.demobrowser.demo.event.Event.prototype.main.base.call(this);

        this._initLogger(["Events"], document.getElementById("logger"), 50);

        qx.event.Registration.addListener(window, "resize", this._onResize, this);
        var cmd = new qx.ui.command.Command("Shift-Meta-F1");
        cmd.addListener("execute", function () {
          this.debug(cmd.toString());
        }, this);
        var cmd2 = new qx.ui.command.Command("Ctrl-A");
        cmd2.addListener("execute", function () {
          this.debug(cmd2.toString());
        }, this);
        this._juhu = document.getElementById("juhu");
        this._inner = document.getElementById("inner");
        qx.event.Registration.addListener(this._juhu, "contextmenu", this._preventDefault, this);
        qx.event.Registration.addListener(this._inner, "tap", this._stopPropagation, this);
        qx.event.Registration.addListener(this._juhu, "tap", this._onTap1, this);
        qx.event.Registration.addListener(this._juhu, "tap", this._onTap2, this);
        qx.event.Registration.addListener(this._juhu, "keydown", this._onTap2, this);
        qx.event.Registration.addListener(this._juhu, "pointerover", this._onpointerover, this);
        qx.event.Registration.addListener(this._juhu, "pointerout", this._onpointerout, this);
        qx.event.Registration.addListener(document.getElementById("input"), "keydown", this._onKeydown, this);
        qx.event.Registration.addListener(document.getElementById("input"), "keyinput", this._onKeyinput, this);
        qx.event.Registration.addListener(document.getElementById("scroll"), "scroll", this._scroll, this);
      },
      _onResize: function _onResize(e) {
        this._log(["Resize:" + e]);
      },
      _onKeydown: function _onKeydown(e) {
        this._log(["keydown: " + e.getKeyIdentifier()]);
      },
      _onKeyinput: function _onKeyinput(e) {
        this._log(["keyinput: " + e.getCharCode()]);
      },
      _onpointerover: function _onpointerover(e) {
        this._log(["pointer over"]);
      },
      _onpointerout: function _onpointerout(e) {
        this._log(["pointer out"]);
      },
      _scroll: function _scroll(e) {
        this._log(["scroll:" + e.getTarget()]);
      },
      _preventDefault: function _preventDefault(e) {
        this._log(["prevent default " + e.getType() + ": " + e]);

        e.preventDefault();
      },
      _stopPropagation: function _stopPropagation(e) {
        this._log([e.getType() + " (inner): " + e]);

        e.stopPropagation();
      },
      _onTap1: function _onTap1(e) {
        this._log([e.getType() + " 1: " + e]);

        qx.event.Registration.removeListener(this._juhu, "tap", this._onTap1);
      },
      _onTap2: function _onTap2(e) {
        this._log([e.getType() + " 2: " + e]);
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
  qxl.demobrowser.demo.event.Event.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Event.js.map?dt=1589490213085