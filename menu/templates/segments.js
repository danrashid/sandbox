function segmentsTemplate(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (entities, undefined) {
// iterate entities
;(function(){
  var $$obj = entities;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var entity = $$obj[$index];

buf.push("<a" + (jade.attr("href", "#segment-" + (entity.guid) + "", true, false)) + ">" + (jade.escape(null == (jade_interp = entity.name) ? "" : jade_interp)) + "</a>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var entity = $$obj[$index];

buf.push("<a" + (jade.attr("href", "#segment-" + (entity.guid) + "", true, false)) + ">" + (jade.escape(null == (jade_interp = entity.name) ? "" : jade_interp)) + "</a>");
    }

  }
}).call(this);
}.call(this,"entities" in locals_for_with?locals_for_with.entities:typeof entities!=="undefined"?entities:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
}