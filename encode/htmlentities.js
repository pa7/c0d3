/*
 * c0d3.js - Encode and decode codes with Javascript and HTMLCanvas
 * 
 * htmlentity encoding module
 * 
 * Author: Patrick Wied ( http://www.patrick-wied.at )
 * Version: 
 * License: MIT License
 */
c0d3.registerModule("encode-htmlentities", {
	"logic": function(cfg){

		var console = cfg.console,
		input = cfg.input,
		length = input.length,
		// TODO:
		// fill table with more entity codes
		// http://de.selfhtml.org/html/referenz/zeichen.htm
		entityTable = { 
						"32":"&nbsp;", "34":"&quot;", "38":"&amp;", "60":"&lt;", "62":"&gt;", "162":"&cent;", "163":"&pound;",
						"169":"&copy;", "171":"&laquo;", "174":"&reg;", "176":"&deg;", "178":"&sup2;", "179":"&sup3;",
						"187":"	&raquo;", "8226":"&bull;", "8482":"&trade;", "8364":"&euro;", "9824":"&spades;", "9827":"&clubs;",
						"9829":"&hearts;", "9830":"&diams;",
						"228":"&auml;", "196":"&Auml;", "246":"&ouml;", "214":"&Ouml;", "252":"&uuml;", "220":"&Uuml;", 
						"223":"&szlig;", "32":"&nbsp;", "34":"&quot;", "38":"&amp;",
						"130":"&sbquo;", "131":"&fnof;", "132":"&bdquo;", "133":"&hellip;","134":"&dagger;", "135":"&Dagger;",
						"136":"&circ;", "137":"&permil;", "138":"&Scaron;", "139":"&lsaquo", "140":"&OElig;", "145":"lsquo;",
						"146":"&rsquo;", "147":"&rdquo;", "149":"&bull;", "150":"&ndash;", "151":"&mdash;", "152":"&tilde;",
						"153":"&trade;", "154":"&scaron;", "155":"&rsaquo;", "156":"&oelig;", "159":"&Yuml;", "39":"&apos;",
						"45":"&minus;", "94":"&circ;", "255":"&yuml;", "338":"&OElig;", "339":"&oelig;", "352":"&Scaron;", "353":"&scaron;",
						"376":"&Yuml;", "402":"&fnof;", "710":"&circ;", "732":"&tilde;", "913":"&Alpha;", "914":"&Beta;", "915":"&Gamma;",
						"916":"&Delta;", "917":"&Epsilon;", "918":"&Zeta;", "919":"&Eta;", "920":"&Theta;", "921":"&Iota;", "922":"&Kappa;",
						"923":"&Lambda;", "924":"&Mu;", "925":"&Nu;", "926":"&Xi;", "927":"&Omicron;", "928":"&Pi;", "929":"&Rho;", "931":"&Sigma;",
						"932":"&Tau;", "933":"&Upsilon;", "934":"&Phi;", "935":"&Chi;", "936":"&Psi", "937":"&Omega;", "945":"&alpha;",
						"946":"&beta;", "947":"&gamma;", "948":"&delta;", "949":"&epsilon;", "950":"&zeta;", "951":"&eta;", "952":"&theta;",
						"953":"&iota;", "954":"&kappa;", "955":"&lambda;", "956":"&mu;", "957":"&nu;", "958":"&xi;", "959":"&omicron;",
						"960":"&pi;", "961":"&rho;", "962":"&sigmaf;", "963":"&sigma;", "964":"&tau;", "956":"&upsilon;", "966":"&phi;",
						"967":"&chi;", "968":"&psi;", "969":"&omega;", "977":"&thetasym;", "978":"&upsih;", "982":"&piv;", "8194":"&ensp;",
						"8195":"&emsp;", "8201":"&thinsp;", "8204":"&zwnj;", "8205":"&zwj;", "8206":"&lrm;", "8207":"&rlm;", "8211":"&ndash;",
						"8212":"&mdash;", "8216":"&lsquo;", "8217":"&rsquo;", "8218":"&sbquo;", "8220":"&ldquo;", "8221":"&rdquo;", "8222":"&bdquo;",
						"8224":"&Dagger;", "8226":"&bull;", "8230":"&hellip;", "8240":"&permil;", "8242":"&prime;", "8243":"&Prime;", "8249":"&lsaquo;",
						"8250":"&rsaquo;", "8254":"&oline;","8260":"&frasl;", "172":"&not;", "169":"&copy;", "163":"&pound;", "178":"&sup2;",
						"179":"&sup3;", "174":"&reg;", "167":"&sect;", "161":"&iexcl;", "162":"&cent;"
		},		  
		result = "";
		
		console.log(cfg);
		
		var start = new Date().getTime();
		
		for(var i = -1; i++ < length;)
			result += (entityTable[input.charCodeAt(i)+""] || input.charAt(i));
		
		var end = new Date().getTime();
		console.log("htmlentity encode consumed " + (end-start) + "ms for a " + length + " letters string");
		
		return result;
	}
});