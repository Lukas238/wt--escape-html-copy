
//Search and replace chars matrix.
var chars = [
  {
    "char_name": 'NO-BREAK SPACE',
    'char': ' ',
    "htmlentity": '&nbsp;'
  },
  {
    "char_name": 'INVERTED EXCLAMATION MARK',
    'char': '¡',
    "htmlentity": '&iexcl;'
  },
  {
    "char_name": 'FEMININE ORDINAL INDICATOR',
    'char': 'ª',
    "htmlentity": '&ordf;'
  },
  {
    "char_name": 'LEFT-POINTING DOUBLE ANGLE QUOTATION MARK',
    'char': '«',
    "htmlentity": '&laquo;'
  },
  {
    "char_name": 'ACUTE ACCENT',
    'char': '´',
    "htmlentity": '&acute;'
  },
  {
    "char_name": 'MASCULINE ORDINAL INDICATOR',
    'char': 'º',
    "htmlentity": '&ordm;'
  },
  {
    "char_name": 'RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK',
    'char': '»',
    "htmlentity": '&raquo;'
  },
  {
    "char_name": 'INVERTED QUESTION MARK',
    'char': '¿',
    "htmlentity": '&iquest;'
  },
  {
    "char_name": 'LATIN CAPITAL LETTER A WITH GRAVE',
    'char': 'À',
    "htmlentity": '&Agrave;'
  },
  {
    "char_name": 'LATIN CAPITAL LETTER A WITH ACUTE',
    'char': 'Á',
    "htmlentity": '&Aacute;'
  },
  {
    "char_name": 'LATIN CAPITAL LETTER A WITH CIRCUMFLEX',
    'char': 'Â',
    "htmlentity": '&Acirc;'
  },
  {
    "char_name": 'LATIN CAPITAL LETTER A WITH TILDE',
    'char': 'Ã',
    "htmlentity": '&Atilde;'
  },
  {
    "char_name": 'LATIN CAPITAL LETTER A WITH DIAERESIS',
    'char': 'Ä',
    "htmlentity": '&Auml;'
  },
  {
    "char_name": 'LATIN CAPITAL LETTER AE',
    'char': 'Æ',
    "htmlentity": '&AElig;'
  },
  {
    "char_name": 'LATIN CAPITAL LETTER C WITH CEDILLA',
    'char': 'Ç',
    "htmlentity": '&Ccedil;'
  },
  {
    "char_name": 'LATIN CAPITAL LETTER E WITH ACUTE',
    'char': 'É',
    "htmlentity": '&Eacute;'
  },
  {
    "char_name": 'LATIN CAPITAL LETTER E WITH CIRCUMFLEX',
    'char': 'Ê',
    "htmlentity": '&Ecirc;'
  },
  {
    "char_name": 'LATIN CAPITAL LETTER E WITH DIAERESIS',
    'char': 'Ë',
    "htmlentity": '&Euml;'
  },
  {
    "char_name": 'LATIN CAPITAL LETTER I WITH ACUTE',
    'char': 'Í',
    "htmlentity": '&Iacute;'
  },
  {
    "char_name": 'LATIN CAPITAL LETTER I WITH DIAERESIS',
    'char': 'Ï',
    "htmlentity": '&Iuml;'
  },
  {
    "char_name": 'LATIN CAPITAL LETTER N WITH TILDE',
    'char': 'Ñ',
    "htmlentity": '&Ntilde;'
  },
  {
    "char_name": 'LATIN CAPITAL LETTER O WITH ACUTE',
    'char': 'Ó',
    "htmlentity": '&Oacute;'
  },
  {
    "char_name": 'LATIN CAPITAL LETTER O WITH CIRCUMFLEX',
    'char': 'Ô',
    "htmlentity": '&Ocirc;'
  },
  {
    "char_name": 'LATIN CAPITAL LETTER O WITH TILDE',
    'char': 'Õ',
    "htmlentity": '&Otilde;'
  },
  {
    "char_name": 'LATIN CAPITAL LETTER O WITH DIAERESIS',
    'char': 'Ö',
    "htmlentity": '&Ouml;'
  },
  {
    "char_name": 'LATIN CAPITAL LETTER U WITH ACUTE',
    'char': 'Ú',
    "htmlentity": '&Uacute;'
  },
  {
    "char_name": 'LATIN CAPITAL LETTER U WITH DIAERESIS',
    'char': 'Ü',
    "htmlentity": '&Uuml;'
  },
  {
    "char_name": 'LATIN SMALL LETTER A WITH GRAVE',
    'char': 'à',
    "htmlentity": '&agrave;'
  },
  {
    "char_name": 'LATIN SMALL LETTER A WITH ACUTE',
    'char': 'á',
    "htmlentity": '&aacute;'
  },
  {
    "char_name": 'LATIN SMALL LETTER A WITH CIRCUMFLEX',
    'char': 'â',
    "htmlentity": '&acirc;'
  },
  {
    "char_name": 'LATIN SMALL LETTER A WITH TILDE',
    'char': 'ã',
    "htmlentity": '&atilde;'
  },
  {
    "char_name": 'LATIN SMALL LETTER A WITH DIAERESIS',
    'char': 'ä',
    "htmlentity": '&auml;'
  },
  {
    "char_name": 'LATIN SMALL LETTER AE',
    'char': 'æ',
    "htmlentity": '&aelig;'
  },
  {
    "char_name": 'LATIN SMALL LETTER C WITH CEDILLA',
    'char': 'ç',
    "htmlentity": '&ccedil;'
  },
  {
    "char_name": 'LATIN SMALL LETTER E WITH ACUTE',
    'char': 'é',
    "htmlentity": '&eacute;'
  },
  {
    "char_name": 'LATIN SMALL LETTER E WITH CIRCUMFLEX',
    'char': 'ê',
    "htmlentity": '&ecirc;'
  },
  {
    "char_name": 'LATIN SMALL LETTER E WITH DIAERESIS',
    'char': 'ë',
    "htmlentity": '&euml;'
  },
  {
    "char_name": 'LATIN SMALL LETTER I WITH ACUTE',
    'char': 'í',
    "htmlentity": '&iacute;'
  },
  {
    "char_name": 'LATIN SMALL LETTER I WITH DIAERESIS',
    'char': 'ï',
    "htmlentity": '&iuml;'
  },
  {
    "char_name": 'LATIN SMALL LETTER N WITH TILDE',
    'char': 'ñ',
    "htmlentity": '&ntilde;'
  },
  {
    "char_name": 'LATIN SMALL LETTER O WITH ACUTE',
    'char': 'ó',
    "htmlentity": '&oacute;'
  },
  {
    "char_name": 'LATIN SMALL LETTER O WITH CIRCUMFLEX',
    'char': 'ô',
    "htmlentity": '&ocirc;'
  },
  {
    "char_name": 'LATIN SMALL LETTER O WITH TILDE',
    'char': 'õ',
    "htmlentity": '&otilde;'
  },
  {
    "char_name": 'LATIN SMALL LETTER O WITH DIAERESIS',
    'char': 'ö',
    "htmlentity": '&ouml;'
  },
  {
    "char_name": 'LATIN SMALL LETTER U WITH ACUTE',
    'char': 'ú',
    "htmlentity": '&uacute;'
  },
  {
    "char_name": 'LATIN SMALL LETTER U WITH DIAERESIS',
    'char': 'ü',
    "htmlentity": '&uuml;'
  },
  {
    "char_name": 'HYPHEN-MINUS to NON-BREAKING HYPHEN',
    'char': '-',
    "htmlentity": '&#8209;'
  },
  {
    "char_name": 'NON-BREAKING HYPHEN',
    'char': '‑',
    "htmlentity": '&#8209;'
  },
  {
    "char_name": 'EN DASH',
    'char': '–',
    "htmlentity": '&ndash;'
  },
  {
    "char_name": 'EM DASH',
    'char': '—',
    "htmlentity": '&mdash;'
  },
  {
    "char_name": 'LEFT SINGLE QUOTATION MARK',
    'char': '‘',
    "htmlentity": '&lsquo;'
  },
  {
    "char_name": 'RIGHT SINGLE QUOTATION MARK',
    'char': '’',
    "htmlentity": '&rsquo;'
  },
  {
    "char_name": 'LEFT DOUBLE QUOTATION MARK',
    'char': '“',
    "htmlentity": '&ldquo;'
  },
  {
    "char_name": 'RIGHT DOUBLE QUOTATION MARK',
    'char': '”',
    "htmlentity": '&rdquo;'
  },
  {
    "char_name": 'SINGLE LEFT-POINTING ANGLE QUOTATION MARK',
    'char': '‹',
    "htmlentity": '&lsaquo;'
  },
  {
    "char_name": 'SINGLE RIGHT-POINTING ANGLE QUOTATION MARK',
    'char': '›',
    "htmlentity": '&rsaquo;'
  },
  {
    "char_name": 'EURO SIGN',
    'char': '€',
    "htmlentity": '&euro;'
  },
  {
    "char_name": 'CHECK MARK',
    'char': '✓',
    "htmlentity": '&#10003;'
  },
  {
    "char_name": 'HEAVY CHECK MARK',
    'char': '✔',
    "htmlentity": '&#10004;'
  },
  {
    "char_name": 'REGISTRY MARK',
    'char': '®',
    "htmlentity": '&reg;'
  },
  {
    "char_name": 'COPYRIGHT SIGN',
    'char': '©',
    "htmlentity": '&copy;'
  },
  {
    "char_name": 'SERVICE MARK',
    'char': '℠',
    "htmlentity": '<sup>SM</sup>'
  },
  {
    "char_name": 'TRADE MARK SIGN',
    'char': '™',
    "htmlentity": '<sup>TM</sup>'
  },
  {
    "char_name": 'Extra Space before comma',
    'char': ' ,',
    "htmlentity": ','
  },
  {
    "char_name": 'Extra Space before period',
    'char': ' .',
    "htmlentity": '.'
  }
];


