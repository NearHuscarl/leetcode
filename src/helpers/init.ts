declare global {
  interface Object {
    getUniqueId(): number;
  }
}

// https://stackoverflow.com/a/2020890/9449426
(function () {
  var id = 0;

  function generateId() {
    return id++;
  }

  Object.prototype.getUniqueId = function () {
    var newId = generateId();

    this.getUniqueId = function () {
      return newId;
    };

    return newId;
  };
})();

export {};
