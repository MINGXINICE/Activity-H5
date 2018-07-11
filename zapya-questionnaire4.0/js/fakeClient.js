function fake(){
  Zapya.isValidUser = function () {
    return true;
  };
  Zapya.getUrl = function () {
    return 'http://api.dewmobile.net';
  };
  Zapya.isLogin = function () {
    return true;
  };
  Zapya.getUserId = function () {
    return '25159217';
  };
  Zapya.getToken = function () {
    return 'autoToken=13087dc1d0b5ce7093cb8e2f72ef50cb'
  };
  Zapya.getUUID = function () {
    return '9abbce75-5a6e-3dd8-8843-8bae0dd10f25-198711'
  };
  Zapya.getVersionCode = function () {
    return 161;
  };

  window._vipJSface = {
    getFrom : function () {
      return '';
    }
  }
}