RegExp.sanitize_regex = function (s) {
	return s.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
};
/** Replace function
  * Replace text in between html tags, and inside alt="" property.
  *
  * Demo: https://regex101.com/r/o55ZLB/1
*/
var escape_special_characters = function (value) {
	value = "<dummy>" + value + "</dummy>"; //Add helpers to help RegExp to work correctly
	$.each(chars, function (key, item) {
		//Match only text in between html tags (and exclude CSS in between styles tags)
		// value = value.replace(/(?:(?!<style)>([^<]+)<(?!\/style)|alt=(?:"|')(.*?)(?:"|'))/gm, function(match){
		// value = value.replace(/(?:<(?!:style|!|x|o)[^>]*>([^<]+)<|alt="([^"]+)")/gm, function(match){
		value = value.replace(/>(.*?)<|alt['"]([^"'])['"]/gm, function(match){
			//Replace special characters
      var pattern = new RegExp(RegExp.sanitize_regex(item.char), 'gm');
			return match.replace(pattern, item.htmlentity);
		});
	});
	value = value.slice(7,-8); //Remove helpers
	return value;
};


// Convert button
$('#btn-convert').on('click', function(){

  var code_src = $('#code-src').val();

  $('#code-res').val( escape_special_characters(code_src) );

});


$('#btn-reset').on('click', function(){
  $('#code-src').val("");
  $('#code-res').val("");
});

function popuplate_chars_table(){

  var output = '';
  $.each(chars, function (key, item) {
      output += "<tr><td><code>"+item.char+"</code></td><td><code>"+ $('<div/>').html(item.htmlentity).text()+"</code></td><td>"+item.char_name+"</td></tr>";
  });

  $('#chars-list tbody').html(output);

}



popuplate_chars_table();
