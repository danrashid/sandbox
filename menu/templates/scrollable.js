function scrollableTemplate(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (entities, showEditLink, undefined) {
// iterate entities
;(function(){
  var $$obj = entities;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var entity = $$obj[$index];

if ( showEditLink)
{
buf.push("<div class=\"cellular\"><a" + (jade.attr("href", "#" + (entity.guid) + "", true, false)) + ">" + (jade.escape(null == (jade_interp = entity.name) ? "" : jade_interp)) + "</a><a" + (jade.attr("href", "#edit-" + (entity.guid) + "", true, false)) + ">Edit</a></div>");
}
else
{
buf.push("<a" + (jade.attr("href", "#" + (entity.guid) + "", true, false)) + ">" + (jade.escape(null == (jade_interp = entity.name) ? "" : jade_interp)) + "</a>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var entity = $$obj[$index];

if ( showEditLink)
{
buf.push("<div class=\"cellular\"><a" + (jade.attr("href", "#" + (entity.guid) + "", true, false)) + ">" + (jade.escape(null == (jade_interp = entity.name) ? "" : jade_interp)) + "</a><a" + (jade.attr("href", "#edit-" + (entity.guid) + "", true, false)) + ">Edit</a></div>");
}
else
{
buf.push("<a" + (jade.attr("href", "#" + (entity.guid) + "", true, false)) + ">" + (jade.escape(null == (jade_interp = entity.name) ? "" : jade_interp)) + "</a>");
}
    }

  }
}).call(this);
}.call(this,"entities" in locals_for_with?locals_for_with.entities:typeof entities!=="undefined"?entities:undefined,"showEditLink" in locals_for_with?locals_for_with.showEditLink:typeof showEditLink!=="undefined"?showEditLink:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
}