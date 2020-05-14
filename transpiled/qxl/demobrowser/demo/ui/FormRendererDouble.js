(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.application.Standalone": {
        "require": true
      },
      "qx.ui.form.Form": {},
      "qx.ui.form.TextField": {},
      "qx.ui.form.PasswordField": {},
      "qx.ui.form.CheckBox": {},
      "qx.ui.form.Spinner": {},
      "qx.ui.form.RadioButtonGroup": {},
      "qx.ui.form.RadioButton": {},
      "qx.ui.form.TextArea": {},
      "qx.ui.form.Button": {},
      "qx.ui.form.renderer.Double": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);

  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2009 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Martin Wittemann (martinwittemann)
  
  ************************************************************************ */

  /**
   * @lint ignoreDeprecated(alert)
   */
  qx.Class.define("qxl.demobrowser.demo.ui.FormRendererDouble", {
    extend: qx.application.Standalone,
    members: {
      main: function main() {
        qxl.demobrowser.demo.ui.FormRendererDouble.prototype.main.base.call(this); // create the form

        var form = new qx.ui.form.Form(); // add the first headline

        form.addGroupHeader("Registration"); // add usernamne

        var userName = new qx.ui.form.TextField();
        userName.setRequired(true);
        form.add(userName, "Name"); // add password

        var password = new qx.ui.form.PasswordField();
        password.setRequired(true);
        form.add(password, "Password"); // add a save checkbox

        form.add(new qx.ui.form.CheckBox(), "Save?"); // add the second header

        form.addGroupHeader("Personal Information"); // add some additional widgets

        form.add(new qx.ui.form.Spinner(), "Age");
        form.add(new qx.ui.form.TextField(), "Country");
        var radioGroup = new qx.ui.form.RadioButtonGroup();
        radioGroup.add(new qx.ui.form.RadioButton("Male"));
        radioGroup.add(new qx.ui.form.RadioButton("Female"));
        form.add(radioGroup, "Gender");
        form.add(new qx.ui.form.TextArea(), "Bio"); // send button with validation

        var sendButton = new qx.ui.form.Button("Send");
        sendButton.addListener("execute", function () {
          if (form.validate()) {
            alert("send...");
          }
        }, this);
        form.addButton(sendButton); // reset button

        var resetButton = new qx.ui.form.Button("Reset");
        resetButton.addListener("execute", function () {
          form.reset();
        }, this);
        form.addButton(resetButton); // create the form and add it to the document

        var formView = new qx.ui.form.renderer.Double(form);
        this.getRoot().add(formView, {
          left: 10,
          top: 10
        });
      }
    }
  });
  qxl.demobrowser.demo.ui.FormRendererDouble.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=FormRendererDouble.js.map?dt=1589490216235