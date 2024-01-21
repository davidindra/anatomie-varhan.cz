var BRT_NODES = [
    [ "<span title=\"Zpìt na úvod\">Úvodní stránka</span>", "main.htm", "main"],
    
    [ "<span title=\"Rozsáhlá sekce s informacemi o královském nástroji. Anatomie, popis nástrojù, fotogalerie, varhanní slovník a odkazy...\">Varhany</span>", null, null,
        [ "<span title=\"Jak fungují varhany, co je uvnitø, co je co., slovník...\">Anatomie varhan</span>", null, null, 
             ["<span title=\"Úvod do anatomie a podrobnı soupis všech kapitol\">Úvod a obsah</span>","texty/varhany/anatomie/anatomie.htm","main"],
			 ["Varhanní skøíò","","main"],
			 ["Vzdušnice","texty/varhany/anatomie/vzdusnice.htm","main", 
			        ["S tónovımi kancelami","texty/varhany/anatomie/vzdusnice_ton.htm","main"],
				["S rejstøíkovımi kancelami","texty/varhany/anatomie/vzdusnice_registr.htm","main"],
				["Skøíòová","texty/varhany/anatomie/vzdusnice_unit.htm","main"]
					 ],
			 ["Traktura","texty/varhany/anatomie/traktura.htm","main", 
			        ["Mechanická","texty/varhany/anatomie/mechanika.htm","main"],
				["Pneumatická","texty/varhany/anatomie/pneumatika.htm","main"],
				["Elektrická","texty/varhany/anatomie/elektrika.htm","main"],
				["Smíšená (hybridní)","texty/varhany/anatomie/kombinovana.htm","main"]
			 ],
			 ["Vzduchové hospodáøství","texty/varhany/anatomie/vzduch.htm","main",
				["Jednodílné mìchy","texty/varhany/anatomie/mech1.htm","main"],
				["Dvoudílné mìchy","texty/varhany/anatomie/mech2.htm","main"],
				["Elektrickı ventilátor","texty/varhany/anatomie/ventilator.htm","main"]
			 ],
			 ["Píšaly","texty/varhany/anatomie/pistaly.htm","main",
			 	["Akustika","texty/varhany/anatomie/pistaly_akustika.htm","main"],
				["Oznaèování hlasù","texty/varhany/anatomie/pistaly_hlasy_oznaceni.htm","main"],
				["Základní hlasy","texty/varhany/anatomie/pistaly_hlasy_zakladni.htm","main"],
				["Vedlejší hlasy","texty/varhany/anatomie/pistaly_hlasy_vedlejsi.htm","main"],
				["Smíšené hlasy","texty/varhany/anatomie/pistaly_hlasy_smisene.htm","main"]
			 ],
			 ["Hrací stùl","texty/varhany/anatomie/stul.htm","main",
				["Klaviatury","texty/varhany/anatomie/stul_klaviatury.htm","main"],
				["Registraèní zaøízení","texty/varhany/anatomie/stul_registrace.htm","main"]
			 ],
			["Pomocná zaøízení","","main",
				["Rejstøíkové crescendo","texty/varhany/anatomie/pomocne_crescendo.htm","main"],
				["Kolektivy a volné kombinace","texty/varhany/anatomie/pomocne_kombinace.htm","main"],
				["Anulátor (automat) pedálu","","main"],
			 	["Tremolo","texty/varhany/anatomie/tremolo.htm","main"]
			],
			["Zvláštní konstrukce","","main",
				["Multiplexní varhany","texty/varhany/anatomie/multiplex.htm","main"],
				["Vícetónové a kombinované píšaly","","main"],
				["Zvukové efekty a høíèky","","main"]
			],
			["Materiály a technologie","","main",
				["Materiály pouívané pøi stavbì","","main"],
				["Specifické varhanáøské nástroje","","main"],
				["Zpracování varhanního kovu","","main"]
			],
			["Škodlivé vlivy","","main",],
			["Pøehled závad varhan","","main",],
			["Èasté dotazy okolo varhan","texty/varhany/anatomie/dotazy.htm","main",
				["Odpovìdi na Vaše dotazy","texty/varhany/anatomie/dotazy2.htm","main"]
			],
		],
		[ "<span title=\"Slovníèek nejpouívanìjších varhanních a varhanáøskıch vırazù (s vazbou na obrázky a podrobnı popis v sekci Anatomie)\">Varhanní slovník</span>", "texty/varhany/slovnik/slovnik.htm","main"],
        [ "<span title=\"Podrobnı popis konkrétních nástrojù\">Nástroje</span>", null, null, 
            [ "<span title=\"Varhany v kostele sv. Josefa v Janovicích u Frıdku - Místku\">Janovice</span>","texty/varhany/nastroje/janovice/janovicke_varhany.htm","main"],
			[ "<span title=\"Varhany Vaculín opus 7 v kostele sv. Jakuba Vìtšího v Brtnici\">Brtnice</span>","texty/varhany/nastroje/brtnice/brtnice.htm" ,"main"],
			[ "<span title=\"Rekonstrukce varhanního pozitivu v kostele sv. Antonína Paduánského v malé vísce u Jihlavy\">Panská Lhota</span>","texty/varhany/nastroje/panska_lhota/panska_lhota.htm" ,"main"],
			[ "<span title=\"Varhany v katedrále Boského spasitele v Ostravì\">Ostrava - katedrála</span>","texty/varhany/nastroje/katedrala/katedrala.htm","main"],
                        [ "<span title=\"Koncertní varhany Janáèkovy Konzervatoøe v Ostravì\">Ostrava - JK</span>","texty/varhany/nastroje/ostrava_jk/konzervator.htm","main"],
			[ "<span title=\"Nové koncertní varhany Janáèkovy filharmonie Ostrava\">Ostrava - JFO</span>","texty/varhany/nastroje/ostrava/ostrava.htm","main"],
			[ "<span title=\"Varhany v kostele sv. Pavla v Ostravì - Vítkovicích\">Vítkovice</span>","texty/varhany/nastroje/vitkovice/vitkovice.htm","main"],
			[ "<span title=\"Varhany Rieger v kostele v Palkovicích u Frıdku - Místku\">Palkovice</span>","texty/varhany/nastroje/palkovice/palkovice.htm","main"],
			[ "<span title=\"Englerovy varhany v chrámu sv. Moøice v Olomouci\">Olomouc</span>","texty/varhany/nastroje/olomouc/olomouc.htm" ,"main"],
			[ "<span title=\"Opavské varhany - trojice nástrojù ze slezské metropole - v opavské konkatedrále, chrámu sv. Ducha a Domì kultury\">Opava</span>","texty/varhany/nastroje/opava/opava.htm","main"],
			[ "<span title=\"Domácí jazıèkové varhany Petrof/Rieger\">Petrof</span>","texty/varhany/nastroje/petrof/petrof.htm","main"],
			[ "<span title=\"Varhany ve Velké synagoze v Plzni\">Plzeò - synagoga</span>","texty/varhany/nastroje/plzen/synagoga.htm" ,"main"],
                        [ "<span title=\"Nové varhany v kostele Panny Marie rùencové v Louce u Veselí nad Moravou (okres Hodonín)\">Louka</span>","texty/varhany/nastroje/louka/louka.htm","main"],
			[ "<span title=\"Varhany v kostele sv. Václava v Machovì\">Machov</span>","texty/varhany/nastroje/machov/machov.htm" ,"main"],
			[ "<span title=\"Fotografie, dispozice a krátkı popis varhan z Rychnova nad Knìnou\">Rychnov nad Knìnou</span>","texty/varhany/nastroje/rychnov/rychnov.htm","main"],
			[ "<span title=\"Fotografie, dispozice a krátkı popis varhan v Dolnom Kubíne na Slovensku\">Dolnı Kubín</span>","texty/varhany/nastroje/kubin/kubin.htm","main"],
			[ "<span title=\"Varhany v kostele na Pramì ve farnosti Morávka u Frıdku - Místku\">Pramo (Morávka)</span>","texty/varhany/nastroje/moravka/moravka.htm", "main"],
			[ "<span title=\"Varhany Kopøivnici\">Kopøivnice</span>","texty/varhany/nastroje/koprivnice/varhany-koprivnice2.htm", "main"]
        ],
        [ "<span title=\"Fotogalerie moravskıch a slezskıch varhan (bez podrobnìjšího popisu)\">Fotogalerie</span>", "texty/varhany/fotogalerie/fotogalerie1.htm", "main"],
		[ "<span title=\"Odkazy na domácí i zahranièní stránky s varhanní tématikou\">Varhanní odkazy</span>", "odkazy.htm", "main"],
		[ "<span title=\"Noty pro varhaníky - zapomenuté písnì\">Noty</span>","texty/varhany/noty/noty.htm", "main"]
    ],
    [ "<span title=\"Zajímavosti z okolí Ostravy (technické i spoleèenské, fotografie...).\">Zajímavosti</span>", "texty/zajimavosti/zajimavosti.htm", "main", 
        [ "<span title=\"Hodiny v kostele sv. Josefa v Janovicích, jejich rekonstrukce, popis...\">Janovice</span>", "texty/zajimavosti/janovice/hodiny.htm", "main"],
        [ "<span title=\"Ostravské zajímavosti, fotografie...\">Ostrava</span>", "texty/zajimavosti/ostrava/ostravsko.htm", "main"],
        [ "<span title=\"Kostel sv. Kateøiny v Ostravì - Hrabové, nejstarší ostravská památka znièená 2.4.2002 pøi dosud nevyjasnìném poáru. Historie, fotografie, obnova kostela\">Hrabová</span>", "texty/zajimavosti/hrabova/hrabova.htm", "main"]
    ],
	
 	[ "<span title=\"Informace o postupu aktualizace stránek\">Co je tu nového...</span>", "conoveho.htm", "main"], 
	[ "<span title=\"Zde mùete napsat svùj vzkaz ètenáøùm nebo autorovi stánek\">Návštìvní kniha</span>", "http://www.blueboard.cz/kniha_0.php?id=240180&pid=5a09rt1m2tokknu&hid=00r6pxxtvvsej6e0t8jurossj95s9a", "main"],
 [ "</a><table width=\"130\" border=\"0\"><tr><td><br><br><br><hr></td></tr></table><p align=\"center\"><a href=\"mailto:ber30@seznam.cz\"><img src=\"images/mail.gif\" width=\"45\" height=\"52\" border=\"0\" alt=\"Napište mi!\"></a></p><a>", null, null],
 [ "</a><table width=\"130\" border=\"0\"><tr><td><hr></td></tr></table><p align=\"center\"><A HREF=\"http://counter.cnw.cz\" TARGET=\"_parent\"><IMG SRC=\"http://counter.cnw.cz/paula.cgi?brtnik&5&0000ff&BEBEBE&on\" ALT=\"[CNW:Counter]\" BORDER=\"0\"></A> ", null, null],
 [ "</a><table width=\"130\" border=\"0\"><tr><td></td></tr></table><p align=\"center\"><font size=\"1\">(prùmìrná návštìvnost od r. 2002: 9 návštìvníkù/den)</font></p><a>", null, null],
 [ "</a><table width=\"130\" border=\"0\"><tr><td></td></tr></table><p align=\"center\"><font size=\"1\">Poslední úpravy:  2.1.2010<br> © 2001- 2010<a href=\"mailto:ber30@seznam.cz\"> Ing. Petr Bernat </a></font></p><a>", null, null]
	  

	  	];
