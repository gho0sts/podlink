import Vue from 'vue'

Vue.filter('striphtml', function (value) {
  function escapeHtml(unsafe) {
    return unsafe
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/"/g, "&quot;");
  }

  return escapeHtml(value
    .replace(/<\/p>/g, "\n\n")
    .replace(/<br[^>]*>/g, "\n")
    .replace(/<[^>]*>/g, "")
    .replace(/^\s*/g, "")
    .replace(/[\s*]/g, " ")
  );
});